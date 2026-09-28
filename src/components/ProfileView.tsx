import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { motion } from 'motion/react';
import { getRoleData } from '../data/roles';

interface ProfileViewProps {
  user: UserProfile;
  onChangeTargetRole: () => void;
  onUpdateResumeScore: (newScore: number) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  onChangeTargetRole,
  onUpdateResumeScore,
}) => {
  const rolePkg = getRoleData(user.targetRole);

  const [resumeText, setResumeText] = useState(rolePkg.resumeSample.text);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    score: number;
    strengths: string[];
    improvements: string[];
    recommendedKeywords: string[];
  } | null>(null);

  // When targetRole changes, update resume sample if not modified by user or set to new role sample
  useEffect(() => {
    const pkg = getRoleData(user.targetRole);
    setResumeText(pkg.resumeSample.text);
    setAnalysisResult(null);
  }, [user.targetRole]);

  const handleAnalyzeResume = async () => {
    setIsAnalyzing(true);
    try {
      const res = await fetch('/api/resume/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resumeText,
          targetRole: user.targetRole,
          targetKeywords: rolePkg.resumeSample.keywords,
        }),
      });
      const data = await res.json();
      setAnalysisResult(data);
      if (data.score) {
        onUpdateResumeScore(data.score);
      }
    } catch (err) {
      console.error(err);
      setAnalysisResult({
        score: rolePkg.metrics.find((m) => m.id === 'resume')?.score || 82,
        strengths: rolePkg.resumeSample.defaultStrengths,
        improvements: rolePkg.resumeSample.defaultImprovements,
        recommendedKeywords: rolePkg.resumeSample.keywords,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };


  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e3e5]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-[#0058be]/10 shadow-sm"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#191c1e]">{user.name}</h2>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Verified Member
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#727785]">{user.email}</p>
            <p className="text-xs text-[#424754] mt-1 font-medium">{user.education} • {user.experienceLevel}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onChangeTargetRole}
            className="bg-[#0058be]/10 hover:bg-[#0058be]/15 text-[#0058be] px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Switch Target Role ({user.targetRole})
          </button>
        </div>
      </div>

      {/* AI Resume Analyzer */}
      <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e0e3e5]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#6b38d4]/10 text-[#6b38d4] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">description</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#191c1e]">AI Resume Scanner & ATS Optimizer</h3>
              <p className="text-xs text-[#727785]">Targeting: <strong className="text-[#0058be]">{user.targetRole}</strong></p>
            </div>
          </div>
          <button
            onClick={handleAnalyzeResume}
            disabled={isAnalyzing || !resumeText.trim()}
            className="bg-gradient-to-r from-[#6b38d4] to-[#0058be] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:shadow-md transition-all active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
          >
            {isAnalyzing ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Scanning...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                Run AI ATS Audit
              </>
            )}
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#424754] mb-1.5">
            Paste Resume Summary or Bullet Points:
          </label>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={5}
            className="w-full text-xs bg-[#f7f9fb] border border-[#eceef0] rounded-xl p-3.5 focus:outline-none focus:border-[#0058be] font-sans"
          />
        </div>

        {/* Results */}
        {analysisResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-[#cbd5e1] rounded-2xl space-y-4 mt-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                AI Assessment Score
              </span>
              <span className="text-lg font-bold text-[#0058be]">
                {analysisResult.score}% ATS Match
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-emerald-200">
                <div className="font-bold text-emerald-800 mb-1.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">thumb_up</span>
                  Key Strengths
                </div>
                <ul className="space-y-1 text-[#334155]">
                  {analysisResult.strengths?.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <div className="font-bold text-amber-800 mb-1.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-amber-600">priority_high</span>
                  High-Impact Improvements
                </div>
                <ul className="space-y-1 text-[#334155]">
                  {analysisResult.improvements?.map((imp, i) => (
                    <li key={i}>• {imp}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wide block mb-1.5">
                Recommended Keywords to Incorporate:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {analysisResult.recommendedKeywords?.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs bg-[#0058be]/10 text-[#0058be] px-2.5 py-0.5 rounded-full font-semibold"
                  >
                    + {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
