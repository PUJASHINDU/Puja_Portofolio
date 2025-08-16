import React, { useState } from "react";
import uiimgbalipuretour from '../assets/service/balipuretour_ui.jpg'
import uiimgtravelingkuy from '../assets/service/traveling kuy_ui.jpg'

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
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
      linkweb: "https://balipuretour.com",
      dialogContent: (
        <div>
          <p className="mb-2 text-gray-600 font-poppins">
            Aplikasi booking tour dengan payemnet gateway pada PT Bali Pure Tour dibangun dengan React, Node.js, Express, dan MySQL. Sistem ini
            memungkinkan pengguna dari sisi member untuk:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 font-poppins">
            <li>Melakukan registrasi dan login</li>
            <li>Melakukan booking paket tour</li>
            <li>Melakukan pembayaran melalui Midtrans</li>
            <li>Mendapatkan invoice secara otomatis</li>
          </ul>
          <p className="mb-2 mt-1 text-gray-600 font-poppins">
            Sistem ini juga mempunyai halaman sisi admin digunakan untuk:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 font-poppins">
            <li>Mengelola paket tour</li>
            <li>Manajemen booking tour</li>
            <li>Meninjau pembayaran</li>
            <li>Meninajau laporan keuangan</li>
          </ul>
          <p className="mt-2 text-customBlue font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },
    {
      title: "Project Website Frontend Traveling Kuy",
      description:
        "Pengembangan antarmuka web interaktif menggunakan React.js dan Tailwind CSS.",
      icon: <FaLaptopCode className="text-customBlue w-12 h-12 mb-4" />,
      linkweb: "https://travelingkuy-new.vercel.app",
      dialogContent: (
        <div>
          <p className="mb-2 text-gray-600">
            Traveling Kuy adalah aplikasi website yang dikembangkan dalam program Studi Independen Kampus Merdeka, dengan tema pariwisata di Indonesia.
            Website ini dirancang untuk memudahkan wisatawan dalam memesan villa dan layanan tour ke destinasi wisata website dibangun dengan Java script, React js, Tailwind Css.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Tampilan Form Registrasi</li>
            <li>Tampilan Form Login</li>
            <li>Tampilan Villa dan Destinaasi wisata yang siap dibooking</li>
            <li>Tampilan Form Booking</li>
          </ul>
          <p className="mt-2 text-customBlue font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },
    {
      title: "Project UI Bali Pure Tour",
      description:
        "Rancangan tampilan user interface (UI) untuk sistem tour Bali Pure Tour menggunakan Figma.",
      icon: <FaPaintBrush className="text-customBlue w-12 h-12 mb-4" />,
      link: "https://www.figma.com/design/eSymh54tUS8uw8EhLkgC8L/Bali-Pure-Tour-Website?node-id=0-1&p=f&t=vdMMDA7Hvw8bs9op-0",
      dialogContent: (
        <div>
          <p className="mb-2 text-gray-600">
            UI website Bali Pure Tour dirancang mengunakan aplikasi figma. Desain sudah bisa untuk
            Prototype :
          </p>
          <img
            src={uiimgbalipuretour}
            alt="UI Bali Pure Tour"
            className="rounded-lg shadow-md"
          />
          <ul className="list-disc list-inside text-sm mt-3 text-gray-600">
            <li>Tema warna utama hijau selaras dengan tema tour Nature</li>
            <li>Font Poppins</li>
            <li>Pallet warna #0B5656, #718686, #D32828, #FF8A00</li>
          </ul>
          <p className="mt-2 text-customBlue font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },
    {
      title: "Project UI Traveling Kuy",
      description:
        "Rancangan tampilan user interface (UI) untuk sistem tour Traveling Kuy menggunakan Figma.",
      icon: <FaPaintBrush className="text-customBlue w-12 h-12 mb-4" />,
      link: "https://www.figma.com/design/T6IXHiQ8pQN16n1tvkUkRT/UI-Website-Travel-Group-4?node-id=1392-767&t=yy15N6UpRCOwDYc5-0",
      dialogContent: (
        <div>
          <p className="mb-2 text-customBlue">
            UI website Traveling Kuy dirancang menggunakan Figma, dengan desain yang telah disesuaikan untuk kebutuhan prototyping.
          </p>
          <img
            src={uiimgtravelingkuy}
            alt="UI Bali Pure Tour"
            className="rounded-lg shadow-md"
          />
          <ul className="list-disc list-inside text-sm mt-3 text-gray-600">
            <li>Tema warna utama coklat selaras dengan tema clean elegant simple</li>
            <li>Font Poppins</li>
            <li>Pallet warna #8D6B44, #FF8A00, #E7E7E7</li>
          </ul>
          <p className="mt-2 text-customBlue font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },
    {
      title: "Project Backend API",
      description:
        "Pembuatan REST API untuk sistem booking tour pada website Bali Pure Tour menggunakan Node.js, Express, MySQL",
      icon: <FaDatabase className="text-customBlue w-12 h-12 mb-4" />,
      dialogContent: (
        <div>
          <p className="mb-2 text-gray-600">
            Backend project untuk website Bali Pure Tour ini Seluruh endpoint dirancang menggunakan Node.js dan Express, serta mendukung komunikasi data melalui REST API.
            menyediakan endpoint untuk:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Endpoint Autentikasi pengguna (JWT)</li>
            <li>Endpoint CRUD paket tour & booking</li>
            <li>Endpoint Booking</li>
            <li>Ednpoint integrasi Midtrans & notifikasi</li>
            <li>Endpoint data analitik dan laporan</li>
          </ul>
        </div>
      ),
    },
  ];

  const [openDialogIndex, setOpenDialogIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenDialogIndex(index);
  };

  const handleClose = () => {
    setOpenDialogIndex(null);
  };

  return (
    <div className="py-12 px-4 lg:px-20">
      <div className="mb-10">
        <Typography
          color="blue-gray"
          variant="lead"
          className="font-semibold text-base font-poppins sm:text-lg lg:text-2xl"
        >
          My Projects
        </Typography>
        <p className="mt-2 text-lg text-gray-600 leading-snug font-poppins">
          Completed real-world web development projects
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardContent.map((card, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition font-poppins"
          >
            <CardBody className="font-poppins">
              {card.icon}
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 font-poppins"
              >
                {card.title}
              </Typography>
              <Typography className="text-[16px] font-poppins text-gray-600">
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 font-poppins">
              <Button
                size="sm"
                variant="text"
                onClick={() => handleOpen(index)}
                className="flex items-center gap-2 font-poppins text-[16px]" // Hapus mx-auto
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
            </CardFooter>

          </Card>
        ))}
      </div>

      {/* Dialog Section */}
      {openDialogIndex !== null && (
        <Dialog
          open={true}
          handler={handleClose}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          {/* <DialogHeader>{cardContent[openDialogIndex].title}</DialogHeader>
          <DialogBody>{cardContent[openDialogIndex].dialogContent}</DialogBody> */}
          <DialogHeader className="font-poppins -mb-5">
            {cardContent[openDialogIndex].title}
          </DialogHeader>
          <DialogBody className="font-poppins">
            {cardContent[openDialogIndex].dialogContent}
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleClose}
              className="mr-2 font-poppins"
            >
              <span>Close</span>
            </Button>

            {/* Fullstack & Frontend = dua tombol */}
            {["Project Website Fullstack", "Project Website Frontend Traveling Kuy"].includes(
              cardContent[openDialogIndex].title
            ) ? (
              <>
                {cardContent[openDialogIndex].linkweb && (
                  <a
                    href={cardContent[openDialogIndex].linkweb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="text" className="font-poppins mr-2 text-customBlue">
                      <span>Open Website</span>
                    </Button>
                  </a>
                )}
                {/* {cardContent[openDialogIndex].linkgit && (
                  <a
                    href={cardContent[openDialogIndex].linkgit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="text" className="font-poppins text-customBlue">
                      <span>Open Github</span>
                    </Button>
                  </a>
                )} */}
              </>
            ) : (
              // Untuk dialog lain, hanya satu tombol "Open"
              cardContent[openDialogIndex].link && (
                <a
                  href={cardContent[openDialogIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="text" className="font-poppins text-customBlue">
                    <span>Open</span>
                  </Button>
                </a>
              )
            )}
          </DialogFooter>

        </Dialog>
      )}
    </div>
  );
};

export default CardProject;
