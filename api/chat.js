export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  const key = process.env.GEMINI_API_KEY
  if (!key) return res.status(200).json({ text: 'No API key.' })

  // If GET, list available models
  if (req.method === 'GET') {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key)
    const d = await r.json()
    const names = (d.models || []).map(m => m.name).filter(n => n.includes('gemini'))
    return res.status(200).json({ models: names })
  }

  const { messages, system } = req.body
  try {
    const systemTurn = [
      { role: 'user', parts: [{ text: 'Instructions: ' + system }] },
      { role: 'model', parts: [{ text: 'Understood.' }] }
    ]
    const contents = [...systemTurn, ...messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }))]
    const model = 'gemini-2.5-flash'
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + key
    const response = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ contents, generationConfig:{ maxOutputTokens:800, temperature:0.7 } }) })
    const data = await response.json()
    if (!response.ok) return res.status(200).json({ text: 'Error: ' + (data.error?.message || response.status) })
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    res.status(200).json({ text: text || 'No response.' })
  } catch (err) {
    res.status(200).json({ text: 'Server error: ' + err.message })
  }
}
