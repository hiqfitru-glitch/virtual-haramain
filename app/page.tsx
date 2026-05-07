export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-cyan-600/5 pointer-events-none"></div>
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300 font-medium">Virtual Reality Leader</p>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-white">
                  Manasik Haji Lebih <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Nyata</span>
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Solusi manasik haji premium untuk travel umrah dan jamaah individu — pengalaman VR 360° imersif yang menjadikan pembelajaran ibadah lebih jelas, terstruktur, dan profesional.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <a
                  href="https://wa.me/6281379389964"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/40 hover:from-emerald-300 hover:to-emerald-400"
                >
                  Konsultasi WhatsApp
                </a>
                <a
                  href="https://forms.gle/LS78LwNGtJcVHPsPA"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                >
                  Isi Data Sekarang
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 shadow-xl shadow-slate-950/40 backdrop-blur">
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium">Keunggulan Kami</p>
              </div>
              <div className="space-y-5">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20">
                        <span className="text-emerald-400 text-xs font-bold">✓</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Efisiensi Pelatihan</p>
                      <p className="mt-1.5 text-xs text-slate-400">Simulasi nyata mempercepat pemahaman jamaah sebelum berangkat.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/20">
                        <span className="text-cyan-400 text-xs font-bold">✓</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Standar Profesional</p>
                      <p className="mt-1.5 text-xs text-slate-400">Cocok untuk presentasi ke pemerintah dan travel besar.</p>
                    </div>
                  </div>
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
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Paket Layanan</p>
            <h2 className="text-3xl font-semibold text-white">Pilih paket yang sesuai kebutuhan Anda</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="group relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20 transition hover:border-emerald-500/30 hover:bg-slate-900/90 hover:shadow-emerald-950/20">
              <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Sewa VR</span>
              <h3 className="mt-6 text-3xl font-semibold text-white">Rp 200.000<span className="text-lg text-slate-400"> / hari</span></h3>
              <p className="mt-2 text-xs text-slate-400">Cocok untuk trial dan pelatihan kelompok</p>
              <p className="mt-6 text-slate-300 leading-7">Solusi fleksibel untuk pelatihan jamaah travel atau sesi private. Termasuk perangkat VR dan konten manasik lengkap.</p>
              <div className="mt-8 space-y-3 border-t border-white/5 pt-8">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-sm text-slate-300">Perangkat VR 1-2 unit</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-sm text-slate-300">Konten manasik 360°</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-sm text-slate-300">Dukungan teknis</p>
                </div>
              </div>
            </article>
            <article className="group relative rounded-[2rem] border-2 border-emerald-400/50 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl shadow-emerald-950/30 transition hover:border-emerald-400 hover:shadow-emerald-950/50">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-1.5 rounded-full">
                <span className="text-xs font-bold text-slate-950 uppercase tracking-[0.2em]">⭐ Rekomendasi</span>
              </div>
              <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 mt-2">Paket Bundling</span>
              <h3 className="mt-6 text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Rp 18 juta</h3>
              <p className="mt-2 text-xs text-slate-300">Investasi jangka panjang untuk institusi</p>
              <p className="mt-6 text-slate-300 leading-7 font-medium">Paket premium untuk travel umrah dengan dukungan implementasi dan materi terstruktur untuk presentasi resmi.</p>
              <div className="mt-8 space-y-3 border-t border-emerald-400/20 pt-8">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-sm text-slate-300">Perangkat VR lengkap</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-sm text-slate-300">Training & onboarding</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-sm text-slate-300">Dukungan 1 tahun</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-sm text-slate-300">Sertifikat & marketing materials</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="mt-14 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Keunggulan Layanan</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Mengapa memilih Virtual Haramain?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 p-8 hover:border-emerald-400/50 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/25 group-hover:bg-emerald-500/35 transition">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="mt-5 font-semibold text-white text-lg">Cocok untuk Travel Umrah</h3>
              <p className="mt-3 text-sm text-slate-300 leading-6">Nilai tambah layanan yang meningkatkan kepercayaan jamaah dan daya tarik paket travel umrah Anda.</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 p-8 hover:border-cyan-400/50 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/25 group-hover:bg-cyan-500/35 transition">
                <span className="text-2xl">🎒</span>
              </div>
              <h3 className="mt-5 font-semibold text-white text-lg">Portable & Mudah Digunakan</h3>
              <p className="mt-3 text-sm text-slate-300 leading-6">Setup cepat, tidak perlu instalasi rumit. Dapat digunakan di mana saja untuk presentasi dan pelatihan jamaah.</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 p-8 hover:border-emerald-400/50 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/25 group-hover:bg-emerald-500/35 transition">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="mt-5 font-semibold text-white text-lg">Pengalaman VR 360° Nyata</h3>
              <p className="mt-3 text-sm text-slate-300 leading-6">Simulasi imersif yang membuat pengalaman manasik semakin nyata dengan visualisasi 360 derajat yang detail.</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 p-8 hover:border-cyan-400/50 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/25 group-hover:bg-cyan-500/35 transition">
                <span className="text-2xl">🕋</span>
              </div>
              <h3 className="mt-5 font-semibold text-white text-lg">Untuk Jama'ah Pemula</h3>
              <p className="mt-3 text-sm text-slate-300 leading-6">Ideal bagi jamaah yang belum pernah berkunjung ke tanah suci untuk mempersiapkan diri dengan lebih matang.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Galeri</p>
            <h2 className="text-3xl font-semibold text-white">Lihat pengalaman Virtual Haramain</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg hover:shadow-emerald-950/30 transition">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1617638924702-92da37ce6ffe?w=500&h=500&fit=crop" alt="VR Headset" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Perangkat VR Modern</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg hover:shadow-emerald-950/30 transition">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504678846822-64c1b8a84325?w=500&h=500&fit=crop" alt="Simulasi Tawaf" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Simulasi Tawaf 360°</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg hover:shadow-emerald-950/30 transition">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop" alt="Masjid Haram" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Suasana Masjidil Haram</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg hover:shadow-emerald-950/30 transition">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" alt="Presentasi" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Presentasi untuk Travel</p>
              </div>
            </div>
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
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Saatnya Bergabung</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Presentasi resmi untuk pemerintah dan mitra travel</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Hubungi tim kami untuk konsultasi lengkap dan proposal layanan Virtual Haramain yang siap ditampilkan dalam presentasi formal dan penawaran korporat.
          </p>
          <a
            href="https://wa.me/6281379389964"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-10 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/40 hover:from-emerald-300 hover:to-emerald-400"
          >
            Konsultasi via WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
