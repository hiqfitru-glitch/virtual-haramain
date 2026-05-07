export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-950 font-sans">
      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="relative rounded-3xl bg-white shadow-xl shadow-slate-200/20 overflow-hidden">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.9fr] lg:items-center py-16 px-8 sm:px-12 lg:px-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50 px-4 py-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 font-medium">Virtual Reality Leader</p>
              </div>
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-slate-900 max-w-3xl">
                  Manasik Haji Lebih{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    Nyata
                  </span>
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Solusi manasik haji premium untuk travel umrah dan jamaah individu — pengalaman VR 360° imersif yang menjadikan pembelajaran ibadah lebih jelas, terstruktur, dan profesional.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <a
                  href="https://wa.me/6281379389964"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/30"
                >
                  Konsultasi WhatsApp
                </a>
                <a
                  href="https://forms.gle/LS78LwNGtJcVHPsPA"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-slate-900"
                >
                  Isi Data Sekarang
                </a>
              </div>
            </div>
            <div className="relative rounded-[2.5rem] animate-[float_6s_ease-in-out_infinite] bg-gradient-to-br from-slate-100 via-slate-50 to-white p-6 shadow-[0_36px_80px_-40px_rgba(15,23,42,0.25)] h-[28rem] sm:h-[30rem] lg:h-[34rem]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-100/60 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-emerald-100/50 blur-3xl" />
              </div>
              <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:48px_48px]" />
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/70 shadow-inner shadow-slate-900/5">
                <img
                  src="/images/vr.png"
                  alt="Virtual Haramain VR"
                  className="h-full w-full object-cover object-center scale-110 hover:scale-115 transition duration-700"
                />
              </div>
              <div className="absolute bottom-6 right-6 w-[72%] rounded-[2.5rem] bg-white/75 backdrop-blur-2xl border border-white/60 shadow-[0_32px_80px_-40px_rgba(15,23,42,0.25)] p-6 transition duration-300 hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-medium">Keunggulan Kami</p>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-4 rounded-3xl bg-white/65 border border-slate-200/50 p-4 shadow-sm transition hover:bg-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      ✓
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Efisiensi Pelatihan</p>
                      <p className="mt-2 text-sm text-slate-700 leading-6">Simulasi nyata mempercepat pemahaman jamaah sebelum berangkat.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-3xl bg-white/65 border border-slate-200/50 p-4 shadow-sm transition hover:bg-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      ✓
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Standar Profesional</p>
                      <p className="mt-2 text-sm text-slate-700 leading-6">Cocok untuk presentasi ke pemerintah dan travel besar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none hidden lg:flex absolute top-[46%] left-[58%] -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/85 border border-white/70 shadow-2xl shadow-slate-900/10 backdrop-blur-xl animate-pulse">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-200/60 to-cyan-200/40 blur-2xl" />
              <span className="relative text-xs font-semibold text-emerald-700">VR</span>
            </div>
          </div>
        </header>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-md shadow-slate-200/50">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Tantangan utama</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Kenapa banyak jamaah masih bingung?</h2>
            <div className="mt-8 space-y-6 text-slate-700">
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Kesulitan memahami manasik</p>
                <p className="mt-2 leading-7">Materi manasik sering disampaikan secara teori tanpa visual dan praktik nyata.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Tidak membayangkan kondisi lapangan</p>
                <p className="mt-2 leading-7">Kondisi masjid, tawaf, dan sa'i sulit tergambar tanpa pengalaman visual yang kuat.</p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-md shadow-slate-200/50">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Solusi yang kami tawarkan</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Pendekatan VR yang elegan</h2>
            <div className="mt-8 space-y-6 text-slate-700">
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Simulasi 360° VR</p>
                <p className="mt-2 leading-7">Pengalaman imersif untuk melihat secara langsung lingkungan ibadah dari berbagai sudut.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Interaktif & mudah dipahami</p>
                <p className="mt-2 leading-7">Konten dirancang agar peserta dapat mengikuti langkah demi langkah dengan jelas.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14">
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Paket Layanan</p>
            <h2 className="text-3xl font-semibold text-slate-900">Pilih paket yang sesuai kebutuhan Anda</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="group relative rounded-[2rem] border border-slate-200 bg-white p-10 shadow-md shadow-slate-200/50 transition hover:border-emerald-300 hover:shadow-emerald-200/50">
              <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">Sewa VR</span>
              <h3 className="mt-6 text-3xl font-semibold text-slate-900">Rp 200.000<span className="text-lg text-slate-500"> / hari</span></h3>
              <p className="mt-2 text-xs text-slate-500">Cocok untuk trial dan pelatihan kelompok</p>
              <p className="mt-6 text-slate-700 leading-7">Solusi fleksibel untuk pelatihan jamaah travel atau sesi private. Termasuk perangkat VR dan konten manasik lengkap.</p>
              <div className="mt-8 space-y-3 border-t border-slate-200 pt-8">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600">✓</span>
                  <p className="text-sm text-slate-700">Perangkat VR 1-2 unit</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600">✓</span>
                  <p className="text-sm text-slate-700">Konten manasik 360°</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600">✓</span>
                  <p className="text-sm text-slate-700">Dukungan teknis</p>
                </div>
              </div>
            </article>
            <article className="group relative rounded-[2rem] border-2 border-emerald-300 bg-gradient-to-br from-white to-emerald-50 p-10 shadow-lg shadow-emerald-200/30 transition hover:border-emerald-400 hover:shadow-emerald-300/40">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-1.5 rounded-full">
                <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">⭐ Rekomendasi</span>
              </div>
              <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 mt-2">Paket Bundling</span>
              <h3 className="mt-6 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Rp 18 juta</h3>
              <p className="mt-2 text-xs text-slate-600">Investasi jangka panjang untuk institusi</p>
              <p className="mt-6 text-slate-700 leading-7 font-medium">Paket premium untuk travel umrah dengan dukungan implementasi dan materi terstruktur untuk presentasi resmi.</p>
              <div className="mt-8 space-y-3 border-t border-emerald-200 pt-8">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600">✓</span>
                  <p className="text-sm text-slate-700">Perangkat VR lengkap</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600">✓</span>
                  <p className="text-sm text-slate-700">Training & onboarding</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600">✓</span>
                  <p className="text-sm text-slate-700">Dukungan 1 tahun</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600">✓</span>
                  <p className="text-sm text-slate-700">Sertifikat & marketing materials</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-md shadow-slate-200/50">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Keunggulan Layanan</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Mengapa memilih Virtual Haramain?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 p-8 hover:border-emerald-400/60 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-200/60 group-hover:bg-emerald-300/60 transition">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900 text-lg">Cocok untuk Travel Umrah</h3>
              <p className="mt-3 text-sm text-slate-600 leading-6">Nilai tambah layanan yang meningkatkan kepercayaan jamaah dan daya tarik paket travel umrah Anda.</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/50 border border-cyan-200 p-8 hover:border-cyan-400/60 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-200/60 group-hover:bg-cyan-300/60 transition">
                <span className="text-2xl">🎒</span>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900 text-lg">Portable & Mudah Digunakan</h3>
              <p className="mt-3 text-sm text-slate-600 leading-6">Setup cepat, tidak perlu instalasi rumit. Dapat digunakan di mana saja untuk presentasi dan pelatihan jamaah.</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 p-8 hover:border-emerald-400/60 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-200/60 group-hover:bg-emerald-300/60 transition">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900 text-lg">Pengalaman VR 360° Nyata</h3>
              <p className="mt-3 text-sm text-slate-600 leading-6">Simulasi imersif yang membuat pengalaman manasik semakin nyata dengan visualisasi 360 derajat yang detail.</p>
            </div>
            <div className="group rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/50 border border-cyan-200 p-8 hover:border-cyan-400/60 transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-200/60 group-hover:bg-cyan-300/60 transition">
                <span className="text-2xl">🕋</span>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900 text-lg">Untuk Jama'ah Pemula</h3>
              <p className="mt-3 text-sm text-slate-600 leading-6">Ideal bagi jamaah yang belum pernah berkunjung ke tanah suci untuk mempersiapkan diri dengan lebih matang.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Galeri</p>
            <h2 className="text-3xl font-semibold text-slate-900">Lihat pengalaman Virtual Haramain</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-md transition hover:shadow-emerald-200/60">
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img src="/images/testi1.jpeg" alt="VR Headset" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Perangkat VR Modern</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-md transition hover:shadow-cyan-200/60">
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img src="/images/testi2.jpeg" alt="Simulasi Tawaf" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Simulasi Tawaf 360°</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-md transition hover:shadow-emerald-200/60">
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img src="/images/testi3.jpeg" alt="Masjid Haram" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Suasana Masjidil Haram</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-md transition hover:shadow-cyan-200/60">
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img src="/images/testi4.jpeg" alt="Presentasi" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Presentasi untuk Travel</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-md transition hover:shadow-emerald-200/60">
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img src="/images/testi5.jpeg" alt="Suasana Manasik" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end">
                <p className="p-4 text-sm font-semibold text-white">Suasana Manasik VR</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-md shadow-slate-200/50">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Sasaran layanan</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Dirancang untuk travel dan individu</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">Untuk Travel Umrah</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">Nilai tambah untuk bisnis travel</p>
              <p className="mt-3 text-slate-700 leading-7">Tampilkan layanan manasik VR sebagai fasilitas profesional yang meningkatkan kepercayaan jamaah dan instansi pemerintah.</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-cyan-100/50 border border-cyan-200 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700">Untuk Individu</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">Persiapan haji lebih siap</p>
              <p className="mt-3 text-slate-700 leading-7">Pendekatan personal untuk calon jamaah yang membutuhkan pemahaman praktis sebelum berangkat.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-12 text-center shadow-md shadow-slate-200/50">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Saatnya Bergabung</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Presentasi resmi untuk pemerintah dan mitra travel</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            Hubungi tim kami untuk konsultasi lengkap dan proposal layanan Virtual Haramain yang siap ditampilkan dalam presentasi formal dan penawaran korporat.
          </p>
          <a
            href="https://wa.me/6281379389964"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/40"
          >
            Konsultasi via WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
