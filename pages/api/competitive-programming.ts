import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCompetitiveProgrammingData } from '@/lib/cp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchCompetitiveProgrammingData('anandxaditya');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
