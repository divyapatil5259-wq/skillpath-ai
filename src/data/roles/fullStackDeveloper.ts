import { RoleDataPackage } from '../../types';

export const fullStackDeveloperRole: RoleDataPackage = {
  roleName: 'Full Stack Developer',
  categoryTags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Full Stack', 'Tailwind'],
  avgSalary: '$116,000 / yr',
  demand: 'Surging',
  baseReadinessScore: 73,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your React and frontend styling are top-notch. Completing an end-to-end Real-Time Collaborative Workspace with WebSocket backend and PostgreSQL will solidify your Full Stack Developer credentials.',
    actionLabel: 'Start Collaborative WebApp',
    actionType: 'project',
    estimatedImpact: '+11% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 79,
      iconName: 'layers',
      category: 'Full Stack Stack',
      description: 'React, TypeScript, Node.js/Express, Tailwind CSS, SQL database modeling, and state management.',
      details: [
        { label: 'React & Modern Frontend (Hooks, Context, Motion)', score: 90, status: 'strong', tip: 'Exceptional component composition and responsive design.' },
        { label: 'Node.js & Backend REST/GraphQL APIs', score: 74, status: 'moderate', tip: 'Solid route design; practice connection pooling and middleware chains.' },
        { label: 'Database Modeling & ORM (PostgreSQL, Drizzle/Prisma)', score: 76, status: 'moderate', tip: 'Practice indexing foreign keys and writing database migrations.' },
        { label: 'WebSockets & Real-Time State Sync', score: 58, status: 'needs_work', tip: 'Primary gap: Build real-time pub/sub synchronization.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 67,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Production web apps with authentication, responsive design, and database persistence.',
      details: [
        { label: 'SaaS Analytics Dashboard (React + Tailwind)', score: 92, status: 'strong', tip: 'Live with theme toggle, responsive charts, and clean UI.' },
        { label: 'Real-time Collaborative Whiteboard & Chat', score: 30, status: 'needs_work', tip: 'High priority project to complete for Full Stack roles.' },
        { label: 'E-Commerce Platform with Stripe Checkout', score: 78, status: 'moderate', tip: 'Add webhook signature verification and inventory lock logic.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 83,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Full stack keywords, user adoption metrics, and live portfolio URLs.',
      details: [
        { label: 'ATS Formatting & Clean Layout', score: 95, status: 'strong', tip: 'Parses flawlessly across tech hiring ATS systems.' },
        { label: 'Full Stack Keyword Density (React, Node, TypeScript, SQL)', score: 82, status: 'strong', tip: 'Add Tailwind, Next.js/Vite, Docker, and PostgreSQL keywords.' },
        { label: 'User & System Metrics (DAU, API Uptime, Load Times)', score: 72, status: 'moderate', tip: 'Quantify lighthouse scores (>95) or sub-second page loads.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 63,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Frontend machine coding rounds, backend API design, live debugging, and behavioral STAR.',
      details: [
        { label: 'Frontend UI Machine Coding (Autocomplete, Modal)', score: 85, status: 'strong', tip: 'Fast at writing accessible and optimized React components.' },
        { label: 'Backend Architecture & API Design Scenarios', score: 60, status: 'moderate', tip: 'Practice schema design and pagination for large lists.' },
        { label: 'Full Stack Troubleshooting & Performance (Lighthouse)', score: 62, status: 'moderate', tip: 'Practice identifying React re-render bottlenecks.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'fs-1',
      phaseNumber: 1,
      title: 'Modern Frontend & Component Architecture',
      subtitle: 'React 18+, TypeScript, Tailwind CSS, and Custom Hooks',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
      description: 'Build polished, accessible component systems with responsive layouts.',
      deliverable: 'Reusable Component Design System with Storybook & 20+ components',
    },
    {
      id: 'fs-2',
      phaseNumber: 2,
      title: 'Backend API Engineering & Database Schema Design',
      subtitle: 'Node.js, Express, PostgreSQL, Migrations, and JWT Auth',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['Node.js', 'Express', 'PostgreSQL', 'JWT Authentication'],
      description: 'Create production-grade API endpoints with role-based access control.',
      deliverable: 'Full Auth & CRUD REST API with automated integration tests',
    },
    {
      id: 'fs-3',
      phaseNumber: 3,
      title: 'Real-Time Sync & WebSocket Architecture',
      subtitle: 'Socket.io, Optimistic UI Updates, and Redis Event Caching',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['WebSockets', 'Redis', 'Optimistic UI', 'Real-Time State'],
      description: 'Build a live multi-user collaborative workspace with instant state synchronization.',
      deliverable: 'Real-Time Collaborative Workspace with Live Cursor & Document Sync',
    },
    {
      id: 'fs-4',
      phaseNumber: 4,
      title: 'Production Deployment, CI/CD & Performance Optimization',
      subtitle: 'Docker, Cloud Run/Vercel, Lighthouse 98+ Optimization, and Monitoring',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Docker', 'CI/CD Pipelines', 'Performance Tuning', 'Cloud Deployment'],
      description: 'Deploy full-stack applications with automated testing and CDN caching.',
      deliverable: 'Live Production Web App with automated GitHub Actions CI/CD pipeline',
    },
    {
      id: 'fs-5',
      phaseNumber: 5,
      title: 'Full Stack System Design & Mock Coding Sprints',
      subtitle: 'Live UI Coding, API Whiteboard Architecture, and STAR Behavioral',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Live Coding', 'System Design', 'Behavioral Interviews'],
      description: 'Practice rapid prototyping under timed interview pressure.',
      deliverable: 'Verified Full Stack Engineer Interview Readiness Certificate',
    },
  ],
  skills: [
    {
      id: 'react_ts',
      name: 'React, TypeScript & Tailwind',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 90,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Hooks', 'Context API', 'TypeScript Generics', 'Tailwind Utilities'],
    },
    {
      id: 'node_express',
      name: 'Node.js & Express API Design',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 78,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['RESTful Routing', 'Middleware', 'JWT Auth', 'Error Handling'],
    },
    {
      id: 'postgres_fs',
      name: 'PostgreSQL & Database Design',
      category: 'Technical',
      level: 'Intermediate',
      proficiencyPercent: 76,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Relational Schema', 'Indexing', 'Migrations', 'Foreign Keys'],
    },
    {
      id: 'websockets',
      name: 'WebSockets & Real-Time Sync',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 58,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Socket.io', 'Pub/Sub Events', 'Reconnection Logic', 'Heartbeats'],
    },
    {
      id: 'git_docker_fs',
      name: 'Git, Docker & CI/CD',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 74,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Docker Compose', 'GitHub Actions', 'Branching', 'Container Builds'],
    },
  ],
  projectStudio: {
    id: 'fs-proj-1',
    title: 'Real-Time Collaborative Workspace Application',
    subtitle: 'Build a multi-user collaborative workspace with WebSockets, React, and PostgreSQL',
    badge: 'Full Stack Portfolio Deliverable',
    impactScore: 12,
    icon: 'layers',
    schemaTitle: 'Full-Stack Architecture & Data Entities',
    schemaTables: [
      { name: 'workspaces_table', type: 'PostgreSQL Table', fields: ['id (UUID PK)', 'name', 'owner_id (FK)', 'created_at'] },
      { name: 'documents_table', type: 'PostgreSQL Table', fields: ['id (UUID PK)', 'workspace_id (FK)', 'content_json', 'version_num'] },
      { name: 'websocket_gateway', type: 'Node.js Socket Server', fields: ['join_room(workspace_id)', 'sync_doc_change', 'cursor_move', 'broadcast_state'] },
    ],
    codeLanguage: 'typescript',
    codeSnippetTitle: 'WebSocket Real-Time Document Synchronization Handler',
    codeSnippet: `io.on('connection', (socket) => {
  socket.on('join-workspace', (workspaceId) => {
    socket.join(workspaceId);
    socket.to(workspaceId).emit('user-joined', { userId: socket.id });
  });

  socket.on('doc-update', ({ workspaceId, delta, version }) => {
    socket.to(workspaceId).emit('doc-received', { delta, version });
    workspaceService.saveDelta(workspaceId, delta);
  });
});`,
    interactiveType: 'api_tester',
    verificationChecks: [
      'WebSocket bi-directional event broadcast verification passed',
      'PostgreSQL optimistic concurrency conflict resolution test passed',
      'React frontend optimistic UI update latency < 16ms',
      'Docker containerized full-stack deployment verified',
    ],
  },
  quizQuestions: {
    react_ts: [
      {
        id: 'fs-q1',
        skillId: 'react_ts',
        question: 'Why should objects or arrays created inside a component body not be directly placed in a useEffect dependency array without memoization?',
        options: [
          'They cause infinite re-render loops because a new reference is created on every render',
          'TypeScript throws a compiler syntax error',
          'React disables the virtual DOM',
          'It crashes the Vite dev server',
        ],
        correctIndex: 0,
        explanation: 'Because JavaScript compares objects by reference (===), a newly instantiated object on each render triggers the effect continuously.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Full Stack Developer**. With your **73% Job Readiness Score**, you have exceptional React and TypeScript capabilities (90%). 

Right now, your highest-leverage opportunity is finishing the **Real-Time Collaborative Workspace Application** to demonstrate end-to-end WebSockets and PostgreSQL architecture.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Collaborative WebApp Studio', action: 'start_project' },
      { label: '🎯 Drill Full Stack Coding Challenge', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Full Stack Developer
Experience:
- Full Stack Intern @ SaaSWorks: Engineered interactive React 18 frontend and Node.js REST API with 99.9% uptime, serving 25k monthly active users.
- Built a real-time collaborative document editor with WebSockets and Redis pub/sub, reducing latency by 45%.
- Designed and migrated PostgreSQL schemas with indexing, cutting query response times from 320ms to 45ms.
Education: B.S. in Computer Science & Web Engineering
Skills: React, TypeScript, Node.js, Express, PostgreSQL, Redis, Tailwind CSS, Docker, Git.`,
    keywords: ['Full Stack', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'WebSockets', 'Tailwind CSS', 'Docker'],
    defaultStrengths: [
      'Strong full-stack breadth spanning React UI, Node API, and PostgreSQL databases',
      'Clear engineering performance metrics (45% latency reduction, query times cut from 320ms to 45ms)',
    ],
    defaultImprovements: [
      'Include live deployed URL links to full-stack applications on Vercel/Cloud Run',
      'Detail automated testing coverage (Jest, Cypress/Playwright)',
    ],
  },
  notifications: [
    {
      id: 'fs-n1',
      title: 'Full Stack Recommendation Ready',
      message: 'Boost your score by +11% by completing the Real-Time Collaborative Workspace.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'layers',
    },
  ],
};
