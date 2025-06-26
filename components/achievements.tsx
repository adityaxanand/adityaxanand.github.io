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

//       <div className="flex flex-col gap-8">
//         {achievementsData.map((achievement, index) => (
//           <div
//             key={index}
//             className="relative w-full"
//             onMouseEnter={() => setHoverIndex(index)}
//             onMouseLeave={() => setHoverIndex(null)}
//           >
//             {/* Main Card */}
//             <div
//               className="relative flex items-center justify-between p-6 rounded-lg bg-gray-100 text-gray-900 
//                 backdrop-blur-md shadow-md border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               {/* Title & Short Description */}
//               <div className="flex flex-col justify-between">
//                 <h3 className="text-xl font-semibold">{achievement.title}</h3>
//                 <p className="text-gray-600 text-sm dark:text-gray-400">{achievement.shortDescription}</p>
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
//                     rounded-b-lg shadow-lg border-t-2 border-gray-700 dark:bg-gray-700 dark:border-gray-600"
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
//                       <p className="text-gray-300 dark:text-gray-100">{achievement.description}</p>

//                       {/* Minimalistic View More Button */}
//                       {achievement.link && (
//                         <a
//                           href={achievement.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="mt-4 inline-block bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out 
//                             hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500"
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


// // components/Achievements.tsx

// "use client";

// import React from "react";
// import { achievementsData } from "@/lib/data";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FiArrowUpRight } from "react-icons/fi";

// // Define a function to determine the grid span for each item
// const getGridSpan = (index: number) => {
//   // Example logic: make the first item larger
//   if (index === 0) {
//     return "md:col-span-2 md:row-span-2";
//   }
//   return "md:col-span-1";
// };

// const fadeInAnimationVariants = {
//   initial: { opacity: 0, y: 50, scale: 0.95 },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: 0.1 * index,
//       type: "spring",
//       stiffness: 100,
//     },
//   }),
// };

// export default function Achievements() {
//   return (
//     <section className="w-full max-w-5xl mx-auto py-20 px-4">
//       <SectionHeading>Achievements</SectionHeading>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[20rem]">
//         {achievementsData.map((achievement, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             custom={index}
//             className={`group relative flex flex-col justify-end p-6 rounded-2xl overflow-hidden ${getGridSpan(index)}`}
//           >
//             {/* Background Image */}
//             <Image
//               src={achievement.imageUrl}
//               alt={achievement.title}
//               layout="fill"
//               objectFit="cover"
//               className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
//             {/* Content */}
//             <div className="relative z-20 text-white">
//               <h3 className="text-xl font-bold">{achievement.title}</h3>
//               <p className="text-sm text-gray-300 mt-1 mb-4">{achievement.shortDescription}</p>
//               {achievement.link && (
//                  <a
//                     href={achievement.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 text-xs font-semibold border-b-2 border-transparent transition-all duration-300 group-hover:border-white"
//                   >
//                     View More <FiArrowUpRight className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
//                   </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




// // components/Achievements.tsx

// "use client";

// import React, { useState, useRef } from "react";
// import { achievementsData } from "@/lib/data";
// import SectionHeading from "./section-heading";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import Image from "next/image";

// export default function Achievements() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="relative w-full py-20 overflow-hidden">
//       {/* Dynamic Blurred Background */}
//       <div
//         className="absolute inset-0 transition-all duration-500 ease-in-out"
//         style={{
//           backgroundImage:
//             hoveredIndex !== null
//               ? `url(${achievementsData[hoveredIndex].imageUrl.src})` // Use .src for local images
//               : "none",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "blur(24px) brightness(0.6)",
//           transform: "scale(1.1)",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <SectionHeading>Achievements</SectionHeading>
//         {/* Scrolling Container with fixes */}
//         <div
//           className="flex overflow-x-auto space-x-12 py-20 scrollbar-hide"
//           style={{ perspective: "1500px" }} // Added perspective for 3D
//         >
//           {achievementsData.map((achievement, index) => (
//             <Card
//               key={index}
//               achievement={achievement}
//               setHoveredIndex={setHoveredIndex}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Card Sub-Component with 3D Parallax
// const Card = ({ achievement, setHoveredIndex, index }: any) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
//   const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     if (!ref.current) return;
//     const { left, top, width, height } = ref.current.getBoundingClientRect();
//     const mouseX = e.clientX - left;
//     const mouseY = e.clientY - top;
//     x.set(mouseX / width - 0.5);
//     y.set(mouseY / height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onMouseEnter={() => setHoveredIndex(index)}
//       onMouseLeaveCapture={() => setHoveredIndex(null)}
//       style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
//       className="relative w-80 h-[420px] flex-shrink-0 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
//     >
//       <div
//         style={{
//           transform: "translateZ(50px)",
//           transformStyle: "preserve-3d",
//         }}
//         className="absolute inset-4 grid place-content-end rounded-2xl bg-gray-900/80 backdrop-blur-sm p-6"
//       >
//         <Image
//           src={achievement.imageUrl}
//           alt={achievement.title}
//           width={100}
//           height={100}
//           style={{ transform: "translateZ(50px)" }}
//           className="absolute top-4 right-4 w-16 h-16 rounded-lg object-cover shadow-lg"
//         />

//         <h3
//           style={{ transform: "translateZ(30px)" }}
//           className="text-xl font-bold text-white"
//         >
//           {achievement.title}
//         </h3>
//         <p
//           style={{ transform: "translateZ(20px)" }}
//           className="text-sm text-gray-400 mt-1"
//         >
//           {achievement.description}
//         </p>
//          {achievement.link && (
//             <motion.a 
//                 href={achievement.link} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="mt-4 inline-block text-xs font-semibold text-white bg-white/10 px-4 py-2 rounded-lg transition-colors hover:bg-white/20"
//                 style={{ transform: "translateZ(40px)" }}
//             >
//                 View Proof
//             </motion.a>
//         )}
//       </div>
//     </motion.div>
//   );
// };



// components/Achievements.tsx

"use client";

import React from "react";
import { achievementsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

// A function to determine the grid cell's span based on its index.
// This creates the asymmetrical "bento box" layout.
const getGridSpan = (index: number) => {
  // For 5 items, a great layout is:
  // Item 0: Takes a 2x2 large "featured" slot.
  // Item 1 & 2: Take 1x1 slots.
  // Item 3 & 4: Take wider 1.5x1 slots (or split 3 columns).
  // Let's create a pattern for 5 items in a 3-column grid
  switch (index) {
    case 0:
      return "md:col-span-2 md:row-span-2"; // Main feature
    case 1:
      return "md:col-span-1 md:row-span-1";
    case 2:
      return "md:col-span-1 md:row-span-1";
    case 3:
      return "md:col-span-1 md:row-span-1";
    case 4:
      return "md:col-span-2 md:row-span-1"; // A wider one at the bottom
    default:
      return "md:col-span-1";
  }
};

// Animation variants for the staggered fade-in effect.
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 100,
    },
  }),
};

// The individual card component
const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: typeof achievementsData[number];
  index: number;
}) => (
  <motion.div
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={index}
    className={`group relative flex flex-col justify-end p-6 rounded-2xl overflow-hidden ${getGridSpan(index)}`}
  >
    {/* Background Image */}
    <Image
      src={achievement.imageUrl}
      alt={achievement.title}
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    {/* Content */}
    <div className="relative z-20 text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
      <h3 className="text-xl font-bold">{achievement.title}</h3>
      <p className="text-sm text-gray-300 mt-1">{achievement.shortDescription}</p>
      
      {/* "View More" Link - Appears on hover */}
      {achievement.link && (
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          View Proof <FiArrowUpRight className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
        </a>
      )}
    </div>
  </motion.div>
);

export default function Achievements() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4">
      <SectionHeading>Achievements</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[20rem]">
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} index={index} />
        ))}
      </div>
    </section>
  );
}