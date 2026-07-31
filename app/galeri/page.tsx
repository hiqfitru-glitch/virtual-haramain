"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MediaItem {
  type: "photo" | "video";
  src: string;
  title: string;
  poster?: string;
}

export default function Galeri() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});

  const photoRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const isPhotoHovered = useRef(false);
  const isVideoHovered = useRef(false);
  const isModalOpen = useRef(false);

  // Sync state with mutable ref so RAF loop can read it without restarts
  useEffect(() => {
    isModalOpen.current = !!selectedMedia;
  }, [selectedMedia]);

  const photos: MediaItem[] = [
    { type: "photo", src: "/images/testi1.jpeg", title: "VR Headset Showcase" },
    { type: "photo", src: "/images/testi2.jpeg", title: "Simulasi Tawaf Jamaah" },
    { type: "photo", src: "/images/testi3.jpeg", title: "Masjidil Haram Visual" },
    { type: "photo", src: "/images/testi4.jpeg", title: "Presentasi Kemitraan" },
    { type: "photo", src: "/images/testi5.jpeg", title: "Suasana Manasik VR" },
  ];

  const videos: MediaItem[] = [
    { type: "video", src: "/images/Video-Makkah2.mp4", title: "Ka'bah & Thawaf Simulator", poster: "/images/testi2.jpeg" },
    { type: "video", src: "/images/Video-Makkah3.mp4", title: "Masjidil Haram Visualizer", poster: "/images/testi3.jpeg" },
    { type: "video", src: "/images/Video-Makkah4.mp4", title: "Area Sa'i Immersive Walk", poster: "/images/testi5.jpeg" },
    { type: "video", src: "/images/Video-Makkah5.mp4", title: "Arafah & Muzdalifah Guide", poster: "/images/testi1.jpeg" },
    { type: "video", src: "/images/Video-Makkah6.mp4", title: "Jamarat Throwing Simulation", poster: "/images/testi4.jpeg" },
  ];

  const duplicatedPhotos = [...photos, ...photos];
  const duplicatedVideos = [...videos, ...videos];

  // Carousel Row 1: Photos Scroll Loop
  useEffect(() => {
    const photoContainer = photoRef.current;
    if (!photoContainer || photoContainer.scrollWidth <= photoContainer.clientWidth) return;
    const resetPointPhoto = photoContainer.scrollWidth / 2;
    let photoRafId: number;

    const stepPhoto = () => {
      if (photoContainer && !isPhotoHovered.current && !isModalOpen.current) {
        photoContainer.scrollLeft += 0.55;
        if (photoContainer.scrollLeft >= resetPointPhoto) {
          photoContainer.scrollLeft -= resetPointPhoto;
        }
      }
      photoRafId = requestAnimationFrame(stepPhoto);
    };

    photoRafId = requestAnimationFrame(stepPhoto);
    return () => cancelAnimationFrame(photoRafId);
  }, []);

  // Carousel Row 2: Videos Scroll Loop
  useEffect(() => {
    const videoContainer = videoRef.current;
    if (!videoContainer || videoContainer.scrollWidth <= videoContainer.clientWidth) return;
    const resetPointVideo = videoContainer.scrollWidth / 2;
    let videoRafId: number;

    const stepVideo = () => {
      if (videoContainer && !isVideoHovered.current && !isModalOpen.current) {
        videoContainer.scrollLeft += 0.55;
        if (videoContainer.scrollLeft >= resetPointVideo) {
          videoContainer.scrollLeft -= resetPointVideo;
        }
      }
      videoRafId = requestAnimationFrame(stepVideo);
    };

    videoRafId = requestAnimationFrame(stepVideo);
    return () => cancelAnimationFrame(videoRafId);
  }, []);

  // Close on Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative flex-grow bg-[#051612] text-slate-100 overflow-hidden font-sans py-16 sm:py-24 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Decorative Radial Glows & Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block">
            Galeri Virtual
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Galeri Virtual{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Haramain
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Saksikan keunggulan visualisasi manasik haji. Nikmati pemandangan imersif dan detail foto pelaksanaan pembekalan jamaah kami secara interaktif.
          </p>
        </div>

        {/* Carousel Row 1: Photos */}
        <div className="space-y-6 mb-20">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-wide flex items-center gap-2">
              <span className="text-amber-400">📸</span> Dokumentasi & Testimoni Foto
            </h2>
            <span className="text-[10px] uppercase tracking-widest text-slate-500">Auto-Scrolling</span>
          </div>

          <div 
            ref={photoRef}
            onMouseEnter={() => { isPhotoHovered.current = true; }}
            onMouseLeave={() => { isPhotoHovered.current = false; }}
            className="flex gap-6 overflow-x-hidden scrollbar-hide py-4 cursor-grab active:cursor-grabbing scroll-smooth transform-gpu will-change-transform"
          >
            {duplicatedPhotos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMedia(item)}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition duration-500 hover:border-amber-500/30 hover:-translate-y-1.5 w-[280px] sm:w-[350px] flex-shrink-0 aspect-[4/5] cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 280px, 350px"
                  loading="lazy"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Gold gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030f0c]/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30 shadow-lg pointer-events-none">
                  <span className="text-[8px] font-bold text-slate-950 uppercase tracking-widest">
                    Foto
                  </span>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl glass-panel border border-white/5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-between pointer-events-none">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Dokumentasi</span>
                  <span className="text-sm text-slate-200 font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Row 2: Videos */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-wide flex items-center gap-2">
              <span className="text-emerald-400">🎥</span> Simulasi VR & Video 360°
            </h2>
            <span className="text-[10px] uppercase tracking-widest text-slate-500">Auto-Scrolling</span>
          </div>

          <div 
            ref={videoRef}
            onMouseEnter={() => { isVideoHovered.current = true; }}
            onMouseLeave={() => { isVideoHovered.current = false; }}
            className="flex gap-6 overflow-x-hidden scrollbar-hide py-4 cursor-grab active:cursor-grabbing scroll-smooth transform-gpu will-change-transform"
          >
            {duplicatedVideos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMedia(item)}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950 shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition duration-500 hover:border-emerald-500/30 hover:-translate-y-1.5 w-[320px] sm:w-[400px] flex-shrink-0 aspect-[4/5] cursor-pointer"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                  onLoadedData={() => setLoadedVideos(prev => ({ ...prev, [item.src]: true }))}
                  className={`h-full w-full object-cover transition-opacity duration-1000 ease-out group-hover:scale-105 ${
                    loadedVideos[item.src] ? "opacity-85" : "opacity-0"
                  }`}
                  src={item.src}
                />
                {/* Emerald gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030f0c]/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Video Badge */}
                <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-400/30 shadow-lg pointer-events-none">
                  <span className="text-[8px] font-bold text-slate-950 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-950"></span>
                    </span>
                    360° Video
                  </span>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl glass-panel border border-white/5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-between pointer-events-none">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Simulasi VR</span>
                  <span className="text-sm text-slate-200 font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          onClick={() => setSelectedMedia(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fade-in"
        >
          {/* Close button in top-right */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia(null);
            }}
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition duration-300"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Media frame wrapper */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[80vh] flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-950/40 p-2 shadow-2xl transition-all duration-500 scale-95 animate-zoom-in"
          >
            {selectedMedia.type === "video" ? (
              <video 
                src={selectedMedia.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full max-h-[70vh] rounded-2xl object-contain shadow-lg"
              />
            ) : (
              <Image 
                src={selectedMedia.src} 
                alt={selectedMedia.title}
                width={1200}
                height={800}
                priority
                className="w-full max-h-[70vh] rounded-2xl object-contain shadow-lg"
              />
            )}
            
            {/* Title display inside the modal */}
            <div className="w-full text-center py-4 bg-slate-950/70 border-t border-white/5 mt-2 rounded-b-2xl">
              <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
                {selectedMedia.type === "video" ? "Simulasi Video 360°" : "Dokumentasi Foto"}
              </p>
              <h3 className="text-slate-100 font-bold mt-1 text-base sm:text-lg">{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
