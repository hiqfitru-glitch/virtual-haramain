"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PaketHarga() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative flex-grow bg-[#030f0c] text-slate-100 overflow-hidden font-sans py-16 sm:py-24 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Decorative Radial Glows & Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[120px]" />
        <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-emerald-600/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Brosur Harga Sewa Section (Ditempatkan di atas Penjelasan Pilihan Paket & Investasi) */}
        <section className="mb-24 sm:mb-28 max-w-5xl mx-auto">
          {/* Header Brosur */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Simulasi Manasik 360° • Pricelist Sewa
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Brosur Paket Sewa VR{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Virtual Haramain
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Solusi fleksibel untuk pelatihan manasik haji & umrah harian, roadshow, hingga multi-kloter travel. Klik brosur untuk memperbesar atau unduh salinannya.
            </p>
          </div>

          {/* Interactive Bouncing Brochure Card */}
          <div className="relative flex flex-col items-center">
            {/* Ambient Glow behind Brochure */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-amber-400/15 to-emerald-400/15 blur-3xl opacity-75 pointer-events-none" />

            {/* Bouncing Card Wrapper */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative group w-full cursor-pointer rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 via-slate-950/80 to-[#030f0c] p-2 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-500 hover:border-amber-400/50 hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)] animate-[float_6s_ease-in-out_infinite]"
            >
              {/* Floating Badge Overlay */}
              <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-amber-400 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105 pointer-events-none">
                <span>🔍</span>
                <span>Klik untuk Memperbesar</span>
              </div>

              {/* Image Container with subtle inner shadow */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-slate-950">
                <Image
                  src="/images/brosur-harga-sewa.jpg"
                  alt="Brosur Paket Sewa VR Manasik - Virtual Haramain"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 rounded-3xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Action Buttons Below Brochure */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 hover:bg-emerald-900/60 px-6 py-3 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
                Lihat Ukuran Penuh
              </button>

              <a
                href="/images/brosur-harga-sewa.jpg"
                download="Brosur-Paket-Sewa-VR-Virtual-Haramain.jpg"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 hover:bg-slate-800/90 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:scale-105 shadow-md"
              >
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Unduh Brosur
              </a>

              <a
                href="https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20reservasi%20sewa%20unit%20VR%20manasik%20sesuai%20brosur%20harga."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-7 py-3 text-sm font-bold text-slate-950 shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] active:scale-[0.98]"
              >
                <span>💬</span>
                Reservasi Unit Sekarang
              </a>
            </div>
          </div>
        </section>

        {/* Divider subtle line */}
        <div className="relative mb-20 max-w-4xl mx-auto flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          <span className="absolute bg-[#030f0c] px-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Katalog Paket Investasi
          </span>
        </div>

        {/* Header section: Pilihan Paket & Investasi */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold bg-emerald-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Paket Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Pilihan Paket &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Investasi
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Temukan paket layanan pelatihan manasik haji VR yang fleksibel, dirancang khusus untuk kebutuhan trial kelompok maupun institusi travel besar.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Sewa VR card */}
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
            <p className="mt-6 text-slate-300 text-sm leading-relaxed font-light">
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

            <div className="mt-8">
              <a
                href="https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
                target="_blank"
                rel="noreferrer"
                className="w-full justify-center group inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/40 px-6 py-4.5 text-sm font-semibold text-emerald-400 transition-all"
              >
                Hubungi via WhatsApp
              </a>
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
            <p className="mt-6 text-slate-200 text-sm leading-relaxed font-normal">
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

            <div className="mt-8">
              <a
                href="https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
                target="_blank"
                rel="noreferrer"
                className="w-full justify-center group inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-6 py-4.5 text-sm font-bold text-slate-950 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.35)] transition-all"
              >
                Pesan Paket Kemitraan
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* Lightbox Modal for Full Brochure View */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md transition-all duration-300 animate-fade-in"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition duration-300 cursor-pointer z-50 shadow-lg"
            aria-label="Tutup modal brosur"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center rounded-3xl border border-emerald-500/30 bg-slate-950 p-2 sm:p-4 shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full aspect-[16/9] max-h-[75vh]">
              <Image
                src="/images/brosur-harga-sewa.jpg"
                alt="Brosur Paket Sewa VR Manasik - Virtual Haramain"
                fill
                priority
                className="object-contain rounded-2xl"
              />
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 px-2 border-t border-white/10 mt-3">
              <div>
                <h3 className="text-slate-100 font-bold text-sm sm:text-base">Brosur Paket Sewa VR Manasik</h3>
                <p className="text-slate-400 text-xs">Virtual Haramain • Resolusi Tinggi</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/images/brosur-harga-sewa.jpg"
                  download="Brosur-Paket-Sewa-VR-Virtual-Haramain.jpg"
                  className="rounded-full bg-slate-800 hover:bg-slate-700 border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition"
                >
                  📥 Unduh Brosur
                </a>
                <a
                  href="https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20reservasi%20sewa%20unit%20VR%20manasik%20sesuai%20brosur%20harga."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-slate-950 transition hover:brightness-110"
                >
                  💬 Hubungi Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
