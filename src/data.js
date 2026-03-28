export const PROFILE = {
  name: 'Keshvi Pipwala',
  email: 'keshvipipwalan@gmail.com',
  phone: '+1 (602) 516-3404',
  linkedin: 'https://www.linkedin.com/in/keshvi-pipwala-5a7bb0247/',
  github: 'https://github.com/keshvi-pipwala',
  photo: '/keshvi.jpeg',
}
export const EXPERIENCE = [
  { icon:'🚀', role:'Software Engineer', company:"NASA L'SPACE Program", location:'Tempe, AZ', time:'Apr 2025 – Present', type:'Full-time', summary:'Writing production data infrastructure for NASA mission research — where a silent data bug is not a recoverable situation.', bullets:['Designed and deployed **ETL validation pipelines** for NASA research datasets — cut data anomalies by **95%** with zero integrity failures across every pipeline run since launch.','Eliminated manual weekly reporting for **3 active research teams** by building automated SQL dashboards — real-time data replaced spreadsheets sent by email.','Raised test coverage from near-zero to **80%+** using pytest and GitHub Actions CI — every deployment is now auditable and safe to roll back.'], stack:['Python','SQL','ETL','PostgreSQL','pytest','GitHub Actions'] },
  { icon:'🧠', role:'AI / Data Product Manager', company:'ASU — School of Social & Behavioral Sciences', location:'Tempe, AZ', time:'Jun 2025 – Present', type:'Full-time', summary:'Leading product and data for an AI platform that helps ASU identify at-risk students before they drop out.', bullets:['Took the platform from **0 to 5,000+ active users** — owned the roadmap, wrote the specs, and worked through every sprint with engineering to ship it.','Collaborated directly on the ML early-warning pipeline — improvements drove an **18% increase in student retention** across cohorts using the platform.','Ran structured **A/B tests on 4 core features** — drove +22% engagement by cutting what did not work and compounding on what did.'], stack:['Product Strategy','OKRs','A/B Testing','Python','SQL','Agile'] },
  { icon:'📊', role:'Technical Business Analyst', company:'Grey Enterprise', location:'Ahmedabad, India', time:'Jan 2024 – May 2024', type:'Internship', summary:'First role where I connected data directly to product decisions — and saw the measurable difference it makes.', bullets:['Built automated data collection across **2 product launches** — the adoption insights surfaced drove a **+15% lift** in user uptake within 60 days.','Replaced a manual weekly reporting process with self-serve SQL dashboards, saving the team **3+ hours every week** and removing the analyst bottleneck.'], stack:['Python','SQL','Product Analytics','Dashboard Design'] },
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
  { issuer:'Amazon Web Services', name:'AWS Academy — Data Engineering', date:'Sep 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)' },
  { issuer:'Amazon Web Services', name:'AWS Academy — ML Foundations', date:'Nov 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)' },
  { issuer:'Kaggle', name:'Python Coder Badge', date:'Apr 2025', color:'rgba(32,178,170,0.1)', border:'rgba(32,178,170,0.35)' },
]
export const SKILLS = {
  'Languages & Core':['Python','SQL','JavaScript','TypeScript','Bash','C++'],
  'AI / ML & NLP':['LLMs','LangChain','RAG Architecture','ChromaDB','FAISS','PyTorch','Prompt Engineering'],
  'Data Engineering':['ETL Pipelines','Airflow','dbt','Kafka','Spark','Snowflake','Pandas','Tableau','Power BI'],
  'Distributed Systems':['Celery','Redis','Microservices','WebSockets','Docker','Kubernetes','CI/CD'],
  'Cloud & Backend':['AWS','GCP','FastAPI','PostgreSQL','Terraform','Docker Compose'],
  'Product & Management':['Product Roadmapping','OKRs','A/B Testing','Agile','Jira','Figma'],
}
export const CHAT_SYSTEM_PROMPT = `You are Keshvi Pipwala's AI recruiting assistant. Answer directly and specifically. She is simultaneously a Software Engineer at NASA and an AI/Data PM at ASU — both full-time — while maintaining a 4.0 GPA. Key facts: 95% anomaly detection accuracy at NASA, 5000+ users and 18% retention lift at ASU, built GitSense (autonomous AI agent), InsightIQ (RAG analytics), ResilienceOS (chaos engineering). Email: keshvipipwalan@gmail.com`
export const CHAT_SUGGESTIONS = [
  "What makes her stand out from other SWE candidates?",
  "Can she handle a senior engineering role?",
  "Walk me through her most impressive technical project.",
  "Why is she the right hire right now?",
]
