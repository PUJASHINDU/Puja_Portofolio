import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "../assets/profile/Jasin.png";
import MyCV from "../assets/cv/Puja_Resume_Ats.pdf";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutComponents = () => {
  const [showGithubOptions, setShowGithubOptions] = useState(false);

  const toggleGithubDropdown = () => setShowGithubOptions(!showGithubOptions);
  const closeDropdown = () => setShowGithubOptions(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = MyCV;
    link.download = "CV-Puja-Shindu.pdf";
    link.click();
  };

  return (
    <section className="relative w-full min-h-screen -mt-24 flex justify-center items-center
      bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 md:px-12 py-20 text-white overflow-hidden">
      {/* Efek cahaya latar */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-customBlue/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-400/10 blur-2xl rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-y-14 gap-x-16 z-10 backdrop-blur-xl bg-white/5 p-10 rounded-3xl shadow-2xl"
      >
        {/* Kiri: Deskripsi */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full md:w-1/3 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-2 text-white font-poppins tracking-wide">
            Puja Shindu
          </h2>
          <p className="text-gray-300 leading-relaxed font-poppins mb-6 text-justify md:text-left">
            Saya adalah seorang <span className="text-lime-400 font-poppins font-medium">Website Developer</span> dan <span className="text-lime-400 font-poppins font-medium">UI/UX Designer</span> yang memiliki passion tinggi dalam membangun pengalaman digital yang intuitif dan menarik secara visual. Lulusan Sistem Komputer dari ITB Stikom Bali dengan komitmen terhadap desain dan performa.
          </p>

          <button
            onClick={handleDownloadCV}
            className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-lime-400 to-lime-600 text-gray-900 font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            Download CV
          </button>
        </motion.div>

        {/* Tengah: Foto Profil */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-lime-400 via-customBlue to-lime-400 rounded-full blur-lg opacity-70"></div>
            <img
              src={Profile}
              alt="Profile"
              className="relative w-52 h-52 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Kanan: Informasi & Icons */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full md:w-1/3 text-center md:text-left"
        >
          <h2 className="text-xl font-bold font-poppins mb-3 text-white font">
          Membangun Pengalaman Digital yang Bernilai
          </h2>
          <p className="text-gray-300  leading-relaxed font-poppins mb-6 text-justify md:text-left">
            Dengan latar belakang di bidang UI/UX dan web development, saya berfokus pada pengembangan solusi digital yang efisien, menarik, dan berpusat pada pengguna. Tujuan saya adalah menciptakan teknologi yang mudah digunakan dan memberi dampak nyata.
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="https://wa.me/6281228608307"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-lime-400 hover:text-gray-900 transition duration-300"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/pujashindu__"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-lime-400 hover:text-gray-900 transition duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            {/* GitHub Dropdown */}
            <div className="relative">
              <button
                onClick={toggleGithubDropdown}
                className="p-3 bg-white/10 rounded-full hover:bg-lime-400 hover:text-gray-900 transition duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </button>
              {showGithubOptions && (
                <div
                  className="absolute z-50 mt-2 w-44 bg-gray-800/90 text-white rounded-xl shadow-lg py-2 right-0 backdrop-blur-md border border-white/10"
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href="https://github.com/PUJASHINDU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-lime-400/20 transition"
                  >
                    GitHub Puja Shindu
                  </a>
                </div>
              )}
            </div>

            <a
              href="mailto:shinduastawa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-lime-400 hover:text-gray-900 transition duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutComponents;
