import React, { useState } from 'react';
import { QuizQuestion, SkillItem } from '../types';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

interface QuizModalProps {
  skill: SkillItem | null;
  questions: QuizQuestion[];
  isOpen: boolean;
  onClose: () => void;
  onQuizCompleted: (skillId: string, passed: boolean) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  skill,
  questions,
  isOpen,
  onClose,
  onQuizCompleted,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen || !skill || questions.length === 0) return null;

  const currentQ = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      const passed = (score + (selectedOption === currentQ.correctIndex ? 1 : 0)) / questions.length >= 0.6;
      if (passed) {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
        });
      }
      onQuizCompleted(skill.id, passed);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-[28px] max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#e0e3e5] relative my-8"
      >
        {!isFinished ? (
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#eceef0] mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold bg-[#0058be]/10 text-[#0058be] px-2.5 py-0.5 rounded-full">
                  Skill Assessment
                </span>
                <span className="text-xs text-[#727785]">
                  Question {currentIdx + 1} of {questions.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#424754] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <h3 className="text-base md:text-lg font-bold text-[#191c1e] mb-4">
              {currentQ.question}
            </h3>

            <div className="space-y-2.5 mb-4">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'border-[#eceef0] bg-[#f7f9fb] hover:bg-[#eceef0] text-[#191c1e]';
                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                  } else if (selectedOption === idx) {
                    btnStyle = 'border-rose-500 bg-rose-50 text-rose-900';
                  } else {
                    btnStyle = 'border-[#eceef0] bg-white opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <span className="material-symbols-outlined text-emerald-600 text-[20px]">
                        check_circle
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 mb-4"
              >
                <span className="font-bold">Explanation: </span>
                {currentQ.explanation}
              </motion.div>
            )}

            {isAnswered && (
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="bg-[#0058be] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#004395] transition-all flex items-center gap-1"
                >
                  {currentIdx + 1 < questions.length ? 'Next Question' : 'Complete Quiz'}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="text-xl font-bold text-[#191c1e]">
              Assessment Complete!
            </h3>
            <p className="text-sm text-[#424754]">
              You scored <strong className="text-[#0058be]">{score} / {questions.length}</strong>. Your verified skill level for <strong>{skill.name}</strong> has been updated!
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={resetQuiz}
                className="px-4 py-2 text-xs font-semibold text-[#424754] hover:bg-[#f2f4f6] rounded-xl"
              >
                Retake
              </button>
              <button
                onClick={onClose}
                className="bg-[#0058be] text-white px-6 py-2.5 text-xs font-semibold rounded-xl hover:bg-[#004395]"
              >
                Back to Skills
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
