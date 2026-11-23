"use client";

import { useEffect, useRef } from "react";
import { useBookingModal } from "@/context/BookingModalContext";

const heroBgVideo = "/Website_01.mp4";

export function Hero() {
  const { openBookingModal } = useBookingModal();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay video and pause when out of view to conserve bandwidth and CPU
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.muted = true;
    video.play().catch(() => {});

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100svh] overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          src={heroBgVideo}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          controlsList="nodownload noplaybackrate nofullscreen"
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          className="w-full h-full object-cover pointer-events-none"
          onError={(e) => console.error("Video failed to load:", e)}
          suppressHydrationWarning
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-center px-8 lg:px-12 pt-20">
        <p className="text-[color:var(--gold)] text-xs uppercase tracking-[0.4em] mb-6">
          — Lakeside Luxury
        </p>
        <h1 className="font-display text-white text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] text-balance max-w-5xl">
          Jalashay <em className="italic">Resort</em>
        </h1>
        <p className="text-white/90 mt-8 max-w-lg text-lg font-light leading-relaxed">
          A serene lakeside escape designed for grand weddings, intimate getaways and timeless
          celebrations.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => openBookingModal("Stay")}
            className="btn-gold hover:[&]:btn-gold-hover text-sm uppercase tracking-[0.2em]"
          >
            Reserve Your Stay
          </button>
          <a
            href="#gallery"
            className="rounded-full border border-white/60 text-white text-sm uppercase tracking-[0.2em] px-7 py-[0.85rem] font-medium hover:bg-white/10 transition"
          >
            Explore Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 text-[10px] uppercase tracking-[0.4em]">
        Est. 2014
      </div>
    </section>
  );
}
