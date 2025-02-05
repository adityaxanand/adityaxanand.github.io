// pages/api/competitive-programming.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCompetitiveProgrammingData } from '@/lib/cp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await fetchCompetitiveProgrammingData('adityaxanand');

    // Log the data for debugging purposes
    console.log("Data fetched from Codeforces API:", data);

    res.status(200).json(data);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching data:", error);

    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}
