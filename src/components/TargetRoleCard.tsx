import React from 'react';
import { getRoleData } from '../data/roles';

interface TargetRoleCardProps {
  targetRole: string;
  tags?: string[];
  onChangeRole: () => void;
}

export const TargetRoleCard: React.FC<TargetRoleCardProps> = ({
  targetRole,
  tags,
  onChangeRole,
}) => {
  const rolePkg = getRoleData(targetRole);
  const displayTags = tags || rolePkg.categoryTags.slice(0, 3);

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e0e3e5]/40 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0058be] text-[22px]">target</span>
          <h3 className="text-[13px] font-semibold text-[#424754] uppercase tracking-wider">
            Target Role
          </h3>
        </div>
        <button
          onClick={onChangeRole}
          className="text-[12px] font-medium text-[#0058be] hover:underline bg-[#0058be]/5 hover:bg-[#0058be]/10 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
        >
          Change
          <span className="material-symbols-outlined text-[14px]">expand_more</span>
        </button>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-baseline justify-between gap-2 mb-3">
          <h4 className="text-[22px] md:text-[24px] font-bold text-[#191c1e] tracking-[-0.01em]">
            {targetRole}
          </h4>
          <span className="text-xs text-[#727785] font-semibold shrink-0">
            {rolePkg.avgSalary}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="bg-[#0058be]/10 text-[#0058be] px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
          <span className="bg-[#6b38d4]/10 text-[#6b38d4] px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide">
            {rolePkg.demand}
          </span>
        </div>
      </div>
    </div>
  );
};

