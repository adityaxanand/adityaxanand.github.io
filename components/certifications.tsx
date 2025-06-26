// "use client"
// import React from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { motion } from "framer-motion";
// import { FaCertificate } from "react-icons/fa";
// import SectionHeading from "./section-heading";

// const certifications = [
//   {
//     title: "ICPC Asia Regionalist '24",
//     description:
//       "Qualified as an ICPC Asia Regionalist in 2024, one of the top global competitive programming contests.",
//     issuedBy: "ICPC",
//     date: "2024",
//   },
// ];

// const Certifications = () => {
//   return (
//     <section className="w-full flex flex-col items-center my-24">
//           <SectionHeading>Certifications</SectionHeading>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {certifications.map((cert, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Card className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-5 border border-white/10">
//               <CardContent className="flex flex-col items-center text-center">
//                 <FaCertificate className="text-4xl text-yellow-500 mb-3" />
//                 <h3 className="text-xl font-semibold">{cert.title}</h3>
//                 <p className="text-sm text-gray-300 mt-2">{cert.description}</p>
//                 <p className="text-xs text-gray-400 mt-1">Issued by {cert.issuedBy}, {cert.date}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;


// components/Certifications.tsx

"use client";

import React from "react";
// import { certificationsData } from "@/lib/data"; // Assuming your data is here
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";

// Updated data structure for this component
// You can move this to your data.ts file
export const certifications = [
  {
    title: "Google Data Analytics",
    issuer: "Google",
    date: "2025",
    description: "Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.",
    icon: <FaCertificate />,
    link: "https://www.coursera.org/account/accomplishments/specialization/SVIFKTSAJG4D",
  },
  {
    title: "IBM Data Science Specialization",
    issuer: "IBM",
    date: "2025",
    description: "In this Professional Certificate, learners developed and honed handson skills in Data Science and Machine Learning. Learners started with an orientation of Data Science and its Methodology, became familiar and used a variety of data science tools, learned Python and SQL, performed Data Visualization and Analysis, and created Machine Learning models. In the process they completed several labs and assignments on the cloud including a Capstone Project at the end to apply and demonstrate their knowledge and skills.",
    icon: <FaCertificate />,
    link: "https://www.coursera.org/account/accomplishments/specialization/P44Q4OOTFKMO",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    description: "The Oracle Cloud Infrastructure (OCI) AI Foundations certification is designed to introduce learners to the fundamental concepts of artificial intelligence (AI) and machine learning (ML), with a specific focus on the practical application of these technologies within the Oracle Cloud Infrastructure.",
    icon: <FaCertificate />,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D8057E62228BBEEF0308875AB8155881996A81EB78C1EBA7DF45EFD4B3CA94DB",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University, DeepLearning.AI",
    date: "2024",
    description: "They studied modern machine learning concepts, including supervised learning (linear regression, logistic regression, neural networks, decision trees), unsupervised learning (clustering, anomaly detection), recommender systems, and reinforcement learning. They learned some of the best practices for building machine learning models. They also gained practical skills to apply machine learning techniques to challenging real-world problems. They should #BreakIntoAI and start building your career in machine learning!",
    icon: <FaCertificate />,
    link: "https://www.coursera.org/account/accomplishments/specialization/IGOQ5RHHDR10",
  },
  {
    title: "Advanced C++ Certification",
    issuer: "Tim Buchalka",
    date: "2023",
    description: "Learned C++ features from basic to more advanced such as inheritance and polymorphic functions",
    icon: <FaCertificate />,
    link: "https://ude.my/UC-d4ddc00d-6098-4601-b2fd-b64a92423cb8/",
  },
  
  // Add more certifications here...
];

// Animation for each card
const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Certifications() {
  // const { ref } = useSectionInView("Certifications");

  return (
    <section id="certifications" className="w-full max-w-3xl mx-auto py-20 px-4 scroll-mt-28">  {/* ref={ref} */}
      <SectionHeading>Certifications & Awards</SectionHeading>

      <motion.div 
        className="mt-12 flex flex-col gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-black/5 dark:border-white/10 transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="flex flex-col sm:flex-row items-start gap-8">
              {/* Icon / Seal */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800/60 shadow-inner ring-1 ring-black/5 dark:ring-white/10">
                <span className="text-4xl text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-amber-500">
                  {cert.icon}
                </span>
              </div>

              {/* Details */}
              <div className="flex-grow">
                <p className="text-sm font-semibold text-amber-600 dark:text-amber-500 tracking-wider">{cert.issuer}</p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">{cert.description}</p>
              </div>

              {/* Date */}
              <div className="text-sm font-medium text-gray-400 dark:text-gray-500 shrink-0 mt-2 sm:mt-0">{cert.date}</div>
            </div>
            
            {/* "View Credential" Link */}
            {cert.link && (
                 <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-8 right-8 flex items-center gap-1 text-sm font-semibold text-gray-500 dark:text-gray-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-amber-600 dark:group-hover:text-amber-500"
                  >
                    View Credential <FiArrowUpRight className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                  </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}