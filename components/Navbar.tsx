"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Paket & Harga", href: "/paket" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak / Kemitraan", href: "/kontak" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-emerald-500/10 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="bg-white/90 border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] px-3.5 py-1.5 rounded-xl flex items-center justify-center backdrop-blur-md transition hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]">
              <Image 
                src="/images/Logo.png" 
                alt="Virtual Haramain Logo" 
                width={112}
                height={32}
                priority
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-all duration-300 relative py-1.5 ${
                    isActive
                      ? "text-amber-400"
                      : "text-slate-300 hover:text-slate-100"
                  }`}
                >
                  {link.name}
                  {/* Subtle underline indicator for active page */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Header CTA Button */}
          <div className="hidden sm:block">
            <a
              href="https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
              target="_blank"
              rel="noreferrer"
              className="relative group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5.5 py-2.5 text-xs font-bold text-slate-950 shadow-[0_4px_15px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(212,175,55,0.35)] active:scale-[0.98] overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              Konsultasi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-emerald-500/10 bg-slate-950/95 backdrop-blur-md animate-fade-in" id="mobile-menu">
          <div className="space-y-1.5 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 border-l-2 border-amber-500"
                      : "text-slate-300 hover:bg-white/5 hover:text-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/5 mt-3">
              <a
                href="https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR."
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-slate-950 shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
              >
                Konsultasi WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
