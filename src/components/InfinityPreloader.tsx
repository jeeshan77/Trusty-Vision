'use client';

import { useEffect, useState } from 'react';

type PreloaderProps = {
  children: React.ReactNode;
};

export default function Preloader({ children }: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // adjust duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black'>
        {/* Infinity Ribbon */}
        <div className='relative h-14 w-28'>
          <div className='animate-draw-infinity absolute h-full w-full'>
            <svg viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10,30 C10,10 50,10 60,30 C70,50 110,50 110,30 C110,10 70,10 60,30 C50,50 10,50 10,30 Z'
                stroke='white'
                strokeWidth='4'
                fill='transparent'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='drop-shadow-[0_0_8px_white]'
              />
            </svg>
          </div>
        </div>
        {/* <p className="text-white text-lg mt-6 font-semibold animate-pulse">
          Trusty Vision Loading...
        </p> */}
      </div>
    );
  }

  return <>{children}</>; // render wrapped content after loading
}
