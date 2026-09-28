import React, { useState } from 'react';
import { SkillItem } from '../types';
import { motion } from 'motion/react';

interface SkillsViewProps {
  skills: SkillItem[];
  onTakeQuiz: (skill: SkillItem) => void;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ skills, onTakeQuiz }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Technical', 'Tools', 'Analytical', 'Soft Skills'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[24px] border border-[#e0e3e5]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#191c1e]">
            Competency & Skills Matrix
          </h2>
          <p className="text-xs md:text-sm text-[#424754] mt-1">
            Complete quick diagnostic quizzes to verify proficiencies and lift your readiness score.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#f2f4f6] px-3 py-1.5 rounded-xl self-start md:self-auto">
          <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
          <span className="text-xs font-semibold text-[#191c1e]">
            {skills.filter((s) => s.verified).length} / {skills.length} Verified
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#0058be] text-white shadow-xs'
                : 'bg-white text-[#424754] hover:bg-[#f2f4f6] border border-[#eceef0]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
            className="bg-white rounded-[24px] p-5 border border-[#e0e3e5]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#0058be]/30 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6c748b] bg-[#f2f4f6] px-2.5 py-0.5 rounded-md">
                  {skill.category}
                </span>
                {skill.verified ? (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Verified
                  </span>
                ) : (
                  <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-semibold border border-amber-200">
                    Needs Assessment
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-[#191c1e] mb-1">
                {skill.name}
              </h3>
              <div className="text-xs text-[#727785] mb-3">
                Level: <span className="font-semibold text-[#191c1e]">{skill.level}</span>
              </div>

              {/* Progress */}
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#424754]">Proficiency</span>
                  <span className="text-[#0058be]">{skill.proficiencyPercent}%</span>
                </div>
                <div className="h-1.5 w-full bg-[#eceef0] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      skill.proficiencyPercent >= 80
                        ? 'bg-emerald-500'
                        : skill.proficiencyPercent >= 60
                        ? 'bg-[#0058be]'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${skill.proficiencyPercent}%` }}
                  />
                </div>
              </div>

              {/* Key concepts */}
              <div className="flex flex-wrap gap-1 mb-4">
                {skill.keyConcepts.map((c) => (
                  <span
                    key={c}
                    className="text-[10px] bg-[#f7f9fb] text-[#424754] border border-[#eceef0] px-2 py-0.5 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onTakeQuiz(skill)}
              className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                skill.verified
                  ? 'bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#191c1e]'
                  : 'bg-[#0058be] text-white hover:bg-[#004395] shadow-xs'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">quiz</span>
              <span>{skill.verified ? 'Retake Quiz' : 'Take 3-Min Quiz'}</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
