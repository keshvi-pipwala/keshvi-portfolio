export const PROFILE = {
  name: 'Keshvi Pipwala',
  email: 'keshvipipwalan@gmail.com',
  phone: '+1 (602) 516-3404',
  linkedin: 'https://www.linkedin.com/in/keshvi-pipwala-5a7bb0247/',
  github: 'https://github.com/keshvi-pipwala',
  photo: '/keshvi.jpeg',
}

// ── Intro avatar ─────────────────────────────────────────────────────────────
// Audio file: upload your generated voice as  public/intro.mp3
// If the file is missing, the intro still runs with timed captions only.
// `at` = seconds into the audio when each caption line should appear.
// If your generated voice runs faster/slower, just nudge these numbers.
export const INTRO = {
  audio: '/intro.mp3',
  duration: 24,
  lines: [
    { text: "Hi, I'm Keshvi.", at: 0 },
    { text: 'I build AI systems that survive production.', at: 1.8 },
    { text: "At NASA's L'SPACE Program, I engineer data pipelines where integrity is non-negotiable.", at: 5.0 },
    { text: 'At ASU, I took an AI analytics platform from zero to five thousand students.', at: 10.8 },
    { text: "And I've taken three AI products from spec to ship.", at: 15.8 },
    { text: 'Look around — or ask my AI assistant for the fast version.', at: 19.4 },
  ],
}

export const EXPERIENCE = [
  {
    icon: '🚀',
    role: 'Software Engineer',
    company: "NASA L'SPACE Program",
    location: 'Tempe, AZ',
    time: 'Apr 2025 – Apr 2026',
    type: 'Full-time',
    summary: 'Engineered production-grade data infrastructure for NASA mission research — where data integrity is non-negotiable.',
    bullets: [
      'Architected and deployed **ETL validation pipelines** processing multi-source scientific research datasets, achieving **95% anomaly detection accuracy** with zero data integrity failures across all pipeline runs since launch.',
      'Eliminated manual reporting workflows for **3 active research teams** by engineering automated SQL dashboards, reducing reporting latency from weekly cycles to real-time data availability.',
      'Established engineering excellence by raising test coverage from near-zero to **80%+** using pytest and implementing GitHub Actions CI/CD, enabling safe and auditable production deployments.',
    ],
    stack: ['Python', 'SQL', 'ETL', 'PostgreSQL', 'pytest', 'GitHub Actions'],
  },
  {
    icon: '🧠',
    role: 'AI / Data Product Manager',
    company: 'ASU — School of Social & Behavioral Sciences',
    location: 'Tempe, AZ',
    time: 'Jun 2025 – May 2026',
    type: 'Full-time',
    summary: 'Led 0-to-1 product development of an AI-powered student analytics platform — defining strategy, roadmap, and success metrics for a platform that grew to thousands of users.',
    bullets: [
      'Owned full product lifecycle from discovery to launch, scaling platform from **0 to 5,000+ active users** — defined OKRs, authored PRDs, led sprint planning, and partnered with engineering through every milestone.',
      'Applied ML-driven early-warning signals to student retention workflows, directly contributing to an **18% improvement in student retention** across active cohorts through data-informed product iterations.',
      'Drove **+22% engagement lift** through structured A/B testing on 4 core product features, establishing a data-driven experimentation culture across the product team.',
    ],
    stack: ['Product Strategy', 'OKRs', 'A/B Testing', 'Python', 'SQL', 'Agile', 'Jira'],
  },
  {
    icon: '📋',
    role: 'Technical Project Manager → Lead TPM',
    company: 'Arizona State University',
    location: 'Tempe, AZ · Hybrid',
    time: 'Sep 2024 – Jun 2025',
    type: 'Part-time · Promoted twice',
    summary: 'Joined as Assistant Project Coordinator and earned two promotions in 9 months — to Technical Project Manager, then Lead TPM — by consistently owning delivery outcomes and expanding scope across campus-wide programs.',
    bullets: [
      'Progressed from **Assistant Coordinator → TPM → Lead TPM** in 9 months by taking increasing ownership of program delivery, budget accountability, and cross-functional stakeholder alignment across ASU initiatives.',
      'As Lead TPM, directed end-to-end delivery of **campus-wide technical programs**, coordinating across student leaders, faculty, IT teams, and external vendors — managing **5+ concurrent initiatives** with zero missed milestones.',
      'Implemented structured project management workflows using Smartsheet, Asana, and Jira, improving program visibility, accountability, and on-time delivery rates across all active projects.',
      'Managed vendor contracts, financial resources, and budget deliverables, ensuring alignment with project priorities and maintaining full financial accountability throughout the program lifecycle.',
      'Collected and analyzed program performance data — attendance, engagement, and cost metrics — generating leadership insights that directly informed strategic planning and improved future program outcomes.',
      'Identified and mitigated delivery risks in real time during high-attendance events, developing mitigation playbooks and contingency protocols that reduced incident escalations significantly.',
      'Mentored junior coordinators and student assistants, establishing delegation frameworks that improved team throughput while maintaining alignment with organizational objectives.',
    ],
    stack: ['Program Management', 'Smartsheet', 'Asana', 'Jira', 'Budget Management', 'Stakeholder Management', 'Risk Mitigation', 'Data Analysis'],
  },
  {
    icon: '📊',
    role: 'Technical Business Analyst',
    company: 'Grey Enterprise',
    location: 'Ahmedabad, India',
    time: 'Jan 2024 – May 2024',
    type: 'Internship',
    summary: 'Translated complex business requirements into data-driven insights and automated reporting solutions, directly influencing product adoption decisions.',
    bullets: [
      'Engineered automated data collection pipelines in **Python and SQL** across 2 sequential product launches, surfacing behavioral adoption insights that drove a **+15% lift in user uptake** within 60 days.',
      'Built **Tableau and Power BI dashboards** to replace manual Excel-based weekly reporting — saving the analytics team **3+ hours per week** and enabling self-serve data access across business stakeholders.',
      'Conducted exploratory data analysis using **Python (Pandas, NumPy)** and **Google Sheets** to identify adoption trends, segmenting user behavior across cohorts to inform product strategy decisions.',
      'Partnered with product and engineering stakeholders to translate business requirements into technical specifications, bridging strategy and execution across both product launches.',
    ],
    stack: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Google Sheets', 'Product Analytics', 'Dashboard Design', 'Business Requirements', 'Stakeholder Communication'],
  },
]
export const PROJECTS = [
  { id:'gitsense', emoji:'🔬', title:'GitSense', subtitle:'PR-review agent · I owned the spec, risk model & evals — implementation AI-assisted', tagline:'Your codebase has a 24/7 reviewer that never misses a breaking change.', live:null, github:'https://github.com/keshvi-pipwala/gitsense', impact:'A working test of a question I care about as a PM: can one person directing AI tooling ship a production-shaped agent — and where does that break?', bullets:['**Defined the product**: what a PR-review agent must catch, how risk should be scored, and what a useful Slack alert looks like — then directed an AI-assisted implementation against that spec.','**Made the platform call** to move from the Claude API to Gemini when rate limits threatened reliability — a cost/latency/quality tradeoff I owned and can defend.','**Wrote the acceptance criteria** and tested alert quality against real PRs; the spec and evals are mine, the code was AI-generated under my direction.'], stack:['Product Spec','Agent Evals','Claude/Gemini APIs','Python','FastAPI'] },
  { id:'insightiq', emoji:'💡', title:'InsightIQ', subtitle:'AI analytics tool · I owned the product spec & infra tradeoffs — implementation AI-assisted', tagline:'Upload a CSV. Ask in plain English. Get an answer and a chart.', live:'https://insightiq-frontend-jn6h.onrender.com', github:'https://github.com/keshvi-pipwala/insightiq', impact:'Built to understand the real constraints of shipping LLM analytics — grounding, latency, and infra limits — from the product seat.', bullets:['**Scoped the product** around one promise: every answer grounded in the uploaded data, no generic LLM responses — and defined the checks that enforce it.','**Owned the key constraint decision**: Render’s memory limits ruled out sentence-transformer embeddings, so I redirected the build to SQLite FTS5 retrieval — cheaper, faster, and good enough for the use case.','**Directed an AI-assisted implementation** end to end and deployed it live; my contribution is the spec, the tradeoffs, and the QA — not hand-written code.'], stack:['Product Spec','RAG','Gemini API','SQLite FTS5','React','Render'] },
  { id:'resilienceos', emoji:'🛡️', title:'ResilienceOS', subtitle:'Chaos-engineering sandbox · I owned the architecture & incident spec — implementation AI-assisted', tagline:'Find out how a distributed system breaks before users do.', live:null, github:'https://github.com/keshvi-pipwala/resilienceos', impact:'A learning build: I wanted to understand failure modes in distributed systems well enough to write credible post-mortems and incident specs.', bullets:['**Scoped the experiment surface** — which failure modes (latency injection, node crashes, network partitions) matter and what an operator needs to see when they happen.','**Specified the post-mortem output**: what an automated SRE write-up must explain (what broke, why, blast radius) for it to be useful rather than noise.','**Directed the AI-assisted build** of 5 microservices plus orchestrator against that spec; the architecture decisions and acceptance tests are mine.'], stack:['Product Spec','Incident Analysis','FastAPI','Prometheus','Claude API'] },
]
export const EDUCATION = [
  { school:'Arizona State University', degree:'M.S. Information Technology & Management', meta:'Aug 2024 – May 2026 · Tempe, AZ', gpa:'3.5 / 4.0', star:false, note:'Completed while working two concurrent roles — data engineering at NASA L’SPACE and AI product management at ASU.' },
  { school:'Gujarat Technology University', degree:'B.E. Computer Engineering', meta:'Aug 2021 – Jun 2024 · Surat, India', gpa:'3.8 / 4.0', star:false, note:'Founded Kaleidoscope — a student tech community that ran workshops, events, and hackathons from scratch.' },
]
export const CERTIFICATIONS = [
  { issuer:'Anthropic Education', name:'AI Fluency: Framework & Foundations', date:'Jul 2026', color:'rgba(217,119,87,0.09)', border:'rgba(217,119,87,0.4)', url:'https://verify.skilljar.com/c/apzemcwh4c6r' },
  { issuer:'Anthropic Education', name:'Claude 101', date:'Mar 2026', color:'rgba(217,119,87,0.09)', border:'rgba(217,119,87,0.4)', url:'https://verify.skilljar.com/c/d4pqqrbgvwx2' },
  { issuer:'Amazon Web Services', name:'AWS Academy — Data Engineering', date:'Sep 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)', url:'https://www.credly.com/badges/4c16233e-6f16-4c34-ba88-d2bdf5d21fbf' },
  { issuer:'Amazon Web Services', name:'AWS Academy — ML Foundations', date:'Nov 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)', url:'https://www.credly.com/badges/4c16233e-6f16-4c34-ba88-d2bdf5d21fbf/public_url' },
  { issuer:'AnitaB.org', name:'Premium Student Member', date:'2026', color:'rgba(255,110,64,0.08)', border:'rgba(255,110,64,0.35)', url:'https://files.manuscdn.com/user_upload_by_module/session_file/310419663029697690/eKyxHClycssGVcLy.png' },
  { issuer:'Kaggle', name:'Python Coder Badge', date:'Apr 2025', color:'rgba(32,178,170,0.1)', border:'rgba(32,178,170,0.35)', url:'https://www.kaggle.com/certification/badges/keshvipipwala/30' },
]
export const SKILLS = {
  'Languages & Core':['Python','SQL','JavaScript','TypeScript','Bash','C++'],
  'AI / ML & NLP':['LLMs','LangChain','RAG Architecture','ChromaDB','FAISS','PyTorch','Prompt Engineering'],
  'Data Engineering':['ETL Pipelines','Airflow','dbt','Kafka','Spark','Snowflake','Pandas','Tableau','Power BI'],
  'Distributed Systems':['Celery','Redis','Microservices','WebSockets','Docker','Kubernetes','CI/CD'],
  'Cloud & Backend':['AWS','GCP','FastAPI','PostgreSQL','Terraform','Docker Compose'],
  'Product & Management':['Product Roadmapping','OKRs','A/B Testing','Agile','Jira','Smartsheet','Stakeholder Management','Risk Mitigation'],
}
export const CHAT_SYSTEM_PROMPT = `You are Keshvi Pipwala's AI recruiting assistant. Answer directly and specifically, and never overstate. Keshvi is an AI/Data Product Manager: she directs AI tooling, owns product decisions, and ships AI-assisted builds against her own specs and evals. Recent MS graduate, Information Technology & Project Management, Arizona State University (3.5 GPA, earned while working two concurrent roles). Experience (all recently completed — she is now actively seeking her next role): Software Engineer at NASA's L'SPACE Program (Apr 2025 – Apr 2026), AI/Data Product Manager at ASU (Jun 2025 – May 2026), Technical Project Manager → Lead TPM at ASU (promoted twice in 9 months), and a Technical Business Analyst internship at Grey Enterprise. Certifications: Anthropic AI Fluency and Claude 101, AWS Academy Data Engineering and ML Foundations. AnitaB.org premium student member. Her portfolio projects (GitSense, InsightIQ, ResilienceOS) are AI-directed builds — product spec, tradeoff decisions, and QA by her; implementation AI-assisted. She is transparent about this. On F-1 OPT with roughly three years of work authorization. Email: keshvipipwalan@gmail.com`
export const CHAT_SUGGESTIONS = [
  "How does she work with AI tooling?",
  "What product decisions has she owned?",
  "What's her visa situation?",
  "Why AI product management?",
]
