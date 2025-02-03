// lib/cp.ts

export const fetchCompetitiveProgrammingData = async (userName: string) => {
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.rating?handle=${userName}`
      );
      const data = await response.json();
  
      // Check if the API response status is 'OK'
      if (data.status !== "OK") {
        throw new Error(data.comment || "Failed to fetch data from Codeforces API");
      }
  
      // Map the contests data
      return data.result.map((contest: any) => ({
        id: contest.contestId,
        name: contest.contestName,
        rank: contest.rank,
        oldRating: contest.oldRating,
        newRating: contest.newRating,
        type: contest.type,
        date: contest.ratingUpdateTimeSeconds * 1000, // Convert UNIX timestamp to milliseconds
      }));
    } catch (error) {
      // Re-throw the error to be caught in the API route
      throw error;
    }
  };
  