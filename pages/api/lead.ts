import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const body = req.body

  // For now we just echo the lead back. Integrate with Firestore or email provider in production.
  console.log('Lead received:', body)
  return res.status(200).json({ ok: true, lead: body })
}
