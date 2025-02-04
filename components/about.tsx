// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

// export default function About() {
//   const { ref } = useSectionInView("About");

//   return (
//     <motion.section
//       ref={ref}
//       className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="about"
//     >
//       <SectionHeading>About me</SectionHeading>
//       <p className="mb-3">
//         After graduating with a degree in{" "}
//         <span className="font-medium">Computer Science</span>, I decided to pursue my
//         passion for programming. I enrolled in a coding bootcamp and learned{" "}
//         <span className="font-medium">Backend development</span>.{" "}
//         <span className="italic">My favorite part of programming</span> is the
//         problem-solving aspect. I{/*<span className="underline">love</span>*/} love the
//         feeling of finally figuring out a solution to a problem. My core stack
//         is{" "}
//         <span className="font-medium">
//           React, Next.js, Node.js, and MongoDB
//         </span>
//         . I am also familiar with TypeScript. I am always looking to
//         learn new technologies. I am currently looking for a{" "}
//         <span className="font-medium">full-time position</span> as a software
//         developer.
//       </p>

//       <p>
//         <span className="italic">When I'm not coding</span>, I enjoy playing
//         video games, watching movies, and listening to music. I also enjoy{" "}
//         <span className="font-medium">learning new things</span>. I am currently
//         learning about{" "}
//         <span className="font-medium">App Development</span>. I'm also
//         learning how to get into the cloud part and host my projects there with servers.
//       </p>
//     </motion.section>
//   );
// }


"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="relative mb-24 max-w-[40rem] text-center leading-7 sm:mb-32 scroll-mt-24 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Soft Moving Background Gradient */}
      <motion.div
        className="absolute inset-0 w-full h-full -z-10 opacity-40"
        style={{
          background: "linear-gradient(120deg, #f9fef0, #ecfadc, #e4f7c1)",
          filter: "blur(130px)",
        }}
        animate={{
          x: [0, 10, 0], y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft Floating Particles */}
      <motion.div
        className="absolute top-10 left-14 w-12 h-12 bg-yellow-300/20 rounded-full blur-2xl"
        animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-14 w-10 h-10 bg-green-300/20 rounded-full blur-2xl"
        animate={{ y: [0, 8, 0], x: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Text Sections */}
      <motion.p
        className="mb-4 text-[0.9rem] text-gray-800 dark:text-gray-300 tracking-wide leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I’m a <span className="font-semibold text-green-700 dark:text-green-400">software developer</span> passionate 
        about solving complex problems with clean, scalable solutions. My journey started with a deep curiosity 
        for technology, leading me to explore <span className="font-semibold">backend development</span> and system design.
      </motion.p>

      <motion.p
        className="mb-4 text-[0.9rem] text-gray-800 dark:text-gray-300 tracking-wide leading-relaxed"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        My core stack includes <span className="font-semibold">React, Next.js, Node.js, and MongoDB</span>, with a growing 
        focus on cloud infrastructure. I love crafting <span className="italic text-green-600 dark:text-green-400">
        smooth, interactive experiences</span> that feel intuitive and powerful.
      </motion.p>

      <motion.p
        className="text-[0.9rem] text-gray-800 dark:text-gray-300 tracking-wide leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        When I'm not coding, you’ll find me enjoying <span className="font-semibold">video games, music, and movies</span>. 
        Recently, I’ve been diving into <span className="text-green-600 dark:text-green-400 font-medium">cloud computing & app deployment</span>, 
        bringing my projects to life on scalable platforms.
      </motion.p>
    </motion.section>
  );
}
