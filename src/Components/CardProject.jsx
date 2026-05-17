import React, { useState, useEffect, useRef } from "react";
import uiimgbalipuretour from "../assets/service/balipuretour_ui.jpg";
import uiimgtravelingkuy from "../assets/service/traveling kuy_ui.jpg";
import {
  FaGlobe,
  FaLaptopCode,
  FaPaintBrush,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";
import { IoClose, IoOpenOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { LuFileText } from "react-icons/lu";

/* ─── Inline styles object ─────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  .cp-root * { box-sizing: border-box; }

  .cp-root {
    font-family: 'DM Sans', 'Poppins', sans-serif;
    background: linear-gradient(135deg, #06091a 0%, #0b1124 40%, #07111e 100%);
    position: relative;
    overflow: hidden;
  }

  .cp-root::before {
    content: '';
    position: absolute;
    top: -200px; left: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .cp-root::after {
    content: '';
    position: absolute;
    bottom: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  /* grid noise texture */
  .cp-noise {
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.012'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }

  /* ── Card border glow wrapper ── */
  .cp-card-wrap {
    position: relative;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(6,182,212,0.08) 50%, rgba(255,255,255,0.04) 100%);
    transition: all 0.4s ease;
  }

  .cp-card-wrap:hover {
    background: linear-gradient(135deg, rgba(99,102,241,0.55) 0%, rgba(6,182,212,0.35) 50%, rgba(99,102,241,0.2) 100%);
    box-shadow: 0 0 40px rgba(99,102,241,0.15), 0 20px 60px rgba(0,0,0,0.5);
    transform: translateY(-4px);
  }

  /* ── Card inner ── */
  .cp-card {
    border-radius: 19px;
    background: linear-gradient(145deg, rgba(13,20,40,0.95) 0%, rgba(8,14,30,0.98) 100%);
    padding: 28px;
    height: 100%;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
  }

  .cp-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(6,182,212,0.3), transparent);
  }

  /* ── Shimmer on hover ── */
  .cp-card-wrap:hover .cp-card::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.025), transparent);
    animation: shimmer 0.8s ease forwards;
  }

  @keyframes shimmer {
    to { left: 150%; }
  }

  /* ── Icon badge ── */
  .cp-icon-badge {
    width: 52px; height: 52px;
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    position: relative;
    flex-shrink: 0;
  }

  .cp-icon-badge::before {
    content: '';
    position: absolute; inset: 0;
    border-radius: 14px;
    padding: 1px;
    background: inherit;
    filter: brightness(1.5);
    opacity: 0.5;
    z-index: -1;
  }

  /* ── Tag pill ── */
  .cp-tag {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.02em;
    padding: 3px 10px;
    border-radius: 20px;
    border: 1px solid;
    transition: all 0.2s;
  }

  /* ── CTA Button ── */
  .cp-btn {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01em;
    padding: 9px 18px;
    border-radius: 50px;
    border: 1px solid rgba(99,102,241,0.35);
    background: rgba(99,102,241,0.1);
    color: rgba(165,168,255,0.9);
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
  }

  .cp-btn:hover {
    background: rgba(99,102,241,0.2);
    border-color: rgba(99,102,241,0.6);
    color: #c7c9ff;
    box-shadow: 0 0 20px rgba(99,102,241,0.2);
  }

  .cp-btn svg { transition: transform 0.3s ease; }
  .cp-btn:hover svg { transform: translate(2px, -2px); }

  /* ── Project number ── */
  .cp-num {
    font-family: 'Sora', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: rgba(99,102,241,0.5);
    text-transform: uppercase;
  }

  /* ── Section title ── */
  .cp-section-title {
    font-family: 'Sora', sans-serif;
    font-size: clamp(28px, 4vw, 38px);
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, rgba(180,185,255,0.9) 50%, rgba(6,182,212,0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.15;
    margin-bottom: 12px;
  }

  /* ── Divider line ── */
  .cp-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(99,102,241,0.6), rgba(6,182,212,0.3), transparent);
    width: 80px;
    margin: 14px 0;
  }

  /* ── Stagger animation ── */
  .cp-animate {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }

  .cp-animate.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Modal backdrop ── */
  .cp-backdrop {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(3,7,18,0.85);
    backdrop-filter: blur(12px);
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* ── Modal panel ── */
  .cp-modal {
    background: linear-gradient(145deg, #0f1628, #09101f);
    border: 1px solid rgba(99,102,241,0.25);
    border-radius: 24px;
    max-width: 580px; width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.3s ease;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(99,102,241,0.08);
  }

  .cp-modal::-webkit-scrollbar { width: 4px; }
  .cp-modal::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 4px; }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px) scale(0.97); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .cp-modal-header {
    padding: 28px 32px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex; justify-content: space-between; align-items: flex-start;
    gap: 16px;
    position: sticky; top: 0;
    background: linear-gradient(145deg, #0f1628, #09101f);
    border-radius: 24px 24px 0 0;
    z-index: 10;
  }

  .cp-modal-title {
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #e8eaff;
    line-height: 1.35;
  }

  .cp-modal-body {
    padding: 24px 32px;
    color: rgba(180,185,210,0.85);
    font-size: 14.5px;
    line-height: 1.75;
  }

  .cp-modal-body ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;
  }

  .cp-modal-body ul li {
    padding: 6px 0 6px 20px;
    position: relative;
    color: rgba(190,195,225,0.8);
    font-size: 13.5px;
  }

  .cp-modal-body ul li::before {
    content: '→';
    position: absolute; left: 0;
    color: rgba(99,102,241,0.7);
    font-size: 12px;
  }

  .cp-modal-body p { margin: 0 0 12px; }

  .cp-modal-footer {
    padding: 20px 32px 28px;
    display: flex; flex-wrap: wrap; gap: 10px;
    justify-content: flex-end;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  /* ── Modal action buttons ── */
  .cp-modal-btn {
    display: inline-flex; align-items: center; gap: 7px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 500;
    padding: 9px 18px;
    border-radius: 50px;
    border: 1px solid;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;
    text-decoration: none;
  }

  .cp-modal-btn.close {
    background: rgba(239,68,68,0.08);
    border-color: rgba(239,68,68,0.25);
    color: rgba(252,165,165,0.85);
  }
  .cp-modal-btn.close:hover {
    background: rgba(239,68,68,0.15);
    border-color: rgba(239,68,68,0.5);
  }

  .cp-modal-btn.primary {
    background: rgba(99,102,241,0.12);
    border-color: rgba(99,102,241,0.35);
    color: rgba(165,168,255,0.9);
  }
  .cp-modal-btn.primary:hover {
    background: rgba(99,102,241,0.22);
    border-color: rgba(99,102,241,0.6);
    box-shadow: 0 0 20px rgba(99,102,241,0.2);
  }

  .cp-modal-btn.teal {
    background: rgba(6,182,212,0.1);
    border-color: rgba(6,182,212,0.3);
    color: rgba(103,232,249,0.9);
  }
  .cp-modal-btn.teal:hover {
    background: rgba(6,182,212,0.18);
    border-color: rgba(6,182,212,0.55);
  }

  .cp-close-btn {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    width: 34px; height: 34px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: rgba(180,185,210,0.7);
    transition: all 0.2s;
    flex-shrink: 0;
    outline: none;
  }

  .cp-close-btn:hover {
    background: rgba(239,68,68,0.15);
    border-color: rgba(239,68,68,0.4);
    color: rgba(252,165,165,0.9);
  }

  /* ── Scrollbar for main ── */
  .cp-root { scrollbar-width: thin; scrollbar-color: rgba(99,102,241,0.3) transparent; }

  /* ── Card title ── */
  .cp-card-title {
    font-family: 'Sora', sans-serif;
    font-size: 15.5px;
    font-weight: 600;
    color: #dde1ff;
    line-height: 1.35;
    margin: 14px 0 8px;
  }

  .cp-card-desc {
    font-size: 13.5px;
    color: rgba(148,155,195,0.8);
    line-height: 1.65;
    flex: 1;
  }

  .cp-tags-row {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin: 16px 0 20px;
  }

  .cp-footer-row {
    display: flex; justify-content: space-between; align-items: center;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .cp-modal-hint {
    font-size: 13px;
    color: rgba(99,102,241,0.7);
    font-style: italic;
  }

  /* Responsive */
  @media (max-width: 640px) {
    .cp-modal-header, .cp-modal-body, .cp-modal-footer { padding-left: 20px; padding-right: 20px; }
  }
`;

/* ─── Color config per category ──────────────────────────────── */
const categoryColors = {
  fullstack: { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.4)", text: "rgba(165,168,255,0.9)", icon: "rgba(99,102,241,0.8)", label: "Fullstack" },
  frontend: { bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.4)", text: "rgba(103,232,249,0.9)", icon: "rgba(6,182,212,0.8)", label: "Frontend" },
  mobile: { bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.4)", text: "rgba(110,231,183,0.9)", icon: "rgba(52,211,153,0.8)", label: "Mobile" },
  uiux: { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.35)", text: "rgba(253,211,77,0.9)", icon: "rgba(245,158,11,0.8)", label: "UI/UX" },
  backend: { bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.35)", text: "rgba(252,165,165,0.9)", icon: "rgba(239,68,68,0.8)", label: "Backend" },
};

/* ─── Card data ──────────────────────────────────────────────── */
const cardContent = [
  {
    title: "Bali Pure Tour — Booking System",
    description: "Platform pemesanan tour end-to-end dengan payment gateway Midtrans, autentikasi JWT, dan dashboard admin.",
    category: "fullstack",
    icon: FaGlobe,
    tags: ["React", "Node.js", "MySQL", "Midtrans"],
    linkweb: "https://balipuretour.com",
    linkpdf: "https://drive.google.com/file/d/15wHtrf49aIGSvF-_S15Hw7gWbgjvsT0d/view?usp=sharing",
    dialogContent: (
      <div>
        <p>Platform booking tour milik PT Bali Pure Tour, dibangun menggunakan React, Node.js, Express, dan MySQL. Fitur sisi member:</p>
        <ul>
          <li>Registrasi & login dengan autentikasi JWT</li>
          <li>Pemilihan dan pemesanan paket tour</li>
          <li>Pembayaran online via Midtrans</li>
          <li>Invoice otomatis pasca-pembayaran</li>
        </ul>
        <p style={{ marginTop: 14 }}>Fitur panel admin:</p>
        <ul>
          <li>Manajemen paket tour (CRUD lengkap)</li>
          <li>Monitoring & validasi booking</li>
          <li>Tinjauan status pembayaran real-time</li>
          <li>Laporan keuangan & analitik</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Traveling Kuy — Frontend Web",
    description: "Antarmuka web interaktif untuk platform pariwisata Indonesia, dikembangkan dalam program Kampus Merdeka.",
    category: "frontend",
    icon: FaLaptopCode,
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    linkweb: "https://travelingkuy-new.vercel.app",
    dialogContent: (
      <div>
        <p>Traveling Kuy dikembangkan dalam program Studi Independen Kampus Merdeka. Platform ini memudahkan wisatawan menemukan dan memesan villa serta paket tour ke destinasi wisata di Indonesia.</p>
        <ul>
          <li>Form registrasi & login member</li>
          <li>Katalog villa & destinasi wisata</li>
          <li>Halaman detail dan form booking</li>
          <li>Desain responsif untuk semua perangkat</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Backpaks Store — Landing Page",
    description: "Landing page toko ransel personal dengan hero section modern, animasi produk, dan desain responsif.",
    category: "frontend",
    icon: FaLaptopCode,
    tags: ["React.js", "Tailwind CSS", "Vercel"],
    linkweb: "https://backpack-boys.vercel.app/",
    dialogContent: (
      <div>
        <p>Proyek pribadi landing page toko ransel dengan tampilan modern dan interaktif. Dibangun menggunakan React.js dan Tailwind CSS untuk menampilkan koleksi produk secara elegan.</p>
        <ul>
          <li>Hero section dengan visual produk menarik</li>
          <li>Grid katalog produk dengan hover effects</li>
          <li>Desain responsif — mobile, tablet, desktop</li>
          <li>Deploy via Vercel dengan performa optimal</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Sikasir.com — Finance & Point of Sales Website",
    description: "Landing page dan dashboard aplikasi kasir modern untuk UMKM dengan visualisasi data keuangan dan desain responsif.",
    category: "frontend",
    icon: FaLaptopCode,
    tags: ["React.js", "Tailwind CSS", "Chart.js", "Vercel"],
    linkweb: "https://sikasir-psi.vercel.app/", // Sesuaikan dengan URL aslimu nanti
    dialogContent: (
      <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
        <p>
          <strong>Sikasir.com</strong> adalah sebuah platform inovatif untuk manajemen keuangan dan *Point of Sales* (POS) yang dirancang khusus untuk membantu UMKM. Menggunakan <strong>React.js</strong> untuk manajemen *state* yang dinamis dan <strong>Tailwind CSS</strong> untuk antarmuka yang profesional dan *user-friendly*.
        </p>

        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Fitur Utama & Keunggulan:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Financial Dashboard UI:</strong> Tampilan ringkasan kas, pendapatan, dan pengeluaran yang interaktif menggunakan komponen grafik modern.</li>
            <li><strong>Intuitive Cashier Interface:</strong> Simulasi input transaksi penjualan yang cepat, responsif, dan mudah dipahami oleh pengguna awam.</li>
            <li><strong>Responsive Analytics Layout:</strong> Tata letak tabel data laporan keuangan yang adaptif di layar *smartphone* maupun monitor desktop.</li>
            <li><strong>Production-Ready Deployment:</strong> Kode dioptimalkan untuk performa terbaik dan dideploy secara ringkas menggunakan Vercel.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Tech Stack & Tools:</h4>
          <p>React.js, Tailwind CSS (Custom Theme & Dashboard Layout), Chart.js / Recharts (Visualisasi Data), Vercel Platform.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Kitaberesin — On-Demand Cleaning Service Web Application",
    description: "Aplikasi web penyedia layanan kebersihan (cleaning service) dengan sistem booking interaktif, manajemen jadwal, dan pelacakan pesanan.",
    category: "frontend",
    icon: FaLaptopCode,
    tags: ["React.js", "Tailwind CSS", "Vercel"],
    linkweb: "https://kitaberesin-co9u.vercel.app/",
    dialogContent: (
      <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
        <p>
          <strong>Kitaberesin</strong> adalah platform aplikasi web layanan kebersihan (*cleaning service*) *on-demand* yang memungkinkan pengguna untuk memesan jasa kebersihan rumah, apartemen, atau kantor secara langsung secara online. Dibangun menggunakan <strong>React.js</strong> dan <strong>Tailwind CSS</strong> untuk menghadirkan pengalaman pemesanan yang cepat, intuitif, dan responsif.
        </p>

        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Fitur Utama & Modul Aplikasi:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Online Service Booking System:</strong> Fitur utama berupa formulir pemesanan interaktif yang memungkinkan pengguna memilih jenis layanan, menentukan luas area, serta memilih tanggal dan waktu pengerjaan.</li>
            <li><strong>Service Catalog with Transparent Pricing:</strong> Halaman katalog yang menampilkan berbagai paket kebersihan beserta rincian harga yang transparan dan adaptif berdasarkan pilihan pengguna.</li>
            <li><strong>User Profile & Address Management:</strong> Halaman profil member untuk mengelola data diri, menyimpan beberapa alamat lokasi pembersihan, dan melihat riwayat pesanan yang lalu.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Tech Stack & Implementasi:</h4>
          <p>React.js (Functional Components & Hooks), Tailwind CSS untuk arsitektur UI yang modern dan responsif, State Management untuk alur booking, dan deployment performa tinggi via Vercel.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Konek Market — Android App",
    description: "Aplikasi marketplace mobile untuk perbandingan dan berlangganan layanan internet (ISP) berdasarkan lokasi.",
    category: "mobile",
    icon: FaMobileAlt,
    tags: ["React Native", "Tailwind", "Mobile"],
    linkpdf: "https://drive.google.com/file/d/1T1KIW2DI5XN3VaOu4YpdyPaeYkP2XX14/view",
    dialogContent: (
      <div>
        <p>Konek Market adalah platform marketplace berbasis mobile yang membantu pengguna menemukan, membandingkan, dan berlangganan paket internet dari berbagai ISP berdasarkan lokasi dan kebutuhan.</p>
        <ul>
          <li>Login & registrasi pengguna</li>
          <li>Halaman utama dengan listing ISP</li>
          <li>Halaman lapor gangguan layanan</li>
          <li>Manajemen tagihan & riwayat pembayaran</li>
          <li>Halaman profil member</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Bali Pure Tour — UI Design",
    description: "Desain antarmuka website Bali Pure Tour menggunakan Figma, lengkap dengan prototype interaktif.",
    category: "uiux",
    icon: FaPaintBrush,
    tags: ["Figma", "Prototype", "UI/UX"],
    link: "https://www.figma.com/design/eSymh54tUS8uw8EhLkgC8L/Bali-Pure-Tour-Website",
    dialogContent: (
      <div>
        <p>Rancangan UI website Bali Pure Tour dibuat menggunakan Figma dengan prototype interaktif penuh. Tema visual diselaraskan dengan identitas brand tour alam Bali.</p>
        <img src={uiimgbalipuretour} alt="UI Bali Pure Tour" style={{ width: "100%", borderRadius: 12, margin: "14px 0", border: "1px solid rgba(99,102,241,0.2)" }} />
        <ul>
          <li>Palet warna utama hijau — tema Nature Tourism</li>
          <li>Tipografi Poppins untuk keterbacaan optimal</li>
          <li>Warna kunci: #0B5656, #718686, #D32828, #FF8A00</li>
          <li>Prototype lengkap siap handoff ke developer</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Traveling Kuy — UI Design",
    description: "Desain antarmuka platform pariwisata dengan estetika clean, elegant, dan natural berbasis Figma.",
    category: "uiux",
    icon: FaPaintBrush,
    tags: ["Figma", "Prototype", "UI/UX"],
    link: "https://www.figma.com/design/T6IXHiQ8pQN16n1tvkUkRT/UI-Website-Travel-Group-4",
    dialogContent: (
      <div>
        <p>Desain UI Traveling Kuy menggunakan Figma dengan pendekatan visual yang clean, elegant, dan minimal — cocok untuk platform pariwisata modern.</p>
        <img src={uiimgtravelingkuy} alt="UI Traveling Kuy" style={{ width: "100%", borderRadius: 12, margin: "14px 0", border: "1px solid rgba(6,182,212,0.2)" }} />
        <ul>
          <li>Tema warna coklat hangat — nuansa natural & elegan</li>
          <li>Tipografi Poppins konsisten di seluruh halaman</li>
          <li>Palet: #8D6B44, #FF8A00, #E7E7E7</li>
          <li>Prototype interaktif siap presentasi & handoff</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Bali Pure Tour — REST API",
    description: "Backend API lengkap untuk sistem booking tour dengan JWT auth, Midtrans integration, dan laporan analitik.",
    category: "backend",
    icon: FaDatabase,
    tags: ["Node.js", "Express", "MySQL", "JWT"],
    dialogContent: (
      <div>
        <p>Backend REST API untuk website Bali Pure Tour dibangun dengan Node.js dan Express. Seluruh endpoint dirancang mengikuti standar RESTful dan mendukung autentikasi stateless via JWT.</p>
        <ul>
          <li>Autentikasi pengguna — register, login, JWT refresh</li>
          <li>CRUD paket tour & manajemen booking</li>
          <li>Integrasi Midtrans webhook & notifikasi</li>
          <li>Endpoint data analitik dan laporan keuangan</li>
          <li>Role-based access control (member vs admin)</li>
        </ul>
      </div>
    ),
  },
];

/* ─── Main Component ─────────────────────────────────────────── */
const CardProject = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx, 10);
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, idx])]);
            }, idx * 90);
          }
        });
      },
      { threshold: 0.12 }
    );

    cardRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpenIdx(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const opened = openIdx !== null ? cardContent[openIdx] : null;
  const color = opened ? categoryColors[opened.category] : null;

  return (
    <div className="cp-root" style={{ padding: "72px 24px", minHeight: "100vh", position: "relative" }}>
      <style>{styles}</style>
      <div className="cp-noise" />

      {/* ── Section Header ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto 64px" }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", color: "rgba(99,102,241,0.7)", textTransform: "uppercase", marginBottom: 10 }}>
          PORTFOLIO
        </p>
        <h2 className="cp-section-title">Selected Projects</h2>
        <div className="cp-divider" />
        <p style={{ color: "rgba(148,155,195,0.75)", fontSize: 15, maxWidth: 480, lineHeight: 1.7 }}>
          Completed real-world web & mobile development works
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div
        style={{
          position: "relative", zIndex: 1,
          maxWidth: 1120, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: 24,
        }}
      >
        {cardContent.map((card, i) => {
          const c = categoryColors[card.category];
          const IconComp = card.icon;
          const isVis = visibleCards.includes(i);

          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              data-idx={i}
              className={`cp-animate ${isVis ? "visible" : ""}`}
            >
              <div className="cp-card-wrap">
                <div className="cp-card">
                  {/* Top row: badge + number */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Icon badge */}
                    <div
                      className="cp-icon-badge"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <IconComp style={{ color: c.icon, fontSize: 20 }} />
                    </div>
                    {/* Project number */}
                    <span className="cp-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category label */}
                  <div style={{ marginTop: 12 }}>
                    <span
                      className="cp-tag"
                      style={{ background: c.bg, borderColor: c.border, color: c.text }}
                    >
                      {c.label}
                    </span>
                  </div>

                  {/* Title & desc */}
                  <h3 className="cp-card-title">{card.title}</h3>
                  <p className="cp-card-desc">{card.description}</p>

                  {/* Tech tags */}
                  <div className="cp-tags-row">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="cp-tag"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(255,255,255,0.1)",
                          color: "rgba(148,155,195,0.75)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="cp-footer-row">
                    <button className="cp-btn" onClick={() => setOpenIdx(i)}>
                      View Details
                      <HiArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Modal ── */}
      {opened && (
        <div className="cp-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setOpenIdx(null); }}>
          <div className="cp-modal">
            {/* Header */}
            <div className="cp-modal-header">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span
                    className="cp-tag"
                    style={{
                      background: color.bg,
                      borderColor: color.border,
                      color: color.text,
                    }}
                  >
                    {color.label}
                  </span>
                  {opened.tags.map((t) => (
                    <span
                      key={t}
                      className="cp-tag"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "rgba(148,155,195,0.7)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="cp-modal-title">{opened.title}</p>
              </div>
              <button className="cp-close-btn" onClick={() => setOpenIdx(null)} aria-label="Tutup modal">
                <IoClose size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="cp-modal-body">
              {opened.dialogContent}
              <p className="cp-modal-hint" style={{ marginTop: 16 }}>
                ✦ Klik tombol di bawah untuk meninjau lebih lanjut
              </p>
            </div>

            {/* Footer */}
            <div className="cp-modal-footer">
              <button className="cp-modal-btn close" onClick={() => setOpenIdx(null)}>
                <IoClose size={14} /> Tutup
              </button>

              {opened.linkweb && (
                <a href={opened.linkweb} target="_blank" rel="noopener noreferrer" className="cp-modal-btn primary">
                  <IoOpenOutline size={14} /> Buka Website
                </a>
              )}

              {opened.linkpdf && (
                <a href={opened.linkpdf} target="_blank" rel="noopener noreferrer" className="cp-modal-btn teal">
                  <LuFileText size={14} /> Dokumentasi
                </a>
              )}

              {opened.link && (
                <a href={opened.link} target="_blank" rel="noopener noreferrer" className="cp-modal-btn primary">
                  <IoOpenOutline size={14} /> Buka Figma
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProject;
