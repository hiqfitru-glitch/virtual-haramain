export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40 backdrop-blur-lg sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Virtual Haramain</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Manasik Haji Lebih Nyata dengan Virtual Reality
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
              Solusi manasik haji modern untuk travel umrah dan jamaah individu — pengalaman VR 360° interaktif yang membantu jamaah memahami tata cara ibadah dengan lebih jelas.
            </p>
          </div>
          <a
            href="https://wa.me/6281379389964"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Konsultasi WhatsApp
          </a>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Masalah yang Dihadapi Jamaah</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <div className="rounded-3xl bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Jamaah kesulitan memahami manasik</p>
                <p className="mt-2 text-sm leading-6">Materi manasik yang tradisional sering kali abstrak karena belum terlihat secara langsung.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Tidak bisa membayangkan kondisi nyata</p>
                <p className="mt-2 text-sm leading-6">Kondisi lapangan, suasana tawaf, dan tata cara ibadah sulit dibayangkan tanpa panduan visual yang kuat.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Solusi Virtual Haramain</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <div className="rounded-3xl bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Simulasi 360° VR</p>
                <p className="mt-2 text-sm leading-6">Jamaah dapat menjelajahi lingkungan ibadah secara penuh dengan fitur VR yang imersif.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/60 p-5">
                <p className="font-semibold text-white">Interaktif dan mudah dipahami</p>
                <p className="mt-2 text-sm leading-6">Materi disajikan secara interaktif sehingga peserta bisa belajar sambil praktek dan mengingat lebih baik.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <span className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Sewa VR</span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Rp 200.000 / hari</h3>
              <p className="mt-4 text-slate-300">Solusi fleksibel bagi travel dan pelatihan kelompok. Termasuk perangkat VR dan konten manasik lengkap.</p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
              <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Paket Bundling</span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Rp 18 juta</h3>
              <p className="mt-4 text-slate-300">Paket lengkap untuk travel umrah atau pelatihan intensif, mencakup perangkat, konten, dan dukungan implementasi.</p>
            </article>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
          <h2 className="text-2xl font-semibold text-white">Sasaran Layanan</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-3xl bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Untuk Travel Umrah</p>
              <p className="text-lg font-semibold text-white">Tingkatkan kualitas layanan perjalanan.</p>
              <p className="text-slate-300">Berikan paket manasik VR sebagai nilai tambah untuk jamaah dan jadikan persiapan ibadah lebih profesional.</p>
            </div>
            <div className="space-y-3 rounded-3xl bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Untuk Individu</p>
              <p className="text-lg font-semibold text-white">Persiapan manasik secara personal.</p>
              <p className="text-slate-300">Ideal bagi calon jamaah yang ingin mempelajari manasik secara mandiri dengan pendekatan visual dan praktis.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-center shadow-2xl shadow-slate-950/40">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Mulai sekarang</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Bicara dengan tim kami dan wujudkan manasik haji Virtual Reality Anda</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Konsultasi bebas biaya dan rekomendasi paket sesuai kebutuhan travel atau individu. Siap bantu dari perencanaan hingga implementasi.</p>
          <a
            href="https://wa.me/6281379389964"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Konsultasi via WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
