export const PROFILE = {
  name: 'Keshvi Pipwala',
  email: 'keshvipipwalan@gmail.com',
  phone: '+1 (602) 516-3404',
  linkedin: 'https://www.linkedin.com/in/keshvi-pipwala-5a7bb0247/',
  github: 'https://github.com/keshvi-pipwala',
  photo: '/keshvi.jpeg',
}
export const EXPERIENCE = [
  { icon:'🚀', role:'Software Engineer', company:"NASA L'SPACE Program", location:'Tempe, AZ', time:'Apr 2025 – Present', type:'Full-time', summary:'Building data infrastructure for NASA research programs — designed validation pipelines that maintain integrity across large scientific datasets.', bullets:['Built ETL pipelines processing scientific research datasets — achieved **95% anomaly detection accuracy** with zero integrity failures across mission data.','Replaced manual reporting with **live dashboards for 3 research teams**.','Introduced **pytest coverage to 80%+** and GitHub Actions CI.'], stack:['Python','SQL','ETL','PostgreSQL','pytest','GitHub Actions'] },
  { icon:'🧠', role:'AI / Data Product Manager', company:'ASU', location:'Tempe, AZ', time:'Jun 2025 – Present', type:'Full-time', summary:'Leading 0 to 1 build of an AI-powered student analytics platform.', bullets:['Grew platform to **5,000+ active users** from zero.','Increased student retention by **18%** using ML-powered signals.','Drove **+22% engagement** through A/B testing.'], stack:['Product Strategy','OKRs','A/B Testing','Python','SQL','Agile'] },
  { icon:'📊', role:'Technical Business Analyst', company:'Grey Enterprise', location:'Ahmedabad, India', time:'Jan 2024 – May 2024', type:'Internship', summary:'Replaced gut-feel decisions with data pipelines across two product launches.', bullets:['Drove **+15% adoption lift** within 60 days.','Eliminated **3 hours/week** of manual work with SQL dashboards.'], stack:['Python','SQL','Product Analytics'] },
]
export const PROJECTS = [
  { id:'gitsense', emoji:'🤖', title:'GitSense', subtitle:'Autonomous AI Agent · Python · Claude API · FastAPI · Docker', tagline:'Your codebase has a 24/7 engineer who never misses a breaking change.', live:null, github:'https://github.com/keshvi-pipwala/gitsense', impact:'Engineers waste **23-42% of dev time** on technical debt. GitSense runs continuously.', bullets:['Built a **7-step agentic pipeline**: webhook to diff parsing to semantic search to Claude reasoning to Slack alert.','Achieved **stateless horizontal scale** with Redis and ChromaDB.','Production-hardened with HMAC security, structured logging, health checks.'], stack:['Python','Claude API','Celery','Redis','ChromaDB','FastAPI','Docker'] },
  { id:'insightiq', emoji:'📊', title:'InsightIQ', subtitle:'AI Analytics Platform · FastAPI · React · Gemini AI · RAG', tagline:'Upload a CSV. Ask in plain English. Get an answer and a chart instantly.', live:'https://insightiq-frontend-jn6h.onrender.com', github:'https://github.com/keshvi-pipwala/insightiq', impact:'Eliminates the SQL bottleneck. **Auto-generates 5 business insights** on upload.', bullets:['Built **RAG architecture** grounding every answer in real CSV data.','Shipped **real-time streaming responses** with auto-selected charts.','Clean internal API separating LLM inference from data layer.'], stack:['FastAPI','React','Gemini AI','RAG','Docker','Python'] },
  { id:'crosslingual', emoji:'🌐', title:'Cross-Lingual Knowledge Engine', subtitle:'OpenAI · MarianMT · FAISS · NLP', tagline:'Government information made accessible to 100M+ non-English speakers.', live:null, github:null, impact:'Recognized by Gujarat Technology University. **100,000+ non-English speakers** served.', bullets:['Built multilingual retrieval across **10+ regional Indian languages**.','Implemented **semantic search** over translated documents.'], stack:['OpenAI','MarianMT','FAISS','Python','NLP'] },
]
export const EDUCATION = [
  { school:'Arizona State University', degree:'M.S. Information Technology & Management', meta:'Aug 2024 – May 2026 · Tempe, AZ', gpa:'4.0 / 4.0', star:true, note:'Perfect GPA while working full-time at NASA and ASU simultaneously.' },
  { school:'Gujarat Technology University', degree:'B.E. Computer Engineering', meta:'Aug 2021 – Jun 2024 · Surat, India', gpa:'3.8 / 4.0', star:false, note:'Founded Kaleidoscope Club — built the tech community from scratch.' },
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
export const CHAT_SYSTEM_PROMPT = `You are Keshvi Pipwala's AI recruiting assistant. Be direct and specific. She is a Software Engineer at NASA and AI Product Manager at ASU simultaneously. GPA 4.0. Key metrics: 5000+ users, 95% accuracy, 18% retention lift, 100K+ records zero failures. Email: keshvipipwalan@gmail.com`
export const CHAT_SUGGESTIONS = [
  'Why should I hire her over 1,000 other candidates?',
  'Is she ready for a senior role at Google or Meta?',
  'Give me 5 metrics that prove her impact.',
  'What can she do that most engineers cannot?',
]
