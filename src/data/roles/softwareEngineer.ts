import { RoleDataPackage } from '../../types';

export const softwareEngineerRole: RoleDataPackage = {
  roleName: 'Software Engineer',
  categoryTags: ['Engineering', 'Backend', 'DSA', 'REST APIs', 'Docker'],
  avgSalary: '$118,000 / yr',
  demand: 'Very High Demand',
  baseReadinessScore: 74,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your OOP and Data Structures foundation is solid, but building and deploying a Dockerized REST API with database indexing will close the gap for Software Engineer roles.',
    actionLabel: 'Start Distributed API Project',
    actionType: 'project',
    estimatedImpact: '+10% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 80,
      iconName: 'code',
      category: 'Core Engineering',
      description: 'Proficiency across Data Structures, Algorithms, OOP, Database design, and API architectures.',
      details: [
        { label: 'Data Structures & Algorithms (Trees, Graphs, DP)', score: 76, status: 'moderate', tip: 'Practice LeetCode medium graph traversal & dynamic programming.' },
        { label: 'OOP & System Design (Clean Code, SOLID)', score: 88, status: 'strong', tip: 'Excellent grasp of inheritance, polymorphism, and design patterns.' },
        { label: 'REST APIs & Microservices Architecture', score: 62, status: 'needs_work', tip: 'Primary gap: Build JWT auth, rate limiting, and OpenAPI specs.' },
        { label: 'Relational & NoSQL DBMS (PostgreSQL, Redis)', score: 82, status: 'strong', tip: 'Solid query indexing, connection pooling, and ACID knowledge.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 68,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Production web applications, REST services, automated test suites, and open-source contributions.',
      details: [
        { label: 'Full Stack Web Application (React + Node.js)', score: 90, status: 'strong', tip: 'Live on production with CI/CD and responsive UI.' },
        { label: 'High-Performance E-Commerce REST API & Docker', score: 35, status: 'needs_work', tip: 'Currently missing from portfolio. High priority to complete.' },
        { label: 'Real-time WebSocket Chat Service', score: 78, status: 'moderate', tip: 'Add Redis Pub/Sub for multi-instance horizontal scaling.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 84,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'ATS compliance, engineering metrics (latency, QPS, uptime), and tech stack keywords.',
      details: [
        { label: 'ATS Format & Standard Tech Layout', score: 96, status: 'strong', tip: 'Easily parsed by Greenhouse, Lever, and Workday.' },
        { label: 'Impact Metrics (Latency Reduction, Scale QPS)', score: 75, status: 'moderate', tip: 'Quantify memory reductions or response time gains (e.g. 150ms -> 40ms).' },
        { label: 'Target Keyword Density (Docker, CI/CD, Microservices)', score: 80, status: 'moderate', tip: 'Add Postman, Docker, Unit Testing, and Redis keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 64,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Live LeetCode coding, system design fundamentals, time/space complexity analysis, and behavioral STAR.',
      details: [
        { label: 'Live DSA Whiteboard Coding (LeetCode Medium)', score: 72, status: 'moderate', tip: 'Focus on explaining Big-O tradeoffs before writing code.' },
        { label: 'System Design Fundamentals (Caching, Sharding, Load Balancers)', score: 55, status: 'needs_work', tip: 'Study database partitioning, CAP theorem, and CDN caching.' },
        { label: 'STAR Engineering Behavioral Scenarios', score: 70, status: 'moderate', tip: 'Prepare stories for code review debates and tight deadline trade-offs.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'swe-1',
      phaseNumber: 1,
      title: 'Programming Foundations & OOP Mastery',
      subtitle: 'Java / Python / C++, Memory Management, SOLID Principles',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['OOP (Java/Python)', 'Memory Models', 'SOLID Design', 'Type Safety'],
      description: 'Deep dive into object-oriented design, modularity, abstraction, and memory lifecycles.',
      deliverable: 'Extensible Design Pattern Library with 10 unit-tested patterns',
    },
    {
      id: 'swe-2',
      phaseNumber: 2,
      title: 'Data Structures & Algorithms (DSA) Sprint',
      subtitle: 'Arrays, HashMaps, Trees, Graphs, Sorting, and Big-O Complexity',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['Data Structures', 'Algorithms', 'Big-O Analysis', 'Graph Traversals'],
      description: 'Solve 75+ curated algorithmic interview challenges across dynamic programming, BFS/DFS, and heaps.',
      deliverable: 'Curated LeetCode 75 Clean Solutions Repository with complexity breakdowns',
    },
    {
      id: 'swe-3',
      phaseNumber: 3,
      title: 'Backend Engineering & Distributed REST APIs',
      subtitle: 'Express / FastAPI, JWT Authentication, Postman, Docker Containerization',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['REST APIs', 'Docker', 'Postman', 'JWT Auth', 'Rate Limiting'],
      description: 'Architect a production-grade, secure RESTful microservice with containerized deployment.',
      deliverable: 'High-Throughput E-Commerce Orders REST API with Swagger & Dockerfile',
    },
    {
      id: 'swe-4',
      phaseNumber: 4,
      title: 'Database Architecture & Caching Layers',
      subtitle: 'PostgreSQL Indexing, Redis In-Memory Caching, Transactions & Concurrency',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['PostgreSQL', 'Redis', 'Database Transactions', 'Connection Pooling'],
      description: 'Optimize read/write throughput and prevent race conditions in concurrent user workloads.',
      deliverable: 'Benchmark report demonstrating 10x query speedup with Redis caching',
    },
    {
      id: 'swe-5',
      phaseNumber: 5,
      title: 'Full Stack Integration & System Design Sprints',
      subtitle: 'Microservices, Load Balancing, CI/CD Pipelines, and Mock Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['System Design', 'CI/CD GitHub Actions', 'Load Balancers', 'Mock Interviews'],
      description: 'Practice scalable architecture design rounds (URL Shortener, Rate Limiter) and live coding.',
      deliverable: 'Verified Full-Stack Production Deployment & Mock Interview Clearance',
    },
  ],
  skills: [
    {
      id: 'dsa',
      name: 'Data Structures & Algorithms',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 78,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Binary Trees', 'Graphs (BFS/DFS)', 'Dynamic Programming', 'Hash Maps'],
    },
    {
      id: 'oop',
      name: 'OOP (Java, Python, C++)',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 88,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Polymorphism', 'Inheritance', 'SOLID Principles', 'Encapsulation'],
    },
    {
      id: 'apis',
      name: 'REST APIs & Microservices',
      category: 'Technical',
      level: 'Intermediate',
      proficiencyPercent: 65,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['HTTP Verbs', 'Status Codes', 'JWT & OAuth2', 'OpenAPI/Swagger'],
    },
    {
      id: 'dbms',
      name: 'DBMS & Query Optimization',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 82,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['B-Tree Indexing', 'ACID Transactions', 'Foreign Keys', 'Query Plans'],
    },
    {
      id: 'docker',
      name: 'Docker & Containerization',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 60,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Dockerfiles', 'Multi-stage Builds', 'Docker Compose', 'Port Mapping'],
    },
    {
      id: 'git',
      name: 'Git & GitHub Workflows',
      category: 'Tools',
      level: 'Advanced',
      proficiencyPercent: 90,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Rebase vs Merge', 'Git Hooks', 'Branching Strategies', 'PR Reviews'],
    },
    {
      id: 'testing',
      name: 'Automated Testing & Postman',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 72,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Unit Tests (Jest/pytest)', 'Integration Tests', 'Postman Collections', 'Mocking'],
    },
    {
      id: 'system_design',
      name: 'System Design & Scalability',
      category: 'Analytical',
      level: 'Intermediate',
      proficiencyPercent: 58,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['CAP Theorem', 'Load Balancers', 'Redis Caching', 'Horizontal Scaling'],
    },
  ],
  projectStudio: {
    id: 'swe-proj-1',
    title: 'High-Performance E-Commerce REST API & Microservice',
    subtitle: 'Build scalable REST endpoints, JWT authentication, rate limiters, and Docker container',
    badge: 'Production Backend Deliverable',
    impactScore: 12,
    icon: 'terminal',
    schemaTitle: 'Microservice API & Database Entities',
    schemaTables: [
      { name: 'orders_service', type: 'REST Service', fields: ['GET /api/v1/orders', 'POST /api/v1/orders', 'DELETE /api/v1/orders/:id', 'RateLimiter (100 req/min)'] },
      { name: 'users_table', type: 'PostgreSQL Table', fields: ['id (UUID PK)', 'email (UNIQUE)', 'password_hash (bcrypt)', 'role (admin/customer)'] },
      { name: 'inventory_cache', type: 'Redis Store', fields: ['product_id (Key)', 'available_stock (Int)', 'ttl: 300s'] },
    ],
    codeLanguage: 'typescript',
    codeSnippetTitle: 'Express REST Router with Rate Limiting & Auth',
    codeSnippet: `import express from 'express';
import { authenticateJWT } from '../middleware/auth';
import { rateLimiter } from '../middleware/rateLimiter';

export const orderRouter = express.Router();

orderRouter.post('/api/v1/orders', authenticateJWT, rateLimiter, async (req, res) => {
  const { items, shippingAddress } = req.body;
  const newOrder = await orderService.createOrder(req.user.id, items);
  res.status(201).json({ status: 'success', data: newOrder });
});`,
    interactiveType: 'api_tester',
    verificationChecks: [
      'JWT Authentication & Bearer token header verification',
      'Input validation & error handling schema (400, 401, 404, 500)',
      'Database connection pool & indexing latency < 35ms',
      'Dockerfile multi-stage build & health check endpoint passing',
    ],
  },
  quizQuestions: {
    dsa: [
      {
        id: 'swe-q1',
        skillId: 'dsa',
        question: 'What is the average time complexity of searching for an element in a Balanced Binary Search Tree (AVL / Red-Black)?',
        options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
        correctIndex: 1,
        explanation: 'In a balanced BST, tree height is log(N), making lookup, insertion, and deletion O(log N).',
      },
      {
        id: 'swe-q2',
        skillId: 'dsa',
        question: 'Which data structure is most optimal for implementing a LFU (Least Frequently Used) cache?',
        options: ['Single Linked List', 'HashMap with Doubly Linked Lists', 'Array with Linear Scan', 'Binary Heap with O(N) lookup'],
        correctIndex: 1,
        explanation: 'A combination of HashMaps and Doubly Linked Lists allows O(1) frequency lookups, insertions, and evictions.',
      },
    ],
    apis: [
      {
        id: 'swe-q3',
        skillId: 'apis',
        question: 'Which HTTP method should be idempotent and used to replace an entire resource at a URI?',
        options: ['POST', 'PATCH', 'PUT', 'CONNECT'],
        correctIndex: 2,
        explanation: 'PUT is idempotent and replaces the entire target resource with the request payload.',
      },
    ],
    docker: [
      {
        id: 'swe-q4',
        skillId: 'docker',
        question: 'Why are multi-stage builds used in Dockerfiles for compiled applications?',
        options: [
          'To run multiple containers on the same port',
          'To keep the final production image size minimal by omitting build toolchains',
          'To bypass Linux root permissions',
          'To auto-generate Docker Compose files',
        ],
        correctIndex: 1,
        explanation: 'Multi-stage builds allow compiling in an intermediate container and copying only the binary to a lightweight runtime image.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Software Engineer**. With your **74% Job Readiness Score**, you have standout strengths in OOP and Git workflows (88%). 

Right now, your highest-leverage milestone is finishing the **High-Performance E-Commerce REST API & Docker project** to demonstrate production backend engineering and API design.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Distributed REST API Studio', action: 'start_project' },
      { label: '🎯 Drill LeetCode / System Design Drill', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Software Engineer
Experience:
- Software Engineering Intern @ CloudSoft: Built 12 REST API endpoints in TypeScript/Node.js, reducing server response latency by 28%.
- Integrated Redis caching layer for session auth, handling 5,000+ concurrent requests.
- Wrote automated unit and integration test suites in Jest achieving 88% code coverage.
Education: B.S. in Computer Science & Engineering
Skills: Java, Python, TypeScript, REST APIs, Docker, PostgreSQL, Redis, Git, CI/CD.`,
    keywords: ['REST APIs', 'Docker', 'PostgreSQL', 'Redis', 'OOP', 'Data Structures', 'CI/CD', 'Postman', 'Git'],
    defaultStrengths: [
      'Clear engineering impact metrics (28% latency reduction, 5,000+ concurrent requests)',
      'Strong modern backend tech stack (TypeScript, Node.js, Redis, Docker)',
    ],
    defaultImprovements: [
      'Add link to a live deployed microservice or GitHub open-source project',
      'Detail system architecture (load balancing, asynchronous worker queues)',
    ],
  },
  notifications: [
    {
      id: 'swe-n1',
      title: 'SWE Recommendation Ready',
      message: 'Boost your score by +10% by building and containerizing the E-Commerce REST API.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'code',
    },
    {
      id: 'swe-n2',
      title: 'DSA Verification Passed',
      message: 'Your Data Structures & Algorithms diagnostic verified at 78%.',
      timestamp: '1 hour ago',
      read: false,
      type: 'achievement',
      icon: 'verified',
    },
  ],
};
