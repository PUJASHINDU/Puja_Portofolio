import { Typography } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import iconchek from "../assets/service/check.png";
import About from "../assets/service/Service_Img.png";

const ServiceComponents = () => {
  return (
    <section className="relative py-16 px-6 lg:px-16 flex justify-center items-center">
      {/* Glassmorphism Wrapper */}
      <div className="relative w-full max-w-6xl rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-10 transition-all duration-500 hover:bg-white/15 hover:shadow-blue-100/20">
        {/* Efek cahaya lembut */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-3xl pointer-events-none"></div>

        {/* Grid Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bagian Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={About}
                alt="Tour Image"
                className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200/30 transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl opacity-40 rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Bagian Teks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            {/* Judul */}
            <Typography
              variant="h1"
              className="font-poppins text-customGreenslow text-lg lg:text-xl leading-relaxed mb-3"
            >
              <span className="text-customBlue font-semibold">
                Layanan Tersedia Siap Membantu ✨
              </span>
            </Typography>

            {/* Deskripsi */}
            <Typography
              variant="paragraph"
              className="text-customGreenslow text-sm lg:text-base font-poppins text-gray-600 text-justify leading-relaxed"
            >
              Menyediakan layanan pembuatan dan pengembangan website dari awal hingga selesai,
              dengan fokus pada desain UI yang responsif, keamanan, dan performa. Menggunakan
              teknologi modern seperti React.js dan Tailwind CSS, Node.js Express.js serta MySQL.
              Saya siap membangun website yang menarik, fungsional, dan dapat diakses di berbagai
              perangkat, sesuai dengan kebutuhan bisnis Anda.
            </Typography>

            <Typography
              variant="paragraph"
              className="mt-6 text-gray-600 text-sm lg:text-base font-poppins font-semibold"
            >
              Layanan Tersedia
            </Typography>

            {/* Daftar Layanan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 w-full text-gray-600 font-poppins">
              {[
                "Landing Page",
                "E-commerce",
                "Website Travel",
                "Company Profile",
                "Undangan Online",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 group hover:translate-x-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100/60 backdrop-blur-sm">
                    <img
                      src={iconchek}
                      alt="Check Icon"
                      className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <Typography
                    as="span"
                    className="text-sm lg:text-base transition-colors duration-300"
                  >
                    {service}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponents;
