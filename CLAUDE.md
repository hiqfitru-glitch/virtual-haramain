@AGENTS.md
# Context & Persistent Memory: Virtual Haramain

## 1. Project Overview & Tech Stack
- **Project Name:** Virtual Haramain (Platform Manasik Haji/Umrah Berbasis Virtual Reality 360°)
- **Framework:** Next.js 16.2.4 (App Router)
- **UI & State:** React 19.2.4, TypeScript 5.9.3
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Backend / Database:** Supabase (`@supabase/supabase-js`)
- **Deployment Target:** Vercel

---

## 2. Design System & Aesthetics
- **Vibe:** Modern Islamic Luxury & Tech Elegance.
- **Color Palette:**
  - Background: Dark Midnight Emerald (`bg-[#051612]` / `bg-[#030f0c]`).
  - Accents: Metallic Warm Gold (`#d4af37`), Emerald Glow (`#10b981`), Cyan Highlights.
  - Surfaces: Frosted glassmorphism (`bg-white/[0.03]`, `backdrop-blur-xl`, `border-white/10`).
  - Text: Off-white (`text-slate-100`) for headers, muted slate (`text-slate-300`) for body.
- **Brand Assets:**
  - Logo: `/images/Logo.png` (di dalam `bg-white/90` frosted container agar tetap tampil hitam sesuai warna aslinya).
  - Floating VR Asset: `/images/vr-headset.png` (transparent PNG).

---

## 3. Site Navigation & Page Structure
1. **Home (`/`)**:
    - Hero Section dengan background video `/Video-Makkah1.mp4` + overlay VR headset floating + floating sound toggle controller (unmute background video).
   - Ringkasan Solusi & Keunggulan Layanan.
   - Paket Pricing Cards (Sewa VR Rp 200.000/hari & Bundling Rp 18 Juta).
   - Preview Galeri: Auto-scrolling horizontal photo collage (bergerak dari kanan ke kiri).
   - CTA Konsultasi & Pengajuan Kemitraan.
2. **Tentang Kami (`/tentang-kami`)**: Visi, misi, dan nilai-nilai teknologi manasik.
3. **Paket & Harga (`/paket`)**: Rincian B2B (Travel Umrah) dan B2C.
4. **Galeri (`/galeri`)**: 
   - 2 Baris Auto-scrolling Carousel terpisah (Baris 1: Foto, Baris 2: Video 360° Makkah).
   - Interactive Lightbox Modal dengan background blur saat media diklik.
5. **Kontak / Kemitraan (`/kontak`)**: Form & kontak resmi.

---

## 4. Assets Registry
- **Images:** `/images/Logo.png`, `/images/vr-headset.png`, `/images/brosur-harga-sewa.jpg`, `/images/testi1.jpeg` s/d `testi5.jpeg`.
- **Videos:**
  - Hero background: Menggunakan link GitHub Media CDN (`https://media.githubusercontent.com/media/hiqfitru-glitch/virtual-haramain/main/public/images/Video-Makkah1.mp4`) untuk memintas keterbatasan Git LFS 100MB di Vercel.
  - Gallery videos: `/images/Video-Makkah2.mp4` s/d `/images/Video-Makkah6.mp4` (dikeluarkan dari Git LFS tracking agar di-deploy sebagai file biner statis normal di Vercel).

---

## 5. Integrasi Database (Supabase)
- **Environment Variables (`.env.local`):**
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Helper Client:** `lib/supabaseClient.ts`
- **Database Table:** `kemitraan_leads`
  - Columns: `id` (uuid), `nama_lengkap` (text), `nama_instansi` (text), `nomor_whatsapp` (text), `pesan` (text), `created_at` (timestamp).
- **Form Action:** Tombol "Isi Data Form" membuka Modal Form native yang menginsert data langsung ke tabel `kemitraan_leads`.

---

## 6. Business Logic & Integrations
- **WhatsApp CTA URL Format:**
  `https://wa.me/6281374128199?text=Assalamu%27alaikum%20Admin%20Virtual%20Haramain%2C%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20layanan%20manasik%20VR.`
- **Office / Physical Address:**
  `Jl. Kamboja No.3, Kelurahan Subarang Batuang, Kecamatan Payakumbuh Barat, Kota Payakumbuh, Sumatera Barat` (tercantum pada halaman Kontak).
- **Global Background Audio:**
  File `/audio/backsound.mp3` dimainkan secara terus menerus (`loop`) dengan volume 30% via komponen `<AudioPlayer />` (`components/AudioPlayer.tsx`) yang terpasang di root layout (`app/layout.tsx`). Dilengkapi tombol floating play/pause di sudut kanan bawah.


---

## 7. Useful Commands
- Development Server: `npm run dev`
- Production Build: `npm run build`
- Start Server: `npm start`
- Linter Check: `npm run lint`