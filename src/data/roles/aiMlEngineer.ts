import { RoleDataPackage } from '../../types';

export const aiMlEngineerRole: RoleDataPackage = {
  roleName: 'AI/ML Engineer',
  categoryTags: ['Machine Learning', 'Deep Learning', 'PyTorch', 'NLP', 'MLOps'],
  avgSalary: '$135,000 / yr',
  demand: 'Surging Demand',
  baseReadinessScore: 70,
  aiInsight: {
    headline: 'AI Insight: Next Best Action',
    text: 'Your Python and Scikit-Learn fundamentals are strong, but training a deep learning model with PyTorch and deploying it via a FastAPI inference endpoint will elevate your AI/ML Engineer profile.',
    actionLabel: 'Start ML Inference Pipeline',
    actionType: 'project',
    estimatedImpact: '+12% Readiness Score',
  },
  metrics: [
    {
      id: 'technical',
      title: 'Technical Skills',
      score: 75,
      iconName: 'psychology',
      category: 'AI & Math Foundations',
      description: 'Machine learning algorithms, deep learning architectures, statistical math, and model evaluation.',
      details: [
        { label: 'ML Algorithms (Regression, Trees, XGBoost)', score: 85, status: 'strong', tip: 'Strong grasp of hyperparameter tuning and feature selection.' },
        { label: 'Deep Learning & PyTorch / TensorFlow', score: 62, status: 'needs_work', tip: 'Primary gap: Practice CNNs, Transformers, and custom loss functions.' },
        { label: 'NLP & LLM Prompting / Fine-Tuning', score: 70, status: 'moderate', tip: 'Build practical RAG pipelines and vector embeddings.' },
        { label: 'Mathematical Statistics & Linear Algebra', score: 82, status: 'strong', tip: 'Solid matrix operations, gradient descent math, and loss derivatives.' },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      score: 66,
      iconName: 'science',
      category: 'Portfolio',
      description: 'End-to-end ML training pipelines, production inference APIs, and deployed recommendation engines.',
      details: [
        { label: 'Customer Churn Prediction Pipeline (XGBoost)', score: 92, status: 'strong', tip: '89% ROC-AUC with SHAP feature interpretability.' },
        { label: 'Neural Recommendation System & Inference API', score: 30, status: 'needs_work', tip: 'High priority project gap: Needs real-time FastAPI deployment.' },
        { label: 'Transformer-based Sentiment NLP Classifier', score: 75, status: 'moderate', tip: 'Containerize model weights with ONNX runtime for faster inference.' },
      ],
    },
    {
      id: 'resume',
      title: 'Resume',
      score: 80,
      iconName: 'description',
      category: 'Application Readiness',
      description: 'Model metrics (F1-score, Latency, AUC), MLOps keywords, and production scale bullet points.',
      details: [
        { label: 'ATS Parsing & Technical Sections', score: 94, status: 'strong', tip: 'Formatted cleanly for AI engineering recruiters.' },
        { label: 'Quantifiable ML Metrics (Accuracy, Inference Latency)', score: 74, status: 'moderate', tip: 'Add exact benchmark numbers (e.g. +14% F1-score, 18ms inference latency).' },
        { label: 'Target Keyword Density (PyTorch, MLOps, Docker, ONNX)', score: 72, status: 'needs_work', tip: 'Incorporate MLflow, FastAPI, Hugging Face, and Vector DBs.' },
      ],
    },
    {
      id: 'interview',
      title: 'Interview Readiness',
      score: 60,
      iconName: 'forum',
      category: 'Evaluation Readiness',
      description: 'ML theory whiteboard (Overfitting, Backprop, Attention), coding algorithms, and MLOps system design.',
      details: [
        { label: 'ML Theoretical Concepts (Bias-Variance, Regularization)', score: 78, status: 'moderate', tip: 'Explain cross-entropy vs MSE loss functions mathematically.' },
        { label: 'Machine Learning System Design (Feed Ranking, RecSys)', score: 50, status: 'needs_work', tip: 'Practice candidate generation, re-ranking, and cold-start handling.' },
        { label: 'Python & Vectorized Math Coding (NumPy array operations)', score: 70, status: 'moderate', tip: 'Code k-means and linear regression from scratch using pure NumPy.' },
      ],
    },
  ],
  roadmap: [
    {
      id: 'aiml-1',
      phaseNumber: 1,
      title: 'Mathematical Foundations & Vectorized Python',
      subtitle: 'Linear Algebra, Calculus, NumPy, and Data Wrangling in Pandas',
      status: 'completed',
      durationWeeks: 2,
      skillsCovered: ['NumPy', 'Pandas', 'Matrix Algebra', 'Gradient Calculus'],
      description: 'Master matrix transformations, eigenvalues, partial derivatives, and high-performance array operations.',
      deliverable: 'Pure NumPy Machine Learning Suite with Linear & Logistic Regression from scratch',
    },
    {
      id: 'aiml-2',
      phaseNumber: 2,
      title: 'Classical Machine Learning & Feature Engineering',
      subtitle: 'Scikit-learn, Random Forests, XGBoost, Cross-Validation, and SHAP',
      status: 'completed',
      durationWeeks: 3,
      skillsCovered: ['Scikit-learn', 'XGBoost', 'Feature Engineering', 'SHAP Values'],
      description: 'Build predictive tabular models with rigorous cross-validation and feature importance analysis.',
      deliverable: 'Production Churn Predictor achieving 0.91 ROC-AUC with SHAP interpretability',
    },
    {
      id: 'aiml-3',
      phaseNumber: 3,
      title: 'Deep Learning & Neural Architectures with PyTorch',
      subtitle: 'Feedforward Networks, CNNs, Transformers, and Custom Training Loops',
      status: 'in_progress',
      isNextBestAction: true,
      durationWeeks: 3,
      skillsCovered: ['PyTorch', 'Transformers', 'Backpropagation', 'Hugging Face'],
      description: 'Implement modern neural network architectures and train models with GPU acceleration.',
      deliverable: 'Fine-tuned Transformer NLP Classifier for Domain Sentiment Analysis',
    },
    {
      id: 'aiml-4',
      phaseNumber: 4,
      title: 'MLOps, Model Serving & Containerization',
      subtitle: 'FastAPI Inference Endpoints, Docker, MLflow, and ONNX Runtime',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['FastAPI', 'MLflow', 'Docker', 'ONNX Optimization'],
      description: 'Deploy trained weights to a low-latency REST API with automated model registry tracking.',
      deliverable: 'Sub-20ms Real-Time Inference API with Docker container & MLflow logging',
    },
    {
      id: 'aiml-5',
      phaseNumber: 5,
      title: 'ML System Design & High-Stakes Interview Prep',
      subtitle: 'Recommendation Systems, Search Ranking, Vector DBs, and Mock Interviews',
      status: 'upcoming',
      durationWeeks: 2,
      skillsCovered: ['ML System Design', 'Vector DBs', 'Embeddings', 'Mock Interviews'],
      description: 'Practice architecting end-to-end recommendation engines (YouTube/Netflix style) and live coding.',
      deliverable: 'Verified AI/ML System Design Portfolio & Mock Interview Clearance',
    },
  ],
  skills: [
    {
      id: 'machine_learning',
      name: 'Classical ML & Scikit-Learn',
      category: 'Technical',
      level: 'Advanced',
      proficiencyPercent: 85,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Random Forests', 'XGBoost', 'Cross-Validation', 'ROC-AUC & F1'],
    },
    {
      id: 'deep_learning',
      name: 'Deep Learning (PyTorch/TF)',
      category: 'Technical',
      level: 'Intermediate',
      proficiencyPercent: 62,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Neural Layers', 'Loss Functions', 'Backpropagation', 'Optimizers (Adam)'],
    },
    {
      id: 'nlp',
      name: 'NLP & Transformers (Hugging Face)',
      category: 'Technical',
      level: 'Intermediate',
      proficiencyPercent: 70,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['Self-Attention', 'Tokenization', 'BERT/GPT Fine-tuning', 'Embeddings'],
    },
    {
      id: 'math_stats',
      name: 'Statistics & Linear Algebra',
      category: 'Analytical',
      level: 'Advanced',
      proficiencyPercent: 82,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Matrices & Eigenvectors', 'Bayes Theorem', 'Gradient Descent', 'Normal Distributions'],
    },
    {
      id: 'numpy_pandas',
      name: 'NumPy, Pandas & Jupyter',
      category: 'Tools',
      level: 'Advanced',
      proficiencyPercent: 90,
      verified: true,
      quizCompleted: true,
      keyConcepts: ['Vectorization', 'Data Preprocessing', 'EDA Visualizations', 'Broadcasting'],
    },
    {
      id: 'mlops',
      name: 'MLOps, Docker & FastAPI',
      category: 'Tools',
      level: 'Intermediate',
      proficiencyPercent: 55,
      verified: false,
      quizCompleted: false,
      keyConcepts: ['FastAPI Serving', 'Docker Containers', 'MLflow Tracking', 'ONNX Export'],
    },
  ],
  projectStudio: {
    id: 'aiml-proj-1',
    title: 'End-to-End Churn ML Prediction Pipeline & Live API',
    subtitle: 'Feature engineering, PyTorch/XGBoost training, loss curves, and live inference endpoint',
    badge: 'Production ML Deliverable',
    impactScore: 12,
    icon: 'psychology',
    schemaTitle: 'ML Pipeline & Feature Store Architecture',
    schemaTables: [
      { name: 'raw_features', type: 'Input Vector', fields: ['tenure_months', 'monthly_spend', 'support_tickets_30d', 'contract_type', 'bandwidth_usage'] },
      { name: 'model_pipeline', type: 'PyTorch / XGBoost', fields: ['StandardScaler', 'OneHotEncoder', 'Custom NN Classifier (Layer: 64 -> 32 -> 1)', 'Sigmoid'] },
      { name: 'inference_response', type: 'FastAPI JSON', fields: ['churn_probability (float)', 'risk_category (High/Medium/Low)', 'top_driving_factors (array)'] },
    ],
    codeLanguage: 'python',
    codeSnippetTitle: 'PyTorch Binary Classifier & Training Loop',
    codeSnippet: `import torch
import torch.nn as nn

class ChurnClassifier(nn.Module):
    def __init__(self, input_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 64),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, 1),
            nn.Sigmoid()
        )
    
    def forward(self, x):
        return self.net(x)`,
    interactiveType: 'ml_playground',
    verificationChecks: [
      'Model convergence & training loss reduction verified (Loss < 0.22)',
      'Test dataset ROC-AUC evaluated at 0.91 (> 0.85 threshold)',
      'FastAPI latency benchmarked at 14ms per single-record inference',
      'Feature importance explainability (SHAP) validation complete',
    ],
  },
  quizQuestions: {
    machine_learning: [
      {
        id: 'aiml-q1',
        skillId: 'machine_learning',
        question: 'Which technique is specifically used to prevent overfitting in decision tree based models like XGBoost / Random Forest?',
        options: ['Increasing tree maximum depth', 'Using L1/L2 regularization and tree pruning', 'Removing cross-validation', 'Doubling the learning rate without decay'],
        correctIndex: 1,
        explanation: 'Regularization parameters (gamma, reg_alpha, reg_lambda) and max depth limits constrain tree complexity to prevent overfitting.',
      },
      {
        id: 'aiml-q2',
        skillId: 'machine_learning',
        question: 'What happens during vanishing gradients in deep feedforward networks?',
        options: [
          'Gradients grow exponentially large, causing NaN weights',
          'Gradients become infinitesimally small during backpropagation, stopping earlier layers from learning',
          'The learning rate automatically drops to zero',
          'Memory exceeds GPU VRAM capacity',
        ],
        correctIndex: 1,
        explanation: 'Vanishing gradients occur when repeatedly multiplying small derivatives (e.g. from Sigmoid activations) across many layers.',
      },
    ],
  },
  coachGreeting: {
    text: `Hello Divya! 👋 I'm your AI Career Coach for **AI/ML Engineer**. With your **70% Job Readiness Score**, you have solid foundations in Classical ML algorithms and NumPy/Pandas (85%). 

Right now, your highest-leverage milestone is finishing the **End-to-End Churn ML Prediction Pipeline & Live API** to demonstrate deep learning, PyTorch, and production MLOps deployment.

How can I help you today?`,
    quickActions: [
      { label: '🚀 Start ML Inference Pipeline Studio', action: 'start_project' },
      { label: '🎯 Practice ML Theory & System Design Drill', action: 'mock_interview' },
      { label: '💡 How to reach 85%+ score?', action: 'score_advice' },
    ],
  },
  resumeSample: {
    text: `Divya Patil - AI/ML Engineer
Experience:
- Machine Learning Intern @ DeepTech: Developed and deployed an XGBoost customer prediction model with 0.91 ROC-AUC, reducing churn by 14%.
- Fine-tuned BERT embeddings on 200k customer support tickets, achieving an 89% F1-score classification.
- Packaged model inference pipelines into Docker containers deployed with FastAPI, achieving 18ms latency.
Education: B.S. in Computer Science (Machine Learning Specialization)
Skills: Python, PyTorch, Scikit-learn, TensorFlow, XGBoost, Docker, FastAPI, MLflow, Git.`,
    keywords: ['PyTorch', 'Machine Learning', 'Deep Learning', 'FastAPI', 'Docker', 'XGBoost', 'NLP', 'Scikit-learn', 'MLOps'],
    defaultStrengths: [
      'Strong quantifiable ML metrics (0.91 ROC-AUC, 89% F1-score, 18ms inference latency)',
      'Full-lifecycle ML experience (data preprocessing, training, Docker containerization, FastAPI serving)',
    ],
    defaultImprovements: [
      'Include links to Hugging Face or GitHub repositories with reproducible Jupyter notebooks',
      'Detail distributed training or GPU acceleration experience',
    ],
  },
  notifications: [
    {
      id: 'aiml-n1',
      title: 'AI/ML Recommendation Ready',
      message: 'Boost your score by +12% by training and deploying the Neural Churn Pipeline.',
      timestamp: '5 mins ago',
      read: false,
      type: 'recommendation',
      icon: 'psychology',
    },
    {
      id: 'aiml-n2',
      title: 'Scikit-Learn Verification Verified',
      message: 'Your Machine Learning diagnostic verified at 85%.',
      timestamp: '1 hour ago',
      read: false,
      type: 'achievement',
      icon: 'verified',
    },
  ],
};
