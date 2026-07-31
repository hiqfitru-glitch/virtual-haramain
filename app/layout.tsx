import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virtual Haramain - Manasik Haji & Umrah VR Premium",
  description: "Solusi manasik haji premium untuk travel umrah dan jamaah individu. Pengalaman VR 360° imersif yang membuat pembelajaran ibadah nyata, terstruktur, and profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030f0c] text-slate-100">
        <Navbar />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
        <AudioPlayer />
      </body>
    </html>
  );
}
