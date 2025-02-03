// // components/contest-details.tsx

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// type Contest = {
//   id: number;
//   name: string;
//   rank: number;
//   oldRating: number;
//   newRating: number;
//   type: string;
//   date: string;
// };

// export default function ContestDetails() {
//   const [contests, setContests] = useState<Contest[] | null>(null);

//   useEffect(() => {
//     fetch("/api/competitive-programming")
//       .then((response) => response.json())
//       .then((data) => {
//         setContests(data);
//       })
//       .catch((err) => {
//         console.error(err);
//         setContests([]);
//       });
//   }, []);

//   if (contests === null) {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex items-center justify-center">
//         <p>Loading contests...</p>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="w-full mt-12"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
//         Contest Details
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {contests.map((contest, index) => (
//           <motion.div
//             key={contest.id}
//             className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
//             whileHover={{ y: -5 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
//               {contest.name}
//             </h4>
//             <p className="text-gray-700 dark:text-gray-300">
//               Date: {new Date(contest.date).toLocaleDateString()}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               Rank: {contest.rank}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               Old Rating: {contest.oldRating}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               New Rating: {contest.newRating}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               Rating Change:{" "}
//               <span
//                 className={
//                   contest.newRating - contest.oldRating >= 0
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }
//               >
//                 {contest.newRating - contest.oldRating >= 0 ? "+" : ""}
//                 {contest.newRating - contest.oldRating}
//               </span>
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }


// components/contest-details.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

type Contest = {
  id: number;
  name: string;
  rank: number;
  oldRating: number;
  newRating: number;
  type: string;
  date: number;
};

export default function ContestDetails() {
  const [contests, setContests] = useState<Contest[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/competitive-programming")
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch contests");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setContests(data);
        } else if (data.message) {
          setErrorMsg(data.message);
        } else {
          setErrorMsg("Unexpected data format from API");
        }
      })
      .catch((err) => {
        console.error("Error fetching contests:", err);
        setErrorMsg(err.message || "Failed to fetch contests");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
        <p>Loading contests...</p>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
        <p className="text-red-500">{errorMsg}</p>
      </div>
    );
  }

  if (contests && contests.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
        <p>No contest data available.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Contest Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests?.map((contest) => (
          <motion.div
            key={contest.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
              <FaTrophy className="mr-2 text-yellow-500" />
              {contest.name}
            </h4>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
              <p className="flex items-center">
                <MdDateRange className="mr-2 text-indigo-500" />
                <span>
                  <strong>Date:</strong>{" "}
                  {new Date(contest.date).toLocaleDateString()}
                </span>
              </p>
              <p className="flex items-center">
                <FaChartLine className="mr-2 text-indigo-500" />
                <span>
                  <strong>Rank:</strong> {contest.rank}
                </span>
              </p>
              <p className="flex items-center">
                <FaChartLine className="mr-2 text-indigo-500" />
                <span>
                  <strong>Old Rating:</strong> {contest.oldRating}
                </span>
              </p>
              <p className="flex items-center">
                <FaChartLine className="mr-2 text-indigo-500" />
                <span>
                  <strong>New Rating:</strong> {contest.newRating}
                </span>
              </p>
              <p className="flex items-center">
                {contest.newRating - contest.oldRating >= 0 ? (
                  <FaArrowUp className="mr-2 text-green-500" />
                ) : (
                  <FaArrowDown className="mr-2 text-red-500" />
                )}
                <span>
                  <strong>Rating Change:</strong>{" "}
                  <span
                    className={
                      contest.newRating - contest.oldRating >= 0
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {contest.newRating - contest.oldRating >= 0 ? "+" : ""}
                    {contest.newRating - contest.oldRating}
                  </span>
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
