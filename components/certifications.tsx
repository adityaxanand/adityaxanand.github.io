"use client"
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Google Developer Student Clubs - Ranchi",
    description:
      "Attended various events and contributed to website development and small events.",
    issuedBy: "Google DSC",
    date: "2024",
  },
  {
    title: "ICPC Asia Regionalist '24",
    description:
      "Qualified as an ICPC Asia Regionalist in 2024, one of the top global competitive programming contests.",
    issuedBy: "ICPC",
    date: "2024",
  },
  {
    title: "4 Star on CodeChef",
    description:
      "Achieved a 4-star rating on CodeChef with a peak rating of 1829, demonstrating strong problem-solving skills.",
    issuedBy: "CodeChef",
    date: "2024",
  },
];

const Certifications = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-5 border border-white/10">
              <CardContent className="flex flex-col items-center text-center">
                <FaCertificate className="text-4xl text-yellow-500 mb-3" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{cert.description}</p>
                <p className="text-xs text-gray-400 mt-1">Issued by {cert.issuedBy}, {cert.date}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
