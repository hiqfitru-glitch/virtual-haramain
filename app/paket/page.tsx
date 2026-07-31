export default function PaketHarga() {
  return (
    <main className="relative flex-grow bg-[#030f0c] text-slate-100 overflow-hidden font-sans py-16 sm:py-24 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Decorative Radial Glows & Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold bg-emerald-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Paket Layanan
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Pilihan Paket &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Investasi
            </span>
          </h1>
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
    </main>
  );
}
