export const PROFILE = {
  name: 'Keshvi Pipwala',
  email: 'keshvipipwalan@gmail.com',
  phone: '+1 (602) 516-3404',
  linkedin: 'https://www.linkedin.com/in/keshvi-pipwala-5a7bb0247/',
  github: 'https://github.com/keshvi-pipwala',
  photo: '/keshvi.jpeg',
}
export const EXPERIENCE = [
  {
    icon: '🚀',
    role: 'Software Engineer',
    company: "NASA L'SPACE Program",
    location: 'Tempe, AZ',
    time: 'Apr 2025 – Present',
    type: 'Full-time',
    summary: 'Engineering production-grade data infrastructure for NASA mission research — where data integrity is non-negotiable.',
    bullets: [
      'Architected and deployed **ETL validation pipelines** processing multi-source scientific research datasets, achieving **95% anomaly detection accuracy** with zero data integrity failures across all pipeline runs since launch.',
      'Eliminated manual reporting workflows for **3 active research teams** by engineering automated SQL dashboards, reducing reporting latency from weekly cycles to real-time data availability.',
      'Established engineering excellence standards by raising test coverage from near-zero to **80%+** using pytest and implementing GitHub Actions CI/CD, enabling auditable and safe production deployments.',
    ],
    stack: ['Python', 'SQL', 'ETL', 'PostgreSQL', 'pytest', 'GitHub Actions'],
  },
  {
    icon: '🧠',
    role: 'AI / Data Product Manager',
    company: 'ASU — School of Social & Behavioral Sciences',
    location: 'Tempe, AZ',
    time: 'Jun 2025 – Present',
    type: 'Full-time',
    summary: 'Driving 0-to-1 product development of an AI-powered student analytics platform — defining strategy, roadmap, and success metrics for a platform now serving thousands of users.',
    bullets: [
      'Owned full product lifecycle from discovery to launch, scaling platform from **0 to 5,000+ active users** — defined OKRs, authored PRDs, led sprint planning, and partnered with engineering through every milestone.',
      'Applied ML-driven early-warning signals to student retention workflows, directly contributing to an **18% improvement in student retention** across active cohorts through data-informed product iterations.',
      'Drove **+22% engagement lift** through structured A/B testing on 4 core product features, establishing a data-driven experimentation culture across the product team.',
    ],
    stack: ['Product Strategy', 'OKRs', 'A/B Testing', 'Python', 'SQL', 'Agile', 'Jira'],
  },
  {
    icon: '📋',
    role: 'Lead Technical Project Manager',
    company: 'Arizona State University',
    location: 'Tempe, AZ · Hybrid',
    time: 'Mar 2025 – Jun 2025',
    type: 'Part-time',
    summary: 'Led end-to-end program delivery for campus-wide technical initiatives, managing cross-functional teams across IT, faculty, and external vendors.',
    bullets: [
      'Directed cross-functional delivery of **campus-wide technical programs**, coordinating across student leaders, faculty, IT teams, and external vendors to ensure on-time, on-budget execution.',
      'Built and maintained comprehensive project plans, timelines, and milestones using Smartsheet and Asana, improving program visibility and accountability across **5+ concurrent initiatives**.',
      'Identified and mitigated delivery risks in real time during high-attendance events, reducing incident escalations by proactively developing mitigation playbooks and contingency protocols.',
    ],
    stack: ['Program Management', 'Smartsheet', 'Asana', 'Jira', 'Stakeholder Management', 'Risk Mitigation'],
  },
  {
    icon: '🗂️',
    role: 'Technical Project Manager',
    company: 'Arizona State University',
    location: 'Tempe, AZ',
    time: 'Nov 2024 – Mar 2025',
    type: 'Part-time',
    summary: 'Managed logistics, digital platforms, and technical requirements for hybrid and virtual campus programs, driving process improvements across the organization.',
    bullets: [
      'Implemented structured project management workflows using Smartsheet, Trello, and Excel/Google Sheets, improving program delivery accountability and cross-team visibility across all active projects.',
      'Managed vendor contracts, financial resources, and budget deliverables, aligning spending with project priorities and maintaining financial accountability throughout program execution.',
      'Collected and analyzed program data — attendance, engagement, and cost metrics — to generate leadership insights that directly informed strategic planning for future programs.',
      'Mentored junior coordinators and student assistants, establishing delegation frameworks that improved team throughput while maintaining alignment with organizational objectives.',
    ],
    stack: ['Project Management', 'Budget Management', 'Smartsheet', 'Trello', 'Data Analysis', 'Team Leadership'],
  },
  {
    icon: '🤝',
    role: 'Assistant Project Coordinator',
    company: 'Arizona State University',
    location: 'Tempe, AZ',
    time: 'Sep 2024 – Nov 2024',
    type: 'Part-time',
    summary: 'Supported end-to-end coordination of student programs and events, partnering with faculty and external organizations to deliver high-impact campus initiatives.',
    bullets: [
      'Coordinated planning and execution of student programs and events, managing seamless logistics, scheduling, and vendor communication across multiple concurrent initiatives.',
      'Supported budget management and event documentation — contracts, expense tracking, and post-event reports — ensuring financial accuracy and compliance throughout the program lifecycle.',
      'Partnered with student leaders, faculty, and external organizations to deliver diverse, inclusive, and high-impact activities for the ASU campus community.',
    ],
    stack: ['Event Coordination', 'Budget Tracking', 'Vendor Management', 'Cross-functional Collaboration'],
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
      'Engineered automated data collection pipelines across **2 sequential product launches**, surfacing behavioral adoption insights that drove a **+15% lift in user uptake** within the first 60 days post-launch.',
      'Designed and deployed self-serve SQL reporting dashboards, eliminating a manual weekly aggregation process and saving the analytics team **3+ hours per week** while democratizing data access.',
      'Collaborated with product and engineering stakeholders to translate business requirements into technical specifications, bridging the gap between strategy and execution across both product launches.',
    ],
    stack: ['Python', 'SQL', 'Product Analytics', 'Dashboard Design', 'Business Requirements', 'Stakeholder Communication'],
  },
]
export const PROJECTS = [
  { id:'gitsense', emoji:'🔬', title:'GitSense', subtitle:'Autonomous AI Agent · Python · Claude API · FastAPI · Docker', tagline:'Your codebase has a 24/7 engineer who never misses a breaking change.', live:null, github:'https://github.com/keshvi-pipwala/gitsense', impact:'Engineers lose **23-42% of dev time** to technical debt. GitSense monitors continuously so they do not have to.', bullets:['Architected a **7-step autonomous pipeline**: GitHub webhook to diff parsing to ChromaDB retrieval to Claude reasoning to risk scoring to Slack alert.','Built for **stateless horizontal scale** — Redis task queue with Celery workers means scaling is adding containers, not rewriting architecture.','Production-hardened from day one: HMAC webhook auth, structured JSON logging, health check endpoints, graceful failure handling.'], stack:['Python','Claude API','Celery','Redis','ChromaDB','FastAPI','Docker'] },
  { id:'insightiq', emoji:'💡', title:'InsightIQ', subtitle:'AI Analytics Platform · FastAPI · React · Gemini AI · RAG', tagline:'Upload a CSV. Ask in plain English. Get an answer and a chart in seconds.', live:'https://insightiq-frontend-jn6h.onrender.com', github:'https://github.com/keshvi-pipwala/insightiq', impact:'Most teams wait days for analyst bandwidth. InsightIQ removes that bottleneck entirely.', bullets:['Built a **RAG pipeline** grounding every LLM answer in the actual uploaded data — no hallucinations, no generic responses.','Shipped **real-time streaming responses** with auto-selected chart types — users see results forming live, not waiting on a spinner.','Clean layered architecture separating LLM inference, data processing, and API — built to test, built to extend.'], stack:['FastAPI','React','Gemini AI','RAG','Docker','Python'] },
  { id:'resilienceos', emoji:'🛡️', title:'ResilienceOS', subtitle:'Chaos Engineering Platform · FastAPI · Docker · Prometheus · D3.js', tagline:'Find out how your distributed system breaks before your users do.', live:null, github:'https://github.com/keshvi-pipwala/resilienceos', impact:'Most teams discover failure modes in production. ResilienceOS surfaces them in development.', bullets:['Built **5 independent FastAPI microservices** with a central chaos orchestrator — inject latency, crash nodes, or partition networks on demand.','Live **D3.js topology visualization** shows service health and failure propagation in real time as experiments run.','Integrated **Prometheus metrics and Claude API** for automated SRE post-mortems — the system explains what broke and why.'], stack:['Python','FastAPI','Docker','Prometheus','Grafana','D3.js','Claude API'] },
]
export const EDUCATION = [
  { school:'Arizona State University', degree:'M.S. Information Technology & Management', meta:'Aug 2024 – May 2026 · Tempe, AZ', gpa:'4.0 / 4.0', star:true, note:'Maintained a perfect GPA while working full-time at NASA and ASU simultaneously.' },
  { school:'Gujarat Technology University', degree:'B.E. Computer Engineering', meta:'Aug 2021 – Jun 2024 · Surat, India', gpa:'3.8 / 4.0', star:false, note:'Founded Kaleidoscope — a student tech community that ran workshops, events, and hackathons from scratch.' },
]
export const CERTIFICATIONS = [
  { issuer:'Amazon Web Services', name:'AWS Academy — Data Engineering', date:'Sep 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)', url:'https://www.credly.com/badges/4c16233e-6f16-4c34-ba88-d2bdf5d21fbf' },
  { issuer:'Amazon Web Services', name:'AWS Academy — ML Foundations', date:'Nov 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)', url:'https://www.credly.com/badges/4c16233e-6f16-4c34-ba88-d2bdf5d21fbf/public_url' },
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
export const CHAT_SYSTEM_PROMPT = `You are Keshvi Pipwala's AI recruiting assistant. Answer directly and specifically. She is simultaneously a Software Engineer at NASA and an AI/Data PM at ASU — both full-time — while maintaining a 4.0 GPA. She has 3+ years of combined experience across software engineering, product management, and technical project management. Key facts: 95% anomaly detection accuracy at NASA, 5000+ users and 18% retention lift at ASU, led 5+ concurrent campus programs at Arizona State University as Lead Technical PM, built GitSense (autonomous AI agent), InsightIQ (RAG analytics), ResilienceOS (chaos engineering). Email: keshvipipwalan@gmail.com`
export const CHAT_SUGGESTIONS = [
  "What makes her stand out from other PM candidates?",
  "Can she handle a senior engineering or PM role?",
  "Walk me through her most impressive technical project.",
  "Why is she the right hire right now?",
]
