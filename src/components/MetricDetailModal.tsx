import React from 'react';
import { MetricBreakdownItem } from '../types';
import { motion } from 'motion/react';

interface MetricDetailModalProps {
  metric: MetricBreakdownItem | null;
  onClose: () => void;
  onTakeAction: (type: string) => void;
}

export const MetricDetailModal: React.FC<MetricDetailModalProps> = ({
  metric,
  onClose,
  onTakeAction,
}) => {
  if (!metric) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white rounded-[28px] max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#e0e3e5] relative my-8"
      >
        <div className="flex items-start justify-between pb-4 border-b border-[#eceef0] mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0058be]/10 text-[#0058be] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">
                {metric.iconName}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#6c748b]">
                {metric.category}
              </span>
              <h3 className="text-xl font-bold text-[#191c1e]">{metric.title}</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#0058be]">{metric.score}%</span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#424754] flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-[#424754] mb-6 leading-relaxed">
          {metric.description}
        </p>

        {/* Breakdown Items */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs uppercase font-bold text-[#191c1e] tracking-wider">
            Sub-Competency Diagnostic
          </h4>
          {metric.details.map((sub, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-[#f7f9fb] rounded-xl border border-[#eceef0] space-y-2"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#191c1e]">{sub.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                    sub.status === 'strong'
                      ? 'bg-emerald-100 text-emerald-800'
                      : sub.status === 'moderate'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {sub.score}% • {sub.status === 'strong' ? 'Strong' : sub.status === 'moderate' ? 'Solid' : 'Focus Area'}
                </span>
              </div>
              <div className="h-1.5 w-full bg-[#e0e3e5] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    sub.status === 'strong'
                      ? 'bg-emerald-500'
                      : sub.status === 'moderate'
                      ? 'bg-[#0058be]'
                      : 'bg-amber-500'
                  }`}
                  style={{ width: `${sub.score}%` }}
                />
              </div>
              <p className="text-[11px] text-[#424754] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#6b38d4]">lightbulb</span>
                {sub.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Action footer */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-[#424754] hover:bg-[#f2f4f6] rounded-xl transition-all"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onTakeAction(metric.id);
            }}
            className="bg-[#0058be] text-white px-5 py-2.5 text-xs font-semibold rounded-xl hover:bg-[#004395] transition-all flex items-center gap-1.5"
          >
            <span>Practice & Improve {metric.title}</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
