import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mindsMomImg from "@/public/mindsmom.png";
import qrollImg from "@/public/qroll.png";
import portfolioImg from "@/public/portfolio.png"
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
    title: "App Developer",
    location: "FED Entrepreneurial Society, Bhubaneswar, India",
    description:
      "My contributions include assisting in the development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework. I worked with Google Firebase to manage user-inputted data. Utilized Android Studio as a development environment for both iOS and Android.",
    icon: React.createElement(FaReact),
    date: "December, 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "MindsMom",
    description:
      "Made to assess mental health, resources & get guidance. Looking self-help tools or peer support?",
    tags: ["Kotlin", "OpenAI API", "MongoDB", "Java", "Jetpack Compose"],
    imageUrl: mindsMomImg,
    projectUrl:"https://github.com/adityaxanand/MindsMom",
    githubUrl:"https://github.com/adityaxanand/MindsMom",
  },

  {
    title: "QRoll",
    description:
      "QR bases attendance system.",
    tags: ["React", "Node.JS", "MongoDB", "CSS"],
    imageUrl: qrollImg,
    projectUrl:"https://github.com/adityaxanand/QRoll",
    githubUrl:"https://github.com/adityaxanand/QRoll",
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Socket.IO",
  "React",
  "Next.JS",
  "Node.JS",
  "Git/Github",
  ".NET",
  "Spring Boot",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Kubernetes",
  "Docker",
  "AWS",
  "RESTful APIs",
  "Linux",
  "Kernel"
] as const;


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
