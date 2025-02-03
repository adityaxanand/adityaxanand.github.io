// data/writeup-data.ts

export type Writeup = {
    title: string;
    summary: string;
    slug: string;
    date: string;
    link: string;
  };
  
  export const writeups: Writeup[] = [
    {
      title: "Solving the 'Complex Strings' Problem from Codeforces Round #670",
      summary:
        "An in-depth analysis of the 'Complex Strings' problem, covering my approach, algorithms used, and optimization techniques.",
      slug: "solving-complex-strings-problem",
      date: "2023-07-15",
      link: "/blog/solving-complex-strings-problem",
    },
    {
      title: "Dynamic Programming Strategies in Competitive Programming",
      summary:
        "A comprehensive guide to mastering dynamic programming techniques with examples from recent contests.",
      slug: "dynamic-programming-strategies",
      date: "2023-08-05",
      link: "/blog/dynamic-programming-strategies",
    },
    // Add more write-ups as needed.
  ];
  