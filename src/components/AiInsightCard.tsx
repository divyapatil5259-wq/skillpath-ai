import React from 'react';

interface AiInsightCardProps {
  headline?: string;
  insightText: string;
  actionButtonLabel: string;
  onActionClick: () => void;
  onAskCoach?: () => void;
}

export const AiInsightCard: React.FC<AiInsightCardProps> = ({
  headline = 'AI Insight: Next Best Action',
  insightText,
  actionButtonLabel,
  onActionClick,
  onAskCoach,
}) => {
  return (
    <div className="ai-border-gradient rounded-[24px] p-6 shadow-[0_8px_32px_rgba(33,112,228,0.08)] bg-white flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(107,56,212,0.12)] transition-all relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6b38d4]/10 to-transparent rounded-bl-full pointer-events-none" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#6b38d4] text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <h3 className="text-[14px] font-semibold text-[#6b38d4]">
              {headline}
            </h3>
          </div>
          {onAskCoach && (
            <button
              onClick={onAskCoach}
              className="text-[12px] font-medium text-[#6b38d4] hover:text-[#0058be] flex items-center gap-1 transition-colors"
              title="Discuss with AI Coach"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              Ask Coach
            </button>
          )}
        </div>

        <p className="text-[15px] leading-[24px] text-[#191c1e] mb-6">
          {insightText}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onActionClick}
          className="bg-gradient-to-r from-[#6b38d4] to-[#0058be] text-white text-[14px] font-semibold py-3 px-6 rounded-xl hover:shadow-[0_8px_20px_rgba(107,56,212,0.3)] hover:opacity-95 transition-all active:scale-95 flex items-center gap-2"
        >
          <span>{actionButtonLabel}</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
