import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { motion } from 'motion/react';
import { getRoleData } from '../data/roles';

interface CoachViewProps {
  targetRole: string;
  readinessScore: number;
  onOpenProjectStudio?: () => void;
}

export const CoachView: React.FC<CoachViewProps> = ({
  targetRole,
  readinessScore,
  onOpenProjectStudio,
}) => {
  const rolePkg = getRoleData(targetRole);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'assistant',
      text: rolePkg.coachGreeting.text,
      timestamp: 'Just now',
      quickActions: rolePkg.coachGreeting.quickActions,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // When targetRole changes, update initial greeting
  useEffect(() => {
    const pkg = getRoleData(targetRole);
    setMessages([
      {
        id: `m-init-${targetRole}`,
        sender: 'assistant',
        text: pkg.coachGreeting.text,
        timestamp: 'Just now',
        quickActions: pkg.coachGreeting.quickActions,
      },
    ]);
  }, [targetRole]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/coach/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          targetRole,
          currentScore: readinessScore,
          skills: rolePkg.skills.map((s) => s.name),
        }),
      });
      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text:
          data.reply ||
          data.fallbackReply ||
          `For your ${targetRole} roadmap, focusing on completing the ${rolePkg.projectStudio.title} will have the highest immediate impact on your readiness score.`,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'assistant',
          text: `For your ${targetRole} portfolio, focus on demonstrating tangible business impact and engineering rigor rather than superficial exercises. Would you like a step-by-step breakdown of your next best action?`,
          timestamp: 'Just now',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    if ((action === 'start_project' || action === 'start_power_bi') && onOpenProjectStudio) {
      onOpenProjectStudio();
      return;
    }
    if (action === 'mock_interview') {
      handleSendMessage(
        `Give me a realistic technical or problem-solving interview question for a ${targetRole}.`
      );
    } else if (action === 'score_advice') {
      handleSendMessage(
        `What exact milestones do I need to complete to move my ${targetRole} Job Readiness Score above 85%?`
      );
    } else {
      handleSendMessage(action);
    }
  };


  return (
    <div className="bg-white rounded-[28px] border border-[#e0e3e5]/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col h-[calc(100vh-210px)] md:h-[680px] overflow-hidden">
      {/* Coach Header */}
      <div className="p-4 md:p-6 border-b border-[#eceef0] flex items-center justify-between bg-gradient-to-r from-white via-[#f7f9fb] to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6b38d4] to-[#0058be] flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[24px]">psychology</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-[#191c1e] text-base">SkillPath AI Career Coach</h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-xs text-[#727785]">Specialized for {targetRole} Career Transition</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs text-[#0058be] bg-[#0058be]/10 px-3 py-1 rounded-full font-semibold">
            {readinessScore}% Readiness
          </span>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 text-xs md:text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-gradient-to-r from-[#6b38d4] to-[#0058be] text-white rounded-br-xs shadow-xs'
                  : 'bg-[#f7f9fb] border border-[#e0e3e5]/70 text-[#191c1e] rounded-bl-xs shadow-xs'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.text}</div>

              {m.quickActions && m.quickActions.length > 0 && (
                <div className="mt-3 pt-3 border-t border-[#eceef0] flex flex-wrap gap-1.5">
                  {m.quickActions.map((qa, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickAction(qa.action)}
                      className="text-xs bg-white text-[#0058be] border border-[#0058be]/30 hover:bg-[#0058be]/5 px-3 py-1 rounded-full font-semibold transition-colors"
                    >
                      {qa.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#f7f9fb] border border-[#e0e3e5]/70 rounded-2xl rounded-bl-xs p-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0058be] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#6b38d4] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-[#0058be] animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-xs text-[#727785] ml-1 font-medium">Coach is thinking...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-3 md:p-4 border-t border-[#eceef0] bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask anything about DAX, SQL drills, interview questions, or roadmap..."
            className="flex-1 text-xs md:text-sm bg-[#f7f9fb] border border-[#eceef0] focus:border-[#0058be] rounded-xl px-4 py-3 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="bg-gradient-to-r from-[#6b38d4] to-[#0058be] text-white p-3 rounded-xl hover:shadow-md transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
