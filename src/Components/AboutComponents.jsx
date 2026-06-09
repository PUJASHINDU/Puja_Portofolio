import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/profile/Puja.png";
import MyCV from "../assets/cv/Puja_Resume_Ats.pdf";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

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
    <section className="relative w-full min-h-screen flex justify-center items-center -mt-20 bg-[#090d16] px-4 sm:px-6 md:px-12 lg:px-24 py-24 text-white overflow-hidden font-poppins">

      {/* Efek Ambient Light Latar Belakang */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-lime-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Garis Grid Dekoratif Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 z-10">

        {/* SISI KIRI: KONTEN TEKS & AKSI */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Tagline Kecil */}


          {/* Nama Utama */}
          <h1 className="text-4xl sm:text-5xl mt-10 lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Puja Shindu Astawa
          </h1>

          <span className="px-4 py-1.5 rounded-full mt-5 text-xs font-semibold tracking-widest uppercase bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-6 backdrop-blur-md">
            Membangun Pengalaman Digital
          </span>
          {/* Deskripsi Menjadi Satu Alur Cerita */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8 text-center lg:text-left">
            Saya adalah seorang <span className=" bg-clip-text text-lime-300 from-lime-400 to-emerald-400 font-semibold">Website Developer</span> dan
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-semibold">UI/UX Designer</span> yang berdedikasi tinggi dalam menciptakan solusi digital yang efisien, intuitif, dan menarik secara visual.
            <span className="hidden sm:inline"> Sebagai lulusan Sistem Komputer dari ITB Stikom Bali, fokus saya adalah menjembatani fungsionalitas teknologi dengan keindahan desain demi dampak nyata bagi pengguna.</span>
          </p>

          {/* Sesi Interaksi (Tombol & Sosial Media) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            {/* Tombol Download CV Premium */}
            <button
              onClick={handleDownloadCV}
              className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 text-gray-9ab text-gray-950 font-bold shadow-lg shadow-lime-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-lime-500/30 overflow-hidden flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {/* Efek Kilatan Shimmer */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
              <HiDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </button>

            {/* Deretan Icon Media Sosial */}
            <div className="flex items-center gap-3.5">
              <a
                href="https://wa.me/6281228608307"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-lime-400 hover:text-gray-950 hover:border-transparent hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com/pujashindu__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-lime-400 hover:text-gray-950 hover:border-transparent hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* GitHub Dropdown Wrapper */}
              <div className="relative">
                <button
                  onClick={toggleGithubDropdown}
                  className={`p-3.5 rounded-xl border transition-all duration-300 hover:scale-110 ${showGithubOptions
                    ? "bg-lime-400 text-gray-950 border-transparent"
                    : "bg-white/5 border-white/10 hover:bg-lime-400 hover:text-gray-950 hover:border-transparent"
                    }`}
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {showGithubOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 mt-3 w-48 bg-[#111827]/90 text-white rounded-xl shadow-2xl py-2 right-0 sm:left-0 border border-white/10 backdrop-blur-xl"
                      onMouseLeave={closeDropdown}
                    >
                      <a
                        href="https://github.com/PUJASHINDU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm hover:bg-lime-400 hover:text-gray-950 font-medium transition-colors"
                      >
                        GitHub Puja Shindu
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="mailto:shinduastawa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-lime-400 hover:text-gray-950 hover:border-transparent hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* SISI KANAN: FRAME FOTO PROFIL MODERN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 flex justify-center items-center"
        >
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Dekorasi Aksen Belakang (Glow & Bentuk Kotak Miring) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-400 to-blue-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute inset-4 border border-lime-400/30 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="absolute inset-4 border border-blue-500/20 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

            {/* Frame Utama Foto */}
            <div className="relative w-full h-full rounded-3xl mt-10 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-3 group-hover:border-white/20 transition-colors duration-500">
              <img
                src={Profile}
                alt="Puja Shindu Profile"
                className="w-full h-full object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutComponents;