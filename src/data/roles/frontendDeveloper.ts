import { RoleDataPackage } from '../../types';

export const frontendDeveloperRole: RoleDataPackage = {
  roleName: 'Frontend Developer',
  categoryTags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'UI/UX', 'Performance'],
  avgSalary: '$112,000 / yr',
  demand: 'High Demand',
  baseReadinessScore: 76,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your React state management and Tailwind styling are stellar. Building an enterprise SaaS Design System with Storybook, accessibility (WCAG AA), and micro-interactions will make your Frontend portfolio world-class.',
    actionLabel: 'Start Design System Studio',
    actionType: 'project',
    estimatedImpact: '+9% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 84,
      iconName: 'web',
      category: 'Frontend Core',
      description: 'React, TypeScript, CSS architecture, web performance, accessibility, and modern build tooling.',
      details: [
        { label: 'React 18+ & State Management (Zustand, Context)', score: 92, status: 'strong', tip: 'Exceptional component composition and custom hook engineering.' },
        { label: 'TypeScript & Type Safety', score: 85, status: 'strong', tip: 'Clean generic interfaces and utility types.' },
        { label: 'Web Performance & Core Web Vitals (LCP, CLS, INP)', score: 70, status: 'moderate', tip: 'Practice bundle splitting, lazy loading, and memoization.' },
        { label: 'Accessibility & WCAG AA Standards', score: 62, status: 'needs_work', tip: 'Primary gap: Add ARIA roles, keyboard navigation, and contrast audits.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 72,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Responsive web apps, component design systems, and animated interactive experiences.',
      details: [
        { label: 'E-Commerce Marketplace Web App', score: 94, status: 'strong', tip: 'Live with responsive mobile navigation and fast checkout.' },
        { label: 'Enterprise Component Design System & Storybook', score: 35, status: 'needs_work', tip: 'High priority project to showcase design engineering.' },
        { label: 'Interactive Data Visualizer Canvas', score: 80, status: 'moderate', tip: 'Add smooth gesture controls and responsive resizing.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 84,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Lighthouse score metrics, conversion improvements, and modern frontend keywords.',
      details: [
        { label: 'ATS Friendly Single-Column Format', score: 95, status: 'strong', tip: 'Clean and readable for frontend hiring managers.' },
        { label: 'Frontend Impact Metrics (Lighthouse 99, 40% faster load)', score: 80, status: 'strong', tip: 'Quantified performance and user engagement results.' },
        { label: 'Keywords (React, TypeScript, Tailwind, Next.js, WCAG)', score: 78, status: 'moderate', tip: 'Add Storybook, Vite, and Motion keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 66,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Machine coding challenges (autocomplete, infinite scroll, modals), JavaScript event loop, and CSS layout.',
      details: [
        { label: 'Live UI Machine Coding (Autocomplete, Carousel)', score: 82, status: 'strong', tip: 'Build components cleanly from scratch in < 30 mins.' },
        { label: 'JavaScript Engine (Event Loop, Closures, Prototypes)', score: 75, status: 'moderate', tip: 'Solid explanation of macro vs microtask queues.' },
        { label: 'CSS Architecture & Responsive Grid/Flexbox Layouts', score: 90, status: 'strong', tip: 'Expert precision in Tailwind and CSS.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'fe-1',
      phaseNumber: 1,
      title: 'Advanced JavaScript & TypeScript Deep Dive',
      subtitle: 'Closures, Prototypes, Event Loop, Generics, and Utility Types',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['JavaScript (ESNext)', 'TypeScript Generics', 'Event Loop', 'Async/Await'],
      description: 'Master core browser runtime mechanics and deep TypeScript type systems.',
      deliverable: 'TypeScript Custom Utility Types & Polyfill Library',
    },
    {
      id: 'fe-2',
      phaseNumber: 2,
      title: 'React Architecture & Performance Optimization',
      subtitle: 'Custom Hooks, Virtual DOM reconciliation, Memoization, and Bundle Splitting',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['React 18', 'Custom Hooks', 'React.memo', 'Code Splitting'],
      description: 'Build zero-lag complex web interfaces optimized for 60fps rendering.',
      deliverable: 'High-Performance Virtualized Data Grid Component for 100k rows',
    },
    {
      id: 'fe-3',
      phaseNumber: 3,
      title: 'Enterprise Design Systems & Accessibility (WCAG)',
      subtitle: 'Storybook, Headless UI, ARIA Roles, and Tailwind CSS Design Tokens',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['Design Systems', 'Storybook', 'WCAG AA', 'Tailwind CSS'],
      description: 'Create an accessible, tokenized component library with automated visual testing.',
      deliverable: 'Production Enterprise Design System with Storybook & 25+ Accessible Components',
    },
    {
      id: 'fe-4',
      phaseNumber: 4,
      title: 'Core Web Vitals & Production Deployment',
      subtitle: 'Lighthouse 98+ Optimization, Next.js/Vite SSR, and Automated CI/CD',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Core Web Vitals', 'SSR/SSG', 'Vite', 'CI/CD Vercel'],
      description: 'Optimize LCP, CLS, and INP metrics for production enterprise web applications.',
      deliverable: 'Production-Deployed SaaS App achieving 99 Lighthouse Score',
    },
    {
      id: 'fe-5',
      phaseNumber: 5,
      title: 'Frontend Machine Coding & Whiteboard Sprints',
      subtitle: 'Live UI Challenges (Autocomplete, Kanban, Infinite Scroll) and Mock Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Machine Coding', 'Live React Coding', 'System Design UI'],
      description: 'Hone speed and code cleanliness in timed machine coding rounds.',
      deliverable: 'Verified Frontend Machine Coding Clearance Certificate',
    },
  ],
  skills: [
    {
      id: 'react_core',
      name: 'React 18 & Hooks',
      category: 'Technical',
      level: 'Expert',
      proficiencyPercent: 92,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['useCallback/useMemo', 'Custom Hooks', 'Reconciliation', 'Concurrent Mode'],
    },
    {
      id: 'ts_fe',
      name: 'TypeScript & Type Safety',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 85,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Generics', 'Discriminated Unions', 'Mapped Types', 'Keyof/Typeof'],
    },
    {
      id: 'css_tailwind',
      name: 'Tailwind CSS & Modern Layouts',
      category: 'Technical',
      level: 'Expert',
      proficiencyPercent: 94,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Flexbox & Grid', 'Responsive Breakpoints', 'Design Tokens', 'Dark Mode'],
    },
    {
      id: 'perf_fe',
      name: 'Web Performance & Web Vitals',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 70,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['LCP/CLS/INP', 'Tree Shaking', 'Image Optimization', 'Dynamic Imports'],
    },
    {
      id: 'a11y_fe',
      name: 'Accessibility & WCAG AA',
      category: 'Analytical',
      level: 'Intermediate',
      proficiencyPercent: 62,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['ARIA Roles', 'Focus Traps', 'Keyboard Nav', 'Color Contrast'],
    },
  ],
  projectStudio: {
    id: 'fe-proj-1',
    title: 'Modern High-Performance SaaS Design System & UI Studio',
    subtitle: 'Build tokenized component library with accessibility, motion transitions, and Storybook',
    badge: 'Frontend Engineering Deliverable',
    impactScore: 10,
    icon: 'web',
    schemaTitle: 'Design Token System & Component Hierarchy',
    schemaTables: [
      { name: 'tokens_theme', type: 'Design Tokens', fields: ['colors (primary, neutral, semantic)', 'spacing (4px mathematical grid)', 'typography scales (1.25 ratio)', 'radii'] },
      { name: 'components_tree', type: 'Component Library', fields: ['Button (variants, states, sizes)', 'Modal (Focus Trap, Esc listener)', 'Combobox (Accessible keyboard navigation)', 'DataTable'] },
      { name: 'accessibility_rules', type: 'WCAG 2.1 AA', fields: ['Contrast ratio >= 4.5:1', 'Focus visible rings', 'aria-expanded / aria-controls'] },
    ],
    codeLanguage: 'typescript',
    codeSnippetTitle: 'Accessible Keyboard-Navigable Combobox Component',
    codeSnippet: `export const Combobox: React.FC<ComboboxProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') setActiveIndex((i) => (i + 1) % options.length);
    if (e.key === 'ArrowUp') setActiveIndex((i) => (i - 1 + options.length) % options.length);
    if (e.key === 'Enter') { onSelect(options[activeIndex]); setIsOpen(false); }
  };

  return (
    <div role="combobox" aria-expanded={isOpen} onKeyDown={handleKeyDown}>
      {/* Accessible Interactive Menu */}
    </div>
  );
};`,
    interactiveType: 'ui_prototype',
    verificationChecks: [
      'Lighthouse accessibility audit evaluated at 100/100',
      'Keyboard navigation (Tab, Arrow keys, Esc) verification passed',
      'Zero layout shift (CLS = 0) during responsive re-renders',
      'Production Vite build bundle size within performance budgets',
    ],
  },
  quizQuestions: {
    react_core: [
      {
        id: 'fe-q1',
        skillId: 'react_core',
        question: 'What is the primary function of the React Fiber reconciliation algorithm?',
        options: [
          'It compiles TypeScript into JavaScript directly in the browser',
          'It breaks rendering work into incremental units, allowing browser priority interruptions for smooth 60fps UI',
          'It replaces CSS files with JavaScript stylesheets',
          'It handles backend database transactions',
        ],
        correctIndex: 1,
        explanation: 'React Fiber enables incremental rendering by splitting rendering work into chunks and prioritizing high-importance updates (like user input).',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Frontend Developer**. With your **76% Job Readiness Score**, you have top-tier React and Tailwind CSS proficiency (92%). 

Right now, your highest-leverage opportunity is finishing the **Enterprise SaaS Design System & UI Studio** to prove production-grade accessibility (WCAG AA) and component architecture.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Design System Studio', action: 'start_project' },
      { label: '🎯 Drill Frontend Machine Coding Round', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Frontend Developer
Experience:
- Frontend Engineer Intern @ WebStudio: Developed 20+ responsive components in React 18 & TypeScript, achieving 99 Lighthouse performance scores.
- Optimized bundle sizes by 38% via code splitting, lazy loading, and dynamic imports.
- Implemented WCAG 2.1 AA accessibility standards across customer portals, boosting keyboard navigation usability.
Education: B.S. in Computer Science & Interactive Media
Skills: React, TypeScript, Tailwind CSS, Next.js, HTML5/CSS3, Vite, Storybook, Git.`,
    keywords: ['Frontend', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Accessibility', 'WCAG', 'Performance', 'Vite'],
    defaultStrengths: [
      'High-impact web metrics (99 Lighthouse score, 38% bundle size reduction)',
      'Modern frontend stack excellence (React 18, TypeScript, Tailwind, Storybook)',
    ],
    defaultImprovements: [
      'Include links to live deployed interactive UI prototypes or Storybook showcases',
      'Detail automated testing (Playwright, Jest, React Testing Library)',
    ],
  },
  notifications: [
    {
      id: 'fe-n1',
      title: 'Frontend Recommendation Ready',
      message: 'Boost your score by +9% by completing the Enterprise Design System project.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'web',
    },
  ],
};
