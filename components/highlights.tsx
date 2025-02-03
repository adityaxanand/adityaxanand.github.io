// components/highlights.tsx

"use client";

import React from "react";
import { FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Top 100 in Codeforces Round #650",
    description: "Achieved a personal best rank among thousands of participants.",
    date: "2023-05-10",
  },
  {
    title: "Winner of University Coding Contest",
    description: "Secured first place in the annual university programming competition.",
    date: "2022-11-15",
  },
  // Add more achievements as needed.
];

export default function Highlights() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Highlights
      </h3>
      <ul className="space-y-6">
        {achievements.map((item, index) => (
          <li key={index} className="flex items-start">
            <FaMedal className="text-yellow-500 mt-1 mr-4" size={28} />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                {item.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
