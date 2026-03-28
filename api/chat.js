export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { messages, system } = req.body
  const key = process.env.GEMINI_API_KEY

  if (!key) return res.status(200).json({ text: 'API key not configured.' })

  try {
    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }))

    const url = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=' + key

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { maxOutputTokens: 800, temperature: 0.7 }
      })
    })

    const data = await response.json()

    if (!response.ok) {
      return res.status(200).json({ text: 'API error: ' + (data.error?.message || response.status) })
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    res.status(200).json({ text: text || 'No response generated.' })
  } catch (err) {
    res.status(200).json({ text: 'Server error: ' + err.message })
  }
}
