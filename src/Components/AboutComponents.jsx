import React, { useState } from 'react';
import Profile from "../assets/profile/Puja.png";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutComponents = () => {
  const [showGithubOptions, setShowGithubOptions] = useState(false);

  const toggleGithubDropdown = () => {
    setShowGithubOptions(!showGithubOptions);
  };

  const closeDropdown = () => {
    setShowGithubOptions(false);
  };

  return (
    <section className="-mt-14 relative w-full min-h-screen flex justify-center items-center font-poppins px-6 md:px-32 py-16">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-y-10 gap-x-24">

        {/* Kiri: Deskripsi */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Puja Shindu</h2>
          <p className="text-base leading-relaxed mb-4 text-gray-700 text-justify">
            I’m a passionate Fullstack Developer and UI/UX Designer with a strong focus on building intuitive, user-friendly, and visually appealing digital experiences. I enjoy developing complete applications—from clean front-end interfaces to robust back-end systems. A graduate in Computer Systems from ITB Stikom Bali.

          </p>
          <button className="mt-4 px-5 py-2 rounded-full bg-customBlue text-white font-semibold hover:bg-lime-600 transition">
            Download CV
          </button>
        </div>

        {/* Tengah: Foto Profil */}
        <div className="md:w-1/3 flex justify-center">
          <img src={Profile} alt="Profile" className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full shadow-lg" />
        </div>

        {/* Kanan: Stat + Icons */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Digital Creation</h2>
          <p className="text-base leading-relaxed mb-4 text-gray-700">
            Focused on delivering user-centered and impactful digital experiences through UI/UX and fullstack development. Dedicated to quality, continuous improvement, and creating designs that truly matter.
          </p>
          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-3 relative">
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
                    href="https://github.com/username1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    GitHub Personal
                  </a>
                  <a
                    href="https://github.com/username2/project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    GitHub Project
                  </a>
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
