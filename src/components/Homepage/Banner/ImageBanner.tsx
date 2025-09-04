'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ImageBanner({ className }: { className?: string }) {
  const image1Ref = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ✅ GSAP animation between Image and WebM
  useEffect(() => {
    if (!image1Ref.current || !videoRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 5 });

    tl.to(image1Ref.current, {
      x: '100%',
      opacity: 0,
      duration: 1,
      force3D: true,
      transformOrigin: 'center center',
    }, '+=1')
      .fromTo(
        videoRef.current,
        { x: '-100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 1, force3D: true },
        '-=0.5'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* 🎥 Transparent WebM Logo */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${className} opacity-15`}
      >
        <video
          ref={videoRef}
          className="z-10 h-full w-full object-contain md:w-auto"
          src="/assets/model4.webm"  // 👈 switched to WebM
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: 0}}
        />
      </div>

      {/* 🖼️ Normal Image */}
      <div
        className={`absolute inset-0 flex w-full items-center justify-center ${className}`}
      >
        <Image
          ref={image1Ref}
          className="z-0 h-full w-full object-contain md:w-auto"
          alt="banner-image"
          src="/assets/selfimg.png"
          priority
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
}
