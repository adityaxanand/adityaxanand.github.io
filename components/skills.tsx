// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { motion } from "framer-motion";

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//       type: "spring",
//       stiffness: 50,
//     },
//   }),
// };

// const hoverAnimationVariants = {
//   hover: {
//     scale: 1.1,
//     rotate: 5,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//     },
//   },
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//     >
//       <SectionHeading>My skills</SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
//         {skillsData.map((skill, index) => (
//           <motion.li
//             className="bg-white border-black rounded-xl px-5 py-3 shadow-lg dark:bg-white/10 dark:text-white/80 transition-transform"
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//               once: true,
//             }}
//             custom={index}
//             whileHover="hover"
//           >
//             <motion.div variants={hoverAnimationVariants}>
//               {skill}
//             </motion.div>
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }



// components/Skills.tsx

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square dark:bg-white/10 dark:text-white/80 cursor-pointer"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              y: -5
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-xs font-medium">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}



// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { motion } from "framer-motion";

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//       type: "spring",
//       stiffness: 50,
//     },
//   }),
// };

// const hoverAnimationVariants = {
//   hover: {
//     scale: 1.1,
//     rotate: [0, 5, -5, 5, 0], // Creates a wobbly effect
//     backgroundColor: "#F59E0B", // Amber-500 color
//     color: "#FFF",
//     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
//     transition: {
//       type: "spring",
//       stiffness: 300,
//     },
//   },
// };

// const containerVariants = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//     >
//       <SectionHeading>My skills</SectionHeading>
//       <motion.ul
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"
//         variants={containerVariants}
//         initial="initial"
//         animate="animate"
//       >
//         {skillsData.map((skill, index) => (
//           <motion.li
//             key={index}
//             variants={fadeInAnimationVariants}
//             custom={index}
//             className="bg-white dark:bg-white/10 dark:text-white/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform cursor-pointer"
//           >
//             <motion.div
//               className="p-4 flex items-center justify-between"
//               variants={hoverAnimationVariants}
//               whileHover="hover"
//             >
//               <div className="flex-1">{skill.name}</div>
//               <div className="text-right ml-4">
//                 <span className="text-xs font-bold">{skill.percentage}%</span>
//               </div>
//             </motion.div>
//             <div
//               className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"
//               style={{ width: `${skill.percentage}%` }}
//             />
//           </motion.li>
//         ))}
//       </motion.ul>
//     </section>
//   );
// }
