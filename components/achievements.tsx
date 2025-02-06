// "use client";

// import React from "react";
// import { achievementsData } from "@/lib/data";
// import SectionHeading from "./section-heading";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Achievements() {
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
//   const tilt = useTransform(scrollYProgress, [0, 1], [5, 0]);

//   return (
//     <section className="relative w-full max-w-5xl mx-auto py-20 px-4">
//       <SectionHeading>Achievements</SectionHeading>

//       <div className="relative flex flex-col gap-10">
//         {achievementsData.map((achievement, index) => (
//           <motion.div
//             key={index}
//             style={{ scale, rotateX: tilt }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
//             className={`relative p-6 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-lg shadow-lg border border-gray-300/30 dark:border-gray-700/50 
//               hover:scale-[1.05] hover:shadow-2xl transition-all duration-300 ease-in-out ${
//                 index % 2 === 0 ? "skew-y-3" : "-skew-y-3"
//               }`}
//           >
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
//               {achievement.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
//               {achievement.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { achievementsData } from "@/lib/data";
// import SectionHeading from "./section-heading";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export default function Achievements() {
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);

//   return (
//     <section className="relative w-full max-w-5xl mx-auto py-20 px-4">
//       <SectionHeading>Achievements</SectionHeading>

//       <div className="flex flex-col gap-6">
//         {achievementsData.map((achievement, index) => (
//           <div
//             key={index}
//             className="relative w-full"
//             onMouseEnter={() => setHoverIndex(index)}
//             onMouseLeave={() => setHoverIndex(null)}
//           >
//             {/* Main Card */}
//             <div
//               className="relative flex items-center justify-between p-6 rounded-t-lg bg-gray-200 text-gray-900 
//                 backdrop-blur-md shadow-lg border border-gray-400 transition-all duration-300 ease-in-out 
//                 cursor-pointer hover:bg-gray-100"
//             >
//               {/* Title & Short Description */}
//               <div>
//                 <h3 className="text-xl font-semibold">{achievement.title}</h3>
//                 <p className="text-gray-600 text-sm">{achievement.shortDescription}</p>
//               </div>
//             </div>

//             {/* Expanded Section - Feels Fully Connected */}
//             <AnimatePresence>
//               {hoverIndex === index && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="relative w-full overflow-hidden bg-gray-900 text-white 
//                     rounded-b-lg shadow-lg border-t-2 border-gray-700"
//                 >
//                   <motion.div
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: -20, opacity: 0 }}
//                     transition={{ duration: 0.4, ease: "easeOut" }}
//                     className="p-6 flex flex-col md:flex-row items-start gap-6"
//                   >
//                     {/* Large Image */}
//                     <div className="w-28 h-28">
//                       <Image
//                         src={achievement.imageUrl}
//                         alt={achievement.title}
//                         width={100}
//                         height={100}
//                         className="rounded-lg object-cover"
//                       />
//                     </div>

//                     {/* Details */}
//                     <div>
//                       <p className="text-gray-300">{achievement.description}</p>

//                       {/* Link Button */}
//                       {achievement.link && (
//                         <a
//                           href={achievement.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-green-600"
//                         >
//                           View More
//                         </a>
//                       )}
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import { achievementsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Achievements() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full max-w-5xl mx-auto py-20 px-4">
      <SectionHeading>Achievements</SectionHeading>

      <div className="flex flex-col gap-8">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="relative w-full"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Main Card */}
            <div
              className="relative flex items-center justify-between p-6 rounded-lg bg-gray-100 text-gray-900 
                backdrop-blur-md shadow-md border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {/* Title & Short Description */}
              <div className="flex flex-col justify-between">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-400">{achievement.shortDescription}</p>
              </div>
            </div>

            {/* Expanded Section - Feels Fully Connected */}
            <AnimatePresence>
              {hoverIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full overflow-hidden bg-gray-900 text-white 
                    rounded-b-lg shadow-lg border-t-2 border-gray-700 dark:bg-gray-700 dark:border-gray-600"
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="p-6 flex flex-col md:flex-row items-start gap-6"
                  >
                    {/* Large Image */}
                    <div className="w-28 h-28">
                      <Image
                        src={achievement.imageUrl}
                        alt={achievement.title}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <p className="text-gray-300 dark:text-gray-100">{achievement.description}</p>

                      {/* Minimalistic View More Button */}
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out 
                            hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500"
                        >
                          View More
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
