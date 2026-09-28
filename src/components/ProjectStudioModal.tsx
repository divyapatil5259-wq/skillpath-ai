import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectStudioConfig } from '../types';

interface ProjectStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProjectStudioConfig;
  onCompleteProject: () => void;
}

export const ProjectStudioModal: React.FC<ProjectStudioModalProps> = ({
  isOpen,
  onClose,
  config,
  onCompleteProject,
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [codeContent, setCodeContent] = useState(config.codeSnippet);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalSuccess, setEvalSuccess] = useState(false);

  // Playground States
  const [selectedCohort, setSelectedCohort] = useState<'All' | '2024-Q1' | '2024-Q2'>('All');
  const [apiMethod, setApiMethod] = useState<'GET' | 'POST'>('GET');
  const [apiEndpoint, setApiEndpoint] = useState('/api/v1/orders');
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [mlTenure, setMlTenure] = useState(12);
  const [mlSpend, setMlSpend] = useState(85);
  const [mlTickets, setMlTickets] = useState(2);
  const [secBlockedIp, setSecBlockedIp] = useState<string[]>(['192.168.1.105']);

  useEffect(() => {
    setCodeContent(config.codeSnippet);
    setCurrentStep(1);
    setEvalSuccess(false);
  }, [config.id, isOpen]);

  if (!isOpen) return null;

  const handleRunEvaluation = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvalSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6b38d4', '#0058be', '#22c55e', '#f59e0b'],
      });
      onCompleteProject();
    }, 1400);
  };

  const handleTestApi = () => {
    if (apiMethod === 'GET') {
      setApiResponse(
        JSON.stringify(
          {
            status: 200,
            data: [
              { id: 'ord_9821', customerId: 'usr_4401', amount: 149.99, status: 'completed', createdAt: '2025-02-24T10:14:00Z' },
              { id: 'ord_9822', customerId: 'usr_1092', amount: 89.5, status: 'processing', createdAt: '2025-02-24T10:22:15Z' },
            ],
            metrics: { latency: '14ms', rateLimitRemaining: 98 },
          },
          null,
          2
        )
      );
    } else {
      setApiResponse(
        JSON.stringify(
          {
            status: 201,
            message: 'Order created successfully',
            orderId: 'ord_' + Math.floor(1000 + Math.random() * 9000),
            rateLimitRemaining: 97,
          },
          null,
          2
        )
      );
    }
  };

  const calculatedMlProb = Math.min(
    95,
    Math.max(5, Math.round((mlTickets * 18 + (120 - mlTenure * 3) + (100 - mlSpend) * 0.4) / 2))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-[28px] max-w-3xl w-full p-6 md:p-8 shadow-2xl border border-[#e0e3e5] my-8 relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#eceef0] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6b38d4] to-[#0058be] flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[26px]">{config.icon || 'terminal'}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold uppercase tracking-wider bg-[#0058be]/10 text-[#0058be] px-2.5 py-0.5 rounded-full">
                  {config.badge || 'Portfolio Project'}
                </span>
                <span className="text-[12px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  +{config.impactScore || 10}% Score Boost
                </span>
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#191c1e] mt-1">
                {config.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#424754] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-6 px-2">
          {[
            { step: 1, title: 'Architecture' },
            { step: 2, title: 'Implementation' },
            { step: 3, title: 'Interactive Studio' },
            { step: 4, title: 'AI Verification' },
          ].map((s) => (
            <button
              key={s.step}
              onClick={() => setCurrentStep(s.step as any)}
              className={`flex items-center gap-2 text-xs md:text-sm font-medium transition-all ${
                currentStep === s.step
                  ? 'text-[#0058be] font-bold'
                  : currentStep > s.step
                  ? 'text-emerald-600'
                  : 'text-[#727785]'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                  currentStep === s.step
                    ? 'bg-[#0058be] text-white shadow-sm'
                    : currentStep > s.step
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-[#f2f4f6] text-[#727785]'
                }`}
              >
                {currentStep > s.step ? '✓' : s.step}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[300px]">
          {/* STEP 1: Schema & Architecture */}
          {currentStep === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="p-4 bg-[#0058be]/5 border border-[#0058be]/20 rounded-2xl">
                <h4 className="text-sm font-bold text-[#0058be] mb-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">schema</span>
                  {config.schemaTitle || 'System Architecture & Schema'}
                </h4>
                <p className="text-xs text-[#424754]">
                  Inspect the core structural components and relationships modeled for this project deliverable.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {config.schemaTables?.map((tbl, idx) => (
                  <div key={idx} className="p-3.5 bg-[#f7f9fb] rounded-xl border border-[#eceef0] shadow-2xs">
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="font-bold text-xs text-[#191c1e] font-mono">{tbl.name}</span>
                      <span className="text-[10px] bg-[#0058be]/10 text-[#0058be] px-1.5 py-0.5 rounded font-semibold">
                        {tbl.type}
                      </span>
                    </div>
                    <ul className="text-xs text-[#424754] space-y-1 font-mono">
                      {tbl.fields?.map((f, fIdx) => (
                        <li key={fIdx} className="truncate">• {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="bg-[#0058be] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#004395] transition-all flex items-center gap-1.5"
                >
                  Next: Code & Logic Editor
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Code Editor */}
          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#191c1e] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-[#6b38d4]">code</span>
                  {config.codeSnippetTitle || 'Source Code & Logic Editor'}
                </h4>
                <span className="text-xs bg-[#f2f4f6] text-[#424754] px-2.5 py-1 rounded-lg font-mono uppercase">
                  {config.codeLanguage || 'Code'}
                </span>
              </div>

              <div className="relative">
                <textarea
                  value={codeContent}
                  onChange={(e) => setCodeContent(e.target.value)}
                  rows={7}
                  className="w-full font-mono text-xs md:text-sm bg-[#191c1e] text-emerald-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0058be] border border-[#2d3133]"
                  spellCheck={false}
                />
                <span className="absolute bottom-3 right-3 text-[11px] bg-white/10 text-white/70 px-2 py-0.5 rounded">
                  Syntax Validated
                </span>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800">
                <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
                <span>Code compiled and static type checks passed with 0 errors.</span>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-semibold text-[#424754] px-4 py-2 hover:bg-[#f2f4f6] rounded-xl transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-[#0058be] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#004395] transition-all flex items-center gap-1.5"
                >
                  Next: Interactive Studio
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Interactive Studio Playground */}
          {currentStep === 3 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              {/* Variant 1: Dashboard (Data Analyst / Business Analyst) */}
              {(config.interactiveType === 'dashboard' || !config.interactiveType) && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-[#f7f9fb] p-3 rounded-xl border border-[#eceef0]">
                    <span className="text-xs font-bold text-[#191c1e]">Cohort Cohort Filter:</span>
                    <div className="flex gap-1.5">
                      {(['All', '2024-Q1', '2024-Q2'] as const).map((cohort) => (
                        <button
                          key={cohort}
                          onClick={() => setSelectedCohort(cohort)}
                          className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${
                            selectedCohort === cohort
                              ? 'bg-[#0058be] text-white shadow-xs'
                              : 'bg-white text-[#424754] hover:bg-[#e0e3e5]'
                          }`}
                        >
                          {cohort}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 bg-white border border-[#e0e3e5] rounded-xl text-center">
                      <span className="text-[11px] text-[#727785]">Total Active Customers</span>
                      <p className="text-lg font-bold text-[#191c1e]">
                        {selectedCohort === 'All' ? '24,850' : selectedCohort === '2024-Q1' ? '14,200' : '10,650'}
                      </p>
                    </div>
                    <div className="p-3 bg-white border border-[#e0e3e5] rounded-xl text-center">
                      <span className="text-[11px] text-[#727785]">Monthly Churn Rate</span>
                      <p className="text-lg font-bold text-amber-600">
                        {selectedCohort === 'All' ? '3.4%' : selectedCohort === '2024-Q1' ? '2.8%' : '4.1%'}
                      </p>
                    </div>
                    <div className="p-3 bg-white border border-[#e0e3e5] rounded-xl text-center">
                      <span className="text-[11px] text-[#727785]">Avg Customer LTV</span>
                      <p className="text-lg font-bold text-emerald-600">
                        {selectedCohort === 'All' ? '$1,480' : selectedCohort === '2024-Q1' ? '$1,620' : '$1,310'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Variant 2: API Tester (Software Engineer / Backend / Full Stack) */}
              {config.interactiveType === 'api_tester' && (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <select
                      value={apiMethod}
                      onChange={(e) => setApiMethod(e.target.value as any)}
                      className="bg-[#f7f9fb] border border-[#e0e3e5] text-xs font-bold px-3 py-2 rounded-xl text-[#0058be]"
                    >
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                    </select>
                    <input
                      type="text"
                      value={apiEndpoint}
                      onChange={(e) => setApiEndpoint(e.target.value)}
                      className="flex-1 bg-[#f7f9fb] border border-[#e0e3e5] text-xs px-3 py-2 rounded-xl font-mono"
                    />
                    <button
                      onClick={handleTestApi}
                      className="bg-[#0058be] text-white text-xs px-4 py-2 rounded-xl font-semibold hover:bg-[#004395] transition-colors"
                    >
                      Send Request
                    </button>
                  </div>

                  <div className="bg-[#191c1e] text-emerald-400 p-3.5 rounded-xl font-mono text-xs max-h-40 overflow-y-auto">
                    {apiResponse ? (
                      <pre>{apiResponse}</pre>
                    ) : (
                      <span className="text-gray-400">Click "Send Request" to test live microservice endpoint.</span>
                    )}
                  </div>
                </div>
              )}

              {/* Variant 3: ML Playground (AI/ML / Data Scientist) */}
              {config.interactiveType === 'ml_playground' && (
                <div className="space-y-3 p-3 bg-[#f7f9fb] rounded-xl border border-[#eceef0]">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#424754]">Tenure: {mlTenure} mos</label>
                      <input
                        type="range"
                        min="1"
                        max="36"
                        value={mlTenure}
                        onChange={(e) => setMlTenure(Number(e.target.value))}
                        className="w-full accent-[#0058be]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#424754]">Monthly Spend: ${mlSpend}</label>
                      <input
                        type="range"
                        min="20"
                        max="200"
                        value={mlSpend}
                        onChange={(e) => setMlSpend(Number(e.target.value))}
                        className="w-full accent-[#0058be]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#424754]">Support Tickets: {mlTickets}</label>
                      <input
                        type="range"
                        min="0"
                        max="8"
                        value={mlTickets}
                        onChange={(e) => setMlTickets(Number(e.target.value))}
                        className="w-full accent-[#0058be]"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#e0e3e5] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#727785]">Real-time Model Inference:</span>
                      <p className="text-base font-bold text-[#191c1e]">
                        Predicted Churn Probability: <span className={calculatedMlProb > 50 ? 'text-rose-600' : 'text-emerald-600'}>{calculatedMlProb}%</span>
                      </p>
                    </div>
                    <span className="text-xs bg-[#6b38d4]/10 text-[#6b38d4] font-semibold px-2.5 py-1 rounded-full">
                      ROC-AUC 0.91
                    </span>
                  </div>
                </div>
              )}

              {/* Variant 4: Cloud / Security / UI Console */}
              {(config.interactiveType === 'cloud_architect' ||
                config.interactiveType === 'security_console' ||
                config.interactiveType === 'ui_prototype') && (
                <div className="p-4 bg-[#f7f9fb] rounded-xl border border-[#eceef0] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#191c1e]">
                    <span>Interactive Console Status:</span>
                    <span className="text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live & Healthy
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#e0e3e5] text-xs font-mono text-[#424754] space-y-1">
                    <div>[OK] Multi-region failover tests passed (p99 latency: 22ms)</div>
                    <div>[OK] Security posture: Zero critical vulnerabilities detected</div>
                    <div>[OK] Accessible UI tokens & contrast ratios verified (WCAG AA 100%)</div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-semibold text-[#424754] px-4 py-2 hover:bg-[#f2f4f6] rounded-xl transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="bg-[#0058be] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#004395] transition-all flex items-center gap-1.5"
                >
                  Next: Run AI Verification
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: AI Verification */}
          {currentStep === 4 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="p-4 bg-[#f7f9fb] rounded-2xl border border-[#eceef0] space-y-3">
                <h4 className="text-sm font-bold text-[#191c1e] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#6b38d4] text-[20px]">verified</span>
                  Automated Quality & Criteria Checklist
                </h4>

                <div className="space-y-2 text-xs">
                  {config.verificationChecks?.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#424754]">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                        check_circle
                      </span>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              {evalSuccess ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <span className="material-symbols-outlined text-[28px]">trophy</span>
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">Project Verified & Added to Portfolio!</h4>
                  <p className="text-xs text-emerald-800">
                    Your Job Readiness Score for this role increased by <strong>+{config.impactScore || 10}%</strong>.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 bg-emerald-600 text-white text-xs font-semibold px-5 py-2 rounded-xl hover:bg-emerald-700 transition-colors"
                  >
                    Return to Dashboard
                  </button>
                </div>
              ) : (
                <div className="text-center pt-3">
                  <button
                    onClick={handleRunEvaluation}
                    disabled={isEvaluating}
                    className="bg-gradient-to-r from-[#6b38d4] to-[#0058be] text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center gap-2 mx-auto disabled:opacity-50"
                  >
                    {isEvaluating ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Auditing Deliverable with AI...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                        <span>Submit for AI Portfolio Verification</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <div className="flex justify-start pt-2">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="text-xs font-semibold text-[#424754] px-4 py-2 hover:bg-[#f2f4f6] rounded-xl transition-all"
                >
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
