// pages/api/codeforces-rating.ts

import type { NextApiRequest, NextApiResponse } from "next";

type RatingData = {
  date: string;
  rating: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const handle = "anandxaditya"; // Replace with your Codeforces handle
    const response = await fetch(
      `https://codeforces.com/api/user.rating?handle=${handle}`
    );
    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error("Failed to fetch data from Codeforces API");
    }

    const ratingHistory: RatingData[] = data.result.map((contest: any) => ({
      date: new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleDateString(),
      rating: contest.newRating,
    }));

    const currentRating =
      ratingHistory.length > 0
        ? ratingHistory[ratingHistory.length - 1].rating
        : null;

    res.status(200).json({ history: ratingHistory, currentRating });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
}
