import React from 'react';
import { motion } from 'motion/react';
import { MetricBreakdownItem } from '../types';

interface DetailedBreakdownProps {
  metrics: MetricBreakdownItem[];
  onSelectMetric: (metric: MetricBreakdownItem) => void;
}

export const DetailedBreakdown: React.FC<DetailedBreakdownProps> = ({
  metrics,
  onSelectMetric,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-bold text-[#191c1e] tracking-tight">
          Detailed Breakdown
        </h3>
        <span className="text-[13px] text-[#424754] font-medium hidden sm:inline-block">
          Click any card for skill gap analysis
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="detailed-breakdown-container">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            onClick={() => onSelectMetric(metric)}
            className="bg-white rounded-[24px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#e0e3e5]/50 hover:border-[#0058be]/40 hover:shadow-[0_8px_24px_rgba(0,88,190,0.08)] transition-all cursor-pointer group flex flex-col justify-between select-none"
            data-metric={metric.title}
            data-score={metric.score}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#f2f4f6] group-hover:bg-[#0058be]/10 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[#6c748b] group-hover:text-[#0058be] text-[22px] transition-colors">
                    {metric.iconName}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-bold text-[#191c1e]">
                    {metric.score}%
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#c2c6d6] group-hover:text-[#0058be] transition-colors">
                    chevron_right
                  </span>
                </div>
              </div>

              <h4 className="text-[15px] font-medium text-[#424754] group-hover:text-[#191c1e] mb-3 transition-colors">
                {metric.title}
              </h4>
            </div>

            <div className="w-full">
              <div className="h-1.5 w-full bg-[#eceef0] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#0058be] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.score}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + idx * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
