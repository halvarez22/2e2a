import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { prompt, context } = req.body || {}

  const GEMINI_URL = process.env.GEMINI_API_URL
  const GEMINI_KEY = process.env.GEMINI_API_KEY

  if (!GEMINI_URL || !GEMINI_KEY) {
    return res.status(501).json({ error: 'Gemini API not configured' })
  }

  try {
    const r = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_KEY}`
      },
      body: JSON.stringify({ prompt, context })
    })

    const data = await r.json()
    return res.status(200).json(data)
  } catch (err: any) {
    return res.status(500).json({ error: err.message || String(err) })
  }
}
