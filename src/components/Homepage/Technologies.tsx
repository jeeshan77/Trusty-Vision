import technologies from '@/data/technologies.json';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import OrderNowButton from '../buttons/OrderNowButton';
import Link from 'next/link';

const { logos, technologiesText } = technologies;

const config = {
  circlesNum: 21,
  parallaxIntensity: 70
};

interface HomepageTechnologiesProps {
  className?: string;
}

interface TextCardProps {
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

const TextCard = (props: TextCardProps) => {
  return (
    <div className='relative z-10 flex w-full flex-col items-center justify-center gap-6 px-4 text-secondary  md:px-10'>
      <div className='flex flex-col items-center font-exo2 text-4xl md:text-2xl'>
        <div className='text-center text-5xl capitalize'>Integrate your website with</div>

        <Link href='/tools'>
          <div
            className="cursor-pointer rounded-2xl bg-cyan-500/80 px-4 py-2 text-2xl font-semibold text-black backdrop-blur-sm hover:bg-cyan-400 md:px-6 md:py-3 md:text-3xl"
            onMouseEnter={props.onMouseOver}
            onMouseLeave={props.onMouseLeave}
          >
            Powerful tools
          </div>
        </Link>
      </div>

      <div className='mt-4 text-justify font-quicksand text-lg md:w-1/2 md:text-3xl'>
        {technologiesText}
      </div>

      <div className='mt-4 md:mt-6'>
        <OrderNowButton />
      </div>
    </div>
  );
};

export default function HomepageTechnologies(props: HomepageTechnologiesProps) {
  const { className } = props;
  const [hovered, setHovered] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);
  let idx = -1;

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      const centerX = grid.offsetWidth / 2;
      const centerY = grid.offsetHeight / 2;

      const updateParallax = (e: MouseEvent) => {
        const dx = (e.clientX - centerX) / centerX;
        const dy = (e.clientY - centerY) / centerY;
        gsap.to(grid, {
          x: -dx * config.parallaxIntensity,
          y: -dy * config.parallaxIntensity,
          duration: 0.2,
          ease: 'none'
        });
      };

      if (window.innerWidth >= 500 && hovered) {
        window.addEventListener('mousemove', updateParallax);
      }

      return () => window.removeEventListener('mousemove', updateParallax);
    }
  }, [hovered]);

  const onMouseOver = () => gsap.to(gridRef.current, { scale: 1.5, duration: 1 });
  const onMouseLeave = () => gsap.to(gridRef.current, { scale: 1, duration: 1 });

  return (
    <div
      id='technologies'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} relative flex w-full flex-col bg-black pt-24 md:h-screen`}
    >
      <div className='spotlight spotlight-right'></div>

      <div className='relative flex w-full flex-col items-center justify-center md:h-full'>
        <TextCard onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />

        <div
          ref={gridRef}
          className='absolute top-[240px] z-0 grid h-[250px] w-full grid-cols-3 items-center justify-items-center gap-2 brightness-[0.4] md:top-0 md:h-full md:grid-cols-7 md:gap-20'
        >
          {Array.from({ length: config.circlesNum }).map((_, index) => {
            if (index % 2 === 0) idx++;
            return (
              <div
                key={index}
                className={`flex h-16 w-16 items-center justify-center overflow-clip rounded-full object-contain opacity-70 shadow-primary/50 md:h-36 md:w-36 ${index % 2 === 0 ? 'shadow-xl' : 'shadow-none'
                  }`}
              >
                {index % 2 === 0 && (
                  <Image
                    src={logos[idx % logos.length]}
                    width={500}
                    height={500}
                    alt='tech-image'
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
