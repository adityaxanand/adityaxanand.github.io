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


// // components/contest-details.tsx

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaTrophy,
//   FaChartLine,
//   FaArrowUp,
//   FaArrowDown,
// } from "react-icons/fa";
// import { MdDateRange } from "react-icons/md";

// type Contest = {
//   id: number;
//   name: string;
//   rank: number;
//   oldRating: number;
//   newRating: number;
//   type: string;
//   date: number;
// };

// export default function ContestDetails() {
//   const [contests, setContests] = useState<Contest[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("/api/competitive-programming")
//       .then(async (response) => {
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "Failed to fetch contests");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setContests(data);
//         } else if (data.message) {
//           setErrorMsg(data.message);
//         } else {
//           setErrorMsg("Unexpected data format from API");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching contests:", err);
//         setErrorMsg(err.message || "Failed to fetch contests");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
//         <p>Loading contests...</p>
//       </div>
//     );
//   }

//   if (errorMsg) {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
//         <p className="text-red-500">{errorMsg}</p>
//       </div>
//     );
//   }

//   if (contests && contests.length === 0) {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
//         <p>No contest data available.</p>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="w-full"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
//         Contest Details
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {contests?.map((contest) => (
//           <motion.div
//             key={contest.id}
//             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ y: -5 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
//               <FaTrophy className="mr-2 text-yellow-500" />
//               {contest.name}
//             </h4>
//             <div className="text-gray-700 dark:text-gray-300 space-y-2">
//               <p className="flex items-center">
//                 <MdDateRange className="mr-2 text-indigo-500" />
//                 <span>
//                   <strong>Date:</strong>{" "}
//                   {new Date(contest.date).toLocaleDateString()}
//                 </span>
//               </p>
//               <p className="flex items-center">
//                 <FaChartLine className="mr-2 text-indigo-500" />
//                 <span>
//                   <strong>Rank:</strong> {contest.rank}
//                 </span>
//               </p>
//               <p className="flex items-center">
//                 <FaChartLine className="mr-2 text-indigo-500" />
//                 <span>
//                   <strong>Old Rating:</strong> {contest.oldRating}
//                 </span>
//               </p>
//               <p className="flex items-center">
//                 <FaChartLine className="mr-2 text-indigo-500" />
//                 <span>
//                   <strong>New Rating:</strong> {contest.newRating}
//                 </span>
//               </p>
//               <p className="flex items-center">
//                 {contest.newRating - contest.oldRating >= 0 ? (
//                   <FaArrowUp className="mr-2 text-green-500" />
//                 ) : (
//                   <FaArrowDown className="mr-2 text-red-500" />
//                 )}
//                 <span>
//                   <strong>Rating Change:</strong>{" "}
//                   <span
//                     className={
//                       contest.newRating - contest.oldRating >= 0
//                         ? "text-green-600 font-semibold"
//                         : "text-red-600 font-semibold"
//                     }
//                   >
//                     {contest.newRating - contest.oldRating >= 0 ? "+" : ""}
//                     {contest.newRating - contest.oldRating}
//                   </span>
//                 </span>
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }





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
  const [visibleCount, setVisibleCount] = useState<number>(3); // Default visible count
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth); // Track window width

  // Function to calculate the number of contests to show based on window size
  const calculateVisibleCount = (width: number) => {
    if (width >= 1024) {
      return 3; // For large screens (e.g., desktops)
    } else if (width >= 768) {
      return 2; // For medium screens (e.g., tablets)
    } else {
      return 1; // For small screens (e.g., mobile)
    }
  };

  // Handle window resizing to update visibleCount
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setVisibleCount(calculateVisibleCount(window.innerWidth)); // Adjust visible count based on window width
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {contests?.slice(0, visibleCount).map((contest) => (
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

      {/* View More Button */}
{contests && visibleCount < contests.length && (
  <div className="flex justify-center mt-8">
    <button
      onClick={() => setVisibleCount(visibleCount + 3)}
      className="relative px-8 py-4 bg-white bg-opacity-10 backdrop-blur-lg text-indigo-400 hover:text-indigo-500 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
    >
      {/* Radial Bubble Effect (using pseudo-element for the dot) */}
      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-indigo-600 opacity-30 pointer-events-none animate-ping"></div>
      View More
    </button>
  </div>
)}

    </motion.div>
  );
}
