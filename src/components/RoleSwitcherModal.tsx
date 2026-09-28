import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ROLE_DATA, AVAILABLE_ROLES, getRoleData } from '../data/roles';

interface RoleSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRole: string;
  availableRoles?: string[];
  onSelectRole: (role: string) => void;
}

export const RoleSwitcherModal: React.FC<RoleSwitcherModalProps> = ({
  isOpen,
  onClose,
  currentRole,
  availableRoles = AVAILABLE_ROLES,
  onSelectRole,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredRoles = availableRoles.filter((r) =>
    r.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white rounded-[28px] max-w-xl w-full p-6 md:p-7 shadow-2xl border border-[#e0e3e5] relative my-8"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#eceef0] mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#0058be]/10 text-[#0058be] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">target</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#191c1e]">Select Target Career Role</h3>
              <p className="text-xs text-[#727785]">Choose from 12 industry-standard career pathways</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#424754] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Search Filter */}
        <div className="relative mb-3">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#727785] text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search roles (e.g. Software Engineer, AI/ML, Cloud)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-[#f7f9fb] border border-[#e0e3e5] rounded-xl focus:outline-none focus:border-[#0058be] focus:ring-1 focus:ring-[#0058be] transition-all"
          />
        </div>

        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
          {filteredRoles.map((role) => {
            const rolePkg = getRoleData(role);
            const isSelected = role === currentRole;

            return (
              <div
                key={role}
                onClick={() => {
                  onSelectRole(role);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'border-[#0058be] bg-[#0058be]/5 ring-1 ring-[#0058be]'
                    : 'border-[#eceef0] hover:border-[#0058be]/40 hover:bg-[#f7f9fb]'
                }`}
              >
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-[#191c1e] group-hover:text-[#0058be] transition-colors truncate">
                      {role}
                    </h4>
                    {isSelected && (
                      <span className="text-[10px] uppercase font-bold bg-[#0058be] text-white px-2 py-0.5 rounded-full shrink-0">
                        Active Target
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {rolePkg.categoryTags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] bg-white border border-[#e0e3e5] text-[#424754] px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="text-[10px] bg-[#6b38d4]/10 text-[#6b38d4] font-semibold px-2 py-0.5 rounded-md">
                      {rolePkg.demand}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-3">
                  <div className="text-xs font-semibold text-[#0058be]">
                    {rolePkg.baseReadinessScore}% Match
                  </div>
                  <div className="text-[11px] text-[#727785]">{rolePkg.avgSalary}</div>
                </div>
              </div>
            );
          })}
          {filteredRoles.length === 0 && (
            <div className="text-center py-8 text-[#727785] text-sm">
              No matching career roles found for "{searchQuery}".
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

