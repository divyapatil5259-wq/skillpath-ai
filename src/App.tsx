import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ScoreGauge } from './components/ScoreGauge';
import { TargetRoleCard } from './components/TargetRoleCard';
import { AiInsightCard } from './components/AiInsightCard';
import { DetailedBreakdown } from './components/DetailedBreakdown';
import { BottomNavBar } from './components/BottomNavBar';
import { ProjectStudioModal } from './components/ProjectStudioModal';
import { MetricDetailModal } from './components/MetricDetailModal';
import { NotificationsDrawer } from './components/NotificationsDrawer';
import { RoleSwitcherModal } from './components/RoleSwitcherModal';
import { QuizModal } from './components/QuizModal';
import { RoadmapView } from './components/RoadmapView';
import { SkillsView } from './components/SkillsView';
import { CoachView } from './components/CoachView';
import { ProfileView } from './components/ProfileView';

import { initialUserProfile } from './data/initialData';
import { getRoleData, AVAILABLE_ROLES } from './data/roles';
import {
  TabType,
  UserProfile,
  MetricBreakdownItem,
  SkillItem,
  NotificationItem,
  QuizQuestion,
} from './types';
import { motion, AnimatePresence } from 'motion/react';

const STORAGE_ROLE_KEY = 'skillpath_target_role';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Load initial role from localStorage or default to Data Analyst
  const initialRole = typeof window !== 'undefined'
    ? localStorage.getItem(STORAGE_ROLE_KEY) || 'Data Analyst'
    : 'Data Analyst';

  const initialRolePkg = getRoleData(initialRole);

  const [user, setUser] = useState<UserProfile>({
    ...initialUserProfile,
    targetRole: initialRolePkg.roleName,
    readinessScore: initialRolePkg.baseReadinessScore,
    availableRoles: AVAILABLE_ROLES,
  });

  const [metrics, setMetrics] = useState<MetricBreakdownItem[]>(initialRolePkg.metrics);
  const [roadmapSteps, setRoadmapSteps] = useState(initialRolePkg.roadmap);
  const [skills, setSkills] = useState<SkillItem[]>(initialRolePkg.skills);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialRolePkg.notifications);

  // Active role package
  const currentRolePkg = getRoleData(user.targetRole);

  // Modals state
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<MetricBreakdownItem | null>(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isRoleSwitcherOpen, setIsRoleSwitcherOpen] = useState(false);
  const [quizSkill, setQuizSkill] = useState<SkillItem | null>(null);

  // Persist role whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ROLE_KEY, user.targetRole);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [user.targetRole]);

  // Compute Overall Score based on breakdown metrics
  const calculateOverallScore = (items: MetricBreakdownItem[]) => {
    const tech = items.find((m) => m.id === 'technical')?.score || 75;
    const proj = items.find((m) => m.id === 'projects')?.score || 65;
    const res = items.find((m) => m.id === 'resume')?.score || 80;
    const interview = items.find((m) => m.id === 'interview')?.score || 65;

    // Weighted average: Technical (35%), Projects (25%), Resume (20%), Interview (20%)
    const weighted = Math.round(tech * 0.35 + proj * 0.25 + res * 0.2 + interview * 0.2);
    return weighted;
  };

  // Role switch handler
  const handleSelectRole = (newRole: string) => {
    const newPkg = getRoleData(newRole);

    setUser((u) => ({
      ...u,
      targetRole: newPkg.roleName,
      readinessScore: newPkg.baseReadinessScore,
    }));
    setMetrics(newPkg.metrics);
    setRoadmapSteps(newPkg.roadmap);
    setSkills(newPkg.skills);
    setNotifications(newPkg.notifications);
  };

  // Handler when portfolio project is successfully evaluated
  const handleCompleteProject = () => {
    const impact = currentRolePkg.projectStudio.impactScore || 10;
    setMetrics((prev) => {
      const updated = prev.map((m) => {
        if (m.id === 'projects') return { ...m, score: Math.min(100, m.score + 14) };
        if (m.id === 'technical') return { ...m, score: Math.min(100, m.score + 5) };
        return m;
      });
      const newOverall = calculateOverallScore(updated);
      setUser((u) => ({ ...u, readinessScore: newOverall }));
      return updated;
    });

    setRoadmapSteps((prev) =>
      prev.map((step, idx) =>
        step.isNextBestAction || idx === 1 ? { ...step, status: 'completed' } : step
      )
    );

    setSkills((prev) =>
      prev.map((s, idx) =>
        idx === 0 || !s.verified ? { ...s, proficiencyPercent: Math.min(100, s.proficiencyPercent + 10), verified: true } : s
      )
    );

    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: `${currentRolePkg.roleName} Milestone Verified! 🏆`,
        message: `Your "${currentRolePkg.projectStudio.title}" passed AI verification. Overall readiness boosted by +${impact}%.`,
        timestamp: 'Just now',
        read: false,
        type: 'achievement',
        icon: 'emoji_events',
      },
      ...prev,
    ]);
  };

  // Handler when a skill quiz is passed
  const handleQuizCompleted = (skillId: string, passed: boolean) => {
    if (passed) {
      setSkills((prev) =>
        prev.map((s) =>
          s.id === skillId
            ? { ...s, verified: true, proficiencyPercent: Math.min(100, s.proficiencyPercent + 15) }
            : s
        )
      );

      setMetrics((prev) => {
        const updated = prev.map((m) =>
          m.id === 'technical'
            ? { ...m, score: Math.min(100, m.score + 4) }
            : m
        );
        setUser((u) => ({ ...u, readinessScore: calculateOverallScore(updated) }));
        return updated;
      });
    }
  };

  const handleUpdateResumeScore = (newScore: number) => {
    setMetrics((prev) => {
      const updated = prev.map((m) =>
        m.id === 'resume' ? { ...m, score: newScore } : m
      );
      setUser((u) => ({ ...u, readinessScore: calculateOverallScore(updated) }));
      return updated;
    });
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  // Derive quiz questions for current skill with fallback generator
  const getQuizQuestionsForSkill = (skill: SkillItem | null): QuizQuestion[] => {
    if (!skill) return [];
    if (currentRolePkg.quizQuestions && currentRolePkg.quizQuestions[skill.id]) {
      return currentRolePkg.quizQuestions[skill.id];
    }
    // Dynamic generated fallback question based on skill name & concepts
    const concepts = skill.keyConcepts || ['Core Principles', 'Industry Best Practices', 'Performance'];
    return [
      {
        id: `q-${skill.id}-1`,
        skillId: skill.id,
        question: `When implementing ${skill.name} in a production ${user.targetRole} workflow, which of the following is considered the primary best practice?`,
        options: [
          `Prioritize modularity, automated testing, and quantifiable reliability (${concepts[0] || 'Clean Architecture'})`,
          'Skip documentation and error handling to maximize raw speed',
          'Rely exclusively on global mutable state and hardcoded values',
          'Deploy unverified scripts directly to production databases',
        ],
        correctIndex: 0,
        explanation: `In enterprise ${user.targetRole} environments, adhering to ${concepts.join(', ')} ensures maintainability and production stability.`,
      },
      {
        id: `q-${skill.id}-2`,
        skillId: skill.id,
        question: `Which key concept is most essential for mastering ${skill.name}?`,
        options: [
          `${concepts[1] || concepts[0] || 'Systematic Design'} with measurable benchmarks and validation checks`,
          'Random trial and error without logging or telemetry',
          'Ignoring edge cases and concurrency locks',
          'Using obsolete deprecated libraries without type safety',
        ],
        correctIndex: 0,
        explanation: `Demonstrating depth in ${concepts[1] || 'industry techniques'} validates senior-level competency.`,
      },
    ];
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] pb-[96px] md:pb-12">
      {/* Top Header */}
      <Header
        user={user}
        unreadCount={unreadNotificationsCount}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onAvatarClick={() => setActiveTab('profile')}
      />

      {/* Desktop / Tablet Navigation Header Bar */}
      <div className="hidden md:flex justify-center border-b border-[#eceef0]/80 bg-white/70 backdrop-blur-sm sticky top-[73px] z-30 py-2.5 px-4">
        <div className="flex items-center gap-1.5 bg-[#f2f4f6] p-1 rounded-2xl max-w-xl w-full justify-around">
          {[
            { id: 'home', label: 'Home', icon: 'home' },
            { id: 'roadmap', label: 'Roadmap', icon: 'route' },
            { id: 'skills', label: 'Skills', icon: 'school' },
            { id: 'coach', label: 'AI Coach', icon: 'psychology' },
            { id: 'profile', label: 'Profile', icon: 'person' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-[#0058be] shadow-xs'
                    : 'text-[#424754] hover:text-[#191c1e]'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <main className="px-5 md:px-10 max-w-6xl mx-auto py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key={`home-${user.targetRole}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-8 md:gap-10"
            >
              {/* Hero Circular Gauge */}
              <ScoreGauge
                score={user.readinessScore}
                onExploreScore={() => setSelectedMetric(metrics[0])}
              />

              {/* Target Role & AI Insight Grid */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <TargetRoleCard
                  targetRole={user.targetRole}
                  onChangeRole={() => setIsRoleSwitcherOpen(true)}
                />

                <AiInsightCard
                  headline={currentRolePkg.aiInsight.headline}
                  insightText={currentRolePkg.aiInsight.text}
                  actionButtonLabel={currentRolePkg.aiInsight.actionLabel}
                  onActionClick={() => setIsProjectModalOpen(true)}
                  onAskCoach={() => setActiveTab('coach')}
                />
              </section>

              {/* Detailed Breakdown */}
              <DetailedBreakdown
                metrics={metrics}
                onSelectMetric={(m) => setSelectedMetric(m)}
              />
            </motion.div>
          )}

          {activeTab === 'roadmap' && (
            <motion.div
              key={`roadmap-${user.targetRole}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <RoadmapView
                steps={roadmapSteps}
                targetRole={user.targetRole}
                onStartProject={() => setIsProjectModalOpen(true)}
                onOpenCoach={() => setActiveTab('coach')}
              />
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key={`skills-${user.targetRole}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <SkillsView
                skills={skills}
                onTakeQuiz={(skill) => setQuizSkill(skill)}
              />
            </motion.div>
          )}

          {activeTab === 'coach' && (
            <motion.div
              key={`coach-${user.targetRole}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <CoachView
                targetRole={user.targetRole}
                readinessScore={user.readinessScore}
                onOpenProjectStudio={() => setIsProjectModalOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div
              key={`profile-${user.targetRole}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ProfileView
                user={user}
                onChangeTargetRole={() => setIsRoleSwitcherOpen(true)}
                onUpdateResumeScore={handleUpdateResumeScore}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNavBar
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
      />

      {/* Project Studio Modal (Dynamic for all roles) */}
      <ProjectStudioModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        config={currentRolePkg.projectStudio}
        onCompleteProject={handleCompleteProject}
      />

      {/* Metric Detail Deep Dive Modal */}
      <MetricDetailModal
        metric={selectedMetric}
        onClose={() => setSelectedMetric(null)}
        onTakeAction={(metricId) => {
          if (metricId === 'projects') {
            setIsProjectModalOpen(true);
          } else if (metricId === 'technical') {
            setActiveTab('skills');
          } else if (metricId === 'interview') {
            setActiveTab('coach');
          } else if (metricId === 'resume') {
            setActiveTab('profile');
          }
        }}
      />

      {/* Notifications Drawer */}
      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={() =>
          setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
        }
        onNotificationClick={(item) => {
          setNotifications((prev) =>
            prev.map((n) => (n.id === item.id ? { ...n, read: true } : n))
          );
          if (item.type === 'recommendation' || item.type === 'action') {
            setIsNotificationsOpen(false);
            setIsProjectModalOpen(true);
          }
        }}
      />

      {/* Target Role Switcher Modal */}
      <RoleSwitcherModal
        isOpen={isRoleSwitcherOpen}
        onClose={() => setIsRoleSwitcherOpen(false)}
        currentRole={user.targetRole}
        availableRoles={user.availableRoles}
        onSelectRole={handleSelectRole}
      />

      {/* Skill Assessment Quiz Modal */}
      <QuizModal
        skill={quizSkill}
        questions={getQuizQuestionsForSkill(quizSkill)}
        isOpen={!!quizSkill}
        onClose={() => setQuizSkill(null)}
        onQuizCompleted={handleQuizCompleted}
      />
    </div>
  );
}

