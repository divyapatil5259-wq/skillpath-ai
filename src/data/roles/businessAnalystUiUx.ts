import { RoleDataPackage } from '../../types';

export const businessAnalystRole: RoleDataPackage = {
  roleName: 'Business Analyst',
  categoryTags: ['Business Analysis', 'Process Mining', 'Agile', 'SQL', 'Tableau', 'ROI Financials'],
  avgSalary: '$92,000 / yr',
  demand: 'High Demand',
  baseReadinessScore: 74,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your requirements gathering and financial ROI modeling are strong. Delivering an Enterprise Digital Transformation & Process Mining Strategy deck will complete your Business Analyst portfolio.',
    actionLabel: 'Start Process Mining Project',
    actionType: 'project',
    estimatedImpact: '+9% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 80,
      iconName: 'analytics',
      category: 'BA Core',
      description: 'Requirements elicitation, BPMN process modeling, SQL querying, and financial ROI models.',
      details: [
        { label: 'Requirements Elicitation & BRD/FRD Authoring', score: 92, status: 'strong', tip: 'Exceptional user story and acceptance criteria structuring.' },
        { label: 'BPMN 2.0 Process Mapping & As-Is/To-Be Modeling', score: 84, status: 'strong', tip: 'Clear workflow swimlanes and bottleneck identification.' },
        { label: 'SQL Data Validation & Ad-Hoc Analytics', score: 76, status: 'moderate', tip: 'Solid query skills for verifying database records against business rules.' },
        { label: 'Financial Modeling & Business Case ROI Calculations', score: 68, status: 'needs_work', tip: 'Primary gap: Build dynamic NPV, IRR, and payback period models.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 70,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Business requirements documents, process optimization case studies, and executive roadmaps.',
      details: [
        { label: 'B2B ERP System Migration Business Requirements (BRD)', score: 94, status: 'strong', tip: 'Complete with 45 user stories and MoSCoW prioritization.' },
        { label: 'Enterprise Digital Transformation & Process Mining', score: 32, status: 'needs_work', tip: 'High priority project to validate operational optimization.' },
        { label: 'Customer Onboarding Funnel Optimization Study', score: 80, status: 'moderate', tip: 'Add quantitative root-cause breakdown of drop-off points.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 84,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Stakeholder management metrics, cost savings, and Agile/Scrum keywords.',
      details: [
        { label: 'ATS Formatting & Clean Executive Layout', score: 96, status: 'strong', tip: 'Parses cleanly for Business Analyst and Product roles.' },
        { label: 'Business Impact Metrics ($120k cost savings, 30% faster cycle)', score: 80, status: 'strong', tip: 'Quantified operational throughput improvements.' },
        { label: 'Keywords (BRD, BPMN, Agile, User Stories, SQL, JIRA)', score: 76, status: 'moderate', tip: 'Add Tableau, Gap Analysis, and MoSCoW keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 66,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Stakeholder conflict resolution, requirements prioritization, gap analysis, and behavioral STAR.',
      details: [
        { label: 'Requirements Conflict & Stakeholder Negotiation', score: 78, status: 'strong', tip: 'Articulate trade-offs using objective ROI frameworks.' },
        { label: 'Gap Analysis & Process Bottleneck Case Studies', score: 62, status: 'moderate', tip: 'Structure process breakdowns with clear As-Is vs To-Be transitions.' },
        { label: 'Agile/Scrum Sprint Ceremonies & Backlog Grooming', score: 72, status: 'moderate', tip: 'Practice writing INVEST-compliant user stories.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'ba-1',
      phaseNumber: 1,
      title: 'Requirements Engineering & Agile User Stories',
      subtitle: 'BRD/FRD Drafting, INVEST Criteria, MoSCoW Prioritization, and JIRA',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['BRD/FRD', 'Agile User Stories', 'JIRA', 'MoSCoW'],
      description: 'Master business requirements elicitation and agile backlog grooming.',
      deliverable: 'Comprehensive Business Requirements Document (BRD) with 30+ User Stories',
    },
    {
      id: 'ba-2',
      phaseNumber: 2,
      title: 'Process Modeling with BPMN 2.0 & Workflow Optimization',
      subtitle: 'As-Is vs To-Be Swimlanes, Bottleneck Analysis, and Value Stream Mapping',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['BPMN 2.0', 'Process Mapping', 'Value Stream Mapping', 'Lucidchart'],
      description: 'Visualize and streamline complex enterprise operations.',
      deliverable: 'End-to-End Enterprise Order Fulfillment Process Map & Optimization Deck',
    },
    {
      id: 'ba-3',
      phaseNumber: 3,
      title: 'Data-Driven Decision Making & SQL Analytics',
      subtitle: 'SQL Data Extraction, Tableau KPI Dashboards, and Gap Analysis',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['SQL', 'Tableau', 'Gap Analysis', 'Data Validation'],
      description: 'Extract raw database records to validate business performance against KPIs.',
      deliverable: 'Enterprise Digital Transformation & Process Mining Executive Strategy',
    },
    {
      id: 'ba-4',
      phaseNumber: 4,
      title: 'Financial Modeling, Cost-Benefit & ROI Analysis',
      subtitle: 'NPV, IRR, Payback Calculations, and Business Case Synthesis',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Financial ROI', 'NPV/IRR', 'Business Case', 'Excel Modeling'],
      description: 'Quantify capital expenditure requirements and financial return horizons.',
      deliverable: 'Executive Business Case Proposal with 3-Year ROI Financial Forecast',
    },
    {
      id: 'ba-5',
      phaseNumber: 5,
      title: 'Stakeholder Alignment & Mock Case Interviews',
      subtitle: 'Executive Presentation, Conflict Negotiation, and Mock Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Stakeholder Management', 'Executive Presentation', 'Mock Interviews'],
      description: 'Hone executive presence and lead structured business case discussions.',
      deliverable: 'Verified Business Analyst Professional Certification',
    },
  ],
  skills: [
    {
      id: 'brd_ba',
      name: 'Requirements & User Story Drafting',
      category: 'Technical',
      level: 'Expert',
      proficiencyPercent: 92,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['BRD/FRD', 'INVEST Criteria', 'Acceptance Criteria', 'MoSCoW'],
    },
    {
      id: 'bpmn_ba',
      name: 'BPMN 2.0 Process Mapping',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 84,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Swimlanes', 'Decision Gateways', 'As-Is vs To-Be', 'Bottlenecks'],
    },
    {
      id: 'sql_ba',
      name: 'SQL & Data Validation',
      category: 'Technical',
      level: 'Intermediate',
      proficiencyPercent: 76,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Relational Queries', 'Aggregations', 'Data Quality Checks', 'Joins'],
    },
    {
      id: 'roi_ba',
      name: 'Financial Modeling & ROI Analysis',
      category: 'Analytical',
      level: 'Intermediate',
      proficiencyPercent: 68,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['NPV / IRR', 'Payback Period', 'Cost-Benefit Analysis', 'Break-even'],
    },
  ],
  projectStudio: {
    id: 'ba-proj-1',
    title: 'Enterprise Digital Transformation & Process Mining Strategy',
    subtitle: 'Map enterprise workflows, quantify process bottlenecks, and model 3-year ROI',
    badge: 'Business Strategy Deliverable',
    impactScore: 10,
    icon: 'analytics',
    schemaTitle: 'Process Mining Flow & Business Rules',
    schemaTables: [
      { name: 'process_event_log', type: 'Enterprise ERP Stream', fields: ['case_id', 'activity_name', 'start_timestamp', 'end_timestamp', 'resource_role'] },
      { name: 'bottleneck_metrics', type: 'Diagnostic Data', fields: ['Average Lead Time: 14.2 Days', 'Rework Loop Rate: 22%', 'Cost per Transaction: $38.50'] },
      { name: 'to_be_optimization', type: 'Business Impact', fields: ['Automated Approvals (Lead time -> 2.1 Days)', 'Target Annual Savings: $280,000', 'Payback Horizon: 7.2 Months'] },
    ],
    codeLanguage: 'sql',
    codeSnippetTitle: 'Process Cycle Time & Bottleneck Detection Query',
    codeSnippet: `SELECT 
    activity_name,
    COUNT(case_id) AS transaction_volume,
    AVG(EXTRACT(EPOCH FROM (end_timestamp - start_timestamp)) / 3600) AS avg_duration_hours,
    SUM(CASE WHEN rework_flag = TRUE THEN 1 ELSE 0 END) * 100.0 / COUNT(*) AS rework_percentage
FROM erp_procurement_events
GROUP BY activity_name
ORDER BY rework_percentage DESC;`,
    interactiveType: 'dashboard',
    verificationChecks: [
      'As-Is versus To-Be workflow gap identification verified',
      'Quantitative cost savings calculation verified against historical baseline',
      'Stakeholder risk matrix and change management plan complete',
      'Executive one-pager summary with clear decision criteria',
    ],
  },
  quizQuestions: {
    brd_ba: [
      {
        id: 'ba-q1',
        skillId: 'brd_ba',
        question: 'According to the INVEST criteria for agile user stories, what does the "V" stand for?',
        options: ['Valuable (Delivers measurable value to end users or business)', 'Verified', 'Visualized', 'Variable'],
        correctIndex: 0,
        explanation: 'INVEST stands for Independent, Negotiable, Valuable, Estimable, Small, and Testable.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Business Analyst**. With your **74% Job Readiness Score**, you have outstanding requirements drafting and process modeling skills (92%). 

Right now, your highest-leverage opportunity is completing the **Enterprise Digital Transformation & Process Mining Strategy** project to demonstrate financial ROI modeling and data analytics.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Process Mining Studio', action: 'start_project' },
      { label: '🎯 Drill Stakeholder Negotiation Case', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Business Analyst
Experience:
- Business Systems Intern @ FinCorp: Authored 35+ detailed user stories and BRDs for an enterprise payments overhaul, reducing requirements rework by 40%.
- Conducted BPMN 2.0 process mapping on procurement workflows, identifying bottlenecks and unlocking $140k in annual operating savings.
- Performed SQL data validation across 200k customer records to ensure compliance with financial reporting standards.
Education: B.S. in Management Information Systems & Business Analytics
Skills: BRD/FRD, BPMN 2.0, Agile/Scrum, JIRA, SQL, Tableau, Financial Modeling, Excel.`,
    keywords: ['Business Analyst', 'BRD', 'BPMN', 'Agile', 'User Stories', 'JIRA', 'SQL', 'Process Mapping', 'Tableau'],
    defaultStrengths: [
      'Strong operational business outcomes ($140k annual savings, 40% less requirements rework)',
      'Clean requirements and workflow modeling foundations (BPMN, BRD, Agile, SQL)',
    ],
    defaultImprovements: [
      'Include links to portfolio business case summaries or slide deck walkthroughs',
      'Detail certifications like CBAP, ECBA, or PMI-PBA',
    ],
  },
  notifications: [
    {
      id: 'ba-n1',
      title: 'Business Analysis Recommendation Ready',
      message: 'Boost your score by +9% by finishing the Enterprise Process Mining Strategy.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'analytics',
    },
  ],
};

export const uiUxDesignerRole: RoleDataPackage = {
  roleName: 'UI/UX Designer',
  categoryTags: ['Figma', 'Design Systems', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  avgSalary: '$98,000 / yr',
  demand: 'High Demand',
  baseReadinessScore: 75,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your visual hierarchy and typography pairings are excellent. Designing an end-to-end Mobile & Web Design System with interactive micro-animations in Figma will complete your UI/UX Designer portfolio.',
    actionLabel: 'Start Design System Studio',
    actionType: 'project',
    estimatedImpact: '+10% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 84,
      iconName: 'palette',
      category: 'Design Core',
      description: 'Figma auto-layout, design tokens, user research, wireframing, and interactive prototyping.',
      details: [
        { label: 'Figma & Auto-Layout Component Architecture', score: 94, status: 'strong', tip: 'Expert in dynamic variants, component properties, and token variables.' },
        { label: 'User Research & Usability Testing Protocols', score: 78, status: 'moderate', tip: 'Solid affinity mapping; practice heuristic evaluation frameworks.' },
        { label: 'Visual Hierarchy & Mathematical Spacing Systems', score: 88, status: 'strong', tip: 'Exceptional typographic contrast and grid rhythm.' },
        { label: 'Interactive Micro-Animations & Prototyping', score: 65, status: 'needs_work', tip: 'Primary gap: Create high-fidelity smart-animate transitions.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 70,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'End-to-end design case studies, design systems, and responsive web/mobile prototypes.',
      details: [
        { label: 'FinTech Mobile Banking App Design Case Study', score: 95, status: 'strong', tip: 'Complete with user personas, wireframes, and high-fidelity mockups.' },
        { label: 'Enterprise Multi-Platform Design System & Figma Kit', score: 30, status: 'needs_work', tip: 'High priority project to validate systematic design skills.' },
        { label: 'E-Commerce Checkout Usability Redesign', score: 82, status: 'strong', tip: 'Validated with A/B prototype testing results.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 84,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Portfolio link visibility, user conversion uplifts, and design toolchain keywords.',
      details: [
        { label: 'ATS Compatible Visual Portfolio Formatting', score: 96, status: 'strong', tip: 'Clean layout with clear portfolio URL links.' },
        { label: 'Conversion & Usability Metrics (Task completion +28%)', score: 78, status: 'moderate', tip: 'Quantify usability improvements and SUS satisfaction scores.' },
        { label: 'Keywords (Figma, Design Systems, Wireframing, UX Research)', score: 80, status: 'strong', tip: 'Strong presence of modern product design keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 68,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Portfolio walkthrough presentations, app critique sessions, whiteboard design challenges, and STAR.',
      details: [
        { label: 'Portfolio Case Study Storytelling Presentation', score: 84, status: 'strong', tip: 'Clear problem framing, design rationale, and measured outcomes.' },
        { label: 'Live Whiteboard UX Design Challenge', score: 62, status: 'moderate', tip: 'Focus on user journey mapping before jumping into UI sketches.' },
        { label: 'App Critique & Design Heuristic Evaluations', score: 74, status: 'moderate', tip: 'Systematically critique visual hierarchy, affordances, and cognitive load.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'ui-1',
      phaseNumber: 1,
      title: 'Design Foundations, Typography & 8pt Spatial Grids',
      subtitle: 'Color Theory, Type Pairing, Optical Alignment, and Spatial Systems',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['Typography', 'Color Systems', '8pt Grid', 'Visual Hierarchy'],
      description: 'Master mathematical layout rules and high-contrast typography.',
      deliverable: 'Mathematical UI Design Scale & Color Accessibility Guide',
    },
    {
      id: 'ui-2',
      phaseNumber: 2,
      title: 'User Research, Personas & Information Architecture',
      subtitle: 'User Interviews, Journey Maps, Affinity Diagrams, and Wireframes',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['User Research', 'Journey Mapping', 'Wireframing', 'Miro'],
      description: 'Translate ambiguous user problems into structured navigation flows.',
      deliverable: 'Complete User Research & Low-Fidelity Wireframe Suite',
    },
    {
      id: 'ui-3',
      phaseNumber: 3,
      title: 'Enterprise Figma Design Systems & Tokenization',
      subtitle: 'Component Variants, Variables, Auto-Layout, and WCAG Contrast Rules',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['Figma Auto-Layout', 'Design Tokens', 'Component Variants', 'WCAG AA'],
      description: 'Build a production-ready design system with tokenized themes.',
      deliverable: 'Enterprise Figma Design System with 40+ Interactive Components',
    },
    {
      id: 'ui-4',
      phaseNumber: 4,
      title: 'High-Fidelity Prototyping & Usability Testing',
      subtitle: 'Smart Animate, Micro-Interactions, Maze Usability Audits, and SUS Scoring',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Smart Animate', 'Usability Testing', 'SUS Scoring', 'Maze'],
      description: 'Conduct moderated usability tests on interactive prototypes.',
      deliverable: 'Interactive Prototype with Usability Test Report & SUS Score > 85',
    },
    {
      id: 'ui-5',
      phaseNumber: 5,
      title: 'Portfolio Presentation & Whiteboard Sprints',
      subtitle: 'Case Study Deck, App Critique Mastery, and Design Mock Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Portfolio Presentation', 'Whiteboard Challenge', 'Mock Interviews'],
      description: 'Prepare for live design critique rounds at leading product companies.',
      deliverable: 'Verified UI/UX Product Design Certification & Portfolio Ready',
    },
  ],
  skills: [
    {
      id: 'figma_ui',
      name: 'Figma & Design Systems',
      category: 'Technical',
      level: 'Expert',
      proficiencyPercent: 94,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Auto-Layout', 'Design Variables', 'Variants/Properties', 'Design Tokens'],
    },
    {
      id: 'ux_research',
      name: 'User Research & Journey Mapping',
      category: 'Analytical',
      level: 'Advanced',
      proficiencyPercent: 82,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Interviews', 'Affinity Diagrams', 'Information Architecture', 'User Personas'],
    },
    {
      id: 'prototyping_ui',
      name: 'Interactive Prototyping & Motion',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 68,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Smart Animate', 'Micro-interactions', 'State Transitions', 'Physics Curves'],
    },
    {
      id: 'a11y_ui',
      name: 'Accessibility (WCAG) & Heuristics',
      category: 'Analytical',
      level: 'Advanced',
      proficiencyPercent: 86,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Contrast Ratios', 'Nielsen Norman Heuristics', 'Touch Targets (44px)', 'Cognitive Load'],
    },
  ],
  projectStudio: {
    id: 'ui-proj-1',
    title: 'Enterprise Multi-Platform Design System & Interactive Figma Kit',
    subtitle: 'Create tokenized typography, responsive components, accessible color contrast, and micro-interactions',
    badge: 'Product Design Deliverable',
    impactScore: 10,
    icon: 'palette',
    schemaTitle: 'Design Token Structure & Component Library',
    schemaTables: [
      { name: 'color_variables', type: 'Figma Tokens', fields: ['surface/primary (#FFFFFF)', 'text/primary (#191C1E)', 'accent/brand (#0058BE)', 'status/success (#22C55E)'] },
      { name: 'component_variants', type: 'Figma Components', fields: ['Button (size: sm/md/lg, state: default/hover/active/disabled)', 'Modal Dialog (with backdrop blur)', 'Input Field (with inline validation error)'] },
      { name: 'accessibility_checks', type: 'Design QA', fields: ['WCAG AA Contrast >= 4.5:1', 'Minimum touch target >= 44x44px', 'Clear focus ring states'] },
    ],
    codeLanguage: 'json',
    codeSnippetTitle: 'W3C Design Token Specification (JSON)',
    codeSnippet: `{
  "color": {
    "brand": {
      "primary": { "value": "#0058be", "type": "color" },
      "primary-hover": { "value": "#00489e", "type": "color" }
    }
  },
  "spacing": {
    "base": { "value": "4px", "type": "dimension" },
    "md": { "value": "16px", "type": "dimension" }
  }
}`,
    interactiveType: 'ui_prototype',
    verificationChecks: [
      'All color combinations pass WCAG 2.1 AA 4.5:1 contrast requirements',
      'Auto-layout responsive resizing behaves cleanly across mobile and desktop breakpoints',
      'Design token JSON export verified for engineering handoff',
      'Complete interactive Figma prototype link with micro-interaction states',
    ],
  },
  quizQuestions: {
    figma_ui: [
      {
        id: 'ui-q1',
        skillId: 'figma_ui',
        question: 'Which of the following describes the correct formula for nested container border radii?',
        options: [
          'Inner Radius = Outer Radius - Distance Between the Two (Padding)',
          'Inner Radius = Outer Radius * 2',
          'Inner Radius = Outer Radius + Padding',
          'Inner Radius is always 0px',
        ],
        correctIndex: 0,
        explanation: 'To maintain concentric, aesthetically optical curves, the inner radius must equal the outer radius minus the intervening padding.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **UI/UX Designer**. With your **75% Job Readiness Score**, you have top-notch Figma auto-layout and visual design fundamentals (94%). 

Right now, your highest-leverage milestone is finishing the **Enterprise Multi-Platform Design System & Interactive Figma Kit** to demonstrate systematic token architecture and accessibility handoff.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Design System Studio', action: 'start_project' },
      { label: '🎯 Practice App Critique / Whiteboard Challenge', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - UI/UX Designer
Experience:
- Product Design Intern @ DesignCraft: Designed 40+ responsive components in Figma with design tokens and auto-layout, reducing developer handoff time by 35%.
- Redesigned checkout user flow based on 15 user testing sessions, increasing checkout conversion rate by 22%.
- Audited enterprise web applications for WCAG 2.1 AA accessibility compliance across 50+ screens.
Education: B.S. in Human-Computer Interaction & Digital Design
Skills: Figma, Design Systems, User Research, Wireframing, Prototyping, Usability Testing, WCAG AA, Miro.`,
    keywords: ['UI/UX Designer', 'Figma', 'Design Systems', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'WCAG AA', 'Auto-Layout'],
    defaultStrengths: [
      'Measurable design outcomes (35% faster developer handoff, +22% checkout conversion)',
      'Systematic product design mastery (Figma design tokens, auto-layout, WCAG compliance)',
    ],
    defaultImprovements: [
      'Include direct links to Figma interactive prototypes or web portfolio case studies',
      'Detail quantitative usability testing metrics (System Usability Scale scores)',
    ],
  },
  notifications: [
    {
      id: 'ui-n1',
      title: 'Design Recommendation Ready',
      message: 'Boost your score by +10% by completing the Enterprise Figma Design System.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'palette',
    },
  ],
};
