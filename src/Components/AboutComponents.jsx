import React from 'react';
import Profile from "../assets/profile/Puja.png";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutComponents = () => {
  return (
    <div className="flex flex-col md:flex-row items-center font-poppins mt-14">
      <img src={Profile} alt="Profile" className="w-48 h-48 md:w-72 md:h-72 rounded-full mb-6 md:mb-0 md:ml-48" />

      {/* Text and Icons */}
      <div className="w-full md:w-1/2 md:ml-10 text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">About Me</h3>
        <p className="text-sm md:text-base leading-relaxed text-justify mb-4 px-2 md:px-0 font-poppins">
          I am Puja Shindu currently studying Computer Systems at ITB Stikom Bali. I have a strong passion for UI design and front-end development, where I focus on creating engaging and user-friendly interfaces. My goal is to continuously
          improve my skills and contribute to innovative web and app development projects.
        </p>

        {/* Icons Section */}
        <div className="flex justify-center md:justify-start gap-2 mt-4">
          {/* WhatsApp */}
          <button className="p-2.5 border rounded-full text-slate-600 hover:text-white hover:bg-slate-800" title="WhatsApp">
            <FaWhatsapp className="w-4 h-4" />
          </button>

          {/* Instagram */}
          <button className="p-2.5 border rounded-full text-slate-600 hover:text-white hover:bg-slate-800" title="Instagram">
            <FaInstagram className="w-4 h-4" />
          </button>

          {/* GitHub */}
          <button className="p-2.5 border rounded-full text-slate-600 hover:text-white hover:bg-slate-800" title="GitHub">
            <FaGithub className="w-4 h-4" />
          </button>

          {/* Email */}
          <button className="p-2.5 border rounded-full text-slate-600 hover:text-white hover:bg-slate-800" title="Email">
            <FaEnvelope className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutComponents;
