import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import qrollImg from "@/public/qroll.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "I graduated after 4 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
  {
    title: "Backend Developer",
    location: "C",
    description:
      "N/A",
    icon: React.createElement(CgWorkAlt),
    date: "N/A",
  },
  {
    title: "N/A",
    location: "N/A",
    description:
      "N/A",
    icon: React.createElement(FaReact),
    date: "N/A",
  },
] as const;

export const projectsData = [
  {
    title: "MindsMom",
    description:
      "N/A",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: qrollImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
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
