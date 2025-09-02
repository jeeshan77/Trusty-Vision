import aboutUs from '@/data/aboutUs.json';
import { gsap } from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import './styles/text.css';

interface AboutUsProps {
  className?: string;
}

interface CardProps {
  imageOnLeft?: boolean;
  image: string;
  heading: string;
  text: string;
}

const Card = (props: CardProps) => {
  const { image, imageOnLeft = true, text, heading } = props;
  return (
    <div
      className={`relative flex min-h-full min-w-full flex-col items-center justify-between gap-8 py-5 md:mx-10 md:flex-row`}
    >
      {imageOnLeft && (
        <Image
          alt='aboutus-image'
          className='h-[200px] w-auto rounded-2xl border-2 border-primary shadow-xl'
          src={image}
          width={300}
          height={300}
          draggable={false}
        />
      )}

      <div className='flex-1 text-justify text-gray-300'>
        {heading && (
          <h3 className='mb-3 text-2xl font-bold text-secondary md:text-3xl'>{heading}</h3>
        )}
        <p>{text}</p>
      </div>

      {!imageOnLeft && (
        <Image
          alt='aboutus-image'
          className='h-[200px] w-auto rounded-2xl border-2 border-primary shadow-xl'
          src={image}
          width={300}
          height={300}
          draggable={false}
        />
      )}
    </div>
  );
};

export default function HomepageAboutUs(props: AboutUsProps) {
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
        scrub: true
      }
    });
  }, []);

  return (
    <div
      id='aboutUs'
      className={`${className} relative flex w-full flex-col border-b-4 border-primary p-2 py-16 md:p-5 md:px-0`}
    >
      <div className='spotlight spotlight-right'></div>

      {/* Section Heading */}
      <div className='relative hidden w-full items-center justify-center px-10 py-16  text-4xl text-secondary md:flex md:text-5xl'>
        <div
          ref={bgTextRef}
          className='text-shadow absolute left-0 z-0 text-start text-[100px] uppercase tracking-wider text-background brightness-50 md:text-[150px] lg:left-[15%] lg:text-[180px]'
        >
          {`"About Us"`}
        </div>
        <div className='z-10 text-5xl uppercase md:text-6xl'>What we do</div>
      </div>

      {/* Mobile Heading */}
      <div className='w-full pb-5 text-center  text-3xl text-secondary md:hidden'>About Us</div>

      {/* Cards */}
      <div className='flex h-full w-full flex-col items-center justify-center gap-10 self-center rounded-3xl bg-primary/20 p-5 md:w-1/2 md:p-10'>
        {aboutUs.map((card, index) => (
          <React.Fragment key={index}>
            <Card
              heading={card.heading}
              text={card.text}
              image={card.image}
              imageOnLeft={index % 2 === 0}
            />
            {index + 1 < aboutUs.length && (
              <div className='w-full border-b-4 border-primary md:w-3/4'></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
