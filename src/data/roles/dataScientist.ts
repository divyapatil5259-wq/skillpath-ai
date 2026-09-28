import { RoleDataPackage } from '../../types';

export const dataScientistRole: RoleDataPackage = {
  roleName: 'Data Scientist',
  categoryTags: ['Statistical Modeling', 'Python', 'A/B Testing', 'Machine Learning', 'SQL'],
  avgSalary: '$122,000 / yr',
  demand: 'Very High',
  baseReadinessScore: 71,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your statistical hypothesis testing and SQL skills are strong. Complete an end-to-end Customer Lifetime Value (LTV) regression and cohort forecasting project to verify your Data Scientist portfolio.',
    actionLabel: 'Start LTV Modeling Project',
    actionType: 'project',
    estimatedImpact: '+10% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 79,
      iconName: 'insights',
      category: 'Data Science Stack',
      description: 'Statistical inference, exploratory data analysis, predictive modeling, and data pipelines.',
      details: [
        { label: 'Statistical Inference & Hypothesis Testing', score: 86, status: 'strong', tip: 'Strong mastery of ANOVA, regression, and p-value power calculations.' },
        { label: 'Predictive Modeling (Scikit-Learn, XGBoost)', score: 78, status: 'moderate', tip: 'Comfortable with classification/regression; practice feature engineering.' },
        { label: 'Advanced SQL & Data Wrangling (Pandas/Polars)', score: 88, status: 'strong', tip: 'Exceptional data transformation and aggregation capabilities.' },
        { label: 'Data Storytelling & Executive Visualizations', score: 64, status: 'needs_work', tip: 'Primary gap: Translate statistical metrics into ROI impact for executives.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 64,
      iconName: 'architecture',
      category: 'Portfolio',
      description: 'Statistical research papers, predictive business case studies, and automated ML pipelines.',
      details: [
        { label: 'Multi-Variant A/B Test Experimentation Framework', score: 90, status: 'strong', tip: 'Live analysis with confidence intervals and sample sizing.' },
        { label: 'Customer Lifetime Value & Churn Regression Model', score: 32, status: 'needs_work', tip: 'Currently missing from portfolio. High priority to build.' },
        { label: 'Pricing Elasticity & Demand Forecasting Study', score: 70, status: 'moderate', tip: 'Add time-series seasonality adjustments with ARIMA/Prophet.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 82,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'ATS compliance, statistical terminology, and business outcomes achieved.',
      details: [
        { label: 'ATS Format & Quantitative Bullet Points', score: 94, status: 'strong', tip: 'Parses cleanly across modern applicant tracking systems.' },
        { label: 'Experimentation & Business Impact Metrics', score: 76, status: 'moderate', tip: 'Highlight exact revenue uplift or cost savings from models.' },
        { label: 'Keywords (Bayesian, A/B Testing, Python, SQL)', score: 76, status: 'moderate', tip: 'Add Scikit-Learn, Hypothesis Testing, and Tableau keywords.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 62,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'Probability and statistics questions, live SQL/Python modeling, and business problem breakdown.',
      details: [
        { label: 'Probability & Statistical Math Problems', score: 80, status: 'strong', tip: 'Confident in Bayes Rule and Central Limit Theorem.' },
        { label: 'Product Metric & Experimentation Case Studies', score: 55, status: 'needs_work', tip: 'Practice diagnosing network effects and cannibalization in A/B tests.' },
        { label: 'Live Python/SQL Data Wrangling Drills', score: 74, status: 'moderate', tip: 'Improve speed in writing vectorized transformations.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'ds-1',
      phaseNumber: 1,
      title: 'Advanced Statistics & Probability Foundations',
      subtitle: 'Distributions, Hypothesis Testing, Bayesian Inference, and ANOVA',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['Probability Theory', 'Hypothesis Testing', 'P-Values', 'Confidence Intervals'],
      description: 'Master statistical testing, power calculations, and non-parametric estimation methods.',
      deliverable: 'Comprehensive Statistical Experimentation Framework in Python',
    },
    {
      id: 'ds-2',
      phaseNumber: 2,
      title: 'Feature Engineering & Supervised Learning',
      subtitle: 'Linear/Logistic Regression, Decision Trees, XGBoost, and Cross-Validation',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['Scikit-Learn', 'Feature Engineering', 'XGBoost', 'Model Validation'],
      description: 'Build predictive models to forecast customer lifetime value and detect churn signals.',
      deliverable: 'Customer LTV & Churn Predictive Engine with SHAP Feature Analysis',
    },
    {
      id: 'ds-3',
      phaseNumber: 3,
      title: 'Experimentation Design & A/B Testing at Scale',
      subtitle: 'Sample Size Calculations, Variance Reduction (CUPED), and Multi-Armed Bandits',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['A/B Testing', 'CUPED', 'Multi-Armed Bandits', 'Power Analysis'],
      description: 'Learn how leading tech companies design, analyze, and automate product experiments.',
      deliverable: 'Automated A/B Testing Evaluation Platform in Streamlit',
    },
    {
      id: 'ds-4',
      phaseNumber: 4,
      title: 'Time Series & Unsupervised Clustering',
      subtitle: 'ARIMA, Prophet, K-Means Clustering, PCA, and Anomaly Detection',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Time Series', 'K-Means', 'PCA', 'Prophet'],
      description: 'Decompose cyclical trends and segment multi-dimensional user populations.',
      deliverable: 'Demand Forecasting & Customer Segmentation Interactive Notebook',
    },
    {
      id: 'ds-5',
      phaseNumber: 5,
      title: 'Executive Communication & Mock Interviews',
      subtitle: 'Product Sense, Case Interviews, Live Whiteboard Modeling, and STAR Stories',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['Product Sense', 'Live Modeling Drills', 'Executive Storytelling'],
      description: 'Prepare for live coding, probability problem solving, and product sense rounds.',
      deliverable: 'Verified Data Science Interview Certification',
    },
  ],
  skills: [
    {
      id: 'stats_ds',
      name: 'Statistical Inference & A/B Testing',
      category: 'Analytical',
      level: 'Advanced',
      proficiencyPercent: 88,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Null Hypothesis', 'P-values', 'Confidence Intervals', 'CUPED'],
    },
    {
      id: 'ml_ds',
      name: 'Predictive Modeling (Scikit-Learn)',
      category: 'Technical',
      level: 'Intermediate',
      proficiencyPercent: 76,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Regression', 'Random Forests', 'XGBoost', 'Feature Selection'],
    },
    {
      id: 'python_ds',
      name: 'Python (Pandas, NumPy, Scipy)',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 90,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['DataFrames', 'Vectorization', 'Statistical Tests', 'Seaborn'],
    },
    {
      id: 'sql_ds',
      name: 'Advanced SQL & Data Wrangling',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 88,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Window Functions', 'CTEs', 'Query Optimization', 'Aggregations'],
    },
    {
      id: 'viz_ds',
      name: 'Data Storytelling & Dashboards',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 65,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Streamlit', 'Tableau', 'Plotly', 'Executive Briefings'],
    },
  ],
  projectStudio: {
    id: 'ds-proj-1',
    title: 'Customer Lifetime Value (LTV) & Churn Regression Studio',
    subtitle: 'Feature engineering, GLM regression, residual analysis, and executive dashboard',
    badge: 'Data Science Deliverable',
    impactScore: 11,
    icon: 'insights',
    schemaTitle: 'Cohort Features & Regression Modeling Matrix',
    schemaTables: [
      { name: 'user_activity_matrix', type: 'Features', fields: ['user_id (PK)', 'frequency_score', 'recency_days', 'monetary_value', 'session_duration_avg'] },
      { name: 'glm_model_fit', type: 'Regression', fields: ['NegativeBinomial / Gamma GLM', 'R-squared: 0.84', 'RMSE: $42.10', 'P-values < 0.001'] },
      { name: 'ltv_predictions', type: 'Predictions', fields: ['predicted_12m_ltv (float)', 'churn_risk_tier', 'confidence_interval_95'] },
    ],
    codeLanguage: 'python',
    codeSnippetTitle: 'Gamma GLM Customer LTV Fitting Script',
    codeSnippet: `import statsmodels.api as sm
import statsmodels.formula.api as smf

# Fit Gamma Generalized Linear Model for positive continuous monetary targets
model = smf.glm(
    formula="monetary_total ~ frequency + recency + avg_cart_size",
    data=df_train,
    family=sm.families.Gamma(link=sm.families.links.Log())
).fit()

print(model.summary())`,
    interactiveType: 'ml_playground',
    verificationChecks: [
      'Residual normality and homoscedasticity test passed',
      'Variance Inflation Factor (VIF < 5) multicollinearity check passed',
      '95% bootstrap confidence interval validation verified',
      'Executive summary slide with actionable business ROI recommendations',
    ],
  },
  quizQuestions: {
    stats_ds: [
      {
        id: 'ds-q1',
        skillId: 'stats_ds',
        question: 'What is the primary benefit of applying CUPED (Controlled-experiment Using Pre-Experiment Data) in an A/B test?',
        options: [
          'It reduces sample variance using pre-experiment metric data, lowering the required sample size and runtime',
          'It guarantees a statistically significant p-value',
          'It automatically fixes user tracking bugs',
          'It replaces the need for a control group',
        ],
        correctIndex: 0,
        explanation: 'CUPED uses pre-experiment covariates to explain baseline variance, resulting in tighter confidence intervals without longer experiment duration.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **Data Scientist**. With your **71% Job Readiness Score**, you have stellar statistical testing foundations (88%). 

Right now, your highest-leverage milestone is completing the **Customer Lifetime Value (LTV) & Churn Regression Studio** to demonstrate predictive modeling and executive storytelling.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start LTV Modeling Project Studio', action: 'start_project' },
      { label: '🎯 Practice Statistical Case Study Drill', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - Data Scientist
Experience:
- Data Science Intern @ TechMetrics: Designed and evaluated 14 A/B tests with CUPED variance reduction, uncovering features that drove $350k annual revenue.
- Built a Gamma GLM predictive LTV model in Python/Scikit-Learn achieving an R² of 0.84 on 400k customers.
- Engineered SQL and Pandas ETL pipelines processing 1M+ daily event records.
Education: B.S. in Statistics & Data Science
Skills: Python, SQL, A/B Testing, Scikit-Learn, Statsmodels, Pandas, Tableau, Git.`,
    keywords: ['A/B Testing', 'Data Science', 'Machine Learning', 'Statistical Modeling', 'Python', 'SQL', 'Scikit-Learn', 'Regression', 'Tableau'],
    defaultStrengths: [
      'Strong quantitative business results ($350k annual revenue, 14 A/B tests evaluated)',
      'Sophisticated statistical techniques demonstrated (CUPED, Gamma GLM, variance reduction)',
    ],
    defaultImprovements: [
      'Include links to published GitHub statistical analysis notebooks',
      'Detail experience with big data frameworks (PySpark, Snowflake, dbt)',
    ],
  },
  notifications: [
    {
      id: 'ds-n1',
      title: 'Data Science Recommendation Ready',
      message: 'Boost your score by +10% by finishing the Customer LTV Regression project.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'insights',
    },
  ],
};
