export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Virtual Haramain</p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Manasik Haji Lebih Nyata dengan Virtual Reality
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Solusi manasik haji premium untuk travel umrah dan jamaah individu — pengalaman VR 360° imersif yang menjadikan pembelajaran ibadah lebih jelas, terstruktur, dan profesional.
              </p>
            <div className="flex flex-col gap-4 sm:flex-row">
  <a
    href="https://wa.me/6281379389964"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
  >
    Konsultasi WhatsApp
  </a>

  <a
    href="https://forms.gle/LS78LwNGtJcVHPsPA"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-400"
  >
    Isi Data Sekarang
  </a>
</div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Highlight</p>
              <div className="mt-8 space-y-6">
                <div className="rounded-3xl bg-slate-900/80 p-6">
                  <p className="text-base font-semibold text-white">Efisiensi pelatihan</p>
                  <p className="mt-3 text-slate-300">Mempercepat pemahaman jamaah sebelum berangkat dengan simulasi nyata dan bimbingan visual.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-6">
                  <p className="text-base font-semibold text-white">Presentasi berkualitas</p>
                  <p className="mt-3 text-slate-300">Tampilan profesional yang cocok untuk ditawarkan ke instansi pemerintah dan travel besar.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Tantangan utama</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Kenapa banyak jamaah masih bingung?</h2>
            <div className="mt-8 space-y-6 text-slate-300">
              <div className="rounded-3xl bg-slate-950/60 p-6">
                <p className="font-semibold text-white">Kesulitan memahami manasik</p>
                <p className="mt-2 leading-7">Materi manasik sering disampaikan secara teori tanpa visual dan praktik nyata.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/60 p-6">
                <p className="font-semibold text-white">Tidak membayangkan kondisi lapangan</p>
                <p className="mt-2 leading-7">Kondisi masjid, tawaf, dan sa'i sulit tergambar tanpa pengalaman visual yang kuat.</p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Solusi yang kami tawarkan</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Pendekatan VR yang elegan</h2>
            <div className="mt-8 space-y-6 text-slate-300">
              <div className="rounded-3xl bg-slate-950/60 p-6">
                <p className="font-semibold text-white">Simulasi 360° VR</p>
                <p className="mt-2 leading-7">Pengalaman imersif untuk melihat secara langsung lingkungan ibadah dari berbagai sudut.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/60 p-6">
                <p className="font-semibold text-white">Interaktif & mudah dipahami</p>
                <p className="mt-2 leading-7">Konten dirancang agar peserta dapat mengikuti langkah demi langkah dengan jelas.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14">
          <div className="grid gap-6 xl:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
              <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Sewa VR</span>
              <h3 className="mt-6 text-3xl font-semibold text-white">Rp 200.000 / hari</h3>
              <p className="mt-4 text-slate-300 leading-7">Solusi fleksibel untuk pelatihan jamaah travel atau sesi private. Termasuk perangkat VR dan konten manasik lengkap.</p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
              <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Paket Bundling</span>
              <h3 className="mt-6 text-3xl font-semibold text-white">Rp 18 juta</h3>
              <p className="mt-4 text-slate-300 leading-7">Paket premium untuk travel umrah atau pelatihan institusional dengan dukungan implementasi dan materi terstruktur.</p>
            </article>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Sasaran layanan</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Dirancang untuk travel dan individu</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/70 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Untuk Travel Umrah</p>
              <p className="mt-4 text-xl font-semibold text-white">Nilai tambah untuk bisnis travel</p>
              <p className="mt-3 text-slate-300 leading-7">Tampilkan layanan manasik VR sebagai fasilitas profesional yang meningkatkan kepercayaan jamaah dan instansi pemerintah.</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Untuk Individu</p>
              <p className="mt-4 text-xl font-semibold text-white">Persiapan haji lebih siap</p>
              <p className="mt-3 text-slate-300 leading-7">Pendekatan personal untuk calon jamaah yang membutuhkan pemahaman praktis sebelum berangkat.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 text-center shadow-2xl shadow-slate-950/40">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Ajakan</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Presentasi resmi untuk pemerintah dan mitra travel</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Hubungi tim kami untuk konsultasi lengkap dan proposal layanan Virtual Haramain yang siap ditampilkan dalam presentasi formal dan penawaran korporat.
          </p>
          <a
            href="https://wa.me/6281379389964"  
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-emerald-400 px-10 py-4 text-base font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Konsultasi via WhatsApp
          </a>
        </section>
        <section className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 text-center shadow-2xl shadow-slate-950/40">
  <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Ajakan</p>
  <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
    Presentasi resmi untuk pemerintah dan mitra travel
  </h2>
  <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
    Hubungi tim kami untuk konsultasi lengkap dan proposal layanan Virtual Haramain.
  </p>

  <div className="mt-10 flex flex-col items-center gap-4">
    <a
      href="https://wa.me/6281379389964"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-10 py-4 text-base font-semibold text-slate-950 hover:bg-emerald-300"
    >
      Konsultasi via WhatsApp
    </a>

    <a
      href="https://forms.gle/LFTHHLQBFyNaqzM7A"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-blue-500 px-10 py-4 text-base font-semibold text-white hover:bg-blue-400"
    >
      Isi Data & Dapatkan Penawaran
    </a>
  </div>
</section>
      </div>
    </main>
  );
}
