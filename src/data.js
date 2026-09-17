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
export const INTRO = {
  audio: '/intro.mp3',
  duration: 24,
  lines: [
    { text: "Hi, I'm Keshvi.", at: 0 },
    { text: 'I ship AI systems that survive production.', at: 1.8 },
    { text: "At NASA's L'SPACE Program, I built data pipelines where integrity is non-negotiable.", at: 5.0 },
    { text: 'At ASU, I took an AI analytics platform from zero to five thousand students.', at: 10.8 },
    { text: "Since then I've shipped five AI products from spec to live URL.", at: 15.8 },
    { text: 'Look around — or ask my AI assistant for the fast version.', at: 19.4 },
  ],
}

export const EXPERIENCE = [
  {
    icon: '🧠',
    role: 'AI / Data Product Manager',
    company: 'ASU — School of Social & Behavioral Sciences',
    location: 'Tempe, AZ',
    time: 'Jun 2025 – May 2026',
    type: '0 → 1',
    summary: 'Owned an AI-powered student analytics platform from first PRD to 5,000+ active users — strategy, roadmap, experimentation, and the retention metric the platform existed to move.',
    bullets: [
      'Owned the full product lifecycle from discovery to launch, scaling the platform from **0 to 5,000+ active users** — defined OKRs, authored PRDs, ran sprint planning, and partnered with engineering through every milestone.',
      'Turned ML early-warning signals into retention workflows advisors actually used, contributing to an **18% improvement in student retention** across active cohorts.',
      'Drove a **+22% engagement lift** through structured A/B tests on 4 core features — and left behind an experimentation playbook the team still runs.',
    ],
    stack: ['Product Strategy', 'PRDs', 'OKRs', 'A/B Testing', 'Python', 'SQL', 'Agile', 'Jira'],
  },
  {
    icon: '🚀',
    role: 'Software Engineer',
    company: "NASA L'SPACE Program",
    location: 'Tempe, AZ',
    time: 'Apr 2025 – Apr 2026',
    type: 'NASA-funded academy · via ASU',
    summary: "Engineered the data infrastructure behind a NASA mission-concept research effort — where a silent data error is a mission error.",
    bullets: [
      'Architected and deployed **ETL validation pipelines** over multi-source scientific datasets, reaching **95% anomaly-detection accuracy** with zero data-integrity failures across every pipeline run since launch.',
      'Replaced weekly manual reporting for **3 active research teams** with automated SQL dashboards — reporting latency went from a week to real time.',
      'Took test coverage from near-zero to **80%+** with pytest and stood up GitHub Actions CI/CD, so every deployment was auditable and reversible.',
    ],
    stack: ['Python', 'SQL', 'ETL', 'PostgreSQL', 'pytest', 'GitHub Actions'],
  },
  {
    icon: '📋',
    role: 'Technical Project Manager → Lead TPM',
    company: 'Arizona State University',
    location: 'Tempe, AZ · Hybrid',
    time: 'Sep 2024 – Jun 2025',
    type: 'Promoted twice in 9 months',
    summary: 'Joined as Assistant Project Coordinator and was promoted twice in nine months — to TPM, then Lead TPM — by owning delivery outcomes across campus-wide programs.',
    bullets: [
      'Progressed **Assistant Coordinator → TPM → Lead TPM** in 9 months by taking on program delivery, budget accountability, and cross-functional stakeholder alignment.',
      'As Lead TPM, directed end-to-end delivery of **campus-wide technical programs** across student leaders, faculty, IT, and external vendors — **5+ concurrent initiatives, zero missed milestones**.',
      'Rolled out structured PM workflows in Smartsheet, Asana, and Jira, lifting visibility, accountability, and on-time delivery across every active project.',
      'Managed vendor contracts, financial resources, and budget deliverables with full financial accountability through the program lifecycle.',
      'Analyzed attendance, engagement, and cost data into leadership insights that directly shaped the next planning cycle.',
      'Built risk-mitigation playbooks and contingency protocols for high-attendance events, cutting incident escalations.',
      'Mentored junior coordinators and student assistants with a delegation framework that raised team throughput.',
    ],
    stack: ['Program Management', 'Smartsheet', 'Asana', 'Jira', 'Budget Management', 'Vendor Management', 'Risk Mitigation', 'Data Analysis'],
  },
  {
    icon: '📊',
    role: 'Technical Business Analyst',
    company: 'Grey Enterprise',
    location: 'Ahmedabad, India',
    time: 'Jan 2024 – May 2024',
    type: 'Internship',
    summary: 'Turned two product launches into instrumented, self-serve analytics — and the adoption insights that followed moved the product roadmap.',
    bullets: [
      'Engineered automated data-collection pipelines in **Python and SQL** across 2 sequential product launches, surfacing adoption insights that drove a **+15% lift in user uptake** within 60 days.',
      'Built **Tableau and Power BI dashboards** that retired manual Excel reporting — **3+ hours/week** back to the analytics team and self-serve access for business stakeholders.',
      'Ran cohort-level exploratory analysis in **Python (Pandas, NumPy)** to segment user behavior and inform product strategy.',
      'Translated business requirements into technical specs with product and engineering across both launches.',
    ],
    stack: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Product Analytics', 'Business Requirements'],
  },
]

// ── Projects ─────────────────────────────────────────────────────────────────
// `group` drives two headings on the Projects page:
//   'company'  → "Built for a specific company"  (shown first — it's the FDE proof)
//   'platform' → "AI-directed platform builds"
// If Projects.jsx doesn't read `group` yet, it renders one flat list — still fine.
export const PROJECTS = [
  {
    id: 'close-copilot', group: 'company', emoji: '🧾',
    title: 'Close Copilot',
    subtitle: 'Agent-assisted transaction categorization · built for a fintech close workflow · I owned the trust model, thresholds & eval set — implementation AI-assisted',
    tagline: 'Auto-post what the agent is sure about. Route everything else to a human. Zero wrong auto-posts.',
    live: 'https://close-copilot.vercel.app',
    github: 'https://github.com/keshvi-pipwala/close-copilot',
    impact: '100% precision on auto-posted rows and 96.2% overall accuracy on a 104-transaction labeled set — the number a controller actually cares about is the first one.',
    bullets: [
      '**Designed the trust model, not just the classifier**: the agent scores its own confidence on every transaction; rows ≥ 0.85 post automatically, the rest land in a human review queue with the agent\'s reasoning attached.',
      '**Built the labeled eval set (104 transactions)** and chose the threshold by walking the precision/recall curve — accepting a lower auto-post rate to hit 100% precision, because a wrong auto-post costs more than a review click.',
      '**Shipped it live** with CSV upload, anomaly flagging, and a real-time reconciliation summary; optional bring-your-own Claude API key.',
    ],
    stack: ['Product Spec', 'Confidence Routing', 'Human-in-the-Loop', 'Eval Design', 'TypeScript', 'Claude API', 'Vercel'],
  },
  {
    id: 'submissionclear', group: 'company', emoji: '📨',
    title: 'SubmissionClear',
    subtitle: 'AI teammate for insurance submission intake · built for FurtherAI (Forward Deployed Engineer application) · I owned the workflow map, extraction spec & routing rules — implementation AI-assisted',
    tagline: 'Broker email in. Cleared, enriched, triaged submission out. Anything under 90% confidence goes to a human.',
    live: 'https://keshvi-pipwala.github.io/submissionclear/',
    github: 'https://github.com/keshvi-pipwala/submissionclear',
    impact: 'Built in days against a real underwriting workflow: ~32 minutes of manual clearance per submission, ~50 of ~500 available fields captured, 30–40% of underwriter time on admin. The prototype attacks all three.',
    bullets: [
      '**Mapped the agent pipeline to the customer\'s actual workflow**: classify attachments → extract structured fields with per-field confidence → cross-document validation → third-party enrichment (FMCSA, FEMA flood zones, fire classifications) → eligibility checks → underwriter triage.',
      '**Specified source-grounded extraction** — every value is tied to the document and location it came from, so an underwriter can verify in one click instead of re-reading the packet.',
      '**Wrote the "how this maps to what FurtherAI already does" section myself** — the point of a forward-deployed artifact is showing you understand the product you\'d be extending, not just the tech.',
    ],
    stack: ['Workflow Mapping', 'Document Extraction', 'Confidence Routing', 'Third-Party Enrichment', 'Agent Pipeline Design'],
  },
  {
    id: 'litellm-gateway', group: 'company', emoji: '🔀',
    title: 'Resilient LLM Gateway',
    subtitle: 'Multi-provider LLM routing with automatic failover · the reusable answer to the rate-limit problem that hit GitSense · I owned the failure-mode spec — implementation AI-assisted',
    tagline: 'One interface across providers. When one degrades, traffic moves before users notice.',
    live: null,
    github: 'https://github.com/keshvi-pipwala/litellm-resilient-gateway',
    impact: 'GitSense taught me that a single-provider LLM dependency is a production incident waiting to happen. This is the generalized fix — built once, reusable in every later project.',
    bullets: [
      '**Specified the failure modes worth handling**: rate limits, elevated latency, 5xx bursts, and provider outages — and what "degraded" means for each before failover triggers.',
      '**Defined the routing policy** on top of LiteLLM: ordered fallbacks across providers, retries with backoff, and cooldowns so a flapping provider doesn\'t get hammered.',
      '**Kept the app contract stable** — callers see one interface; provider switching is invisible above the gateway.',
    ],
    stack: ['LiteLLM', 'Python', 'Failover Design', 'Reliability', 'Provider Routing'],
  },
  {
    id: 'gitsense', group: 'platform', emoji: '🔬',
    title: 'GitSense',
    subtitle: 'PR-review agent · I owned the spec, risk model & evals — implementation AI-assisted',
    tagline: 'Your codebase has a 24/7 reviewer that never misses a breaking change.',
    live: null,
    github: 'https://github.com/keshvi-pipwala/gitsense',
    impact: 'A working test of a question I care about as a PM: can one person directing AI tooling ship a production-shaped agent — and where does that break? (Answer: at the LLM provider. See the gateway above.)',
    bullets: [
      '**Defined the product**: what a PR-review agent must catch, how risk is scored across a 7-step pipeline (diff → blast radius → history → tech debt), and what a Slack alert has to say to be worth interrupting someone.',
      '**Made the platform call** to move from the Claude API to Gemini when rate limits threatened reliability — a cost/latency/quality tradeoff I owned and can defend.',
      '**Wrote the acceptance criteria** and tested alert quality against real PRs; the spec and evals are mine, the six-service Docker stack (FastAPI · Celery · Postgres · ChromaDB · Redis · React) was AI-generated under my direction.',
    ],
    stack: ['Product Spec', 'Agent Evals', 'Claude/Gemini APIs', 'Python', 'FastAPI', 'Celery', 'ChromaDB'],
  },
  {
    id: 'insightiq', group: 'platform', emoji: '💡',
    title: 'InsightIQ',
    subtitle: 'AI analytics tool · I owned the product spec & infra tradeoffs — implementation AI-assisted',
    tagline: 'Upload a CSV. Ask in plain English. Get an answer and a chart.',
    live: 'https://insightiq-frontend-jn6h.onrender.com',
    github: 'https://github.com/keshvi-pipwala/insightiq',
    impact: 'Built to understand the real constraints of shipping LLM analytics — grounding, latency, and infra limits — from the product seat.',
    bullets: [
      '**Scoped the product around one promise**: every answer grounded in the uploaded data, no generic LLM responses — and defined the checks that enforce it.',
      '**Owned the key constraint decision**: Render\'s memory limits ruled out sentence-transformer embeddings, so I redirected retrieval to SQLite FTS5 — cheaper, faster, and good enough for the use case. Shipped, not shelved.',
      '**Directed the implementation end to end and deployed it live**; my contribution is the spec, the tradeoffs, and the QA — not hand-written code.',
    ],
    stack: ['Product Spec', 'RAG', 'Gemini API', 'SQLite FTS5', 'React', 'FastAPI', 'Render'],
  },
  {
    id: 'resilienceos', group: 'platform', emoji: '🛡️',
    title: 'ResilienceOS',
    subtitle: 'Chaos-engineering sandbox · I owned the architecture & incident spec — implementation AI-assisted',
    tagline: 'Find out how a distributed system breaks before users do.',
    live: null,
    github: 'https://github.com/keshvi-pipwala/resilienceos',
    impact: 'A learning build: I wanted to understand failure modes in distributed systems well enough to write credible post-mortems and incident specs. 53 integration tests say the failures are real.',
    bullets: [
      '**Scoped the experiment surface** — five fault types (latency, errors, partitions, resource exhaustion, service kills) and three named scenarios (Cascade Failure, Slow Death, Split Brain) — and what an operator needs to see when they fire.',
      '**Specified the post-mortem output**: what an automated SRE write-up must explain (what broke, why, blast radius, timeline) for it to be useful rather than noise.',
      '**Directed the build** of 5 microservices + control plane + chaos agent with Prometheus/Grafana observability and circuit breakers; the architecture decisions and the 53-test acceptance suite are mine.',
    ],
    stack: ['Product Spec', 'Incident Analysis', 'FastAPI', 'Prometheus', 'Grafana', 'Docker', 'Claude API'],
  },
]

export const EDUCATION = [
  { school:'Arizona State University', degree:'M.S. Information Technology & Management', meta:'Aug 2024 – May 2026 · Tempe, AZ', gpa:'3.5 / 4.0', star:false, note:'Completed while working two concurrent roles — data engineering at NASA L\'SPACE and AI product management at ASU.' },
  { school:'Gujarat Technological University', degree:'B.E. Computer Engineering', meta:'Aug 2021 – Jun 2024 · Surat, India', gpa:'3.8 / 4.0', star:false, note:'Founded Kaleidoscope — a student tech community I built from zero into a running program of workshops, events, and hackathons.' },
]

export const CERTIFICATIONS = [
  { issuer:'Anthropic Education', name:'AI Fluency: Framework & Foundations', date:'Jul 2026', color:'rgba(217,119,87,0.09)', border:'rgba(217,119,87,0.4)', url:'https://verify.skilljar.com/c/apzemcwh4c6r' },
  { issuer:'Anthropic Education', name:'Claude 101', date:'Mar 2026', color:'rgba(217,119,87,0.09)', border:'rgba(217,119,87,0.4)', url:'https://verify.skilljar.com/c/d4pqqrbgvwx2' },
  { issuer:'Amazon Web Services', name:'AWS Academy Graduate — Machine Learning Foundations', date:'Nov 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)', url:'https://www.credly.com/badges/4c16233e-6f16-4c34-ba88-d2bdf5d21fbf' },
  // TODO(keshvi): replace with the Data Engineering badge's own Credly URL (Credly → Badges). Until then this links to your badge wall, not the wrong badge.
  { issuer:'Amazon Web Services', name:'AWS Academy Graduate — Data Engineering', date:'Sep 2025', color:'rgba(255,153,0,0.1)', border:'rgba(255,153,0,0.35)', url:'https://www.credly.com/users/keshvi-pipwala/badges' },
  { issuer:'Kaggle', name:'Python Coder (Regular)', date:'2024', color:'rgba(32,178,170,0.1)', border:'rgba(32,178,170,0.35)', url:'https://www.kaggle.com/certification/badges/keshvipipwala/30' },
  // TODO(keshvi): swap the url for your AnitaB.org member profile link; the PNG host is temporary.
  { issuer:'AnitaB.org', name:'Premium Student Member', date:'2026', color:'rgba(255,110,64,0.08)', border:'rgba(255,110,64,0.35)', url:'https://files.manuscdn.com/user_upload_by_module/session_file/310419663029697690/eKyxHClycssGVcLy.png' },
]

// Trimmed to what a repo, a live app, or a role bullet can back up.
// 'Familiar' = coursework/exposure, listed honestly so ATS still matches without inviting a deep-dive.
export const SKILLS = {
  'Languages & Core':['Python','SQL','TypeScript','JavaScript','Bash'],
  'AI / LLM Systems':['LLM Product Specs','Agent Evals','RAG','Confidence Routing','Human-in-the-Loop','Prompt Engineering','Claude API','Gemini API','LiteLLM','ChromaDB'],
  'Data Engineering':['ETL Pipelines','Data Validation','PostgreSQL','SQLite FTS5','Pandas','Tableau','Power BI'],
  'Backend & Infra':['FastAPI','Celery','Redis','WebSockets','Docker Compose','GitHub Actions CI/CD','Prometheus','Grafana','Render','Vercel'],
  'Product & Program':['0→1 Product','PRDs','OKRs','A/B Testing','Roadmapping','Agile','Jira','Smartsheet','Asana','Vendor & Budget Mgmt','Risk Mitigation'],
  'Familiar':['AWS','Kubernetes','LangChain','PyTorch','Airflow','Spark'],
}

// ── Testimonials ─────────────────────────────────────────────────────────────
// Section renders once this has one entry. Requests to send are in
// fixpack/outreach/testimonial-requests.md — paste the real replies here verbatim.
export const TESTIMONIALS = [
  // { quote: "...", name: "Full Name", title: "Role, Organization" },
]

export const CHAT_SYSTEM_PROMPT = `You are Keshvi Pipwala's AI recruiting assistant. Answer directly and specifically, and never overstate. Keshvi is an AI/Data Product Manager who directs AI tooling, owns product decisions, and ships AI-assisted builds against her own specs and evals — she is transparent that implementation is AI-assisted and that the spec, tradeoffs, eval design, and QA are hers. She holds an M.S. in Information Technology & Management from Arizona State University (May 2026, 3.5 GPA, earned while working two concurrent roles). Recently completed roles (she is actively seeking her next full-time role now): AI/Data Product Manager at ASU (Jun 2025 – May 2026; 0→5,000+ users, +18% retention, +22% engagement via A/B tests), Software Engineer in NASA's L'SPACE Program (Apr 2025 – Apr 2026; NASA-funded academy via ASU; ETL validation pipelines at 95% anomaly-detection accuracy, 80%+ test coverage, CI/CD), Technical Project Manager → Lead TPM at ASU (Sep 2024 – Jun 2025; promoted twice in 9 months; 5+ concurrent programs, zero missed milestones), and a Technical Business Analyst internship at Grey Enterprise. Shipped builds: Close Copilot (live; confidence-routed transaction categorization; 100% precision on auto-posts, 96.2% accuracy on a 104-row labeled set), SubmissionClear (insurance intake agent pipeline built for FurtherAI), a resilient multi-provider LLM gateway on LiteLLM, GitSense (PR-review agent), InsightIQ (live; grounded CSV analytics), ResilienceOS (chaos engineering with AI post-mortems, 53 integration tests). Certifications: Anthropic AI Fluency and Claude 101; AWS Academy Graduate in Data Engineering and Machine Learning Foundations; Kaggle Python Coder. AnitaB.org premium student member. Founded Kaleidoscope, a student tech community, during her B.E. Target roles: AI Product Manager, Technical Program/Project Manager, Forward-Deployed / Applied AI. Based in Tempe, AZ; open to relocation (SF, NYC, Seattle, Austin). Work authorization: F-1 OPT with roughly three years of authorization. Email: keshvipipwalan@gmail.com`

export const CHAT_SUGGESTIONS = [
  "What has she actually shipped?",
  "How does she work with AI tooling?",
  "What product decisions has she owned?",
  "What's her visa situation?",
]
