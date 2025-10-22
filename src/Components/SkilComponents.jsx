import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";

export function SkilComponents() {
  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9] overflow-hidden">
      {/* Efek cahaya dekoratif */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-lime-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            color="blue-gray"
            variant="h4"
            className="font-semibold font-poppins tracking-wide text-3xl sm:text-4xl"
          >
            My <span className="text-customBlue">Skills</span>
          </Typography>
          <p className="my-4 text-gray-600 text-lg font-light">
            Trusted Tools and Technologies
          </p>
        </motion.div>

        {/* Wrapper animasi marquee */}
        <div className="overflow-hidden mt-12">
          <motion.div
            className="flex animate-marquee space-x-14 w-max py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <SkillItem key={index} icon={skill.icon} label={skill.label} />
            ))}
            {/* Duplikat untuk looping animasi */}
            {skills.map((skill, index) => (
              <SkillItem key={`dup-${index}`} icon={skill.icon} label={skill.label} />
            ))}
          </motion.div>
        </div>

        {/* CSS Animasi */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}
        </style>
      </div>
    </section>
  );
}

// Daftar skill (ikon dan label)
const skills = [
  { icon: <FaHtml5 className="text-orange-500 w-16 h-16" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-600 w-16 h-16" />, label: "CSS" },
  { icon: <SiTailwindcss className="text-teal-400 w-16 h-16" />, label: "Tailwind" },
  { icon: <FaJs className="text-yellow-400 w-16 h-16" />, label: "JavaScript" },
  { icon: <FaReact className="text-sky-500 w-16 h-16" />, label: "React JS" },
  { icon: <FaNodeJs className="text-green-500 w-16 h-16" />, label: "Node.js" },
  { icon: <SiExpress className="text-gray-700 w-16 h-16" />, label: "Express.js" },
  { icon: <SiMysql className="text-blue-500 w-16 h-16" />, label: "MySQL" },
  { icon: <FaFigma className="text-pink-500 w-16 h-16" />, label: "Figma" },
];

// Komponen individual skill
function SkillItem({ icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center justify-center min-w-[120px] rounded-2xl p-6
      bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl hover:shadow-blue-300/20
      transition-all duration-300 hover:bg-white"
    >
      <div className="mb-3 drop-shadow-lg">{icon}</div>
      <Typography
        variant="small"
        className="font-medium text-gray-700 text-sm sm:text-base tracking-wide"
      >
        {label}
      </Typography>
    </motion.div>
  );
}

export default SkilComponents;
