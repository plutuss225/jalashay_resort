"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export function LazyVideo({
  src,
  poster,
  alt = "",
  className = "",
  containerClassName = "",
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            setIsInView(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: "150px", // Only load shortly before coming into view
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden bg-muted/40 ${containerClassName}`}
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={isInView}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="none"
          controlsList="nodownload noplaybackrate nofullscreen"
          disablePictureInPicture
          disableRemotePlayback
          className={`w-full h-full object-cover ${className}`}
          aria-label={alt}
          suppressHydrationWarning
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black/10">
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white/50 ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
