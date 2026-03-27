export const PROFILE = {
  name: 'Keshvi Pipwala',
  tagline: 'AI/Data Product Manager · Software Engineer · Data Scientist',
  bio: 'Impact-driven Product Manager and Data Scientist building scalable, AI-powered platforms across NASA, academic labs, and enterprise systems. Expert in Python, SQL, ML, and LLMs. Passionate about leveraging data to drive product innovation and deliver measurable value.',
  location: 'Tempe, Arizona, USA · She/Her',
  email: 'kpipwala@asu.edu',
  phone: '+1 (602) 516-3404',
  linkedin: 'https://www.linkedin.com/in/keshvi-pipwala-5a7bb0247/',
  previousPortfolio: 'https://vo-personal-portfolio-keshvipipwala.vercel.app/',
  photo: null, // Replace with '/me.jpg' after adding your photo to public/
}

export const EXPERIENCE = [
  {
    icon: '🎨',
    role: 'Adobe Student Ambassador',
    company: 'Adobe · Part-time · United States',
    time: 'Aug 2025 – Present',
    summary: "Representing Adobe's creative ecosystem and tools at Arizona State University, driving community adoption and advocacy.",
    bullets: [],
    stack: ['Brand Advocacy', 'Community', 'Adobe Creative Cloud'],
  },
  {
    icon: '🧠',
    role: 'AI / Data Product Manager',
    company: 'ASU School of Social & Behavioral Sciences · Hybrid, Arizona',
    time: 'Jun 2025 – Present',
    summary: 'Leading development of an AI-driven student analytics platform utilized by 5,000+ university stakeholders.',
    bullets: [
      'Led development of an AI-driven student analytics platform for **5,000+ users**, boosting student retention by **18%**.',
      'Coordinated cross-functional teams of engineers, UX designers, and academic leaders to drive agile delivery aligned with institutional goals.',
      'Implemented experimentation and feedback loops, increasing platform engagement by **22%** within the first semester.',
    ],
    stack: ['Product Management', 'AI/ML', 'Agile', 'User Research', 'OKRs'],
  },
  {
    icon: '🚀',
    role: 'Software Engineer / Database Developer',
    company: "NASA L'SPACE Program · On-site, Tempe, AZ",
    time: 'Apr 2025 – Present',
    summary: 'Spearheading data infrastructure and ETL pipelines for a NASA-affiliated university initiative.',
    bullets: [
      'Authored onboarding workflows and technical documentation driving a **30% increase** in researcher productivity.',
      'Automated ETL pipelines for **100,000+ records**, elevating anomaly detection accuracy to **95%**.',
      'Built Power BI dashboards contributing to a **25% improvement** in data quality and reporting accuracy.',
    ],
    stack: ['SQL DBA', 'ETL Pipelines', 'Power BI', 'Data Warehousing', 'MySQL'],
  },
  {
    icon: '📊',
    role: 'Lead Technical Project Manager',
    company: 'Arizona State University · Hybrid',
    time: 'Jul 2025 – Jan 2026',
    summary: 'Led technical project delivery and cross-functional coordination for university-level technology initiatives.',
    bullets: [],
    stack: ['Project Management', 'Agile', 'Leadership', 'Stakeholder Management'],
  },
  {
    icon: '📋',
    role: 'Product Analyst Intern',
    company: 'Grey Enterprise · Ahmedabad, India',
    time: 'Jan 2024 – May 2024',
    summary: 'Supported product managers through competitive analysis and data-driven feature prioritization.',
    bullets: [
      'Synthesized competitive analysis and stakeholder interviews informing **two major product launches**.',
      'Increased new feature adoption and customer satisfaction by **15%**.',
    ],
    stack: ['Product Analysis', 'Market Research', 'Agile', 'Stakeholder Management'],
  },
]

export const PROJECTS = [
  {
    id: 'resilienceos',
    emoji: '⚡',
    title: 'ResilienceOS',
    subtitle: 'Python · FastAPI · React · Docker · Prometheus',
    category: 'SRE',
    impact: 'Production-grade chaos engineering platform simulating real cascade failures across 5 microservices with AI-generated post-mortems.',
    bullets: [
      'Deployed 5 interdependent FastAPI microservices with real synchronous dependency calls that genuinely cascade failures.',
      'Built chaos engine with 5 fault types and 3 automated scenarios including Cascade Failure, Slow Death, and Split Brain.',
      'Integrated Claude API to auto-generate structured SRE post-mortems with severity classification and action items.',
      'Observable via Prometheus metrics, Grafana dashboards, and live D3.js topology with real-time WebSocket updates.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'Docker', 'Prometheus', 'Grafana', 'PostgreSQL', 'Redis', 'D3.js', 'Claude API'],
    github: 'https://github.com/keshvi-pipwala/resilienceos',
  },
  {
    id: 'crosslingual',
    emoji: '🌐',
    title: 'Cross-Lingual Knowledge Engine',
    subtitle: 'OpenAI · MarianMT · FAISS · NLP',
    category: 'AI/ML',
    impact: 'Transformed government data for **100,000+ non-English speakers**. Recognized by Gujarat Technology University, showcased at BNI Connect.',
    bullets: [
      'Built AI-powered platform using OpenAI, MarianMT, and FAISS to translate government data across 10+ regional languages.',
      'Facilitated multi-disciplinary collaboration between engineering, design, and community stakeholders.',
    ],
    tags: ['OpenAI', 'MarianMT', 'FAISS', 'NLP', 'Python'],
    live: null,
    github: null,
  },
  {
    id: 'emergency',
    emoji: '🚨',
    title: 'Emergency Alert & Response System',
    subtitle: 'FastAPI · Real-time · Reliance Foundation',
    category: 'Data',
    impact: 'Cut triage time by **40%** for thousands of vulnerable individuals during live Reliance Foundation disaster deployments.',
    bullets: [
      'Engineered FastAPI-based real-time alert pipeline for Reliance Foundation programs.',
      'Ensured mission-critical uptime through iterative NGO field feedback integration.',
    ],
    tags: ['FastAPI', 'Real-time', 'Python', 'NGO'],
    live: null,
    github: null,
  },
  {
    id: 'federated',
    emoji: '🏥',
    title: 'Federated Healthcare Analytics Pipeline',
    subtitle: 'PyTorch · Kubernetes · Federated Learning',
    category: 'Healthcare',
    impact: 'Supports **1M+ records** with **89% uptime** — HIPAA-compliant federated ML across multiple hospitals.',
    bullets: [
      'Built secure federated learning system with Python, PyTorch, and Kubernetes enabling HIPAA-compliant hospital collaboration.',
      'Automated CI/CD monitoring pipeline supporting 1M+ records with 89% uptime.',
    ],
    tags: ['PyTorch', 'Kubernetes', 'Federated Learning', 'HIPAA', 'Python'],
    live: null,
    github: null,
  },
]

export const EDUCATION = [
  {
    school: 'Arizona State University',
    degree: 'MS in Information Technology & Project Management',
    meta: 'Aug 2024 – May 2026 (expected) · Tempe, AZ',
    gpa: '4.0 / 4.0 ⭐',
  },
  {
    school: 'Gujarat Technology University · SCET',
    degree: 'BE in Computer Engineering',
    meta: 'Aug 2021 – Jun 2024 · Surat, India · Founder, Kaleidoscope Club',
    gpa: '3.8 / 4.0',
  },
]

export const CERTIFICATIONS = [
  { issuer: 'Amazon Web Services', name: 'AWS Academy Graduate — Data Engineering', date: 'Sep 2025' },
  { issuer: 'Amazon Web Services', name: 'AWS Academy Graduate — Machine Learning Foundations', date: 'Nov 2025' },
  { issuer: 'Kaggle', name: 'Python Coder Badge', date: 'Apr 2025' },
]

export const SKILLS = [
  'Python · Pandas · NumPy',
  'SQL · MySQL · Snowflake',
  'LLMs · LangChain · OpenAI',
  'FAISS · Pinecone · Vector DBs',
  'React · JavaScript',
  'FastAPI · ETL Pipelines',
  'AWS · GCP · Docker',
  'Kubernetes · CI/CD',
  'Power BI · Tableau',
  'PyTorch · Scikit-learn',
  'A/B Testing',
  'Agile · Scrum · Jira',
  'Figma · Prototyping',
  'Product Roadmapping',
  'KPI / OKR Setting',
  'User Research',
  'Airflow · Terraform',
  'Git · GitHub',
]

export const CHAT_SYSTEM_PROMPT = `You are a recruiter-facing AI assistant evaluating Keshvi Pipwala as a candidate. Help recruiters quickly assess candidate fit, skills, and experience for technical and product management roles.

CANDIDATE PROFILE:
Name: Keshvi Pipwala | She/Her | Tempe, Arizona, USA
Contact: kpipwala@asu.edu | +1 (602) 516-3404
LinkedIn: linkedin.com/in/keshvi-pipwala-5a7bb0247

EDUCATION:
- MS, Information Technology & Project Management — Arizona State University (2024–2026 expected) — GPA: 4.0/4.0
- BE, Computer Engineering — Gujarat Technology University/SCET (2021–2024) — GPA: 3.8/4.0 — Founder, Kaleidoscope Club

EXPERIENCE:
1. Adobe Student Ambassador — Adobe, Part-time (Aug 2025–Present)
2. AI/Data Product Manager — ASU School of Social & Behavioral Sciences (Jun 2025–Present):
   - Led AI analytics platform for 5,000+ users; boosted retention 18%; increased engagement 22%
   - Coordinated cross-functional teams (engineers, UX, academics)
3. Software Engineer/Database Developer — NASA L'SPACE Program (Apr 2025–Present):
   - 30% productivity boost via documentation/onboarding workflows
   - ETL for 100,000+ records with 95% anomaly detection accuracy
   - Power BI dashboards; 25% data quality improvement
4. Lead Technical Project Manager — ASU (Jul 2025–Jan 2026)
5. Product Analyst Intern — Grey Enterprise (Jan–May 2024): Informed 2 major launches; increased satisfaction 15%

PROJECTS:
1. Cross-Lingual Knowledge Engine — OpenAI, MarianMT, FAISS — served 100,000+ non-English speakers; recognized by Gujarat Technology University; showcased at BNI Connect
2. Emergency Alert & Response System — FastAPI, Reliance Foundation; cut triage time 40% during disaster deployments
3. Federated Healthcare Analytics Pipeline — PyTorch, Kubernetes; 1M+ records, 89% uptime, HIPAA-compliant federated learning

SKILLS: Python, SQL (MySQL, Snowflake), LLMs (OpenAI, LangChain), FAISS, Pinecone, PyTorch, Scikit-learn, FastAPI, AWS, GCP, Docker, Kubernetes, CI/CD, Airflow, Terraform, Power BI, Tableau, Agile, product roadmapping, KPI/OKRs, user research, Jira, Figma

CERTIFICATIONS: AWS Data Engineering (Sep 2025), AWS ML Foundations (Nov 2025), Kaggle Python Coder (Apr 2025)

RESPONSE STYLE:
- Use **bold** for key metrics and achievements
- Lead with impact and quantifiable outcomes
- Be compelling and specific — name technologies, projects, companies
- Recommend experience level (junior/mid/senior) when asked
- For availability details, direct to kpipwala@asu.edu`

export const CHAT_SUGGESTIONS = [
  'Is Keshvi a fit for a PM role? Show evidence.',
  'Summarize her top achievements with metrics.',
  'What technical skills has she used in production?',
  'Generate a 4-line recruiter summary with experience level.',
  'What are 5 interview questions to validate her depth?',
  'What roles fit her best?',
]
