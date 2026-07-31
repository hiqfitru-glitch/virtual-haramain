import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-emerald-500/10 bg-[#020b08] py-12 text-slate-400">
      {/* Decorative top glow line */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand section */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
              </span>
              <span className="font-extrabold text-xl tracking-[0.2em] bg-gradient-to-r from-slate-100 to-amber-300 bg-clip-text text-transparent">
                VIRTUAL HARAMAIN
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-light max-w-sm">
              Solusi manasik haji premium untuk travel umrah dan jamaah individu. Memberikan pengalaman visual 360° yang imersif dan memudahkan pembelajaran ibadah secara terstruktur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-slate-200 font-bold mb-4">Layanan & Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-amber-400 transition-colors duration-300">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/paket" className="hover:text-amber-400 transition-colors duration-300">Paket & Harga</Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-amber-400 transition-colors duration-300">Galeri</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-amber-400 transition-colors duration-300">Kontak / Kemitraan</Link>
              </li>
            </ul>
          </div>

          {/* Hubungi Kami Section */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-slate-200 font-bold">Kemitraan Resmi</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Mulai kolaborasi manasik haji VR premium untuk travel umrah Anda hari ini.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://wa.me/6281379389964?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/20 py-2.5 text-xs font-bold text-emerald-400 transition duration-300"
              >
                📱 WhatsApp Konsultasi
              </a>
              <a
                href="https://forms.gle/LS78LwNGtJcVHPsPA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-white/5 py-2.5 text-xs font-bold text-slate-200 transition duration-300"
              >
                📝 Isi Data Kemitraan
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Virtual Haramain. All rights reserved.
          </p>
          <div className="flex gap-4 text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
