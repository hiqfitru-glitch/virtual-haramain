export default function Kontak() {
  return (
    <main className="relative flex-grow bg-[#030f0c] text-slate-100 overflow-hidden font-sans py-16 sm:py-24 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Decorative Radial Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Hubungi Kami
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Kontak &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Kemitraan
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Diskusikan kebutuhan pelatihan manasik haji VR Anda bersama tim kami. Kami siap membantu integrasi hardware dan konten untuk travel umrah Anda.
          </p>
        </div>

        {/* Contact panel */}
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-[1fr_1.2fr]">
          {/* Info Card */}
          <div className="rounded-[2.5rem] glass-panel-emerald p-8 sm:p-10 border border-emerald-500/15 shadow-[0_20px_50px_rgba(16,185,129,0.05)] space-y-6">
            <h3 className="text-xl font-bold text-slate-100">Informasi Kontak</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Hubungi layanan konsultasi kami untuk mendapatkan proposal resmi dan uji coba demo manasik VR di lokasi Anda.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-white/5 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">📍</span>
                <p className="text-slate-300 leading-relaxed">Jl. Kamboja No.3, Kelurahan Subarang Batuang, Kecamatan Payakumbuh Barat, Kota Payakumbuh, Sumatera Barat</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">💬</span>
                <p className="text-slate-300">+62 813-7412-8199</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">✉️</span>
                <a
                  href="mailto:virtualharamain07@gmail.com"
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300"
                >
                  virtualharamain07@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Action / CTA Card */}
          <div className="rounded-[2.5rem] glass-panel-gold p-8 sm:p-10 border border-amber-500/15 shadow-[0_20px_50px_rgba(212,175,55,0.08)] flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-100">Ajukan Kemitraan Kemitraan</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mt-2.5">
                Pilih opsi di bawah ini untuk memulai. Anda dapat berkonsultasi langsung via chat WhatsApp atau mengisi data form pengajuan kemitraan untuk proposal penawaran resmi.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-6">
              <a
                href="https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-6 py-4.5 text-sm font-bold text-slate-950 shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] overflow-hidden text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                Hubungi WhatsApp
              </a>
              <a
                href="https://forms.gle/LS78LwNGtJcVHPsPA"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/40 px-6 py-4.5 text-sm font-semibold text-emerald-400 transition-all hover:scale-[1.02] overflow-hidden text-center"
              >
                Isi Data Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
