// components/leetcode.tsx
"use client";

import React from "react";
import SectionHeading from "./section-heading"; // Assuming you have this component
import LeetcodeStats from "./leetcode-stats";
import { SiLeetcode } from "react-icons/si";

export default function LeetCodeSection() {
  return (
    <section className="w-full flex flex-col items-center my-24">
      <SectionHeading>LeetCode</SectionHeading>

      <div className="flex justify-center my-8">
        <a
          // href={`https://leetcode.com/${process.env.NEXT_PUBLIC_LEETCODE_USERNAME}`}
          href={`https://leetcode.com/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center bg-[#F89F1B] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#d48819] transition-colors duration-200">
            <SiLeetcode className="mr-2" size={24} />
            LeetCode
          </button>
        </a>
      </div>

      <div className="w-full max-w-5xl flex justify-center px-4">
        <LeetcodeStats />
      </div>
    </section>
  );
}