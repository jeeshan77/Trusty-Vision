// 'use client';
// // import InfinityPreloader from '@/components/InfinityPreloader';

// import examples from '@/data/examples.json';
// import { Carousel } from 'flowbite-react';
// import { gsap } from 'gsap';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';
// import { PiControlBold } from 'react-icons/pi';
// import { HiArrowLeft } from 'react-icons/hi';
// import Link from 'next/link';
// interface ExamplesProps {
//   className?: string;
// }

// interface ExampleCardProps {
//   className?: string;
//   preview: string;
//   images: string[];
//   tags?: string[];
//   title: string;
//   text: string;
// }

// const CarouselControl = ({ className }: { className: string }) => {
//   return (
//     <div className={`text-5xl text-primary ${className}`}>
//       <PiControlBold />
//     </div>
//   );
// };

// const ExampleCard = (props: ExampleCardProps) => {
//   const { className, tags, preview, images, title, text } = props;
//   const [hover, setHover] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div
//       className={`${className} relative flex w-full flex-col items-center justify-center gap-5 text-secondary md:h-[600px] md:w-[600px]`}
//     >
//       <div
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//         className={`${hover ? 'from-primary/80' : 'from-primary/40 '
//           } relative flex h-[250px] min-h-[180px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br  object-cover shadow-tl shadow-primary transition-colors delay-1000 md:h-[400px] md:min-h-[200px]`}
//       >
//         <Carousel
//           leftControl={<CarouselControl className='-rotate-90' />}
//           rightControl={<CarouselControl className='rotate-90' />}
//           slide={false}
//           className='relative h-full w-full'
//         >
//           <div className='relative h-full w-full'>
//             <Image
//               alt='example-image'
//               src={preview}
//               width={500}
//               height={500}
//               className={`${hover ? '-rotate-6' : ''
//                 } absolute right-0 top-10 h-auto w-4/5 -rotate-12 transform object-contain shadow-repeat shadow-primary/20 duration-200`}
//             />
//           </div>
//           {images.map((image, index) => (
//             <div key={index} className='relative h-full w-full'>
//               <Image
//                 alt='example-image'
//                 src={image}
//                 width={500}
//                 height={500}
//                 className='absolute top-0 h-auto w-full  object-contain'
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Tags */}
//       <div className='flex flex-wrap gap-2 self-start'>
//         {tags?.map((tag, index) => (
//           <div key={index} className='rounded-xl bg-primary/40 p-2'>
//             {tag}
//           </div>
//         ))}
//       </div>

//       {/* Title */}
//       <div className='w-full text-left font-exo2 text-3xl'>{title}</div>

//       {/* Description with Read More */}
//       <div className='w-full break-words text-justify font-quicksand text-2xl text-gray-300'>
//         {expanded ? (
//           <>
//             <p>{text}</p>
//             <button
//               onClick={() => setExpanded(false)}
//               className='mt-2 text-2xl text-primary underline transition hover:text-secondary'
//             >
//               Show less
//             </button>
//           </>
//         ) : (
//           <>
//             <p className='line-clamp-3'>{text}</p>
//             <button
//               onClick={() => setExpanded(true)}
//               className='mt-1 text-2xl text-primary underline transition hover:text-secondary'
//             >
//               Read more
//             </button>
//           </>
//         )}
//       </div>

//       <div className='block w-1/2 border-b-4 border-primary md:hidden'></div>
//     </div>
//   );
// };

// export default function HomepageExamples(props: ExamplesProps) {
//   const { className } = props;
//   const bgTextRef = useRef(null);

//   useEffect(() => {
//     gsap.to(bgTextRef.current, {
//       yPercent: -100,
//       duration: 5,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: bgTextRef.current,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true
//       }
//     });
//   }, []);

//   return (
//     <div
//       id='examples'
//       className={`${className} relative flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:p-10`}
//     >
//       <Link
//         href="/"
//         className="absolute left-3 top-3 flex items-center text-sm text-gray-400 hover:text-white sm:left-6 sm:top-6 sm:text-base"
//       >
//         <HiArrowLeft className="mr-1 sm:mr-2" size={20} />
//         Home
//       </Link>

//       <div className='spotlight spotlight-left'></div>
//       <div className='font-sans text-5xl  uppercase text-secondary'>Examples</div>
//       <div
//         ref={bgTextRef}
//         className='text-shadow absolute z-0 hidden -rotate-90 transform text-start text-[80px] uppercase tracking-wider  text-background brightness-50  lg:block lg:text-[80px] '
//       >
//         featured projects
//       </div>

//       <div className='z-30 flex h-full w-full flex-wrap items-center justify-around gap-10'>
//         {examples.map((example, index) => (
//           <ExampleCard
//             preview={example.preview}
//             images={example.images}
//             text={example.text}
//             key={index}
//             title={example.title}
//             tags={example.tags}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';
// import InfinityPreloader from '@/components/InfinityPreloader';

import examples from '@/data/examples.json';
import { Carousel } from 'flowbite-react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { PiControlBold } from 'react-icons/pi';
import { HiArrowLeft } from 'react-icons/hi';
import Link from 'next/link';

interface ExamplesProps {
  className?: string;
}

interface ExampleCardProps {
  className?: string;
  preview: string;
  images: string[];
  tags?: string[];
  title: string;
  text: string;
  demo?: string; // Added demo field
}

const CarouselControl = ({ className }: { className: string }) => {
  return (
    <div className={`text-5xl text-primary ${className}`}>
      <PiControlBold />
    </div>
  );
};

const ExampleCard = (props: ExampleCardProps) => {
  const { className, tags, preview, images, title, text, demo } = props;
  const [hover, setHover] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${className} relative flex w-full flex-col items-center justify-center gap-5 text-secondary md:h-[600px] md:w-[600px]`}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`${hover ? 'from-primary/80' : 'from-primary/40 '
          } relative flex h-[250px] min-h-[180px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br object-cover shadow-tl shadow-primary transition-colors delay-1000 md:h-[400px] md:min-h-[200px]`}
      >
        <Carousel
          leftControl={<CarouselControl className='-rotate-90' />}
          rightControl={<CarouselControl className='rotate-90' />}
          slide={false}
          className='relative h-full w-full'
        >
          <div className='relative h-full w-full'>
            <Image
              alt='example-image'
              src={preview}
              width={500}
              height={500}
              className={`${hover ? '-rotate-6' : ''
                } absolute right-0 top-10 h-auto w-4/5 -rotate-12 transform object-contain shadow-repeat shadow-primary/20 duration-200`}
            />
          </div>
          {images.map((image, index) => (
            <div key={index} className='relative h-full w-full'>
              <Image
                alt='example-image'
                src={image}
                width={500}
                height={500}
                className='absolute top-0 h-auto w-full object-contain'
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Tags */}
      <div className='flex flex-wrap gap-2 self-start'>
        {tags?.map((tag, index) => (
          <div key={index} className='rounded-xl bg-primary/40 p-2'>
            {tag}
          </div>
        ))}
      </div>

      {/* Title */}
      <div className='w-full text-left font-exo2 text-3xl'>{title}</div>

      {/* Demo Link */}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block rounded-lg border-2 border-primary px-4 py-1 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-secondary hover:scale-105"
        >
          View Demo
        </a>
      )}

      {/* Description with Read More */}
      <div className='w-full break-words text-justify font-quicksand text-2xl text-gray-300'>
        {expanded ? (
          <>
            <p>{text}</p>
            <button
              onClick={() => setExpanded(false)}
              className='mt-2 text-2xl text-primary underline transition hover:text-secondary'
            >
              Show less
            </button>
          </>
        ) : (
          <>
            <p className='line-clamp-3'>{text}</p>
            <button
              onClick={() => setExpanded(true)}
              className='mt-1 text-2xl text-primary underline transition hover:text-secondary'
            >
              Read more
            </button>
          </>
        )}
      </div>

      <div className='block w-1/2 border-b-4 border-primary md:hidden'></div>
    </div>
  );
};

export default function HomepageExamples(props: ExamplesProps) {
  const { className } = props;
  const bgTextRef = useRef(null);

  useEffect(() => {
    gsap.to(bgTextRef.current, {
      yPercent: -100,
      duration: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: bgTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <div
      id='examples'
      className={`${className} relative flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:p-10`}
    >
      <Link
        href="/"
        className="absolute left-3 top-3 flex items-center text-sm text-gray-400 hover:text-white sm:left-6 sm:top-6 sm:text-base"
      >
        <HiArrowLeft className="mr-1 sm:mr-2" size={20} />
        Home
      </Link>

      <div className='spotlight spotlight-left'></div>
      <div className='font-sans text-5xl uppercase text-secondary'>Examples</div>
      <div
        ref={bgTextRef}
        className='text-shadow absolute z-0 hidden -rotate-90 transform text-start text-[80px] uppercase tracking-wider text-background brightness-50 lg:block lg:text-[80px]'
      >
        featured projects
      </div>

      <div className='z-30 flex h-full w-full flex-wrap items-center justify-around gap-10'>
        {examples.map((example, index) => (
          <ExampleCard
            preview={example.preview}
            images={example.images}
            text={example.text}
            key={index}
            title={example.title}
            tags={example.tags}
            demo={example.demo} // Pass demo link here
          />
        ))}
      </div>
    </div>
  );
}
