import React, { useState } from "react";
import Profile from "../assets/profile/Puja.png";
import MyCV from "../assets/cv/Puja_Resume_Ats.pdf"; // import langsung file PDF
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutComponents = () => {
  const [showGithubOptions, setShowGithubOptions] = useState(false);

  const toggleGithubDropdown = () => {
    setShowGithubOptions(!showGithubOptions);
  };

  const closeDropdown = () => {
    setShowGithubOptions(false);
  };

  // fungsi untuk download CV tanpa <a href>
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = MyCV; // ambil file dari import
    link.download = "CV-Puja-Shindu.pdf"; // nama file hasil download
    link.click();
  };

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center font-poppins px-6 md:px-12 py-20">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-y-14 gap-x-16">

        {/* Kiri: Deskripsi */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Puja Shindu</h2>
          <p className="text-base leading-relaxed mb-4 text-gray-700 text-justify">
            Saya adalah seorang Fullstack Developer dan UI/UX Designer yang memiliki passion tinggi dalam membangun pengalaman digital yang intuitif, mudah digunakan, dan menarik secara visual. Saya menikmati proses pengembangan aplikasi secara menyeluruh—mulai dari antarmuka frontend yang bersih hingga sistem backend yang kuat. Lulusan Sistem Komputer dari ITB Stikom Bali.
          </p>

          {/* Tombol Download CV */}
          <button
            onClick={handleDownloadCV}
            className="mt-4 px-5 py-2 rounded-full bg-customBlue text-white font-semibold hover:bg-lime-600 transition"
          >
            Download CV
          </button>
        </div>

        {/* Tengah: Foto Profil */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={Profile}
            alt="Profile"
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Kanan: Stat + Icons */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Pengembangan Produk Digital</h2>
          <p className="text-base leading-relaxed mb-4 text-gray-700 text-justify md:text-left">
            Fokus pada penyediaan pengalaman digital yang berpusat pada pengguna dan berdampak melalui pengembangan UI/UX dan fullstack.
            Berkomitmen pada kualitas, perbaikan berkelanjutan, dan menciptakan desain yang benar-benar memiliki nilai.
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281339145075"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white rounded-full hover:bg-customBlue hover:text-black transition"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/pujashindu__"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white rounded-full hover:bg-customBlue hover:text-black transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            {/* GitHub Dropdown */}
            <div className="relative">
              <button
                onClick={toggleGithubDropdown}
                className="p-3 bg-black text-white rounded-full hover:bg-customBlue hover:text-black transition focus:outline-none"
              >
                <FaGithub className="w-5 h-5" />
              </button>
              {showGithubOptions && (
                <div
                  className="absolute z-50 mt-2 w-40 bg-white text-black rounded shadow-lg py-2 right-0"
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href="https://github.com/PUJASHINDU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    GitHub Puja Shindu
                  </a>
                  {/* <a
                    href="https://github.com/username2/project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    GitHub Project
                  </a> */}
                </div>
              )}
            </div>

            {/* Email */}
            <a
              href="mailto:pujashindu1121@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white rounded-full hover:bg-customBlue hover:text-black transition"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponents;
