"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

const galleryPhotos = [
  { src: "/images/testi1.jpeg", title: "VR Headset Showcase" },
  { src: "/images/testi2.jpeg", title: "Simulasi Tawaf Jamaah" },
  { src: "/images/testi3.jpeg", title: "Masjidil Haram Visual" },
  { src: "/images/testi4.jpeg", title: "Presentasi Kemitraan" },
  { src: "/images/testi5.jpeg", title: "Suasana Manasik VR" },
];
const duplicatedGalleryPhotos = [...galleryPhotos, ...galleryPhotos];

export default function Home() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const isGalleryHovered = useRef(false);
  const isModalOpenRef = useRef(false);

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    nama_lengkap: "",
    nama_instansi: "",
    nomor_whatsapp: "",
    pesan: "",
  });
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);

  useEffect(() => {
    isModalOpenRef.current = isLeadModalOpen;
  }, [isLeadModalOpen]);

  // Close lead modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLeadModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadLoading(true);
    setLeadError(null);
    setLeadSuccess(false);

    try {
      const { error: supabaseError } = await supabase
        .from("kemitraan_leads")
        .insert([
          {
            nama_lengkap: leadFormData.nama_lengkap,
            nama_instansi: leadFormData.nama_instansi,
            nomor_whatsapp: leadFormData.nomor_whatsapp,
            pesan: leadFormData.pesan,
          },
        ]);

      if (supabaseError) throw supabaseError;

      setLeadSuccess(true);
      setLeadFormData({
        nama_lengkap: "",
        nama_instansi: "",
        nomor_whatsapp: "",
        pesan: "",
      });

      // Auto close modal after 3 seconds
      setTimeout(() => {
        setIsLeadModalOpen(false);
        setLeadSuccess(false);
      }, 3000);
    } catch (err) {
      const error = err as Error;
      setLeadError(error.message || "Terjadi kesalahan saat mengirim data.");
    } finally {
      setLeadLoading(false);
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || gallery.scrollWidth <= gallery.clientWidth) return;

    const resetPoint = gallery.scrollWidth / 2;
    let rafId: number;

    const step = () => {
      if (gallery && !isGalleryHovered.current && !isModalOpenRef.current) {
        gallery.scrollLeft += 0.55;

        if (gallery.scrollLeft >= resetPoint) {
          gallery.scrollLeft -= resetPoint;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#030f0c] text-slate-100 overflow-hidden font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Decorative Radial Glows & Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Radial ambient emerald glow top-right */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/8 blur-[150px] animate-[pulse-slow_8s_ease-in-out_infinite]" />
        {/* Radial ambient gold glow top-left */}
        <div className="absolute top-[15%] left-[-15%] w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-[120px] animate-[pulse-slow_10s_ease-in-out_infinite_1s]" />
        {/* Radial ambient emerald glow center */}
        <div className="absolute top-[50%] right-[10%] w-[700px] h-[700px] rounded-full bg-emerald-500/4 blur-[160px] animate-[pulse-slow_12s_ease-in-out_infinite]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-12 sm:py-12">
        {/* Header / Hero Container */}
        <header className="relative rounded-[2.5rem] glass-panel-emerald shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden">
          {/* Subtle background image layout in Header container */}
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('/images/background.jpeg')" }} />
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center py-16 px-6 sm:py-20 sm:px-12 lg:px-16">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-950/40 px-4.5 py-2 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold">Virtual Reality Leader</p>
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-100 max-w-2xl relative">
                  Manasik Haji Lebih{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                    Nyata
                  </span>
                </h1>
              </div>

              {/* Subtext */}
              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl font-light">
                Solusi manasik haji premium untuk travel umrah dan jamaah individu — pengalaman VR 360° imersif yang menjadikan pembelajaran ibadah lebih jelas, terstruktur, dan profesional.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <a
                  href="https://wa.me/6281379389964?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
                  target="_blank"
                  rel="noreferrer"
                  className="relative group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-8 py-4.5 text-sm font-bold text-slate-950 shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] active:scale-[0.98] overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                  Konsultasi WhatsApp
                </a>
                <button
                  onClick={() => setIsLeadModalOpen(true)}
                  className="relative group inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/40 px-8 py-4.5 text-sm font-semibold text-emerald-400 shadow-[0_4px_15px_rgba(16,185,129,0.05)] transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400/50 active:scale-[0.98] overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 w-full h-full bg-emerald-400/10 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                  Isi Data Sekarang
                </button>
              </div>
            </div>

            {/* Visual Block Right */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-emerald-950/20 to-slate-950/30 border border-white/5 p-4 sm:p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.65)] h-[28rem] sm:h-[32rem] lg:h-[36rem] overflow-hidden group">
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              
              {/* Inner wrapper with glowing border and glassmorphism */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-emerald-500/20 group-hover:border-amber-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-colors duration-500 bg-slate-950/80">
                {/* Makkah Background Video (prominent, crisp) */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/background.jpeg"
                  onLoadedData={() => setIsVideoLoaded(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
                    isVideoLoaded ? "opacity-85" : "opacity-0"
                  }`}
                >
                  <source src="https://media.githubusercontent.com/media/hiqfitru-glitch/virtual-haramain/main/public/images/Video-Makkah1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Glassmorphic border overlay (a thin inner ring of emerald/gold light) */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none" />
                
                {/* Luxury dark-emerald glassmorphism tint overlay on top of the video for high-contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#030f0c]/70 via-[#030f0c]/40 to-transparent backdrop-blur-[1px] pointer-events-none" />
                
                {/* Dark gradient overlay for modern depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80 pointer-events-none" />
                
                {/* Ambient glow behind VR headset */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-amber-400/20 to-emerald-500/20 blur-3xl opacity-80 animate-pulse pointer-events-none" />
                
                {/* Interactive floating VR Headset */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                  <div className="relative animate-[float_5s_ease-in-out_infinite] flex flex-col items-center">
                    {/* Soft glowing/particle visual behind the headset */}
                    <div className="absolute w-28 h-28 rounded-full bg-amber-400/10 blur-xl animate-ping opacity-60" />
                    
                    <Image 
                      src="/images/vr-headset.png" 
                      alt="Floating VR Headset" 
                      width={224}
                      height={224}
                      priority
                      className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-[0_15px_30px_rgba(212,175,55,0.35)]"
                    />
                    
                    {/* Interactive overlay tag */}
                    <div className="absolute bottom-6 bg-slate-950/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-500/30 shadow-[0_8px_25px_rgba(212,175,55,0.3)]">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        Imersif 360° VR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Keunggulan Kami Section (Moved from Hero card for clarity and visual impact) */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl glass-panel-gold p-8 border border-amber-500/15 shadow-[0_15px_35px_rgba(212,175,55,0.03)] flex gap-5 items-start transition hover:border-amber-500/30 hover:-translate-y-0.5 duration-300">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xl">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-lg">Efisiensi Pelatihan</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed font-light">
                Simulasi nyata mempercepat pemahaman jamaah sebelum berangkat.
              </p>
            </div>
          </div>
          <div className="rounded-3xl glass-panel-emerald p-8 border border-emerald-500/15 shadow-[0_15px_35px_rgba(16,185,129,0.03)] flex gap-5 items-start transition hover:border-emerald-500/30 hover:-translate-y-0.5 duration-300">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xl">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-lg">Standar Profesional</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed font-light">
                Cocok untuk presentasi ke pemerintah dan travel besar.
              </p>
            </div>
          </div>
        </section>

        {/* Challenge vs Solution Section */}
        <section className="mt-24 border-t border-slate-800/60 pt-24 grid gap-8 lg:grid-cols-2">
          {/* Challenges Card */}
          <article className="rounded-[2.5rem] glass-panel border border-red-500/10 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] relative overflow-hidden transition-all duration-300 hover:border-red-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
            <div className="inline-block rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
              Tantangan utama
            </div>
            <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-slate-100 leading-tight">
              Kenapa banyak jamaah masih bingung?
            </h2>
            <div className="mt-8 space-y-4 max-w-3xl">
              <div className="rounded-2xl bg-white/[0.01] border border-white/5 p-6 hover:bg-white/[0.03] transition duration-300">
                <p className="font-bold text-slate-200 text-base sm:text-lg flex items-center gap-2.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  Kesulitan memahami manasik
                </p>
                <p className="mt-2.5 leading-relaxed text-sm text-slate-400">
                  Materi manasik sering disampaikan secara teori tanpa visual dan praktik nyata yang membantu pemahaman mendalam.
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.01] border border-white/5 p-6 hover:bg-white/[0.03] transition duration-300">
                <p className="font-bold text-slate-200 text-base sm:text-lg flex items-center gap-2.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400"></span>
                  Tidak membayangkan kondisi lapangan
                </p>
                <p className="mt-2.5 leading-relaxed text-sm text-slate-400">
                  Kondisi masjid, tawaf, dan sa&apos;i sulit tergambar tanpa pengalaman visual yang kuat dan interaktif.
                </p>
              </div>
            </div>
          </article>

          {/* Solutions Card */}
          <article className="rounded-[2.5rem] glass-panel-emerald p-8 sm:p-10 shadow-[0_20px_50px_rgba(16,185,129,0.08)] relative overflow-hidden transition-all duration-300 hover:border-emerald-400/30">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="inline-block rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              Solusi yang kami tawarkan
            </div>
            <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-slate-100 leading-tight bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Pendekatan VR yang elegan
            </h2>
            <div className="mt-8 space-y-4 max-w-3xl">
              <div className="rounded-2xl bg-emerald-950/20 border border-emerald-500/10 p-6 hover:bg-emerald-950/30 transition duration-300 hover:border-emerald-500/20">
                <p className="font-bold text-emerald-300 text-base sm:text-lg flex items-center gap-2.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Simulasi 360° VR
                </p>
                <p className="mt-2.5 leading-relaxed text-sm text-slate-300">
                  Pengalaman imersif untuk melihat secara langsung lingkungan ibadah dari berbagai sudut dengan teknologi terdepan.
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-950/20 border border-emerald-500/10 p-6 hover:bg-emerald-950/30 transition duration-300 hover:border-emerald-500/20">
                <p className="font-bold text-emerald-300 text-base sm:text-lg flex items-center gap-2.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Interaktif & mudah dipahami
                </p>
                <p className="mt-2.5 leading-relaxed text-sm text-slate-300">
                  Konten dirancang agar peserta dapat mengikuti setiap langkah dengan jelas dan interaksi yang intuitif.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Pricing / Paket Layanan Section */}
        <section className="mt-24">
          <div className="mb-10 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold bg-emerald-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Paket Layanan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mt-3">
              Pilih paket yang sesuai kebutuhan Anda
            </h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Rent VR package */}
            <article className="group relative rounded-[2.5rem] glass-panel p-8 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.05)] hover:-translate-y-1">
              <span className="inline-flex rounded-full bg-emerald-950/60 border border-emerald-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Sewa VR
              </span>
              <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-100 flex items-baseline gap-1">
                Rp 200.000
                <span className="text-sm font-normal text-slate-400"> / hari</span>
              </h3>
              <p className="mt-2 text-xs text-slate-400 font-light">
                Cocok untuk trial dan pelatihan kelompok
              </p>
              <p className="mt-6 text-slate-300 text-sm leading-relaxed font-light max-w-lg">
                Solusi fleksibel untuk pelatihan jamaah travel atau sesi private. Termasuk perangkat VR berkualitas dan konten manasik lengkap.
              </p>
              
              <div className="mt-8 space-y-4 border-t border-white/5 pt-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">✓</span>
                  <p className="text-sm text-slate-300">Perangkat VR 1-2 unit</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">✓</span>
                  <p className="text-sm text-slate-300">Konten manasik 360°</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">✓</span>
                  <p className="text-sm text-slate-300">Dukungan teknis</p>
                </div>
              </div>
            </article>

            {/* Bundling VR package (Recommended) */}
            <article className="group relative rounded-[2.5rem] glass-panel-gold p-8 sm:p-10 shadow-[0_20px_50px_rgba(212,175,55,0.12)] transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_25px_60px_rgba(212,175,55,0.22)] hover:-translate-y-1.5 border border-amber-500/30">
              {/* Recommendations ribbon badge */}
              <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-4.5 py-1.5 rounded-full shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                <span className="text-xs font-bold text-[#030f0c] uppercase tracking-[0.15em] flex items-center gap-1">⭐ Rekomendasi</span>
              </div>
              <span className="inline-flex rounded-full bg-amber-950/60 border border-amber-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mt-2">
                Paket Bundling
              </span>
              <h3 className="mt-6 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                Rp 18 juta
              </h3>
              <p className="mt-2 text-xs text-slate-300 font-light">
                Investasi jangka panjang untuk institusi
              </p>
              <p className="mt-6 text-slate-200 text-sm leading-relaxed font-normal max-w-lg">
                Paket premium untuk travel umrah dengan dukungan implementasi lengkap dan materi terstruktur untuk presentasi resmi.
              </p>
              
              <div className="mt-8 space-y-4 border-t border-amber-500/20 pt-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold">✓</span>
                  <p className="text-sm text-slate-200">Perangkat VR lengkap</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold">✓</span>
                  <p className="text-sm text-slate-200">Training & onboarding</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold">✓</span>
                  <p className="text-sm text-slate-200">Dukungan 1 tahun</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold">✓</span>
                  <p className="text-sm text-slate-200">Sertifikat & marketing materials</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Keunggulan Layanan Section */}
        <section className="mt-24 rounded-[2.5rem] glass-panel-emerald p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/5">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold bg-emerald-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Keunggulan Layanan
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-100 max-w-2xl leading-tight">
              Mengapa memilih Virtual Haramain?
            </h2>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-3xl bg-white/[0.01] border border-white/5 p-6 hover:bg-white/[0.04] hover:border-emerald-500/30 transition duration-300 hover:translate-y-[-4px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition duration-300 text-xl font-bold">
                ✈️
              </div>
              <h3 className="mt-5 font-bold text-slate-200 text-base sm:text-lg">Cocok untuk Travel Umrah</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Nilai tambah layanan yang meningkatkan kepercayaan jamaah dan daya tarik paket travel umrah Anda.
              </p>
            </div>
            
            <div className="group rounded-3xl bg-white/[0.01] border border-white/5 p-6 hover:bg-white/[0.04] hover:border-amber-500/30 transition duration-300 hover:translate-y-[-4px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition duration-300 text-xl font-bold">
                🎒
              </div>
              <h3 className="mt-5 font-bold text-slate-200 text-base sm:text-lg">Portable & Mudah Digunakan</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Setup cepat, tidak perlu instalasi rumit. Dapat digunakan di mana saja untuk presentasi dan pelatihan jamaah.
              </p>
            </div>
            
            <div className="group rounded-3xl bg-white/[0.01] border border-white/5 p-6 hover:bg-white/[0.04] hover:border-emerald-500/30 transition duration-300 hover:translate-y-[-4px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition duration-300 text-xl font-bold">
                🌍
              </div>
              <h3 className="mt-5 font-bold text-slate-200 text-base sm:text-lg">Pengalaman VR 360° Nyata</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Simulasi imersif yang membuat pengalaman manasik semakin nyata dengan visualisasi 360 derajat yang detail.
              </p>
            </div>
            
            <div className="group rounded-3xl bg-white/[0.01] border border-white/5 p-6 hover:bg-white/[0.04] hover:border-amber-500/30 transition duration-300 hover:translate-y-[-4px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition duration-300 text-xl font-bold">
                🕋
              </div>
              <h3 className="mt-5 font-bold text-slate-200 text-base sm:text-lg">Untuk Jama&apos;ah Pemula</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Ideal bagi jamaah yang belum pernah berkunjung ke tanah suci untuk mempersiapkan diri dengan lebih matang.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* Gallery Section */}
        <section className="mt-24">
          <div className="mb-10 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold bg-emerald-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Galeri
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 mt-3">
              Lihat pengalaman Virtual Haramain
            </h2>
          </div>
          
          <div className="relative group">
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                if (galleryRef.current) {
                  galleryRef.current.scrollBy({ left: -350, behavior: "smooth" });
                }
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-emerald-950/80 border border-emerald-500/30 text-amber-400 p-3 rounded-full hover:bg-emerald-800 transition backdrop-blur-md hidden md:flex items-center justify-center z-20 cursor-pointer shadow-lg hover:scale-105 opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Scroll left"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={() => {
                if (galleryRef.current) {
                  galleryRef.current.scrollBy({ left: 350, behavior: "smooth" });
                }
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-950/80 border border-emerald-500/30 text-amber-400 p-3 rounded-full hover:bg-emerald-800 transition backdrop-blur-md hidden md:flex items-center justify-center z-20 cursor-pointer shadow-lg hover:scale-105 opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Scroll right"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div 
              ref={galleryRef} 
              onMouseEnter={() => { isGalleryHovered.current = true; }}
              onMouseLeave={() => { isGalleryHovered.current = false; }}
              onTouchStart={() => { isGalleryHovered.current = true; }}
              onTouchEnd={() => { isGalleryHovered.current = false; }}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 pt-2 scroll-smooth cursor-grab active:cursor-grabbing transform-gpu will-change-transform snap-x"
            >
              {duplicatedGalleryPhotos.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-[280px] sm:w-[320px] aspect-[4/5] flex-shrink-0 cursor-pointer snap-start"
                >
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    loading="lazy"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030f0c]/90 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl glass-panel border border-white/5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-between pointer-events-none">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Dokumentasi</span>
                    <span className="text-sm text-slate-200 font-medium">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sasaran Layanan Section */}
        <section className="mt-24 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-emerald-950/20 to-slate-900/10 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.02]" style={{ backgroundImage: "url('/images/background.jpeg')" }} />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold bg-emerald-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Sasaran layanan
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-100 max-w-2xl leading-tight">
              Dirancang untuk travel dan individu
            </h2>
            
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white/[0.01] border border-emerald-500/10 hover:border-emerald-500/30 p-8 hover:bg-emerald-950/20 transition duration-300">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold">Untuk Travel Umrah</p>
                <p className="mt-3 text-lg sm:text-xl font-bold text-slate-100">Nilai tambah untuk bisnis travel</p>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed font-light">
                  Tampilkan layanan manasik VR sebagai fasilitas profesional yang meningkatkan kepercayaan jamaah dan instansi pemerintah.
                </p>
              </div>
              
              <div className="rounded-3xl bg-white/[0.01] border border-amber-500/10 hover:border-amber-500/30 p-8 hover:bg-amber-950/20 transition duration-300">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Untuk Individu</p>
                <p className="mt-3 text-lg sm:text-xl font-bold text-[#f8fafc]">Persiapan haji lebih siap</p>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed font-light">
                  Pendekatan personal untuk calon jamaah yang membutuhkan pemahaman praktis sebelum berangkat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="mt-24 rounded-[2.5rem] bg-gradient-to-br from-[#051a15] to-[#0a221c] p-8 sm:p-14 text-center shadow-[0_25px_60px_rgba(16,185,129,0.1)] relative overflow-hidden border border-white/5">
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-10 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block">
              Saatnya Bergabung
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 max-w-3xl mx-auto leading-tight">
              Presentasi resmi untuk pemerintah dan mitra travel
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-light">
              Hubungi tim kami untuk konsultasi lengkap dan proposal layanan Virtual Haramain yang siap ditampilkan dalam presentasi formal dan penawaran korporat berkualitas premium.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/6281379389964?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
                target="_blank"
                rel="noreferrer"
                className="relative group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-10 py-4.5 text-base font-bold text-slate-950 shadow-[0_4px_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(212,175,55,0.55)] active:scale-[0.98] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Lead Form Modal */}
      {isLeadModalOpen && (
        <div 
          onClick={() => setIsLeadModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fade-in"
        >
          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full glass-panel-emerald rounded-[2.5rem] p-8 sm:p-10 border border-emerald-500/20 shadow-2xl overflow-hidden animate-zoom-in bg-slate-950/90"
          >
            {/* Background ambient glows inside modal */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={() => setIsLeadModalOpen(false)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition duration-300 cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Heading */}
            <div className="mb-8 pr-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full inline-block">
                Onboarding Form
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-100 mt-3">
                Kemitraan{" "}
                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                  Virtual Haramain
                </span>
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 font-light leading-relaxed">
                Lengkapi data travel atau instansi Anda untuk mendapatkan proposal penawaran resmi.
              </p>
            </div>

            {/* Form content */}
            <form onSubmit={handleLeadSubmit} className="space-y-4 relative z-10">
              {/* Full Name */}
              <div>
                <label htmlFor="nama_lengkap" className="block text-[10px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama_lengkap"
                  required
                  value={leadFormData.nama_lengkap}
                  onChange={(e) => setLeadFormData({ ...leadFormData, nama_lengkap: e.target.value })}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full rounded-2xl bg-white/[0.02] border border-white/10 focus:border-amber-500/40 focus:bg-white/[0.05] focus:outline-none transition px-4 py-3 text-slate-100 text-sm"
                />
              </div>

              {/* Company / Travel Name */}
              <div>
                <label htmlFor="nama_instansi" className="block text-[10px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Nama Travel / Instansi
                </label>
                <input
                  type="text"
                  id="nama_instansi"
                  required
                  value={leadFormData.nama_instansi}
                  onChange={(e) => setLeadFormData({ ...leadFormData, nama_instansi: e.target.value })}
                  placeholder="Contoh: PT. Haramain Tour & Travel"
                  className="w-full rounded-2xl bg-white/[0.02] border border-white/10 focus:border-amber-500/40 focus:bg-white/[0.05] focus:outline-none transition px-4 py-3 text-slate-100 text-sm"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="nomor_whatsapp" className="block text-[10px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Nomor WhatsApp
                  </label>
                <input
                  type="tel"
                  id="nomor_whatsapp"
                  required
                  value={leadFormData.nomor_whatsapp}
                  onChange={(e) => setLeadFormData({ ...leadFormData, nomor_whatsapp: e.target.value })}
                  placeholder="Contoh: 081234567890"
                  className="w-full rounded-2xl bg-white/[0.02] border border-white/10 focus:border-amber-500/40 focus:bg-white/[0.05] focus:outline-none transition px-4 py-3 text-slate-100 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="pesan" className="block text-[10px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Pesan / Catatan Kebutuhan
                </label>
                <textarea
                  id="pesan"
                  required
                  value={leadFormData.pesan}
                  onChange={(e) => setLeadFormData({ ...leadFormData, pesan: e.target.value })}
                  placeholder="Tuliskan detail kebutuhan atau pertanyaan Anda..."
                  className="w-full rounded-2xl bg-white/[0.02] border border-white/10 focus:border-amber-500/40 focus:bg-white/[0.05] focus:outline-none transition px-4 py-3 text-slate-100 text-sm min-h-[100px] resize-none"
                />
              </div>

              {/* Status Messages */}
              {leadSuccess && (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-400 text-xs text-center font-medium animate-pulse">
                  ✓ Terima kasih! Data Anda berhasil dikirim.
                </div>
              )}
              {leadError && (
                <div className="rounded-2xl bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-xs text-center font-medium">
                  ⚠ {leadError}
                </div>
              )}

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={leadLoading || leadSuccess}
                  className={`w-full relative group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 py-3.5 text-sm font-bold text-slate-950 shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${
                    (leadLoading || leadSuccess) && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {leadLoading ? "Mengirim Data..." : leadSuccess ? "Terkirim ✓" : "Kirim Pengajuan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
