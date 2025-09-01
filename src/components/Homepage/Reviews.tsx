'use client';

import reviews from '@/data/reviews.json';
import { Carousel } from 'flowbite-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PiControlBold } from 'react-icons/pi';
import './styles/text.css';

gsap.registerPlugin(ScrollTrigger);

interface CarouselSlideProps {
  text: string;
  image: string;
  name: string;
}

const CarouselControl = ({ className }: { className: string }) => {
  return (
    <div className={`text-5xl text-primary ${className}`}>
      <PiControlBold />
    </div>
  );
};

const CarouselSlide = (props: CarouselSlideProps) => {
  const { text, image, name } = props;
  return (
    <div className="pointer-events-none w-full px-2 py-4 md:p-10 md:px-20">
      <div className="flex w-full flex-col items-center justify-center gap-5 rounded-xl bg-primary/25 p-5 py-8 shadow-primary md:flex-row md:shadow-blblur">
        {/* Image */}
        <div className="relative flex h-32 w-32 md:w-1/4 md:h-auto items-center justify-center rounded-2xl bg-primary">
          <Image
            src={image}
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-xl"
            alt={name}
          />
        </div>



        {/* Text & Name */}
        <div className="mt-4 md:mt-0 md:w-4/3 text-center md:text-justify text-base md:text-xl text-gray-300 px-2 md:px-0">
          <p className="line-clamp-5">{text}</p>
          <p className="mt-2 md:mt-4 font-sans font-semibold text-secondary text-sm md:text-lg">
            — {name}
          </p>
        </div>
      </div>
    </div>
  );
};

interface ReviewsProps {
  className?: string;
}

export default function HomepageReviews(props: ReviewsProps) {
  const { className } = props;
  const bgTextRef = useRef(null);

  useEffect(() => {
    gsap.to(bgTextRef.current, {
      xPercent: 28,
      duration: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: bgTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="reviews" className={`${className} relative flex w-full flex-col py-10`}>
      <div className="spotlight spotlight-left"></div>

      {/* Desktop heading */}
      <div className="relative hidden w-full items-center justify-center px-10 py-16 text-5xl text-secondary md:flex">
        <div
          ref={bgTextRef}
          className="text-shadow absolute left-[10%] z-0 text-start text-[200px] uppercase tracking-wider text-background brightness-50 lg:left-[25%]"
        >
          Reviews
        </div>
        <div className="z-10 text-6xl uppercase">{`Customer Feedback`}</div>
      </div>

      {/* Mobile heading */}
      <div className="w-full pb-5 text-center  text-3xl text-secondary md:hidden">
        Reviews
      </div>

      <Carousel
        indicators={false}
        pauseOnHover
        leftControl={<CarouselControl className="-rotate-90" />}
        rightControl={<CarouselControl className="rotate-90" />}
        className=""
      >
        {reviews.map((review, index) => (
          <CarouselSlide
            key={index}
            image={review.image}
            text={review.text}
            name={review.name}
          />
        ))}
      </Carousel>
    </div>
  );
}
