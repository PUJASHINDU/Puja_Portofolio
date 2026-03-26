import React from "react";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const JourneyTimeline = () => {
  const timelineData = [
    {
      title: "Lulus SMA",
      date: "2020",
      description:
        "Menyelesaikan pendidikan Sekolah Menengah Atas dan mulai tertarik pada dunia teknologi dan pengembangan perangkat lunak.",
      icon: <FaGraduationCap />,
    },
    {
      title: "S1 Sistem Komputer - ITB Stikom Bali",
      date: "2021 – 2025",
      description:
        "Mempelajari pemrograman, database, web development, dan software engineering dengan fokus pada pengembangan aplikasi berbasis web.",
      icon: <FaCode />,
    },
    {
      title: "MSIB Data & Software Engineer",
      date: "Agustus – Desember 2023",
      description:
        "Berperan sebagai Team Lead Data Analyst dalam analisis dan visualisasi data serta berkontribusi sebagai UI Designer & Frontend Developer.",
      icon: <FaCode />,
    },
    {
      title: "Frontend & Android Developer - PT. Mari Buka Akses",
      date: "Maret – Juli 2024",
      description:
        "Mengembangkan aplikasi Android internal serta fitur notifikasi email dan peningkatan UI.",
      icon: <FaBriefcase />,
    },
    {
      title: "Final Project (Tugas Akhir) - Bali Pure Tour",
      date: "2025",
      description:
        "Membangun sistem booking tour berbasis web menggunakan React, Node.js, Express, MySQL, serta integrasi Midtrans.",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-24 bg-white font-[Poppins] text-[#182635]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            My Journey
          </h2>
          <p className="text-[#182635]/70 mt-3 text-sm sm:text-base">
            Education & Professional Experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line (responsive position) */}
          <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[2px] md:w-[3px] h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 opacity-60"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-20 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute w-12 h-12 bg-cyan-400/20 rounded-full blur-lg"></div>
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg text-sm md:text-lg">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="w-full md:w-[44%] pl-12 md:pl-0">
                <div className="p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white border border-[#182635]/10 shadow-md hover:shadow-xl transition-all duration-300">

                  <span className="text-xs sm:text-sm text-cyan-500 font-medium">
                    {item.date}
                  </span>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-[#182635]/70 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;