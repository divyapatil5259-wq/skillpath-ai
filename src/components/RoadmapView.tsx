import React from 'react';
import { RoadmapStep } from '../types';
import { motion } from 'motion/react';

interface RoadmapViewProps {
  steps: RoadmapStep[];
  targetRole: string;
  onStartProject: () => void;
  onOpenCoach: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  steps,
  targetRole,
  onStartProject,
  onOpenCoach,
}) => {
  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-[#6b38d4] to-[#0058be] rounded-[24px] p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
              Personalized AI Track
            </span>
            <span className="text-white/80 text-xs font-medium">Estimated 10 Weeks</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {targetRole} Career Roadmap
          </h2>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Curated sequence of milestones, portfolio projects, and technical checkpoints designed to maximize your hiring readiness.
          </p>
          <button
            onClick={onStartProject}
            className="bg-white text-[#0058be] font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow-sm hover:bg-[#f7f9fb] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            Continue Current Milestone
          </button>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#191c1e] px-1">Roadmap Milestones</h3>
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const isCompleted = step.status === 'completed';
            const isInProgress = step.status === 'in_progress';

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`bg-white rounded-[24px] p-5 md:p-6 border transition-all ${
                  isInProgress
                    ? 'border-[#0058be] shadow-[0_4px_20px_rgba(0,88,190,0.08)] ring-1 ring-[#0058be]/30'
                    : isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-[#eceef0] opacity-90'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-500 text-white'
                          : isInProgress
                          ? 'bg-[#0058be] text-white shadow-xs'
                          : 'bg-[#eceef0] text-[#727785]'
                      }`}
                    >
                      {isCompleted ? '✓' : `0${step.phaseNumber}`}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#6c748b]">
                          Phase {step.phaseNumber} • {step.durationWeeks} Weeks
                        </span>
                        {step.isNextBestAction && (
                          <span className="bg-[#6b38d4]/10 text-[#6b38d4] text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                            Next Best Action
                          </span>
                        )}
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-[#191c1e]">
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  <div>
                    {isCompleted && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Completed
                      </span>
                    )}
                    {isInProgress && (
                      <span className="text-xs font-bold text-[#0058be] bg-[#0058be]/10 px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#0058be] animate-pulse"></span>
                        In Progress
                      </span>
                    )}
                    {step.status === 'upcoming' && (
                      <span className="text-xs font-semibold text-[#727785] bg-[#f2f4f6] px-3 py-1 rounded-full">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs md:text-sm text-[#424754] mb-3 leading-relaxed">
                  {step.description}
                </p>

                <div className="p-3 bg-[#f7f9fb] rounded-xl border border-[#eceef0] mb-3">
                  <div className="text-[11px] font-bold text-[#191c1e] uppercase tracking-wide mb-1">
                    Key Deliverable:
                  </div>
                  <div className="text-xs text-[#0058be] font-medium flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">assignment_turned_in</span>
                    {step.deliverable}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {step.skillsCovered.map((sk) => (
                      <span
                        key={sk}
                        className="text-[11px] bg-[#f2f4f6] text-[#424754] px-2.5 py-0.5 rounded-full"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  {isInProgress && (
                    <button
                      onClick={onStartProject}
                      className="bg-gradient-to-r from-[#6b38d4] to-[#0058be] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:shadow-md transition-all active:scale-95 flex items-center gap-1"
                    >
                      <span>Start Project Studio</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
