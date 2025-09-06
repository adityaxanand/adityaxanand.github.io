// components/highlights.tsx

"use client";

import React from "react";
import { FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Top 200 in Codeforces Round #",
    description: "Achieved a personal best rank among thousands of participants.",
    date: "2024-05-10",
  },
  {
    title: "3rd position in Game of Codes KIIT FEST 7.0",
    description: "Secured third position in the annual fest event.",
    date: "2024-01-02",
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
