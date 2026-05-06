export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 space-y-10">
      
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold mb-4">
          Virtual Haramain
        </h1>
        <p>
          Rasakan manasik haji secara nyata dengan teknologi VR di Payakumbuh.
        </p>
      </section>

      {/* Paket */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Paket Kami</h2>

        <div className="border p-4 rounded mb-4">
          <h3 className="font-bold">Sewa VR</h3>
          <p>Mulai dari Rp200.000 / hari</p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold">Bundling VR + Konten</h3>
          <p>Rp15 – 20 juta</p>
        </div>
      </section>

      {/* Keunggulan */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Kenapa Virtual Haramain?</h2>
        <ul className="list-disc pl-5">
          <li>Simulasi manasik 360° yang realistis</li>
          <li>Membantu jamaah lebih siap sebelum berangkat</li>
          <li>Cocok untuk travel dan individu</li>
        </ul>
      </section>
      <section>
  <h2 className="text-2xl font-semibold mb-2">Minat? Isi Data Dulu</h2>

  <form className="space-y-3">
    <input
      type="text"
      placeholder="Nama"
      className="border p-2 w-full rounded"
    />
    <input
      type="text"
      placeholder="Nomor WhatsApp"
      className="border p-2 w-full rounded"
    />
    <select className="border p-2 w-full rounded">
      <option>Untuk Travel Umrah</option>
      <option>Untuk Pribadi</option>
    </select>

    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Kirim
    </button>
  </form>
</section>
      {/* CTA */}
      <section>
        <a
          href="https://wa.me/6281379389964?text=Halo%20saya%20tertarik%20Virtual%20Haramain"
          className="bg-green-500 text-white px-6 py-3 rounded"
        >
          Hubungi Kami Sekarang
        </a>
        <a
  href="https://forms.gle/Hi744CaBm3rRedDT8"
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Isi Data Sekarang
</a>
      </section>

    </main>
  );
}