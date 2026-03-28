export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  const key = process.env.GEMINI_API_KEY
  const resendKey = process.env.RESEND_API_KEY

  // GET = list available models
  if (req.method === 'GET') {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key)
    const d = await r.json()
    const names = (d.models || []).map(m => m.name).filter(n => n.includes('gemini'))
    return res.status(200).json({ models: names })
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const body = req.body

  // CONTACT FORM — if it has name/email/message fields
  if (body.name && body.email && body.message) {
    if (!resendKey) return res.status(200).json({ ok: false, error: 'Email service not configured. Please add RESEND_API_KEY to Vercel.' })
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + resendKey },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['keshvipipwalan@gmail.com'],
          reply_to: body.email,
          subject: 'Portfolio message from ' + body.name,
          html: '<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px"><h2 style="color:#7c7acf;margin-bottom:4px">New message from your portfolio</h2><hr style="border:1px solid #eee;margin-bottom:20px"/><p><strong>From:</strong> ' + body.name + '</p><p><strong>Email:</strong> <a href="mailto:' + body.email + '">' + body.email + '</a></p><p><strong>Message:</strong></p><div style="background:#f9f9f9;padding:16px;border-radius:8px;border-left:4px solid #7c7acf;line-height:1.75;white-space:pre-wrap">' + body.message + '</div><p style="color:#aaa;font-size:12px;margin-top:24px">Sent from keshvi-portfolio-ten.vercel.app</p></div>'
        })
      })
      if (response.ok) return res.status(200).json({ ok: true })
      const err = await response.json()
      return res.status(200).json({ ok: false, error: err.message || 'Failed to send.' })
    } catch (err) {
      return res.status(200).json({ ok: false, error: err.message })
    }
  }

  // CHAT — if it has messages field
  const { messages, system } = body
  if (!key) return res.status(200).json({ text: 'API key not configured.' })

  try {
    const systemTurn = [
      { role: 'user', parts: [{ text: 'Instructions: ' + system }] },
      { role: 'model', parts: [{ text: 'Understood. I will follow these instructions precisely.' }] }
    ]
    const contents = [...systemTurn, ...messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }))]
    const model = 'gemini-2.5-flash'
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + key
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents, generationConfig: { maxOutputTokens: 800, temperature: 0.7 } })
    })
    const data = await response.json()
    if (!response.ok) return res.status(200).json({ text: 'Error: ' + (data.error?.message || response.status) })
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    res.status(200).json({ text: text || 'No response generated.' })
  } catch (err) {
    res.status(200).json({ text: 'Server error: ' + err.message })
  }
}
