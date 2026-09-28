import { RoleDataPackage } from '../../types';

export const cloudEngineerRole: RoleDataPackage = {
  roleName: 'Cloud Engineer',
  categoryTags: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Serverless', 'Networking'],
  avgSalary: '$125,000 / yr',
  demand: 'Very High',
  baseReadinessScore: 72,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your cloud computing and Linux administration foundations are solid. Architecting a Multi-Region Serverless Infrastructure with Terraform Infrastructure-as-Code will boost your Cloud Engineer readiness.',
    actionLabel: 'Start Terraform Cloud Project',
    actionType: 'project',
    estimatedImpact: '+11% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 76,
      iconName: 'cloud',
      category: 'Cloud Architecture',
      description: 'AWS/GCP architectures, Terraform IaC, IAM security, VPC networking, and container orchestration.',
      details: [
        { label: 'Cloud Services (Compute, S3, IAM, Serverless)', score: 85, status: 'strong', tip: 'Strong knowledge of cloud primitives and IAM policies.' },
        { label: 'Infrastructure as Code (Terraform / CloudFormation)', score: 62, status: 'needs_work', tip: 'Primary gap: Practice modular Terraform state management.' },
        { label: 'Cloud Networking & Security (VPC, Subnets, Gateways)', score: 78, status: 'moderate', tip: 'Solid routing table and security group configuration.' },
        { label: 'Kubernetes & Container Platforms (EKS/GKE)', score: 68, status: 'moderate', tip: 'Practice deploying multi-container pods with Helm charts.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 66,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Automated IaC deployments, multi-region failover setups, and cost-optimized cloud architectures.',
      details: [
        { label: 'Serverless API on AWS Lambda & API Gateway', score: 92, status: 'strong', tip: 'Live with automated DynamoDB persistence.' },
        { label: 'Multi-Region Infrastructure with Terraform IaC', score: 28, status: 'needs_work', tip: 'High priority project to validate IaC mastery.' },
        { label: 'Kubernetes GKE Cluster with Ingress & TLS', score: 75, status: 'moderate', tip: 'Add Cert-Manager for automated Let’s Encrypt certificates.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 82,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Cloud cost savings, 99.99% uptime achievements, and certification keywords.',
      details: [
        { label: 'ATS Format & Clean Cloud Sectioning', score: 94, status: 'strong', tip: 'Optimized for Cloud and Infrastructure recruiters.' },
        { label: 'Uptime & Cost Optimization Metrics ($30k savings, 99.99%)', score: 76, status: 'moderate', tip: 'Quantify cloud spend reductions.' },
        { label: 'Keywords (AWS, Terraform, Kubernetes, VPC, IAM, CI/CD)', score: 78, status: 'moderate', tip: 'Add Docker, Linux, and CloudWatch keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 64,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Cloud architecture design, VPC troubleshooting, disaster recovery planning, and behavioral STAR.',
      details: [
        { label: 'Cloud Architecture & Disaster Recovery Design', score: 65, status: 'moderate', tip: 'Explain active-active vs active-passive failover mechanisms.' },
        { label: 'Linux OS & Networking Troubleshooting (DNS, CIDR)', score: 78, status: 'strong', tip: 'Proficient in netstat, iptables, and route debugging.' },
        { label: 'IAM Least-Privilege & Security Hardening', score: 70, status: 'moderate', tip: 'Design role-based cross-account access patterns.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'ce-1',
      phaseNumber: 1,
      title: 'Cloud Primitives & Linux Systems Administration',
      subtitle: 'Linux CLI, Bash Scripting, Compute (EC2), Storage (S3), and IAM Security',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['Linux CLI', 'AWS IAM', 'EC2', 'S3 Storage'],
      description: 'Master core cloud fundamentals, least-privilege security, and Linux administration.',
      deliverable: 'Automated Linux Hardening & Cloud Snapshot Backup Script',
    },
    {
      id: 'ce-2',
      phaseNumber: 2,
      title: 'VPC Cloud Networking & Security Architectures',
      subtitle: 'CIDR Subnetting, NAT Gateways, Security Groups, and Transit Gateways',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['VPC', 'Subnets', 'Route Tables', 'Security Groups'],
      description: 'Design enterprise-grade isolated multi-tier network topologies.',
      deliverable: 'Production VPC Architecture Design Diagram & Configuration',
    },
    {
      id: 'ce-3',
      phaseNumber: 3,
      title: 'Infrastructure as Code (IaC) with Terraform',
      subtitle: 'Terraform Modules, State Locking (S3/DynamoDB), and CI/CD Automation',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['Terraform', 'IaC Modules', 'State Management', 'GitHub Actions'],
      description: 'Automate multi-environment cloud provisioning declaratively.',
      deliverable: 'Modular Terraform Multi-Region Cloud Deployment Repository',
    },
    {
      id: 'ce-4',
      phaseNumber: 4,
      title: 'Kubernetes & Container Orchestration (EKS/GKE)',
      subtitle: 'Pods, Deployments, Services, Helm Charts, and Ingress Controllers',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Kubernetes', 'Helm', 'EKS/GKE', 'Ingress'],
      description: 'Orchestrate containerized workloads with self-healing and auto-scaling.',
      deliverable: 'Production Kubernetes Cluster with Auto-Scaling & Load Balancers',
    },
    {
      id: 'ce-5',
      phaseNumber: 5,
      title: 'Cloud Reliability & Mock Architecture Reviews',
      subtitle: 'Well-Architected Framework, Cost Optimization, and Technical Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Well-Architected Framework', 'Cost Optimization', 'Mock Interviews'],
      description: 'Prepare for enterprise cloud architect and systems interview evaluations.',
      deliverable: 'Verified Cloud Engineer Architecture Certification',
    },
  ],
  skills: [
    {
      id: 'aws_gcp',
      name: 'AWS & GCP Cloud Platforms',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 85,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Compute Instances', 'IAM Roles', 'S3/Cloud Storage', 'CloudWatch'],
    },
    {
      id: 'terraform',
      name: 'Terraform (Infrastructure as Code)',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 62,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['HCL Syntax', 'State Files & Locks', 'Modules', 'Terraform Plan/Apply'],
    },
    {
      id: 'cloud_net',
      name: 'Cloud Networking & VPCs',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 80,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['CIDR Blocks', 'Public/Private Subnets', 'NAT Gateways', 'Direct Connect'],
    },
    {
      id: 'k8s_cloud',
      name: 'Kubernetes & Docker',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 68,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Pod Lifecycles', 'ConfigMaps & Secrets', 'Deployments', 'Ingress Controllers'],
    },
  ],
  projectStudio: {
    id: 'ce-proj-1',
    title: 'Multi-Region Serverless Infrastructure with Terraform',
    subtitle: 'Provision fault-tolerant VPCs, API Gateways, Lambda functions, and S3 state locking',
    badge: 'Cloud Infrastructure Deliverable',
    impactScore: 11,
    icon: 'cloud',
    schemaTitle: 'Cloud Topology & Terraform Resources',
    schemaTables: [
      { name: 'vpc_module', type: 'Terraform Resource', fields: ['cidr: 10.0.0.0/16', 'public_subnets [2]', 'private_subnets [2]', 'nat_gateway_redundancy'] },
      { name: 'compute_serverless', type: 'AWS Lambda / API Gateway', fields: ['orders_function (Node.js)', 'api_gateway_v2 (HTTP)', 'iam_execution_role'] },
      { name: 'state_backend', type: 'S3 & DynamoDB', fields: ['s3_state_bucket', 'dynamodb_lock_table', 'kms_encryption_key'] },
    ],
    codeLanguage: 'hcl',
    codeSnippetTitle: 'Terraform S3 State Backend & DynamoDB Lock',
    codeSnippet: `terraform {
  backend "s3" {
    bucket         = "skillpath-tfstate-production"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}`,
    interactiveType: 'cloud_architect',
    verificationChecks: [
      'Terraform syntax and resource dependency graph validation passed',
      'Zero-trust IAM policy review with least-privilege constraints passed',
      'Multi-region automated failover health check simulated and passed',
      'Cost estimation breakdown within budget guidelines ($45/mo)',
    ],
  },
  quizQuestions: {
    aws_gcp: [
      {
        id: 'ce-q1',
        skillId: 'aws_gcp',
        question: 'Why should sensitive Terraform state files be stored in a remote backend with DynamoDB locking rather than in local Git repositories?',
        options: [
          'State files contain sensitive plaintext credentials and locking prevents concurrent apply race conditions',
          'Git cannot store JSON files',
          'Local files slow down the Linux kernel',
          'AWS automatically deletes local files',
        ],
        correctIndex: 0,
        explanation: 'Terraform state often contains sensitive database passwords and remote state locking prevents two developers from corrupting infrastructure concurrently.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Cloud Engineer**. With your **72% Job Readiness Score**, you have solid cloud compute and VPC fundamentals (85%). 

Right now, your highest-leverage opportunity is finishing the **Multi-Region Serverless Infrastructure with Terraform** project to master Infrastructure-as-Code.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Terraform Cloud Studio', action: 'start_project' },
      { label: '🎯 Drill Cloud Architecture & Networking', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Cloud Engineer
Experience:
- Cloud Operations Intern @ InfraCloud: Automated provisioning of 15 AWS VPCs and serverless functions using modular Terraform, cutting deployment times by 60%.
- Configured Kubernetes (EKS) clusters with auto-scaling policies handling 250k daily active requests with 99.99% availability.
- Enforced IAM least-privilege security and S3 encryption across 5 production accounts.
Education: B.S. in Cloud Computing & Systems
Skills: AWS, GCP, Terraform, Kubernetes, Docker, Linux, Python/Bash, VPC, CI/CD.`,
    keywords: ['Cloud Engineer', 'AWS', 'Terraform', 'Kubernetes', 'Docker', 'VPC', 'IAM', 'Linux', 'Serverless'],
    defaultStrengths: [
      'Strong infrastructure impact metrics (60% faster provisioning, 99.99% availability, 250k requests)',
      'Enterprise cloud toolchain (Terraform, AWS, Kubernetes, Linux)',
    ],
    defaultImprovements: [
      'Include links to public GitHub repositories with modular Terraform templates',
      'Detail certifications like AWS Solutions Architect or CKA',
    ],
  },
  notifications: [
    {
      id: 'ce-n1',
      title: 'Cloud Recommendation Ready',
      message: 'Boost your score by +11% by building the Multi-Region Terraform Infrastructure.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'cloud',
    },
  ],
};

export const devOpsEngineerRole: RoleDataPackage = {
  roleName: 'DevOps Engineer',
  categoryTags: ['CI/CD', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'GitOps'],
  avgSalary: '$124,000 / yr',
  demand: 'Very High',
  baseReadinessScore: 73,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your Docker and Linux foundations are strong. Setting up an Automated GitOps CI/CD Pipeline with GitHub Actions, Helm, and ArgoCD will significantly elevate your DevOps Engineer readiness.',
    actionLabel: 'Start CI/CD Pipeline Project',
    actionType: 'project',
    estimatedImpact: '+10% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 78,
      iconName: 'developer_board',
      category: 'DevOps Core',
      description: 'CI/CD pipelines, Kubernetes orchestration, monitoring & alerting, and GitOps deployments.',
      details: [
        { label: 'CI/CD Pipelines (GitHub Actions, GitLab CI)', score: 86, status: 'strong', tip: 'Expert in multi-stage builds and automated test triggers.' },
        { label: 'Kubernetes & Helm Chart Management', score: 72, status: 'moderate', tip: 'Practice canary rollouts and horizontal pod autoscaling (HPA).' },
        { label: 'Monitoring & Observability (Prometheus, Grafana)', score: 64, status: 'needs_work', tip: 'Primary gap: Configure custom PromQL alerts and SLIs/SLOs.' },
        { label: 'Linux Administration & Bash Scripting', score: 88, status: 'strong', tip: 'Proficient in process monitoring, systemd, and cron automation.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 68,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Automated continuous deployment pipelines, monitoring stacks, and container clusters.',
      details: [
        { label: 'Automated GitHub Actions CI/CD Pipeline', score: 94, status: 'strong', tip: 'Live with linting, unit tests, and Docker Hub image publishing.' },
        { label: 'GitOps Kubernetes Deployment with ArgoCD', score: 32, status: 'needs_work', tip: 'High priority project to validate continuous delivery.' },
        { label: 'Prometheus & Grafana Telemetry Dashboard', score: 76, status: 'moderate', tip: 'Add alertmanager integration for Slack incident notifications.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 83,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Deployment frequency gains, MTTR reductions, and DevOps keywords.',
      details: [
        { label: 'ATS Friendly Infrastructure Layout', score: 94, status: 'strong', tip: 'Formatted cleanly for Site Reliability and DevOps recruiters.' },
        { label: 'DORA Metrics (Deployment frequency, MTTR, change failure rate)', score: 76, status: 'moderate', tip: 'Quantify deployment time reductions (e.g. 45m -> 4m).' },
        { label: 'Keywords (CI/CD, Kubernetes, Docker, Prometheus, ArgoCD)', score: 80, status: 'strong', tip: 'Strong coverage of modern SRE/DevOps stack.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 64,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Live pipeline debugging, Kubernetes troubleshooting, incident response post-mortems, and STAR.',
      details: [
        { label: 'Kubernetes Pod CrashLoopBackOff Troubleshooting', score: 82, status: 'strong', tip: 'Fast at inspecting kubectl logs, events, and resource limits.' },
        { label: 'Zero-Downtime Deployment Strategies (Blue-Green/Canary)', score: 62, status: 'moderate', tip: 'Practice traffic splitting with Ingress and service meshes.' },
        { label: 'Incident Management & Blameless Post-Mortems', score: 70, status: 'moderate', tip: 'Structure RCA using 5 Whys and preventative action items.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'do-1',
      phaseNumber: 1,
      title: 'Linux Systems, Networking & Scripting',
      subtitle: 'Bash Scripting, Systemd Services, SSH, and Linux Performance Profiling',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['Linux Administration', 'Bash', 'Networking Tools', 'Security'],
      description: 'Master server administration, process lifecycles, and system-level troubleshooting.',
      deliverable: 'Automated Linux Performance Diagnostic & Health Check Script',
    },
    {
      id: 'do-2',
      phaseNumber: 2,
      title: 'Advanced Docker & Container Security',
      subtitle: 'Multi-stage builds, Trivy Vulnerability Scanning, and Distroless Images',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['Docker', 'Trivy', 'Container Security', 'Registries'],
      description: 'Create ultra-minimal, secure container images for production services.',
      deliverable: 'Hardened Distroless Container Image with Zero CVE Vulnerabilities',
    },
    {
      id: 'do-3',
      phaseNumber: 3,
      title: 'Automated CI/CD & GitOps Deployment with ArgoCD',
      subtitle: 'GitHub Actions, Helm Packaging, ArgoCD Sync, and Canary Deployments',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['GitHub Actions', 'ArgoCD', 'GitOps', 'Helm Charts'],
      description: 'Build a production-grade automated deployment pipeline for Kubernetes.',
      deliverable: 'Complete GitOps CI/CD Pipeline with Automated ArgoCD Sync',
    },
    {
      id: 'do-4',
      phaseNumber: 4,
      title: 'Observability, Prometheus, Grafana & SRE SLIs',
      subtitle: 'PromQL, Grafana Dashboards, Alertmanager, and Distributed Tracing',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Prometheus', 'Grafana', 'Alertmanager', 'OpenTelemetry'],
      description: 'Implement real-time system monitoring and incident alert routing.',
      deliverable: 'Enterprise SRE Observability Dashboard with Automated Slack Alerts',
    },
    {
      id: 'do-5',
      phaseNumber: 5,
      title: 'Chaos Engineering & Mock Incident Response',
      subtitle: 'Chaos Mesh, Failure Injection, RCA Post-Mortems, and SRE Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Incident Response', 'Chaos Engineering', 'Mock Interviews'],
      description: 'Simulate high-severity outages and lead blameless retrospective investigations.',
      deliverable: 'Verified DevOps & SRE Incident Management Clearance',
    },
  ],
  skills: [
    {
      id: 'cicd_do',
      name: 'CI/CD (GitHub Actions, GitLab)',
      category: 'Tools',
      level: 'Advanced',
      proficiencyPercent: 88,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Pipeline Workflows', 'Artifact Caching', 'Secrets Management', 'Docker Buildx'],
    },
    {
      id: 'k8s_do',
      name: 'Kubernetes & Helm',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 74,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Deployments', 'Services', 'Helm Values', 'HPA Scaling'],
    },
    {
      id: 'obs_do',
      name: 'Prometheus & Grafana Observability',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 64,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['PromQL', 'Alertmanager Rules', 'Grafana Panels', 'SLIs/SLOs'],
    },
    {
      id: 'linux_do',
      name: 'Linux Administration & Bash',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 90,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Systemd', 'Cron', 'Permissions/Chmod', 'Network Diagnostics'],
    },
  ],
  projectStudio: {
    id: 'do-proj-1',
    title: 'Automated GitOps CI/CD Pipeline & Kubernetes Cluster',
    subtitle: 'Configure GitHub Actions workflow, Helm chart packaging, and ArgoCD continuous delivery',
    badge: 'DevOps & SRE Deliverable',
    impactScore: 11,
    icon: 'developer_board',
    schemaTitle: 'GitOps Continuous Delivery Pipeline Flow',
    schemaTables: [
      { name: 'github_actions_workflow', type: 'CI Pipeline', fields: ['npm test', 'docker buildx with cache', 'trivy security scan', 'push image to registry'] },
      { name: 'helm_release', type: 'Kubernetes Package', fields: ['Chart.yaml', 'values-production.yaml', 'deployment.yaml (replicas: 3)', 'service.yaml'] },
      { name: 'argocd_application', type: 'GitOps Controller', fields: ['syncPolicy: automated', 'prune: true', 'selfHeal: true', 'healthStatus: Synced'] },
    ],
    codeLanguage: 'yaml',
    codeSnippetTitle: 'GitHub Actions Docker Build & Security Scan Workflow',
    codeSnippet: `name: Production CI/CD
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Security Scan Container
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'app-production:\${{ github.sha }}'
          exit-code: '1'
          severity: 'CRITICAL'`,
    interactiveType: 'cloud_architect',
    verificationChecks: [
      'GitHub Actions syntax and security scan validation passed',
      'Helm chart template linting and rendering check passed',
      'ArgoCD GitOps synchronization health check verified',
      'Canary deployment zero-downtime traffic switch simulated',
    ],
  },
  quizQuestions: {
    cicd_do: [
      {
        id: 'do-q1',
        skillId: 'cicd_do',
        question: 'What is the core principle of GitOps deployment methodologies like ArgoCD or Flux?',
        options: [
          'Using Git as the single source of truth for declarative infrastructure and application state',
          'SSHing directly into production servers to apply updates',
          'Disabling automated testing to deploy faster',
          'Using only GitHub issues to log system crashes',
        ],
        correctIndex: 0,
        explanation: 'GitOps uses Git repositories as the canonical source of truth, with automated agents reconciling live cluster state against Git declarations.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **DevOps Engineer**. With your **73% Job Readiness Score**, you have excellent CI/CD and Linux scripting capabilities (88%). 

Right now, your highest-leverage milestone is completing the **Automated GitOps CI/CD Pipeline & Kubernetes Cluster** to demonstrate production deployment automation.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start GitOps Pipeline Studio', action: 'start_project' },
      { label: '🎯 Practice Kubernetes Incident Triage', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - DevOps Engineer
Experience:
- DevOps Intern @ ScaleOps: Designed automated GitHub Actions CI/CD pipelines reducing deployment cycle time from 45 mins to 4 mins.
- Deployed ArgoCD GitOps controllers across Kubernetes clusters, managing 20+ microservices with zero-downtime rolling updates.
- Built Prometheus and Grafana monitoring stacks with Slack alerts, lowering Mean Time to Detect (MTTD) by 35%.
Education: B.S. in Computer Systems & DevOps
Skills: CI/CD, Kubernetes, Docker, GitHub Actions, Terraform, ArgoCD, Prometheus, Grafana, Linux, Git.`,
    keywords: ['DevOps', 'CI/CD', 'Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana', 'Linux'],
    defaultStrengths: [
      'Outstanding DORA impact metrics (deployment time reduced 45m to 4m, 35% faster MTTD)',
      'Modern cloud-native stack (Kubernetes, ArgoCD, GitHub Actions, Prometheus)',
    ],
    defaultImprovements: [
      'Include links to public GitHub Actions workflow repositories',
      'Detail experience with service meshes (Istio/Linkerd) or disaster recovery testing',
    ],
  },
  notifications: [
    {
      id: 'do-n1',
      title: 'DevOps Recommendation Ready',
      message: 'Boost your score by +10% by completing the GitOps CI/CD Pipeline.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'developer_board',
    },
  ],
};

export const cybersecurityEngineerRole: RoleDataPackage = {
  roleName: 'Cybersecurity Engineer',
  categoryTags: ['Security', 'Zero Trust', 'SIEM', 'Threat Analysis', 'Penetration Testing', 'OWASP'],
  avgSalary: '$126,000 / yr',
  demand: 'Surging Demand',
  baseReadinessScore: 71,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your network security and vulnerability scanning foundations are strong. Building a Zero-Trust Security Audit & Threat Monitoring Dashboard with SIEM log analysis will validate your Cybersecurity credentials.',
    actionLabel: 'Start Security Audit Studio',
    actionType: 'project',
    estimatedImpact: '+11% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 77,
      iconName: 'security',
      category: 'Cybersecurity Core',
      description: 'Network security, SIEM analysis, vulnerability assessment, cryptography, and OWASP Top 10 hardening.',
      details: [
        { label: 'Network Security & Firewalls (Wireshark, Nmap)', score: 86, status: 'strong', tip: 'Exceptional packet analysis and port auditing skills.' },
        { label: 'Application Security (OWASP Top 10, Auth Hardening)', score: 74, status: 'moderate', tip: 'Solid grasp of SQLi, XSS, and CSRF remediation.' },
        { label: 'SIEM & Threat Detection (Splunk / Elastic Security)', score: 62, status: 'needs_work', tip: 'Primary gap: Write custom Sigma and Snort detection rules.' },
        { label: 'Cryptography & Identity (PKI, TLS, JWT, MFA)', score: 82, status: 'strong', tip: 'Strong grasp of public-key cryptography and token validation.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 65,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Vulnerability assessments, automated penetration test suites, and SIEM security dashboards.',
      details: [
        { label: 'OWASP Top 10 Automated Vulnerability Scanner', score: 92, status: 'strong', tip: 'Live with automated report generation in Python.' },
        { label: 'Zero-Trust Security Audit & Threat Monitoring SIEM', score: 30, status: 'needs_work', tip: 'High priority project to validate SOC and SecOps capabilities.' },
        { label: 'End-to-End Encrypted File Storage with AES-GCM', score: 76, status: 'moderate', tip: 'Add HMAC integrity checking and secure key derivation.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 82,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Security incident metrics, compliance standards (SOC 2, ISO 27001), and cybersecurity certifications.',
      details: [
        { label: 'ATS Security Keyword Formatting', score: 95, status: 'strong', tip: 'Parsed effectively by enterprise security recruiters.' },
        { label: 'Incident Mitigation Metrics (0 breaches, 80% faster triage)', score: 76, status: 'moderate', tip: 'Highlight quantified vulnerability remediation timeframes.' },
        { label: 'Keywords (OWASP, SIEM, Wireshark, Zero Trust, Cryptography)', score: 78, status: 'moderate', tip: 'Add Splunk, NIST, and Penetration Testing keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 62,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Security architecture design, incident triage, threat modeling (STRIDE), and behavioral STAR.',
      details: [
        { label: 'Threat Modeling Frameworks (STRIDE, DREAD)', score: 78, status: 'strong', tip: 'Systematic approach to identifying attack vectors in new architectures.' },
        { label: 'Live Incident Response & Log Investigation', score: 58, status: 'needs_work', tip: 'Practice identifying brute-force and lateral movement patterns in logs.' },
        { label: 'Security Policy & Cross-Functional Alignment', score: 68, status: 'moderate', tip: 'Communicate security requirements without friction for developer teams.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'sec-1',
      phaseNumber: 1,
      title: 'Network Defense & Packet Analysis Fundamentals',
      subtitle: 'TCP/IP Model, Wireshark, Nmap, Subnet Security, and Firewalls',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['Wireshark', 'Nmap', 'Packet Inspection', 'Firewalls'],
      description: 'Inspect live network traffic and identify anomalous packet signatures.',
      deliverable: 'Network Packet Anomaly Detection & Port Vulnerability Report',
    },
    {
      id: 'sec-2',
      phaseNumber: 2,
      title: 'Application Security & OWASP Top 10 Hardening',
      subtitle: 'SQL Injection, XSS, CSRF, Secure Headers, and JWT Authentication',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['OWASP Top 10', 'AppSec', 'JWT Security', 'Penetration Testing'],
      description: 'Audit and patch severe application vulnerabilities in modern web architectures.',
      deliverable: 'Automated OWASP Security Audit & Remediation Suite',
    },
    {
      id: 'sec-3',
      phaseNumber: 3,
      title: 'Zero-Trust Architecture & SIEM Threat Monitoring',
      subtitle: 'Splunk / Elastic Security, Log Analysis, Sigma Rules, and Threat Hunting',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['SIEM', 'Threat Detection', 'Zero Trust', 'Sigma Rules'],
      description: 'Build an automated threat detection dashboard with real-time log ingestion.',
      deliverable: 'Zero-Trust SIEM Security Dashboard with Live Threat Detection Rules',
    },
    {
      id: 'sec-4',
      phaseNumber: 4,
      title: 'Cryptography, PKI & Cloud Security Hardening',
      subtitle: 'AES-GCM, RSA/ECC, TLS 1.3, AWS IAM Policies, and Secret Management',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Cryptography', 'PKI', 'Cloud Security', 'Vault'],
      description: 'Implement zero-knowledge encryption pipelines and cloud posture management.',
      deliverable: 'End-to-End Cryptographically Secure File & Credential Vault',
    },
    {
      id: 'sec-5',
      phaseNumber: 5,
      title: 'Incident Response Drills & SOC Technical Interviews',
      subtitle: 'Ransomware Scenarios, Forensic Analysis, STRIDE Modeling, and Mock Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Incident Response', 'Threat Modeling', 'Mock Interviews'],
      description: 'Triage live simulated breaches and communicate recommendations to leadership.',
      deliverable: 'Verified Cybersecurity Engineer Professional Certification',
    },
  ],
  skills: [
    {
      id: 'appsec',
      name: 'Application Security & OWASP',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 86,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['OWASP Top 10', 'SQLi/XSS Mitigation', 'Input Sanitization', 'CORS/CSP'],
    },
    {
      id: 'netsec',
      name: 'Network Security (Wireshark, Nmap)',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 88,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Packet Inspection', 'Port Scanning', 'Firewall Rules', 'VLANs'],
    },
    {
      id: 'siem',
      name: 'SIEM & Threat Detection (Splunk)',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 62,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Log Ingestion', 'Sigma Rules', 'Correlation Queries', 'Alert Triage'],
    },
    {
      id: 'crypto_sec',
      name: 'Cryptography & PKI Infrastructure',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 82,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['AES Encryption', 'Asymmetric RSA/ECC', 'TLS Handshakes', 'Hashing/Salt'],
    },
  ],
  projectStudio: {
    id: 'sec-proj-1',
    title: 'Zero-Trust Security Audit & Threat Monitoring Dashboard',
    subtitle: 'Real-time SIEM log ingestion, Sigma rule threat detection, and automated incident triage',
    badge: 'Cybersecurity Deliverable',
    impactScore: 11,
    icon: 'security',
    schemaTitle: 'SIEM Security Event Pipeline & Threat Rules',
    schemaTables: [
      { name: 'security_event_log', type: 'Ingested Log Stream', fields: ['timestamp', 'source_ip', 'destination_port', 'auth_status', 'payload_hash'] },
      { name: 'threat_detection_rules', type: 'Sigma / Snort Engine', fields: ['Brute Force Trigger (>= 5 failed attempts/min)', 'SQL Injection Pattern Detector', 'Lateral Movement Beaconing'] },
      { name: 'incident_response_queue', type: 'SOC Triage Desk', fields: ['incident_id (UUID)', 'severity (Critical/High/Med)', 'affected_asset', 'containment_status'] },
    ],
    codeLanguage: 'python',
    codeSnippetTitle: 'Automated Brute-Force & Anomaly Detection Rule',
    codeSnippet: `def detect_auth_anomalies(log_events, threshold=5, time_window_sec=60):
    ip_failures = defaultdict(list)
    alerts = []
    
    for event in log_events:
        if event.get("status") == "FAILED_LOGIN":
            ip = event.get("source_ip")
            ip_failures[ip].append(event.get("timestamp"))
            
            recent = [t for t in ip_failures[ip] if event.get("timestamp") - t <= time_window_sec]
            if len(recent) >= threshold:
                alerts.append({"alert": "BRUTE_FORCE_SUSPECTED", "ip": ip, "severity": "HIGH"})
    return alerts`,
    interactiveType: 'security_console',
    verificationChecks: [
      'Simulated SQL injection attack signature correctly identified and blocked',
      'Brute-force authentication anomaly detection triggered within 2 seconds',
      'Zero-Trust network segmentation policy validated against lateral traversal',
      'Incident containment report generated with automated remediation recommendations',
    ],
  },
  quizQuestions: {
    appsec: [
      {
        id: 'sec-q1',
        skillId: 'appsec',
        question: 'What is the most effective defense against SQL Injection vulnerabilities in backend databases?',
        options: [
          'Using Parameterized Queries / Prepared Statements',
          'Encrypting the database hard drive',
          'Disabling all WHERE clauses',
          'Using HTTP POST instead of GET',
        ],
        correctIndex: 0,
        explanation: 'Parameterized queries separate SQL code from user-supplied data, ensuring input is always treated as a parameter value rather than executable code.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Cybersecurity Engineer**. With your **71% Job Readiness Score**, you have solid network security and OWASP hardening foundations (86%). 

Right now, your highest-leverage milestone is finishing the **Zero-Trust Security Audit & Threat Monitoring Dashboard** to demonstrate hands-on SIEM detection and threat hunting.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start Security Audit Studio', action: 'start_project' },
      { label: '🎯 Drill Threat Modeling (STRIDE) Scenarios', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Cybersecurity Engineer
Experience:
- Information Security Intern @ SecureTech: Developed automated OWASP vulnerability scanner in Python, identifying 18 high-severity CVEs prior to release.
- Configured SIEM correlation rules in Splunk to monitor 10,000+ daily authentication events, reducing false positive alerts by 40%.
- Conducted internal penetration tests and authored remediation guidelines for engineering teams.
Education: B.S. in Cybersecurity & Information Assurance
Skills: OWASP, Wireshark, Nmap, SIEM (Splunk), Python, Cryptography, Linux, Firewalls, Git.`,
    keywords: ['Cybersecurity', 'OWASP', 'SIEM', 'Wireshark', 'Nmap', 'Penetration Testing', 'Cryptography', 'Threat Analysis', 'Linux'],
    defaultStrengths: [
      'Clear security impact metrics (18 high-severity CVEs identified, 40% reduction in false positives)',
      'Practical offensive and defensive security tooling (OWASP, Splunk, Wireshark, Nmap)',
    ],
    defaultImprovements: [
      'Include links to published GitHub security scripts or Bug Bounty recognitions',
      'Detail experience with industry standards (NIST CSF, SOC 2, ISO 27001)',
    ],
  },
  notifications: [
    {
      id: 'sec-n1',
      title: 'Security Recommendation Ready',
      message: 'Boost your score by +11% by building the Zero-Trust Threat SIEM Dashboard.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'security',
    },
  ],
};
