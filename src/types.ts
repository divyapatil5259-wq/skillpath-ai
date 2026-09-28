export type TabType = 'home' | 'roadmap' | 'skills' | 'coach' | 'profile';

export interface UserProfile {
  name: string;
  avatarUrl: string;
  email: string;
  targetRole: string;
  availableRoles: string[];
  education: string;
  experienceLevel: string;
  readinessScore: number;
}

export interface MetricBreakdownItem {
  id: string;
  title: string;
  score: number;
  iconName: string;
  category: string;
  description: string;
  details: {
    label: string;
    score: number;
    status: 'strong' | 'moderate' | 'needs_work';
    tip: string;
  }[];
}

export interface RoadmapStep {
  id: string;
  phaseNumber: number;
  title: string;
  subtitle: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  durationWeeks: number;
  skillsCovered: string[];
  description: string;
  deliverable: string;
  isNextBestAction?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Technical' | 'Analytical' | 'Tools' | 'Soft Skills';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  proficiencyPercent: number;
  verified: boolean;
  quizCompleted: boolean;
  keyConcepts: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: string }[];
  tag?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'achievement' | 'recommendation' | 'reminder' | 'market';
  icon: string;
}

export interface QuizQuestion {
  id: string;
  skillId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ProjectStudioConfig {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  impactScore: number;
  icon: string;
  schemaTitle: string;
  schemaTables: {
    name: string;
    type: string;
    fields: string[];
  }[];
  codeLanguage: string;
  codeSnippet: string;
  codeSnippetTitle: string;
  interactiveType:
    | 'dashboard'
    | 'api_tester'
    | 'ml_playground'
    | 'cloud_architect'
    | 'security_console'
    | 'ui_prototype';
  previewData?: any;
  verificationChecks: string[];
}

export interface RoleDataPackage {
  roleName: string;
  categoryTags: string[];
  avgSalary: string;
  demand: string;
  baseReadinessScore: number;
  aiInsight: {
    headline: string;
    text: string;
    actionLabel: string;
    actionType: string;
    estimatedImpact: string;
  };
  metrics: MetricBreakdownItem[];
  roadmap: RoadmapStep[];
  skills: SkillItem[];
  projectStudio: ProjectStudioConfig;
  quizQuestions: Record<string, QuizQuestion[]>;
  coachGreeting: {
    text: string;
    quickActions: { label: string; action: string }[];
  };
  resumeSample: {
    text: string;
    keywords: string[];
    defaultStrengths: string[];
    defaultImprovements: string[];
  };
  notifications: NotificationItem[];
}
