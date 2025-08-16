import { Typography } from "@material-tailwind/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export function SkilComponents() {
  return (
    <section className="py-8 px-4 sm:px-6 mb-36 lg:py-16 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Judul */}
        <Typography
          color="blue-gray"
          variant="lead"
          className="font-semibold font-poppins text-base sm:text-lg lg:text-2xl"
        >
          My Skills
        </Typography>

        {/* Subjudul */}
        <p className="my-4 text-lg font-poppins text-gray-600 leading-snug">
          Trusted Tools and Technologies
        </p>

        {/* Wrapper animasi marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-10 w-max py-4">
            {skills.map((skill, index) => (
              <SkillItem key={index} icon={skill.icon} label={skill.label} />
            ))}
            {/* Duplikat untuk animasi looping */}
            {skills.map((skill, index) => (
              <SkillItem key={`dup-${index}`} icon={skill.icon} label={skill.label} />
            ))}
          </div>
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
  { icon: <FaHtml5 className="text-orange-600 w-20 h-20" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-600 w-20 h-20" />, label: "CSS" },
  { icon: <SiTailwindcss className="text-teal-400 w-20 h-20" />, label: "Tailwind" },
  { icon: <FaJs className="text-yellow-400 w-20 h-20" />, label: "JavaScript" },
  { icon: <FaReact className="text-blue-400 w-20 h-20" />, label: "React JS" },
  { icon: <FaNodeJs className="text-green-600 w-20 h-20" />, label: "Node.js" },
  { icon: <SiExpress className="text-gray-700 w-20 h-20" />, label: "Express.js" },
  { icon: <SiMysql className="text-blue-500 w-20 h-20" />, label: "MySQL" },
  { icon: <FaFigma className="text-pink-500 w-20 h-20" />, label: "Figma" },
];

// Komponen individual skill
function SkillItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center min-w-[100px]">
      {icon}
      <Typography
        variant="small"
        className="font-normal text-gray-500 mt-2 text-xs sm:text-sm lg:text-base"
      >
        {label}
      </Typography>
    </div>
  );
}

export default SkilComponents;
