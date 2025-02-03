// components/contest-statistics.tsx

"use client";

import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

type Contest = {
  rank: number;
  newRating: number;
  oldRating: number;
};

export default function ContestStatistics() {
  const [contests, setContests] = useState<Contest[] | null>(null);

  useEffect(() => {
    fetch("/api/competitive-programming")
      .then((response) => response.json())
      .then((data) => {
        setContests(data);
      })
      .catch((err) => {
        console.error(err);
        setContests([]);
      });
  }, []);

  if (contests === null) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
        <p>Loading statistics...</p>
      </div>
    );
  }

  // Calculate statistics
  const totalContests = contests.length;
  const bestRank =
    contests.length > 0 ? Math.min(...contests.map((c) => c.rank)) : null;
  const maxRating =
    contests.length > 0 ? Math.max(...contests.map((c) => c.newRating)) : null;
  const minRating =
    contests.length > 0 ? Math.min(...contests.map((c) => c.newRating)) : null;
  const averageRatingChange =
    contests.length > 0
      ? (
          contests.reduce(
            (sum, c) => sum + (c.newRating - c.oldRating),
            0
          ) / totalContests
        ).toFixed(2)
      : null;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Contest Statistics
      </h3>
      <ul className="space-y-4">
        {bestRank !== null && (
          <li className="flex items-center">
            <FaTrophy className="text-yellow-500 mr-3" size={24} />
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Best Rank:{" "}
              <span className="font-semibold">{bestRank}</span>
            </span>
          </li>
        )}
        {maxRating !== null && (
          <li className="flex items-center">
            <span className="text-indigo-500 mr-3 text-2xl">🏆</span>
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Highest Rating:{" "}
              <span className="font-semibold">{maxRating}</span>
            </span>
          </li>
        )}
        {minRating !== null && (
          <li className="flex items-center">
            <span className="text-indigo-500 mr-3 text-2xl">🎯</span>
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Lowest Rating:{" "}
              <span className="font-semibold">{minRating}</span>
            </span>
          </li>
        )}
        {averageRatingChange !== null && (
          <li className="flex items-center">
            <span className="text-indigo-500 mr-3 text-2xl">📈</span>
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Avg. Rating Change:{" "}
              <span className="font-semibold">
                {averageRatingChange}
              </span>
            </span>
          </li>
        )}
        <li className="flex items-center">
          <span className="text-indigo-500 mr-3 text-2xl">🏁</span>
          <span className="text-lg text-gray-800 dark:text-gray-200">
            Total Contests:{" "}
            <span className="font-semibold">{totalContests}</span>
          </span>
        </li>
      </ul>
    </motion.div>
  );
}
