import React, { useState } from "react";
import uiimgbalipuretour from "../assets/service/balipuretour_ui.jpg";
import uiimgtravelingkuy from "../assets/service/traveling kuy_ui.jpg";
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
  FaMobileAlt,
} from "react-icons/fa";


const CardProject = () => {
  const cardContent = [
    {
      title: "Project Website Fullstack",
      description:
        "Sistem pemesanan tour dengan fitur booking online, autentikasi pengguna, dan integrasi Midtrans.",
      icon: <FaGlobe className="text-blue-500 w-12 h-12 mb-4" />,
      linkweb: "https://balipuretour.com",
      linkpdf: "https://drive.google.com/file/d/15wHtrf49aIGSvF-_S15Hw7gWbgjvsT0d/view?usp=sharing",
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
          <p className="mt-2 text-gray-600 text-lg font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },

    {
      title: "Project Website Frontend Traveling Kuy",
      description:
        "Pengembangan antarmuka web interaktif menggunakan React.js dan Tailwind CSS.",
      icon: <FaLaptopCode className="text-blue-500 w-12 h-12 mb-4" />,
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
          <p className="mt-2 text-gray-600 text-lg font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },

    {
      title: "Landing Page Backpaks Store",
      description:
        "Projek Pribadi Website Landing Page Untuk Toko Ransel",
      icon: <FaLaptopCode className="text-blue-500 w-12 h-12 mb-4" />,
      linkweb: "https://backpack-boys.vercel.app/",
      dialogContent: (
        <div>
          <p className="mb-2 text-gray-600">
            Landing Page Backpaks Store adalah proyek pribadi yang dirancang untuk menampilkan
            produk-produk ransel dengan tampilan modern dan interaktif. Website ini dibuat untuk
            mempromosikan berbagai jenis ransel dengan desain responsif dan estetika yang menarik.
            Dibangun menggunakan JavaScript, React.js, dan Tailwind CSS.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Menampilkan koleksi produk ransel dengan desain menarik</li>
            <li>Memiliki tampilan hero section yang modern dan clean</li>
            <li>Responsive design yang optimal di berbagai perangkat</li>
          </ul>
          <p className="mt-2 text-gray-600 text-lg font-medium font-poppins">
            Klik tombol di bawah untuk melihat tampilan websitenya ✨
          </p>
        </div>
      ),
    },


    {
      title: "Project Applikasi Android",
      description:
        "Pengembangan Project aplikasikasi android konek market magang PT. Mari Buka Akses  menggunakan React Native dan Tailwind CSS.",
      icon: <FaMobileAlt className="text-blue-500 w-12 h-12 mb-4" />,
      linkpdf: "https://drive.google.com/file/d/1T1KIW2DI5XN3VaOu4YpdyPaeYkP2XX14/view",
      dialogContent: (
        <div>
          <p className="mb-2 text-gray-600">
            Konek Market adalah platform marketplace via website dan aplikasi mobile yang bertujuan memudahkan pengguna menemukan, membandingkan, dan berlangganan paket layanan internet dari       berbagai penyedia (ISP) berdasarkan lokasi dan kebutuhan. Informasi mencakup kecepatan, harga, cakupan area, hingga fitur tambahan semua tersedia di satu tempat.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Login</li>
            <li>Registrasi</li>
            <li>Halaman Utama</li>
            <li>Halaman Lapor Gangguan</li>
            <li>Halaman Tagihan</li>
            <li>Halaman Profile Member</li>
          </ul>
          <p className="mt-2 text-gray-600 text-lg font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },

    {
      title: "Project UI Bali Pure Tour",
      description:
        "Rancangan tampilan user interface (UI) untuk sistem tour Bali Pure Tour menggunakan Figma.",
      icon: <FaPaintBrush className="text-blue-500 w-12 h-12 mb-4" />,
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
          <p className="mt-2 text-gray-600 text-lg font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },
    {
      title: "Project UI Traveling Kuy",
      description:
        "Rancangan tampilan user interface (UI) untuk sistem tour Traveling Kuy menggunakan Figma.",
      icon: <FaPaintBrush className="text-blue-500 w-12 h-12 mb-4" />,
      link: "https://www.figma.com/design/T6IXHiQ8pQN16n1tvkUkRT/UI-Website-Travel-Group-4?node-id=1392-767&t=yy15N6UpRCOwDYc5-0",
      dialogContent: (
        <div>
          <p className="mb-2 text-blue-500">
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
          <p className="mt-2 text-gray-600 text-lg font-medium font-poppins">
            Klik Button dibawah jika ingin meninjau lebih lanjut ✨
          </p>
        </div>
      ),
    },
    {
      title: "Project Backend API",
      description:
        "Pembuatan REST API untuk sistem booking tour pada website Bali Pure Tour menggunakan Node.js, Express, MySQL",
      icon: <FaDatabase className="text-blue-500 w-12 h-12 mb-4" />,
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
  const handleOpen = (index) => setOpenDialogIndex(index);
  const handleClose = () => setOpenDialogIndex(null);


  return (
    <div className="relative py-16 px-4 lg:px-20 bg-gradient-to-br from-[#0a0f1a] via-[#101820] to-[#182635] text-white">
      <div className="text-left mb-14">
        <Typography
          color="white"
          variant="lead"
          className="font-semibold text-3xl font-poppins tracking-wide"
        >
          My Projects
        </Typography>
        <p className="mt-3 text-gray-300 text-lg font-poppins">
          Completed real-world web & mobile development works
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardContent.map((card, index) => (
          <Card
            key={index}
            className="bg-[#121a26]/80 backdrop-blur-md border border-[#1f2b3a] hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-blue-900/30"
          >
            <CardBody className="font-poppins text-left">
              <div className="flex justify-start">{card.icon}</div>
              <Typography
                variant="h5"
                color="white"
                className="mb-2 font-semibold font-poppins text-xl"
              >
                {card.title}
              </Typography>
              <Typography className="text-gray-300 font-body text-[17px]">
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-left">
              <Button
                size="sm"
                onClick={() => handleOpen(index)}
                className="rounded-full text-sm px-5 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-blue-500/20 hover:border-blue-400/40 hover:shadow-blue-400/30 transition-all duration-500 shadow-md"
              >
                Learn More →
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>


      {/* Dialog */}
      {openDialogIndex !== null && (
        <Dialog
          open={true}
          handler={handleClose}
          className="bg-[#101820] text-white font-poppins rounded-xl"
        >
          <DialogHeader className="text-xl font-semibold font-poppins text-gray-600">
            {cardContent[openDialogIndex].title}
          </DialogHeader>
          <DialogBody className="text-gray-600 font-poppins text-[16px]">{cardContent[openDialogIndex].dialogContent}</DialogBody>
          <DialogFooter className="flex justify-end gap-2">
            <Button
              variant="text"
              color="red"
              onClick={handleClose}
              className="text-sm backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-red-500 transition-all duration-300
              rounded-full px-4 py-1"
            >
              Close
            </Button>

            {cardContent[openDialogIndex].linkweb && (
              <a
                href={cardContent[openDialogIndex].linkweb}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="text-sm backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white transition-all duration-300
                  rounded-full px-4 py-1"
                >
                  Open Website
                </Button>
              </a>
            )}

            {cardContent[openDialogIndex].linkpdf && (
              <a
                href={cardContent[openDialogIndex].linkpdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="text-sm backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white transition-all duration-300
                  rounded-full px-4 py-1"
                >
                  Open Dokumentasi
                </Button>
              </a>
            )}


            {cardContent[openDialogIndex].link && (
              <a
                href={cardContent[openDialogIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gradient" color="blue" className="text-sm backdrop-blur-md bg-white/10 hover:bg-white/20 border
                border-white/30 text-white transition-all duration-300
                  rounded-full px-4 py-1"
                >
                  Open
                </Button>
              </a>
            )}
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
};


export default CardProject;
