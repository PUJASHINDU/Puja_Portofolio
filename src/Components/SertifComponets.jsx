import React, { useState } from "react";
import { motion } from "framer-motion";

// ===== IMPORT GAMBAR DARI FOLDER LOCAL =====
import myskill1 from "../assets/sertif/FRONTEND-HTMLMySkill.jpg";
import myskill2 from "../assets/sertif/FRONTEND-CSSMYskill.jpg";
import bisma from "../assets/sertif/SertifikatWebsiteDevlopment.jpg";
import python from "../assets/sertif/Python Progaming.jpg";
import ukm from "../assets/sertif/Sertif Ukm.jpg";
import msib1 from "../assets/sertif/i-nyoman-puja-shindu-astawa-certificate-completion-kmb4 (1)_page-0001.jpg";


const SertifComponets = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [indexSlide, setIndexSlide] = useState(0);

  const certificates = [
    {
      title: "Course E-learning Myskill Front-end HTML & CSS.",
      issuer: "Myskill | 2023",
      images: [myskill1, myskill2],
    },
    {
      title: "Web Developer Certification",
      issuer: "Bisma Informatika | 2025",
      images: [bisma],
    },
     {
      title: "Certificate in Python Programming Associate",
      issuer: "Logical Opration | 2024",
      images: [python],
    },
    {
      title: "UKM Progress STIKOM Bali",
      issuer: "Programming of Stikom Bali | 2021",
      images: [ukm],
    },
    {
      title: "Magang Studi Independen Bersertifikat (MSIB) Data & Software Engine",
      issuer: "PT. Revolusi Cita Edukasi (RevoU) | 2023",
      images: [msib1],
    },
  ];

  const openSlide = (images) => {
    setCurrentImages(images);
    setIndexSlide(0);
    setOpenModal(true);
  };

  const nextSlide = () => {
    setIndexSlide((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndexSlide((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-24 bg-[#f9fafb] font-[Poppins] text-[#182635]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            My Certificates
          </h2>
          <p className="text-[#182635]/70 mt-3 text-sm sm:text-base">
            Certifications & Achievements
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={cert.images[0]}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-[#182635]/70 mt-1">{cert.issuer}</p>

                <button
                  onClick={() => openSlide(cert.images)}
                  className="inline-block mt-4 text-sm font-medium text-white bg-[#182635] px-4 py-2 rounded-lg hover:bg-[#0f1a24] transition"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === MODAL SLIDE === */}
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative bg-white rounded-xl p-4 max-w-3xl w-full shadow-lg"
          >
            {/* Close */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute -mt-6  right-1 text-red-500 text-xl font-bold"
            >
              ✕
            </button>

            {/* Slide Container */}
            <div className="relative flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-3 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full shadow"
              >
                ‹
              </button>

              {/* Image */}
              <motion.img
                key={indexSlide}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                src={currentImages[indexSlide]}
                alt="slide"
                className="w-full max-h-[70vh] object-contain rounded-lg border"
              />

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-3 bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full shadow"
              >
                ›
              </button>
            </div>

            {/* Index indicator */}
            <p className="text-center mt-3 text-sm text-gray-600">
              {indexSlide + 1} / {currentImages.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default SertifComponets;