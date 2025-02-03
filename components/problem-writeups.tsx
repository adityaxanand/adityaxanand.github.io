// // components/problem-writeups.tsx

// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// type Writeup = {
//   title: string;
//   summary: string;
//   slug: string;
//   date: string;
// };

// const writeups: Writeup[] = [
//   {
//     title: "Solving the 'Complex Strings' Problem from Codeforces Round #670",
//     summary:
//       "An in-depth analysis of the 'Complex Strings' problem, covering my approach, the algorithms used, and optimization techniques.",
//     slug: "solving-complex-strings-problem",
//     date: "2023-07-15",
//   },
//   {
//     title: "Dynamic Programming Strategies in Competitive Programming",
//     summary:
//       "A comprehensive guide to mastering dynamic programming techniques with examples from recent contests.",
//     slug: "dynamic-programming-strategies",
//     date: "2023-08-05",
//   },
//   // Add more write-ups as needed.
// ];

// export default function ProblemWriteups() {
//   return (
//     <motion.div
//       className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full"
//       whileHover={{ scale: 1.02 }}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
//         Problem Write-ups
//       </h3>
//       <ul className="space-y-6">
//         {writeups.map((post, index) => (
//           <li key={index}>
//             <Link href={`/blog/${post.slug}`} className="group block">
//               <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200">
//                 <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-2">
//                   {post.title}
//                 </h4>
//                 <p className="text-gray-600 dark:text-gray-400 mb-2">
//                   {post.summary}
//                 </p>
//                 <p className="text-sm text-gray-500 dark:text-gray-500">
//                   {new Date(post.date).toLocaleDateString()}
//                 </p>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }


// components/problem-writeups.tsx

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { writeups } from "@/lib/writeup-data";
import { FaBookOpen } from "react-icons/fa";

export default function ProblemWriteups() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Problem Write-ups
      </h3>
      <div className="flex-1 overflow-y-auto" style={{ maxHeight: "400px" }}>
        <ul className="space-y-6">
          {writeups.map((post, index) => (
            <li key={index}>
              <Link href={post.link} className="group block">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <h4 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-2">
                    <FaBookOpen className="mr-2 text-indigo-500" />
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {post.summary}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
