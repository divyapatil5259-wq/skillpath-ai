import { RoleDataPackage } from '../../types';

export const backendDeveloperRole: RoleDataPackage = {
  roleName: 'Backend Developer',
  categoryTags: ['Backend', 'Microservices', 'Node.js', 'Go/Java', 'PostgreSQL', 'Redis', 'Kafka'],
  avgSalary: '$120,000 / yr',
  demand: 'Very High',
  baseReadinessScore: 75,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your database schema and REST API capabilities are strong. Building an Event-Driven Distributed Order Processing Service with RabbitMQ/Kafka and Redis caching will close the gap for Senior Backend roles.',
    actionLabel: 'Start Event Queue Pipeline',
    actionType: 'project',
    estimatedImpact: '+10% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 82,
      iconName: 'storage',
      category: 'Backend Core',
      description: 'Microservices, message queues, distributed caching, database indexing, and API security.',
      details: [
        { label: 'API Protocols (REST, gRPC, GraphQL)', score: 85, status: 'strong', tip: 'Exceptional payload design and HTTP status code semantics.' },
        { label: 'Event-Driven Message Queues (Kafka, RabbitMQ)', score: 58, status: 'needs_work', tip: 'Primary gap: Practice consumer groups, idempotency, and dead-letter queues.' },
        { label: 'Relational & Key-Value DBs (PostgreSQL, Redis)', score: 88, status: 'strong', tip: 'Strong query planning, indexing, and connection management.' },
        { label: 'Concurrency, Threading & Async I/O', score: 80, status: 'strong', tip: 'Proficient in event loop mechanics and non-blocking I/O.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 68,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Distributed backend services, high-throughput microservices, and database optimization suites.',
      details: [
        { label: 'E-Commerce Orders REST API with JWT', score: 94, status: 'strong', tip: 'Live with comprehensive Swagger docs and rate limiting.' },
        { label: 'Distributed Event-Driven Message Queue Service', score: 30, status: 'needs_work', tip: 'High priority project gap for backend positions.' },
        { label: 'Redis Distributed Lock & In-Memory Rate Limiter', score: 78, status: 'moderate', tip: 'Add sliding window rate limiting algorithm test cases.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 85,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'QPS throughput, database performance tuning, and architecture keywords.',
      details: [
        { label: 'ATS Architecture Keyword Density', score: 92, status: 'strong', tip: 'Well-optimized for Backend and Platform engineering roles.' },
        { label: 'Throughput & Reliability Metrics (99.99% Uptime, QPS)', score: 78, status: 'moderate', tip: 'Quantify queries optimized and database latency reductions.' },
        { label: 'Keywords (Kafka, Redis, PostgreSQL, Docker, Microservices)', score: 84, status: 'strong', tip: 'Strong presence of essential infrastructure keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 65,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'System design (distributed systems, caching, sharding), database internals, and concurrency drills.',
      details: [
        { label: 'System Design (Distributed Caching, Rate Limiters)', score: 62, status: 'moderate', tip: 'Practice explaining consistent hashing and CAP theorem trade-offs.' },
        { label: 'Database Internals & B-Tree Index Mechanics', score: 80, status: 'strong', tip: 'Great grasp of clustered indexes vs heap storage.' },
        { label: 'Concurrency & Deadlock Scenarios', score: 70, status: 'moderate', tip: 'Practice writing idempotent database transactions.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'be-1',
      phaseNumber: 1,
      title: 'Advanced Backend Languages & Memory Models',
      subtitle: 'Node.js / Go / Java, Async Event Loops, and Garbage Collection',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['Node.js', 'Go', 'Event Loops', 'Concurrency'],
      description: 'Understand low-level runtime execution and non-blocking I/O operations.',
      deliverable: 'High-Concurrency TCP/HTTP Server Benchmark Suite',
    },
    {
      id: 'be-2',
      phaseNumber: 2,
      title: 'Database Internals, Indexing & Partitioning',
      subtitle: 'PostgreSQL Query Planner, ACID Isolation Levels, and Sharding',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['PostgreSQL', 'Index Tuning', 'ACID Transactions', 'Sharding'],
      description: 'Optimize high-volume query throughput and eliminate database bottlenecks.',
      deliverable: 'Database Performance Diagnostic Report with 10x query speedup',
    },
    {
      id: 'be-3',
      phaseNumber: 3,
      title: 'Distributed Systems & Asynchronous Message Queues',
      subtitle: 'Kafka / RabbitMQ, Event Sourcing, Idempotent Consumers, and Redis',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['Kafka', 'RabbitMQ', 'Event-Driven Architecture', 'Redis Pub/Sub'],
      description: 'Build an event-driven distributed pipeline with fault-tolerant workers.',
      deliverable: 'Distributed Asynchronous Task & Order Queue Microservice',
    },
    {
      id: 'be-4',
      phaseNumber: 4,
      title: 'API Security, OAuth2, Rate Limiting & Monitoring',
      subtitle: 'JWT, Mutual TLS, Token Bucket Algorithm, Prometheus & Grafana',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['API Security', 'Rate Limiting', 'Prometheus', 'Grafana'],
      description: 'Harden microservices against DDoS attacks and configure health telemetry.',
      deliverable: 'Hardened API Gateway with Telemetry Monitoring Dashboards',
    },
    {
      id: 'be-5',
      phaseNumber: 5,
      title: 'Large-Scale Backend System Design Sprints',
      subtitle: 'Designing Uber Backend, Distributed Lock, and Mock Technical Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['System Design', 'Distributed Systems', 'Mock Interviews'],
      description: 'Prepare for tier-1 tech company backend architecture rounds.',
      deliverable: 'Verified Senior Backend System Design Clearance',
    },
  ],
  skills: [
    {
      id: 'be_api',
      name: 'API Protocols (REST, gRPC)',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 88,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['REST Principles', 'gRPC Protocol Buffers', 'Status Codes', 'Serialization'],
    },
    {
      id: 'be_db',
      name: 'PostgreSQL & Database Internals',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 88,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['EXPLAIN ANALYZE', 'B-Tree Indexing', 'Isolation Levels', 'Deadlocks'],
    },
    {
      id: 'be_queue',
      name: 'Kafka & Message Queues',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 58,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Producer/Consumer', 'Partition Keys', 'Dead Letter Queues', 'Idempotency'],
    },
    {
      id: 'be_redis',
      name: 'Redis Caching & Distributed Locks',
      category: 'Tools',
      level: 'Advanced',
      proficiencyPercent: 82,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Redlock Algorithm', 'TTL Strategies', 'Sorted Sets', 'Cache Stampede'],
    },
    {
      id: 'be_sys',
      name: 'Distributed Systems & Scaling',
      category: 'Analytical',
      level: 'Intermediate',
      proficiencyPercent: 68,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['CAP Theorem', 'Consistent Hashing', 'Leader Election', 'Eventual Consistency'],
    },
  ],
  projectStudio: {
    id: 'be-proj-1',
    title: 'Distributed Event-Driven Message Queue & Microservice',
    subtitle: 'Build fault-tolerant event processing with Kafka/RabbitMQ, Redis caching, and PostgreSQL',
    badge: 'Backend Infrastructure Deliverable',
    impactScore: 12,
    icon: 'storage',
    schemaTitle: 'Event-Driven Pipeline & Schema',
    schemaTables: [
      { name: 'order_events_topic', type: 'Kafka Topic', fields: ['event_id (UUID)', 'event_type: ORDER_PLACED', 'payload (JSON)', 'timestamp'] },
      { name: 'worker_service', type: 'Consumer Group', fields: ['processOrder()', 'deduplicateKey(Redis)', 'updateDatabase(PostgreSQL)', 'publishToPaymentTopic()'] },
      { name: 'dead_letter_queue', type: 'Dead Letter Topic', fields: ['failed_message', 'retry_count (Max 3)', 'error_trace'] },
    ],
    codeLanguage: 'typescript',
    codeSnippetTitle: 'Idempotent Event Consumer with Redis Deduplication',
    codeSnippet: `async function handleOrderEvent(event) {
  const isProcessed = await redis.set(\`processed:\${event.id}\`, '1', 'NX', 'EX', 86400);
  if (!isProcessed) {
    console.log(\`Skipping duplicate event \${event.id}\`);
    return;
  }
  
  await db.transaction(async (trx) => {
    await trx('orders').insert(event.payload);
    await trx('inventory').decrement('stock', event.payload.quantity);
  });
}`,
    interactiveType: 'api_tester',
    verificationChecks: [
      'Idempotent deduplication test passed under duplicate delivery scenario',
      'Dead-letter queue retry policy verified after simulated downstream failure',
      'Database transactional ACID isolation verified under concurrent workloads',
      'Docker containerized consumer workers passing health checks',
    ],
  },
  quizQuestions: {
    be_db: [
      {
        id: 'be-q1',
        skillId: 'be_db',
        question: 'Which SQL isolation level prevents phantom reads and guarantees the strictest consistency?',
        options: ['Read Committed', 'Repeatable Read', 'Serializable', 'Read Uncommitted'],
        correctIndex: 2,
        explanation: 'Serializable is the highest isolation level, preventing dirty reads, non-repeatable reads, and phantom reads.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Backend Developer**. With your **75% Job Readiness Score**, you have standout PostgreSQL and REST API design capabilities (88%). 

Right now, your highest-leverage opportunity is finishing the **Distributed Event-Driven Message Queue & Microservice** project to master Kafka and asynchronous processing.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Distributed Queue Studio', action: 'start_project' },
      { label: '🎯 Drill Distributed System Design', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Backend Developer
Experience:
- Backend Engineering Intern @ CloudScale: Engineered Node.js microservices handling 10,000+ requests/sec with <40ms p99 latency.
- Implemented asynchronous Kafka event consumer pipeline with Redis deduplication, eliminating duplicate transactions.
- Optimized PostgreSQL database indexes, reducing heavy aggregation query times by 65%.
Education: B.S. in Computer Science
Skills: Node.js, TypeScript, Go, PostgreSQL, Redis, Kafka, Docker, REST, gRPC, Git.`,
    keywords: ['Backend', 'PostgreSQL', 'Redis', 'Kafka', 'Microservices', 'REST', 'gRPC', 'Docker', 'Distributed Systems'],
    defaultStrengths: [
      'Clear engineering performance metrics (10,000+ req/sec, <40ms p99 latency, 65% query time reduction)',
      'Modern distributed architecture stack (Kafka, Redis, PostgreSQL, Docker)',
    ],
    defaultImprovements: [
      'Include repository links to benchmarked microservices',
      'Detail experience with gRPC Protocol Buffers or Kubernetes deployment',
    ],
  },
  notifications: [
    {
      id: 'be-n1',
      title: 'Backend Recommendation Ready',
      message: 'Boost your score by +10% by building the Distributed Event Queue project.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'storage',
    },
  ],
};
