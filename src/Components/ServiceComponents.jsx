import { Typography } from '@material-tailwind/react';
import React from 'react';

import iconchek from '../assets/service/check.png';
import About from '../assets/service/Service_Img.png';

const ServiceComponents = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-7">
        {/* Bagian Gambar */}
        <div className="w-full">
          <img
            src={About}
            alt="Tour Image"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Bagian Teks */}
        <div className="flex flex-col items-start ">
          {/* Section Title */}
          <Typography
            variant="h1"
            className="font-poppins text-customGreenslow text-lg lg:text-xl leading-relaxed"
          >
            <span className="text-customBlue font-semibold">
              Layanan Tersedia Siap Membantu ✨
            </span>
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-4 text-customGreenslow text-sm lg:text-base font-poppins text-gray-600 text-justify"
          >
            Menyediakan layanan pembuatan dan pengembangan website dari awal hingga selesai, dengan fokus pada desain UI yang responsif, keamanan, dan performa. Menggunakan teknologi modern seperti React.js dan Tailwind CSS, Node js Exspres js serta Mysql saya siap membangun website yang menarik, fungsional, dan dapat diakses di berbagai perangkat, sesuai dengan kebutuhan bisnis Anda.
          </Typography>

          <Typography
            variant="paragraph"
            className="mt-2 -mb-2 text-gray-600 text-sm lg:text-base font-poppins"
          >
            Layanan Tersedia
          </Typography>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full text-gray-600 font-poppins">
            {[
              'Landing Page',
              'E-commerce',
              'Website Travel',
              'Componay Profile',
              'Undangan Online',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 text-sm lg:text-base"
              >
                <img src={iconchek} alt="Check Icon" className="w-5 h-5" />
                <Typography as="span" className='font-poppins '>{service}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponents;
