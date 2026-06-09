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
// MENGGUNAKAN IKON PREMIUM LINE-ART (FEATHER & TABLER ICONS) UNTUK TAMPILAN LEBIH MODERN
import { FiGlobe, FiMonitor, FiSmartphone, FiDatabase } from "react-icons/fi";
import { TbBrush } from "react-icons/tb";

const CardProject = () => {
  const [openDialogIndex, setOpenDialogIndex] = useState(null);
  const handleOpen = (index) => setOpenDialogIndex(index);
  const handleClose = () => setOpenDialogIndex(null);

  const cardContent = [
    {
      title: "Project Website Fullstack",
      description: "Sistem pemesanan tour dengan fitur booking online, autentikasi pengguna, dan integrasi Midtrans.",
      icon: <FiGlobe className="w-6 h-6" />,
      linkweb: "https://balipuretour.com",
      linkpdf: "https://drive.google.com/file/d/15wHtrf49aIGSvF-_S15Hw7gWbgjvsT0d/view?usp=sharing",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Aplikasi booking tour dengan payment gateway pada PT Bali Pure Tour dibangun dengan React, Node.js, Express, dan MySQL. Sistem ini memungkinkan pengguna dari sisi member untuk:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li>Melakukan registrasi dan login</li>
            <li>Melakukan booking paket tour</li>
            <li>Melakukan pembayaran melalui Midtrans</li>
            <li>Mendapatkan invoice secara otomatis</li>
          </ul>
          <p className="text-slate-300 leading-relaxed pt-2">
            Sistem ini juga mempunyai halaman sisi admin digunakan untuk:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li>Mengelola paket tour & manajemen booking</li>
            <li>Meninjau pembayaran dan laporan keuangan</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Project Website Frontend Traveling Kuy",
      description: "Pengembangan antarmuka web interaktif menggunakan React.js dan Tailwind CSS.",
      icon: <FiMonitor className="w-6 h-6" />,
      linkweb: "https://travelingkuy-new.vercel.app",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Traveling Kuy adalah aplikasi website yang dikembangkan dalam program Studi Independen Kampus Merdeka, dengan tema pariwisata di Indonesia. Dirancang untuk memudahkan wisatawan dalam memesan villa dan layanan tour secara seamless.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li>Tampilan Form Registrasi & Login</li>
            <li>Katalog Villa dan Destinasi Wisata siap booking</li>
            <li>Form Alur Booking Interaktif</li>
          </ul>
          <p className="text-xs text-slate-400 italic">Built with: JavaScript, ReactJS, Tailwind CSS</p>
        </div>
      ),
    },
    {
      title: "Landing Page Backpacks Store",
      description: "Projek Pribadi Website Landing Page Untuk Toko Ransel.",
      icon: <FiMonitor className="w-6 h-6" />,
      linkweb: "https://backpack-boys.vercel.app/",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Landing Page Backpacks Store adalah proyek pribadi yang dirancang untuk menampilkan produk-produk ransel dengan tampilan modern dan interaktif. Berfokus pada kebersihan estetika visual dan kehalusan animasi.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li>Hero section berciri khas modern minimalis</li>
            <li>Koleksi katalog produk dengan grid asimetris</li>
            <li>Optimasi tata letak responsif penuh di segala perangkat</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Project Applikasi Android",
      description: "Pengembangan mobile app project Konek Market magang PT. Mari Buka Akses menggunakan React Native.",
      icon: <FiSmartphone className="w-6 h-6" />,
      linkpdf: "https://drive.google.com/file/d/1T1KIW2DI5XN3VaOu4YpdyPaeYkP2XX14/view",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Konek Market adalah platform marketplace yang bertujuan memudahkan pengguna menemukan, membandingkan, dan berlangganan paket layanan internet dari berbagai penyedia (ISP) berdasarkan titik lokasi akurat.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li>Autentikasi Keamanan Pengguna</li>
            <li>Manajemen Laporan Gangguan & Tiket Masalah</li>
            <li>Sistem Integrasi Riwayat Tagihan Akun</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Project UI Bali Pure Tour",
      description: "Rancangan tampilan user interface (UI) untuk sistem tour Bali Pure Tour menggunakan Figma.",
      icon: <TbBrush className="w-6 h-6" />,
      link: "https://www.figma.com/design/eSymh54tUS8uw8EhLkgC8L/Bali-Pure-Tour-Website?node-id=0-1&p=f&t=vdMMDA7Hvw8bs9op-0",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 mb-3">
            Rancangan UI komprehensif yang dioptimasi untuk prototyping alur pengguna real-time:
          </p>
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
            <img src={uiimgbalipuretour} alt="UI Bali Pure Tour" className="w-full h-auto object-cover" />
          </div>
          <ul className="list-none space-y-1 text-xs text-slate-400 pt-1">
            <li><span className="font-semibold text-slate-200">Typography:</span> Poppins Family</li>
            <li><span className="font-semibold text-slate-200">Color Tokens:</span> #0B5656, #718686, #D32828</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Kitaberesin — On-Demand Cleaning Service",
      description: "Aplikasi web penyedia layanan kebersihan dengan sistem booking interaktif dan manajemen jadwal.",
      icon: <FiMonitor className="w-6 h-6" />,
      linkweb: "https://kitaberesin-co9u.vercel.app/",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Platform on-demand layanan kebersihan hunian komersial maupun pribadi yang mengutamakan kecepatan pemesanan berbasis web responsif.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li><span className="text-slate-200 font-medium">Dynamic Form:</span> Kalkulasi harga instan berdasarkan luas ruangan</li>
            <li><span className="text-slate-200 font-medium">Profile Architecture:</span> Menyimpan manajemen multi-alamat pengguna</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Project UI Traveling Kuy",
      description: "Rancangan tampilan user interface (UI) untuk sistem tour Traveling Kuy menggunakan Figma.",
      icon: <TbBrush className="w-6 h-6" />,
      link: "https://www.figma.com/design/T6IXHiQ8pQN16n1tvkUkRT/UI-Website-Travel-Group-4?node-id=1392-767&t=yy15N6UpRCOwDYc5-0",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 mb-3">
            Desain antarmuka eksklusif bertema elegan minimalis dengan alur wireframe fungsional:
          </p>
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
            <img src={uiimgtravelingkuy} alt="UI Traveling Kuy" className="w-full h-auto object-cover" />
          </div>
          <ul className="list-none space-y-1 text-xs text-slate-400 pt-1">
            <li><span className="font-semibold text-slate-200">Style Guide:</span> Clean, Elegant, Simple</li>
            <li><span className="font-semibold text-slate-200">Color Palette:</span> #8D6B44, #FF8A00, #E7E7E7</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Sikasir.com — Finance & POS Website",
      description: "Landing page dan dashboard aplikasi kasir modern untuk UMKM dengan visualisasi data keuangan.",
      icon: <FiMonitor className="w-6 h-6" />,
      linkweb: "https://sikasir-psi.vercel.app/",
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Sistem manajemen POS kasir mikro yang membantu pencatatan transaksi omset harian secara otomatis lewat integrasi komponen chart interaktif.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li>Dashboard monitoring kas masuk-keluar real-time</li>
            <li>Skema tabel data dinamis adaptif di layar smartphone</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Project Backend API",
      description: "Pembuatan REST API untuk sistem booking tour pada website Bali Pure Tour menggunakan Node.js, Express, MySQL.",
      icon: <FiDatabase className="w-6 h-6" />,
      dialogContent: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Arsitektur backend tangguh penopang seluruh jalur ekosistem bisnis Bali Pure Tour yang menangani distribusi endpoint RESTful aman.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pl-2">
            <li>Proteksi rute endpoint menggunakan JSON Web Token (JWT)</li>
            <li>Webhook penangkap sinyal transaksi otomatis dari Midtrans</li>
            <li>Kueri database relasional teroptimasi untuk beban data tinggi</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#0f1319] via-[#131922] to-[#171f2a] text-white font-poppins overflow-hidden">

      {/* Ambient Orbs Dekoratif (Agar Tidak Terlalu Gelap Pekat) */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-slate-400/[0.03] blur-[180px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto relative z-10">

        {/* HEADER UTAMA */}
        <div className="text-left mb-16 max-w-xl">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl font-black tracking-tight text-white font-poppins mb-3"
          >
            Selected Work
          </Typography>
          <div className="w-12 h-1 bg-white mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Kumpulan proyek pengembangan sistem web dan aplikasi seluler yang berfokus pada efisiensi performa serta kemudahan fungsional.
          </p>
        </div>

        {/* GRID KARTU KONTEN INTERAKTIF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cardContent.map((card, index) => (
            <Card
              key={index}
              className="bg-[#1c2330]/50 backdrop-blur-xl border border-white/[0.05] hover:border-white/30 hover:bg-[#222b3b]/70 transition-all duration-500 rounded-2xl flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 group"
            >
              <CardBody className="font-poppins text-left p-6 sm:p-7 flex-1">
                {/* Kotak Wadah Ikon dengan Transisi Mikro */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 text-slate-300 group-hover:bg-white group-hover:text-gray-900 group-hover:rotate-[360deg] transition-all duration-700 ease-out">
                  {card.icon}
                </div>

                <Typography
                  variant="h5"
                  className="mb-2 font-bold font-poppins text-lg sm:text-xl text-white leading-snug tracking-wide group-hover:text-blue-400 transition-colors duration-300"
                >
                  {card.title}
                </Typography>

                <Typography className="text-white font-poppins font-light text-sm sm:text-[15px] leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {card.description}
                </Typography>
              </CardBody>

              <CardFooter className="p-6 sm:p-7 pt-0 text-left">
                <Button
                  size="sm"
                  onClick={() => handleOpen(index)}
                  className="rounded-xl text-xs font-bold tracking-wider px-5 py-3 bg-white/[0.06] border border-white/10 text-white normal-case shadow-none hover:shadow-none hover:bg-white hover:text-gray-900 hover:border-transparent transition-all duration-300 font-poppins"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* DIALOG DETAILS PANEL (MODAL INTERAKTIF) */}
      {openDialogIndex !== null && (
        <Dialog
          open={true}
          handler={handleClose}
          size="md"
          className="bg-[#161c26] border border-white/10 text-white font-poppins rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md max-h-[90vh] flex flex-col"
        >
          {/* Header Modal */}
          <DialogHeader className="text-xl sm:text-2xl font-bold font-poppins text-white border-b border-white/[0.08] px-6 py-5 flex-shrink-0">
            {cardContent[openDialogIndex].title}
          </DialogHeader>

          {/* Isi Konten Scrollable */}
          <DialogBody className="font-poppins px-6 py-5 overflow-y-auto flex-1 text-slate-300 leading-relaxed">
            {cardContent[openDialogIndex].dialogContent}
          </DialogBody>

          {/* Footer Tombol Aksi */}
          <DialogFooter className="flex justify-end gap-2.5 border-t border-white/[0.08] px-6 py-4 flex-shrink-0 bg-[#121720]">
            <Button
              variant="text"
              onClick={handleClose}
              className="text-xs font-bold px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white normal-case transition-colors font-poppins"
            >
              Close
            </Button>

            {cardContent[openDialogIndex].linkweb && (
              <a href={cardContent[openDialogIndex].linkweb} target="_blank" rel="noopener noreferrer">
                <Button className="text-xs font-bold px-5 py-2.5 rounded-xl bg-white text-gray-900 hover:bg-slate-200 shadow-none hover:shadow-none normal-case transition-colors font-poppins">
                  Live Preview
                </Button>
              </a>
            )}

            {cardContent[openDialogIndex].linkpdf && (
              <a href={cardContent[openDialogIndex].linkpdf} target="_blank" rel="noopener noreferrer">
                <Button className="text-xs font-bold px-5 py-2.5 rounded-xl bg-white text-gray-900 hover:bg-slate-200 shadow-none hover:shadow-none normal-case transition-colors font-poppins">
                  Documentation
                </Button>
              </a>
            )}

            {cardContent[openDialogIndex].link && (
              <a href={cardContent[openDialogIndex].link} target="_blank" rel="noopener noreferrer">
                <Button className="text-xs font-bold px-5 py-2.5 rounded-xl bg-white text-gray-900 hover:bg-slate-200 shadow-none hover:shadow-none normal-case transition-colors font-poppins">
                  Open Project
                </Button>
              </a>
            )}
          </DialogFooter>
        </Dialog>
      )}
    </section>
  );
};

export default CardProject;