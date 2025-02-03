"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import { FaTrophy } from 'react-icons/fa';
import { SiCodeforces, SiCodechef } from 'react-icons/si';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

type Contest = {
  id: number;
  name: string;
  rank: number;
  oldRating: number;
  newRating: number;
  type: string;
  date: string;
};

export default function CompetitiveProgramming() {
  // Initialize contests to null
  const [contests, setContests] = useState<Contest[] | null>(null);

  useEffect(() => {
    fetch("/api/competitive-programming")
      .then((response) => response.json())
      .then((data) => {
        setContests(data);
      })
      .catch((err) => {
        console.error(err);
        // Set contests to empty array if there's an error to prevent infinite loading
        setContests([]);
      });
  }, []);

  // If contests is null, render the loading state
  if (contests === null) {
    return (
      <section className="w-full flex flex-col items-center my-24">
        <SectionHeading>Competitive Programming</SectionHeading>
        <div className="my-8">
          {/* Simple loading text; you can replace this with a spinner */}
          <p>Loading data...</p>
        </div>
      </section>
    );
  }

  // Prepare data for the chart
  const data = {
    labels: contests.map((contest) => new Date(contest.date).toLocaleDateString()),
    datasets: [{
      label: 'Rating',
      data: contests.map((contest) => contest.newRating),
      fill: false,
      backgroundColor: '#6366F1', // Tailwind Indigo-500
      borderColor: '#6366F1',
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#6366F1',
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to be resized
    plugins: {
      legend: {
        display: false, // Hide the legend to save space
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis labels to reduce clutter
      },
      y: {
        beginAtZero: false,
        ticks: {
          color: '#6B7280', // Tailwind Gray-500
        },
        grid: {
          color: '#E5E7EB', // Tailwind Gray-200
        },
      },
    },
  };

  // Calculate total contests and best rank
  const totalContests = contests.length;
  const bestRank = contests.length > 0 ? Math.min(...contests.map(c => c.rank)) : null;

  return (
    <section className="w-full flex flex-col items-center my-24">
      <SectionHeading>Competitive Programming</SectionHeading>

      {/* Links to Profiles */}
      <div className="flex justify-center space-x-4 my-8">
        <a
          href="https://codeforces.com/profile/anandxaditya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center bg-[#1f8acb] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#1c7aad] transition-colors duration-200">
            <SiCodeforces className="mr-2" size={24} />
            Codeforces
          </button>
        </a>
        <a
          href="https://www.codechef.com/users/adityaxanand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center bg-[#5b6d5b] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#4e5f4e] transition-colors duration-200">
            <SiCodechef className="mr-2" size={24} />
            CodeChef
          </button>
        </a>
      </div>

      {/* User Stats */}
      <div className="text-center my-8">
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
          Total Contests: <span className="font-bold text-indigo-600">{totalContests}</span>
        </p>
        {bestRank !== null && (
          <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
            Best Rank: <span className="font-bold text-indigo-600">{bestRank}</span>
          </p>
        )}
      </div>

      {/* Rating Chart */}
      <div className="w-full max-w-2xl h-64 mb-12">
        <Line data={data} options={options} />
      </div>

      {/* Contest Details */}
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests.map((contest, index) => (
          <motion.div
            key={contest.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {contest.name}
            </h3>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
              <FaTrophy className="mr-2 text-yellow-500" />
              <span className="font-medium">Rank: {contest.rank}</span>
            </div>
            <div className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-medium">Type:</span> {contest.type}
            </div>
            <div className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-medium">Date:</span> {new Date(contest.date).toLocaleDateString()}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Old Rating:</span> {contest.oldRating}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">New Rating:</span> {contest.newRating}
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className={`text-lg font-bold ${contest.newRating - contest.oldRating >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {contest.newRating - contest.oldRating >= 0 ? '+' : ''}
                {contest.newRating - contest.oldRating}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
