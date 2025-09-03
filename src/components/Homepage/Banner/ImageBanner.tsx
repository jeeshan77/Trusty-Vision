'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds, Environment } from '@react-three/drei';

// ✅ Logo component with metallic material fix
function LogoModel({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url);

  // Rotate animation
  useFrame(() => {
    if (scene) {
      scene.rotation.y += 0.01;
    }
  });

  // Force all meshes to look metallic (silver)
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material.metalness = 1;   // full metal
      child.material.roughness = 0.3; // polished silver
      child.material.color.set('#c0c0c0'); // silver color
    }
  });

  return <primitive object={scene} scale={scale} />;
}

export default function ImageBanner({ className }: { className?: string }) {
  const image1Ref = useRef<HTMLImageElement | null>(null);
  const modelRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation
  //   useEffect(() => {
  //   const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 5 }); // ⬅️ shorter gap between cycles
  //   tl.to(image1Ref.current, { x: '100%', opacity: 0, duration: 1 }, '+=1') // ⬅️ faster transition
  //     .fromTo(
  //       modelRef.current,
  //       { x: '-100%', opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1 },
  //       '-=0.5' // overlap them for smoothness
  //     );

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 5 });
    tl.to(image1Ref.current, {
      x: '100%',
      opacity: 0,
      duration: 1,
      force3D: true,       // ✅ push animation to GPU
      transformOrigin: "center center"
    }, '+=1')
      .fromTo(
        modelRef.current,
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
      {/* 3D GLB Model */}
      <div
        ref={modelRef}
        className={`absolute inset-0 flex items-center justify-center ${className} opacity-0`}
      >
        <Canvas
          style={{ width: '100%', height: '100%' }}
          camera={{ position: [0, 0, 6], fov: 50 }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />

          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1.2}>
              <LogoModel url="/model/logo.glb" scale={1.3} />
            </Bounds>

            {/* ✅ Adds realistic reflections */}
            <Environment preset="studio" />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* Normal Image */}
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
