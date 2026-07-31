export default function TentangKami() {
  return (
    <main className="relative flex-grow bg-[#030f0c] text-slate-100 overflow-hidden font-sans py-16 sm:py-24 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Tentang Kami
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Membawa Manasik ke{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Era Digital
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Virtual Haramain adalah pionir teknologi pelatihan ibadah haji dan umrah. Kami menjembatani metode manasik konvensional dengan simulasi Virtual Reality 360° yang imersif dan interaktif.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div className="rounded-[2.5rem] glass-panel-emerald p-8 sm:p-10 border border-emerald-500/15 shadow-[0_20px_50px_rgba(16,185,129,0.05)] space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">🎯</span>
              Visi & Misi Kami
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Membantu jutaan calon jamaah haji dan umrah memahami tata cara ibadah secara detail, interaktif, dan penuh percaya diri sebelum mereka menginjakkan kaki di tanah suci.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Kami bekerja sama dengan berbagai agen travel umrah terkemuka dan institusi keagamaan untuk meningkatkan efisiensi pembekalan manasik melalui perangkat keras VR yang andal serta konten berkualitas tinggi.
            </p>
          </div>

          {/* Technology Card */}
          <div className="rounded-[2.5rem] glass-panel-gold p-8 sm:p-10 border border-amber-500/15 shadow-[0_20px_50px_rgba(212,175,55,0.05)] space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">⚡</span>
              Teknologi Imersif 360°
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Melalui visualisasi lingkungan Masjidil Haram, Ka'bah, lintasan Tawaf, dan lokasi Sa'i yang dirancang presisi, jamaah dapat merasakan atmosfer langsung di lapangan.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Dengan perangkat VR portabel, kami menghadirkan simulasi berkualitas tinggi tanpa setup yang rumit, menjadikannya sarana pelatihan yang efisien bagi siapa saja.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
