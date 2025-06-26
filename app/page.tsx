import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import CompetitiveProgramming from "@/components/competitive-programming";
import Certifications from "@/components/certifications";
import LeetCodeSection from "@/components/leetcode";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <LeetCodeSection />
      <CompetitiveProgramming />
      <Certifications />
      <Contact />
    </main>
  );
}