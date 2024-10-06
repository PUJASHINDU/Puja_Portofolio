import { Typography } from "@material-tailwind/react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export function SkilComponents() {
  return (
    <section className="py-8 px-4 sm:px-6 mb-36 lg:py-16 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Responsive Typography for Section Title */}
        <Typography
          color="blue-gray"
          variant="lead"
          className="font-semibold font-poppins text-base sm:text-lg lg:text-2xl">
          My Skills
        </Typography>

        {/* Responsive Typography for Sub Title */}
        <p
          className="my-4 text-lg font-poppins text-gray-600 leading-snug"
        >
          Trusted Tools and Technologies
        </p>

        {/* Responsive Typography for Description */}

        {/* Wrapper for the icons */}
        <div className="flex flex-wrap justify-center items-center space-x-6 lg:space-x-12 relative h-40 overflow-hidden">
          {/* HTML Icon and Text */}
          <div className="flex flex-col items-center animate-slideInOut">
            <FaHtml5 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-orange-600" />
            <Typography variant="small" className="font-normal text-gray-500 mt-2 text-xs sm:text-sm lg:text-base">
              HTML
            </Typography>
          </div>

          {/* CSS Icon and Text */}
          <div className="flex flex-col items-center animate-slideInOut">
            <FaCss3Alt className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600" />
            <Typography variant="small" className="font-normal text-gray-500 mt-2 text-xs sm:text-sm lg:text-base">
              CSS
            </Typography>
          </div>

          {/* Tailwind CSS Icon and Text */}
          <div className="flex flex-col items-center animate-slideInOut">
            <SiTailwindcss className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-teal-400" />
            <Typography variant="small" className="font-normal text-gray-500 mt-2 text-xs sm:text-sm lg:text-base">
              Tailwind CSS
            </Typography>
          </div>

          {/* JavaScript Icon and Text */}
          <div className="flex flex-col items-center animate-slideInOut">
            <FaJs className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-yellow-400" />
            <Typography variant="small" className="font-normal text-gray-500 mt-2 text-xs sm:text-sm lg:text-base">
              JavaScript
            </Typography>
          </div>

          {/* React JS Icon and Text */}
          <div className="flex flex-col items-center animate-slideInOut">
            <FaReact className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-400" />
            <Typography variant="small" className="font-normal text-gray-500 mt-2 text-xs sm:text-sm lg:text-base">
              React JS
            </Typography>
          </div>

          {/* Figma Icon and Text */}
          <div className="flex flex-col items-center animate-slideInOut">
            <FaFigma className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-light-blue-300" />
            <Typography variant="small" className="font-normal text-gray-500 mt-2 text-xs sm:text-sm lg:text-base">
              Figma
            </Typography>
          </div>
        </div>

        {/* CSS untuk mengulangi animasi */}
        <style>
          {`
            @keyframes slideInFromRight {
              0% { transform: translateX(100%); opacity: 0; }   /* Mulai dari luar layar kanan */
              10% { opacity: 1; }                                /* Muncul sepenuhnya */
              80% { opacity: 1; }                                /* Tetap terlihat */
              100% { transform: translateX(-100%); opacity: 0; } /* Keluar dari layar kiri */
            }

            .animate-slideInOut {
              animation: slideInFromRight 20s linear forwards;    /* Total durasi per ikon */
              animation-fill-mode: forwards;                      /* Memastikan animasi tidak reset */
              animation-iteration-count: infinite;                /* Ulangi animasi */
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default SkilComponents;
