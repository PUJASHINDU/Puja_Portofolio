import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  FaGlobe,
  FaLaptopCode,
  FaPaintBrush,
  FaDatabase,
} from "react-icons/fa";

const CardProject = () => {
  const cardContent = [
    {
      title: "Project Website Fullstack",
      description:
        "Sistem pemesanan tour dengan fitur booking online, autentikasi pengguna, dan integrasi Midtrans.",
      icon: <FaGlobe className="text-customBlue w-12 h-12 mb-4" />,
    },
    {
      title: "Project Website Frontend",
      description:
        "Pengembangan antarmuka web interaktif menggunakan React.js dan Tailwind CSS.",
      icon: <FaLaptopCode className="text-customBlue w-12 h-12 mb-4" />,
    },
    {
      title: "Project UI Bali Pure Tour",
      description:
        "Rancangan tampilan user interface (UI) untuk sistem tour Bali Pure Tour menggunakan Figma.",
      icon: <FaPaintBrush className="text-customBlue w-12 h-12 mb-4" />,
    },
    {
      title: "Project Backend API",
      description:
        "Pembuatan REST API untuk sistem booking tour menggunakan Node.js, Express, MySQL, dan MongoDB.",
      icon: <FaDatabase className="text-customBlue w-12 h-12 mb-4" />,
    },
  ];

  return (

    <div className="py-12 px-4 lg:px-20">
      <div className=" mb-10">
        <Typography
          color="blue-gray"
          variant="lead"
          className="font-semibold text-base font-poppins sm:text-lg lg:text-2xl"
        >
          My Projects
        </Typography>
        <p className="mt-2 text-lg text-gray-600 leading-snug">
          Completed real-world web development projects
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardContent.map((card, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition font-poppins">
            <CardBody className="font-poppins">
              {card.icon}
              <Typography variant="h5" color="blue-gray" className="mb-2 font-poppins">
                {card.title}
              </Typography>
              <Typography className="text-sm font-poppins text-gray-600">
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 font-poppins">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2 mx-auto font-poppins"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardProject;
