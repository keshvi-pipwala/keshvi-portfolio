import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Target, GitBranch, AlertTriangle, RefreshCw, LineChart } from 'lucide-react'

// Deep-dive PM case study for InsightIQ. Written as a product artifact:
// problem → options → the tradeoff I owned → what broke → what I'd change → how I'd measure.
// This is the page that shows product judgment end-to-end, not just outcomes.

const ACCENT = '#a78fff'
const card = { borderRadius: '20px', border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.03)', padding: '26px 28px', marginBottom: '20px' }
const label = { fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(167,143,255,.85)', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }
const body = { fontSize: '14px', color: 'rgba(255,255,255,.72)', lineHeight: 1.85 }
const strong = { color: '#fff', fontWeight: 700 }

function Section({ Icon, title, children }) {
  return (
    <div className="reveal" style={card}>
      <div style={label}><Icon size={14} color={ACCENT} strokeWidth={2.2} /> {title}</div>
      {children}
    </div>
  )
}

export default function CaseStudy() {
  const OPTIONS = [
    { opt: 'Sentence-transformer embeddings + vector DB', pro: 'Best semantic recall', con: 'Exceeded Render free-tier memory; cold starts + crashes', pick: false },
    { opt: 'Hosted vector API (Pinecone/Weaviate)', pro: 'Offloads memory', con: 'New cost, new dependency, latency for a demo-stage tool', pick: false },
    { opt: 'SQLite FTS5 full-text retrieval', pro: 'In-process, near-zero memory, fast, free', con: 'Keyword-based, not embeddings — weaker on paraphrase', pick: true },
  ]

  return (
    <div style={{ minHeight: '100vh', padding: '48px 40px 80px', maxWidth: '860px', margin: '0 auto' }} className="page-pad">

      <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: 'rgba(255,255,255,.5)', textDecoration: 'none', fontSize: '13px', fontWeight: 600, marginBottom: '28px' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.5)' }}>
        <ArrowLeft size={15} /> Back to Projects
      </Link>

      <div className="reveal" style={{ marginBottom: '10px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'rgba(167,143,255,.8)', marginBottom: '10px', fontWeight: 600 }}>Case Study</p>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, letterSpacing: '-.03em', lineHeight: 1.02 }}>InsightIQ</h1>
        <p style={{ fontSize: '16px', color: 'rgba(100,200,255,.9)', fontWeight: 600, marginTop: '10px', fontStyle: 'italic' }}>Upload a CSV. Ask in plain English. Get an answer and a chart.</p>
      </div>

      <div className="reveal d1" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '18px 0 30px' }}>
        <a href="https://insightiq-frontend-jn6h.onrender.com" target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '9px 18px', borderRadius: '12px', background: 'linear-gradient(135deg,rgba(124,122,207,.5),rgba(64,202,255,.35))', border: '1px solid rgba(124,122,207,.55)', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>
          <ExternalLink size={14} /> Live product
        </a>
        <a href="https://github.com/keshvi-pipwala/insightiq" target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '9px 18px', borderRadius: '12px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.85)', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>
          <Github size={14} /> Code
        </a>
      </div>

      {/* My role banner */}
      <div className="reveal" style={{ ...card, borderColor: 'rgba(124,122,207,.28)', background: 'rgba(124,122,207,.06)' }}>
        <div style={body}>
          <span style={strong}>My role:</span> I owned the product — the spec, the scope, the tradeoff decisions, and the QA. The implementation was AI-assisted and I directed it end to end. Everything below is a decision I made and can defend.
        </div>
      </div>

      <Section Icon={Target} title="The problem">
        <p style={body}>
          Non-technical people sit on data they can't interrogate. A founder with a CSV of customers wants to ask <em>"what's driving churn?"</em> and get an answer — not write SQL, not wait on an analyst, not paste it into a generic chatbot that hallucinates numbers. The bar isn't "an LLM that talks about data." The bar is <span style={strong}>an answer they can trust because it came from their actual rows.</span>
        </p>
      </Section>

      <Section Icon={Target} title="The one promise I scoped the product around">
        <p style={body}>
          I refused to build a general chatbot. I scoped InsightIQ to a single promise: <span style={strong}>every answer is grounded in the uploaded data — no generic LLM responses.</span> That one constraint drove every downstream decision. It defined what "done" meant, what I had to test, and what I was willing to cut. A tight promise is a PM's most useful tool: it turns infinite scope into a testable yes/no.
        </p>
      </Section>

      <Section Icon={GitBranch} title="The options I considered for retrieval">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
          {OPTIONS.map(o => (
            <div key={o.opt} style={{ borderRadius: '14px', border: '1px solid ' + (o.pick ? 'rgba(100,220,130,.4)' : 'rgba(255,255,255,.08)'), background: o.pick ? 'rgba(100,220,130,.06)' : 'rgba(255,255,255,.02)', padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#fff' }}>{o.opt}</span>
                {o.pick && <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(100,235,140,1)', border: '1px solid rgba(100,220,130,.5)', borderRadius: '20px', padding: '1px 8px' }}>CHOSEN</span>}
              </div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.6)', lineHeight: 1.7 }}>
                <span style={{ color: 'rgba(100,220,140,.9)' }}>+ {o.pro}</span><br />
                <span style={{ color: 'rgba(255,140,120,.9)' }}>− {o.con}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section Icon={AlertTriangle} title="The hard tradeoff I owned">
        <p style={body}>
          The "best" answer on paper — sentence-transformer embeddings — <span style={strong}>blew past Render's free-tier memory and crashed the app on cold start.</span> I had a choice: pay for infrastructure to protect a theoretical quality ceiling, or match the retrieval method to the real constraints of a demo-stage product with real users. I chose <span style={strong}>SQLite FTS5</span> — in-process, near-zero memory, fast, free, and good enough for the tabular Q&A this tool actually does. I traded a marginal recall gain I couldn't afford for reliability I could ship. That's the call, and I'd make it again at this stage.
        </p>
      </Section>

      <Section Icon={AlertTriangle} title="What broke, and what it taught me">
        <p style={body}>
          Early on, streaming answers felt fast but let a wrong-looking number flash before the grounding check completed — a trust problem, not a speed problem. It reminded me that for a product whose entire promise is <em>trust</em>, perceived correctness beats perceived speed. I tightened the flow so the chart and the grounded answer arrive together, not the token stream first. The lesson generalizes: <span style={strong}>protect the core promise even when it costs you a flashier demo.</span>
        </p>
      </Section>

      <Section Icon={RefreshCw} title="What I'd do differently next">
        <p style={body}>
          Three things. <span style={strong}>One:</span> a hybrid retrieval path — keep FTS5 as the fast default, add optional embeddings only when a paid tier justifies it, so the architecture scales with the customer. <span style={strong}>Two:</span> ship an explicit "here's the exact rows this answer used" trace, turning trust from a claim into something the user can verify. <span style={strong}>Three:</span> instrument it (see below) — I shipped it before I could measure it, and a PM should never fly blind for long.
        </p>
      </Section>

      <Section Icon={LineChart} title="How I'd measure success">
        <p style={{ ...body, marginBottom: '14px' }}>
          If I ran this as a real product, here's the metric tree I'd instrument:
        </p>
        <div style={{ display: 'grid', gap: '10px' }}>
          <div style={{ borderRadius: '12px', border: '1px solid rgba(167,143,255,.3)', background: 'rgba(167,143,255,.06)', padding: '13px 16px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(167,143,255,.9)', fontWeight: 700, marginBottom: '4px' }}>North-star</div>
            <div style={{ fontSize: '13.5px', color: '#fff', fontWeight: 600 }}>Weekly answered questions that the user acts on (copies, exports, or asks a follow-up)</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '4px' }}>Not "questions asked" — questions that created value. It's the honest proxy for "did this replace the analyst?"</div>
          </div>
          {[
            ['Activation', 'First useful answer within 3 minutes of first CSV upload'],
            ['Trust', 'Grounded-answer rate (answers backed by real rows) ≥ 99% · thumbs-down rate < 2%'],
            ['Engagement', 'Follow-up question rate per session (a proxy for "the answer was worth continuing")'],
            ['Retention', 'Week-2 return rate for users who got ≥ 1 acted-on answer in week 1'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', gap: '14px', alignItems: 'baseline', padding: '4px 4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(64,202,255,.9)', minWidth: '78px', textTransform: 'uppercase', letterSpacing: '.04em' }}>{k}</span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }}>{v}</span>
            </div>
          ))}
        </div>
      </Section>

      <div className="reveal" style={{ ...card, textAlign: 'center', borderColor: 'rgba(124,122,207,.28)', background: 'rgba(124,122,207,.06)' }}>
        <div style={{ fontSize: '15px', color: '#fff', fontWeight: 700, marginBottom: '6px' }}>The takeaway</div>
        <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,.65)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto' }}>
          I scoped a product around one testable promise, made an infrastructure tradeoff I can defend, protected the core promise when it cost me a flashier demo, and can tell you exactly how I'd measure whether it worked. That's the job — and I did it directing AI, which is how I move at the speed of a team.
        </div>
      </div>

    </div>
  )
}
