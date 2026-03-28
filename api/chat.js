export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { messages, system } = req.body
  const key = process.env.GEMINI_API_KEY

  if (!key) return res.status(500).json({ error: 'API key not configured' })

  try {
    const history = messages.slice(0, -1).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }))
    const lastMsg = messages[messages.length - 1].content

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents: [...history, { role:'user', parts:[{ text: lastMsg }] }],
          generationConfig: { maxOutputTokens: 800, temperature: 0.7 }
        })
      }
    )

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.'
    res.status(200).json({ text })
  } catch (err) {
    res.status(500).json({ error: 'Failed to get response' })
  }
}
