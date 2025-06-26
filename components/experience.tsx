// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My experience</SectionHeading>
//       <VerticalTimeline lineColor="">
//         {experiencesData.map((item, index) => (
//           <React.Fragment key={index}>
//             <VerticalTimelineElement
//               contentStyle={{
//                 background:
//                   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                 boxShadow: "none",
//                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                 textAlign: "left",
//                 padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight:
//                   theme === "light"
//                     ? "0.4rem solid #9ca3af"
//                     : "0.4rem solid rgba(255, 255, 255, 0.5)",
//               }}
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 background:
//                   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//                 fontSize: "1.5rem",
//               }}
//             >
//               <h3 className="font-semibold capitalize">{item.title}</h3>
//               <p className="font-normal !mt-0">{item.location}</p>
//               <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                 {item.description}
//               </p>
//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }




// components/Experience.tsx

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    // THE FIX IS HERE: Constrained width and added horizontal padding for all screen sizes
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-7xl mx-auto px-4 sm:px-6">
      <SectionHeading>My experience</SectionHeading>
      
      <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] gap-x-4 lg:gap-x-8">
        
        {experiencesData.map((item, index) => {
          const isEvenOnLargeScreen = index % 2 === 0;

          return (
            <React.Fragment key={index}>
              {/* Left Column */}
              <motion.div
                className={`hidden lg:flex ${isEvenOnLargeScreen ? 'justify-end' : ''}`}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {isEvenOnLargeScreen && <ExperienceCard item={item} />}
              </motion.div>

              {/* Center Column: Timeline Axis and Icon */}
              <TimelineAxis icon={item.icon} />

              {/* Right Column */}
              <motion.div
                className="pb-12"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:hidden">
                    <ExperienceCard item={item} />
                </div>
                <div className="hidden lg:block">
                    {!isEvenOnLargeScreen && <ExperienceCard item={item} />}
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

// --- Sub-Components ---

const TimelineAxis = ({ icon }: { icon: React.ReactNode }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="relative bg-white dark:bg-gray-900 p-2 rounded-full border-4 border-gray-200 dark:border-gray-800 shadow-lg">
      <div className="w-10 h-10 flex items-center justify-center text-2xl text-blue-500 rounded-full bg-gray-100 dark:bg-gray-700">
        {icon}
      </div>
      <motion.div 
        className="absolute inset-0 border-2 border-blue-500 rounded-full"
        initial={{ scale: 1, opacity: 0 }}
        whileInView={{ scale: [1.2, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        viewport={{ once: true }}
      />
    </div>
    <div className="w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"></div>
  </motion.div>
);

const ExperienceCard = ({ item }: { item: typeof experiencesData[number] }) => (
  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <p className="text-sm font-semibold text-blue-500 dark:text-blue-400 mb-1">{item.date}</p>
    <h3 className="text-xl font-bold capitalize text-gray-800 dark:text-white">{item.title}</h3>
    <p className="text-md font-medium text-gray-500 dark:text-gray-400 mb-3">{item.location}</p>
    <p className="text-gray-600 dark:text-white/75 text-sm leading-relaxed">{item.description}</p>
  </div>
);




// "use client";
// import React from "react";
// import SectionHeading from "./section-heading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   const handleMouseEnter = (event) => {
//     event.target.style.backgroundColor = "#A4B9C5";
//     event.target.style.color = "#586166";
//   };

//   const handleMouseLeave = (event) => {
//     event.target.style.backgroundColor = ""; // Reset background color
//     event.target.style.color = ""; // Reset text color
//   };

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My Experience</SectionHeading>
//       <VerticalTimeline lineColor="">
//         {experiencesData.map((item, index) => (
//           <VerticalTimelineElement
//             key={index}
//             contentStyle={{
//               background:
//                 theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//               boxShadow: "none",
//               border: "1px solid rgba(0, 0, 0, 0.05)",
//               textAlign: "left",
//               padding: "1.3rem 2rem",
//               fontSize: "1rem", // Customize font size
//               color: "#333", // Customize text color
//               transition: "background-color 0.3s ease", // Add transition for hover effect
//             }}
//             contentArrowStyle={{
//               borderRight:
//                 theme === "light"
//                   ? "0.4rem solid #9ca3af"
//                   : "0.4rem solid rgba(255, 255, 255, 0.5)",
//             }}
//             date={item.date}
//             icon={item.icon}
//             iconStyle={{
//               background:
//                 theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//               fontSize: "1.5rem",
//             }}
//             onMouseEnter={handleMouseEnter} // Use defined function for onMouseEnter
//             onMouseLeave={handleMouseLeave} // Use defined function for onMouseLeave
//           >
//             <h3 className="font-semibold capitalize">{item.title}</h3>
//             <p className="font-normal !mt-0">{item.location}</p>
//             <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//               {item.description}
//             </p>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }
