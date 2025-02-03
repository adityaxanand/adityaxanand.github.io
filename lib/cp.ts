const handleApiResponse = (response: Response) => {
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
  };
  
  export const fetchCompetitiveProgrammingData = async (userName: string) => {
    const response = await fetch(`https://codeforces.com/api/user.rating?handle=${userName}`);
    const data = await handleApiResponse(response);
    return data.result.map((contest: any) => ({
      id: contest.contestId,
      name: contest.contestName,
      rank: contest.rank,
      oldRating: contest.oldRating,
      newRating: contest.newRating,
      type: contest.type,
      date: contest.ratingUpdateTimeSeconds * 1000, // Convert UNIX timestamp to milliseconds
    }));
  };
  