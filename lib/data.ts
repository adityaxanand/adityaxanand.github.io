import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import mindsMomImg from "@/public/mindsmom.png";
import qrollImg from "@/public/qroll.png";
import portfolioImg from "@/public/portfolio.png"
import dinendecodeImg from "@/public/dinendecode.png"
import xv6Img from "@/public/xv6.png"
import talkingJunctionImg from "@/public/talkingjunction.png"
import phytoSenseImg from "@/public/phytosense.png"
import scholarScaleImg from "@/public/scholarscale.png"

import hactoberfestImg from "@/public/hacktoberfest.jpeg"
// import hackathonImg from "@/public/hackathon.png"
import icpcImg from "@/public/icpc.jpeg"
import codechefImg from "@/public/codechef.png"
import gdscImg from "@/public/gdsc.jpeg"
import mockorbitImg from "@/public/mockorbit.png"
// import wordanalyticsImg from "@/public/wordanalytics.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Competitive Programmin",
  //   hash: "#competitive-programming"
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, India",
    description:
      "Currently a third-year undergraduate, I am immersing myself in a diverse and challenging curriculum at KIIT. This experience is enriching my problem-solving skills and fostering creativity, setting a solid foundation for my future in industrial technology.",
    icon: React.createElement(LuGraduationCap),
    date: "September, 2022 - April, 2026",
  },
  {
    title: "Backend Developer Intern",
    location: "CXXXXXe,  Bhubaneswar, India",
    description:
      "Worked as a backend developer intern. Due to privacy reasons, I cannot disclose the company name. During my internship, I focused on various backend development tasks, gaining valuable experience in the field.",
    icon: React.createElement(CgWorkAlt),
    date: "September, 2024 - November, 2024",
  },
  {
    title: "Senior Technical Executive",
    location: "FED Entrepreneurial Society, Bhubaneswar, India",
    description:
      "Organized and conducted major events, including hackathons in our flagship event Omega 4.0, managed and mentored junior developers, served on panels for hackathons and other technical events, providing expert insights and guidance. Participated in interviewing and recruitment drives, contributing to the selection of top talent.",
    icon: React.createElement(FaReact),
    date: "December, 2023 - Present",
  },

  {
    title: "App Developer",
    location: "Coding Ninjas - KIIT Chapter",
    description:
      "Did nothing much serious lol.",
    icon: React.createElement(FaReact),
    date: "January, 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Mock Orbit",
    description:
      "A Peer to Peer interviewing SAAS platform for collaborative, real-time mock interviews with peers.",
    tags: ["Go", "Next.js", "MongoDB", "Web Sockets", "AWS", "Docker"],
    imageUrl: mockorbitImg,
    projectUrl:"https://mockorbit.duckdns.org",
    githubUrl:"https://github.com/adityaxanand/MockOrbit",
  },
  {
    title: "Phyto Sense",
    description:
      "Diagnose plant diseases using AI-powered insights and receive actionable recommendations for healthier crops.",
    tags: ["NEXT.JS", "Tailwind", "Flask", "Gemini API", "AI/ML", "PyTorch"],
    imageUrl: phytoSenseImg,
    projectUrl:"https://phytosenseai.vercel.app",
    githubUrl:"https://github.com/adityaxanand/PhytoSense",
  },
  {
    title: "Minds Mom",
    description:
      "Made to assess mental health, resources & get guidance. Looking self-help tools or peer support?",
    tags: ["Kotlin", "OpenAI API", "MongoDB", "Java", "Jetpack Compose"],
    imageUrl: mindsMomImg,
    projectUrl:"https://github.com/adityaxanand/MindsMom",
    githubUrl:"https://github.com/adityaxanand/MindsMom",
  },

  {
    title: "Q Roll",
    description:
      "QR based attendance system of any event created. Biometric verification before QR Validation.",
    tags: ["React", "Node.JS", "MongoDB", "OpenCV"],
    imageUrl: qrollImg,
    projectUrl:"https://github.com/adityaxanand/QRoll",
    githubUrl:"https://github.com/adityaxanand/QRoll",
  },

  {
    title: "xv-6 Altered OS",
    description:
      "Modified the xv-6 Operating System and made the problems solutions.",
    tags: ["Assembly", "Operating Systems", "C/C++", "Kernel"],
    imageUrl: xv6Img,
    projectUrl:"https://github.com/adityaxanand/xv6-altered",
    githubUrl:"https://github.com/adityaxanand/xv6-altered",
  },

  {
    title: "Dine N Decode",
    description:
      "Cleaned, visualized, and modeled restaurant data (Dataset: Zomato) to analyze trends and predict costs.",
    tags: ["AI/ML", "Seaborn", "Python", "NumPy", "Pandas"],
    imageUrl: dinendecodeImg,
    projectUrl:"https://github.com/adityaxanand/DineNDecode",
    githubUrl:"https://github.com/adityaxanand/DineNDecode",
  },

  {
    title: "Talking Junction",
    description:
      "A real-time chat application inspired by LetsChat, built on modern tech.",
    tags: ["React.JS", "Node.JS", "Tailwind", "MongoDB", "Socket.IO", "FireB"],
    imageUrl: talkingJunctionImg,
    projectUrl:"https://github.com/adityaxanand/TalkingJunction",
    githubUrl:"https://github.com/adityaxanand/TalkingJunction",
  },

  {
    title: "Scholar Scale",
    description:
      "Used Streamlit to build this CGPA Calculator website which calculates the SGPA + CGPA on Credit Points.",
    tags: ["Python", "Streamlit"],
    imageUrl: scholarScaleImg,
    projectUrl:"https://scholarscale.streamlit.app",
    githubUrl:"https://github.com/adityaxanand/ScholarScale",
  },

  {
    title: "Personal Portfolio",
    description:
      "Used Next.JS to build this personal portfolio website which shows all my achievements and projects.",
    tags: ["Next.JS", "Express.JS", "MongoDB", "Tailwind", "Framer"],
    imageUrl: portfolioImg,
    projectUrl:"https://adityaanand.vercel.app",
    githubUrl:"https://github.com/adityaxanand/adityaxanand.github.io",
  },
] as const;

// lib/data.ts
import { FaGolang } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaAws, FaPython, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiSocketdotio, SiNextdotjs, SiSpringboot, SiTailwindcss, SiPrisma, SiMongodb, SiRedux, SiGraphql, SiApollographql, SiExpress, SiPostgresql, SiDjango, SiKubernetes, SiDotnet } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { VscTerminalLinux } from 'react-icons/vsc';
import { AiOutlineApi } from 'react-icons/ai';

export const skillsData = [
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(FaCss3Alt) },
  { name: "JavaScript", icon: React.createElement(FaJs) },
  { name: "Golang", icon: React.createElement(FaGolang) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "Express", icon: React.createElement(SiExpress) },
  { name: "Socket.IO", icon: React.createElement(SiSocketdotio) },
  { name: "Spring Boot", icon: React.createElement(SiSpringboot) },
  { name: ".NET", icon: React.createElement(SiDotnet) },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
  { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "Redux", icon: React.createElement(SiRedux) },
  { name: "GraphQL", icon: React.createElement(SiGraphql) },
  { name: "Apollo", icon: React.createElement(SiApollographql) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "Django", icon: React.createElement(SiDjango) },
  { name: "Git", icon: React.createElement(FaGitAlt) },
  { name: "GitHub", icon: React.createElement(FaGithub) },
  { name: "Docker", icon: React.createElement(FaDocker) },
  { name: "Kubernetes", icon: React.createElement(SiKubernetes) },
  { name: "AWS", icon: React.createElement(FaAws) },
  { name: "RESTful APIs", icon: React.createElement(AiOutlineApi) },
  { name: "Linux", icon: React.createElement(FaLinux) },
  { name: "Kernel", icon: React.createElement(VscTerminalLinux) },
  { name: "Framer Motion", icon: React.createElement(TbBrandFramerMotion) },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "Socket.IO",
//   "React",
//   "Next.JS",
//   "Node.JS",
//   "Git/Github",
//   ".NET",
//   "Spring Boot",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
//   "Kubernetes",
//   "Docker",
//   "AWS",
//   "RESTful APIs",
//   "Linux",
//   "Kernel"
// ] as const;

// export const achievementsData = [
//   {
//     title: "1st Prize Winner - VISIONARY Hackathon",
//     description: "Secured 1st place in VISIONARY Hackathon conducted by Mercer | Mettl among 500+ participants.",
//   },
//   {
//     title: "4 Star on CodeChef",
//     description: "Ranked 4 Star on CodeChef a Competitive Programming platform",
//   },
//   {
//     title: "LeetCode 1480+ Rating",
//     description: "Achieved a 1480+ rating on LeetCode with 150+ solved problems.",
//   },
//   {
//     title: "Open Source Contributor",
//     description: "Contributed to multiple open-source projects on GitHub.",
//   },
// ] as const;



export const achievementsData = [
  {
    title: "ICPC Asia Regionalist '24",
    shortDescription: "Qualified for the prestigious global programming regionals.",
    description:
      "Showcased problem-solving skills and algorithmic expertise in a globally recognized competitive programming event.",
    imageUrl: icpcImg,
    link: "https://codeforces.com/blog/entry/53241",
    cardColor: "#4F46E5", // Indigo
  },
  {
    title: "4 Star on CodeChef",
    shortDescription: "Achieved a 4-Star rating (1829) on CodeChef.",
    description:
      "Consistently solved complex algorithmic problems, ranking among top competitive programmers on the platform.",
    imageUrl: codechefImg,
    link: "https://codechef.com/users/adityaxanand",
    cardColor: "#D97706", // Amber
  },
  {
    title: "CodeCrate Contest Winner",
    shortDescription: "Secured 1st place in a contest by RECursion Society, NIT Durgapur.",
    description:
      "Competed against talented programmers and secured the first position in a challenging online coding contest.",
    imageUrl: hactoberfestImg, // Assuming you might want a different image here
    link: "https://github.com/adityaxanand",
    cardColor: "#10B981", // Emerald
  },
  {
    title: "Hacktoberfest Contributor",
    shortDescription: "Contributed to various open-source application development projects.",
    description:
      "Enhanced user security in a safety application and worked on a data mining project to extract valuable insights.",
    imageUrl: hactoberfestImg,
    link: "https://github.com/adityaxanand",
    cardColor: "#EC4899", // Pink
  },
  {
    title: "Google Developer Student Clubs",
    shortDescription: "Active member, contributing to web projects and events.",
    description:
      "Participated in various tech events, contributed to projects to improve user experience, and assisted in event organization.",
    imageUrl: gdscImg,
    link: "https://github.com/adityaxanand",
    cardColor: "#DB2777", // Fuchsia
  },
] as const;



// export const achievementsData = [

//   {
//     title: "ICPC Asia Regionalist '24",
//     shortDescription: "Qualified as an ICPC Asia Regionalist 2024, competing in one of the most prestigious global programming contests.",
//     description:
//       "Participated in ICPC Asia Regionals 2024, showcasing problem-solving skills and algorithmic expertise in a globally recognized competitive programming event.",
//     imageUrl: icpcImg,
//     link: "https://codeforces.com/blog/entry/53241",
//   },

//   // {
//   //   title: "1st Prize Winner - VISIONARY Hackathon",
//   //   shortDescription: "Secured 1st place in VISIONARY Hackathon conducted by Mercer | Mettl among 500+ participants.",
//   //   description:
//   //     "Developed, MediAR enhances healthcare by providing AR-based surgical visualizations, helping doctors plan procedures and patients understand treatments through immersive experiences.",
//   //   imageUrl: hackathonImg,
//   //   link: "https://xathon.mettl.com/event/",
//   // },

//   {
//     title: "4 Star on CodeChef",
//     shortDescription: "Achieved a 4-Star rating (1829) on CodeChef, excelling in competitive programming challenges.",
//     description:
//       "Consistently solved complex algorithmic problems on CodeChef, improving problem-solving skills and ranking among top competitive programmers.",
//     imageUrl: codechefImg,
//     link: "https://codechef.com/users/adityaxanand",
//   },

//   {
//     title: "CodeCrate - NIT Durgapur Contest",
//     shortDescription: "Secured 1st position in the college event online contest conducted by RECursion Society.",
//     description:
//       "Secured 1st position in the college event online contest conducted and got 7k as a prize money.",
//     imageUrl: hactoberfestImg,
//     link: "https://github.com/adityaxanand",
//   },

//   {
//     title: "Hacktoberfest - Open Source Contributor",
//     shortDescription: "Contributed to various projects in application development, focusing on creating innovative and user-friendly solutions.",
//     description:
//       "Developed a safety application aimed at enhancing user security and providing real-time alerts. Worked on AI/ML development projects, including a data mining project to extract valuable insights from large datasets.",
//     imageUrl: hactoberfestImg,
//     link: "https://github.com/adityaxanand",
//   },

//   {
//     title: "Google Developer Student Clubs - Ranchi",
//     shortDescription: "Attended tech events, contributed to web projects, and assisted in organizing small events.",
//     description:
//       "I participated in various tech events, in development and networking. Contributed to projects, improving the user experience. Additionally, helped in organizing small events, ensuring smooth execution among participants.",
//     imageUrl: gdscImg,
//     link: "https://github.com/adityaxanand",
//   },
// ];




// import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

// export const links = [
//   {
//     name: "Home",
//     hash: "#home",
//   },
//   {
//     name: "About",
//     hash: "#about",
//   },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
//   {
//     name: "Skills",
//     hash: "#skills",
//   },
//   {
//     name: "Experience",
//     hash: "#experience",
//   },
//   {
//     name: "Contact",
//     hash: "#contact",
//   },
// ] as const;

// export const experiencesData = [
//   {
//     title: "Kalinga Institute of Industrial Technology",
//     location: "Bhubaneswar, India",
//     description:
//       "N/A",
//     icon: React.createElement(LuGraduationCap),
//     date: "2022 - 2026",
//   },

// ] as const;

// export const projectsData = [
//   {
//     title: "MindsMom",
//     description:
//       "N/A",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: qrollImg,
//   },
// ] as const;

// export const skillsData = [
//   { name: "HTML", percentage: 90 },
//   { name: "CSS", percentage: 85 },
//   { name: "JavaScript", percentage: 85 },
//   { name: "TypeScript", percentage: 80 },
//   { name: "React", percentage: 90 },
//   { name: "Next.js", percentage: 85 },
//   { name: "Node.js", percentage: 80 },
//   { name: "Git", percentage: 85 },
//   { name: "Tailwind", percentage: 90 },
//   { name: "Prisma", percentage: 80 },
//   { name: "MongoDB", percentage: 85 },
//   { name: "Redux", percentage: 85 },
//   { name: "GraphQL", percentage: 80 },
//   { name: "Apollo", percentage: 75 },
//   { name: "Express", percentage: 80 },
//   { name: "PostgreSQL", percentage: 75 },
//   { name: "Python", percentage: 70 },
//   { name: "Django", percentage: 70 },
//   { name: "Framer Motion", percentage: 85 },
// ] as const;
