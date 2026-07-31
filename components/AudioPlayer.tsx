"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Comfort level volume at 30%
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay blocked or audio load error:", err);
          });
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/backsound.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-50 bg-emerald-950/80 border text-amber-400 p-3.5 rounded-full shadow-lg backdrop-blur-md hover:scale-110 transition duration-300 flex items-center justify-center cursor-pointer group ${
          isPlaying
            ? "border-amber-400 ring-4 ring-amber-400/20 shadow-[0_0_20px_rgba(245,158,11,0.3)] animate-[pulse_3s_infinite]"
            : "border-emerald-500/30"
        }`}
        aria-label={isPlaying ? "Jeda Musik Latar" : "Putar Musik Latar"}
      >
        {isPlaying ? (
          /* Active speaker with soundwaves */
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        ) : (
          /* Muted speaker (SpeakerXMark) */
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
          </svg>
        )}

        {/* Tooltip label on hover */}
        <span className="absolute right-14 bg-emerald-950/95 border border-emerald-500/20 text-slate-100 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          {isPlaying ? "Jeda Musik Latar" : "Putar Musik Latar"}
        </span>
      </button>
    </>
  );
}
