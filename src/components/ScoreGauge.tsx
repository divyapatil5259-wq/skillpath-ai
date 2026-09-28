import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ScoreGaugeProps {
  score: number;
  onExploreScore?: () => void;
}

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score, onExploreScore }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = score / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [score]);

  // Circular gauge math
  const size = 192;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Let's create the top-cut donut or standard full circular ring with gradient
  const progressOffset = circumference - (score / 100) * circumference;

  return (
    <section className="flex flex-col items-center justify-center text-center py-4 select-none">
      <div 
        onClick={onExploreScore}
        className="relative w-48 h-48 mb-6 flex items-center justify-center cursor-pointer group transition-transform hover:scale-[1.02] active:scale-[0.98]"
        title="Click to view readiness score details"
      >
        <svg width={size} height={size} className="transform -rotate-90">
          <defs>
            <linearGradient id="scoreGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b38d4" />
              <stop offset="100%" stopColor="#0058be" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0058be" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e0e3e5"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Active progress arc */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#scoreGaugeGrad)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: progressOffset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            strokeLinecap="round"
            filter="url(#glow)"
          />
        </svg>

        {/* Centered Score */}
        <div className="absolute flex flex-col items-center pointer-events-none">
          <span className="text-[42px] font-bold leading-tight gradient-text tracking-tight">
            {animatedScore}
          </span>
          <span className="text-[14px] font-medium text-[#424754]">/ 100</span>
        </div>
      </div>

      <h2 className="text-[20px] font-semibold text-[#191c1e] mb-1.5 flex items-center gap-1.5">
        Job Readiness Score
      </h2>
      <p className="text-[16px] text-[#424754] max-w-sm">
        You're <span className="font-semibold text-[#0058be]">{score}%</span> ready for your target role.
      </p>
    </section>
  );
};
