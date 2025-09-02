'use client';

import { useState, useEffect } from 'react';

type TypedTextProps = {
  strings: string[];
  speed?: number;
  delay?: number;
};

const services = [
  {
    title: 'WEB DEVELOPMENT',
    description:
      'From static websites to complex web applications, we build scalable and robust web solutions tailored to your needs.',
    icon: '💻'
  },
  {
    title: 'WEB DESIGNING',
    description:
      'Creative and user-friendly web designs that engage your audience and enhance your brand identity.',
    icon: '🎨'
  },
  {
    title: 'eCOMMERCE DEVELOPMENT',
    description:
      'We offer end-to-end support across the full e-commerce lifecycle, helping businesses increase online sales and win new markets.',
    icon: '🛒'
  },
  {
    title: 'MOBILE COMMERCE',
    description:
      'From strategy & design to development, testing, and deployment, we implement enterprise mobility solutions for a wide range of industries promised to help you in this mobile-first world.',
    icon: '📱'
  },
  {
    title: 'AI/ML/IOT Development',
    description:
      'This synergy enables data-driven insights, automation, and enhanced connectivity, empowering businesses to make informed decisions and optimize processes in real-time.',
    icon: '🤖'
  },
  {
    title: 'FULL STACK DEVELOPMENT',
    description:
      'From static applications to highly customized dashboard apps, our Full stack engineers deliver with ease, precision and within timelines.',
    icon: '⚡'
  }
];

// Typed Text Animation component
const TypedText: React.FC<TypedTextProps> = ({ strings, speed = 100, delay = 2500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === strings.length) setIndex(0);

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === strings[index].length) {
          setTimeout(() => setDeleting(true), delay);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        } else {
          setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, strings, speed, delay]);

  return (
    <span className='text-sm font-semibold text-white md:text-base'>
      {strings[index].substring(0, subIndex)}
      <span className='blinking-cursor'>|</span>
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start 0s infinite;
          color: white;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
};

export default function OurCoreServicesDark() {
  return (
    <section className='relative overflow-hidden bg-black py-14 md:py-20'>
      <div className='absolute inset-0 bg-gradient-to-b from-neutral-900/30 to-black'></div>

      <div className='relative mx-auto max-w-7xl px-4 md:px-12'>
        <h2 className='mb-3 text-center text-2xl font-bold uppercase tracking-wide text-white md:mb-4 md:text-4xl'>
          Our Core Services
        </h2>
        <p className='mx-auto mb-6 max-w-3xl text-center text-sm text-gray-400 md:mb-8 md:text-base'>
          Our services & bespoke solutions ensure that you leverage infinite possibilities for your
          business and watch your ideas grow into a reality at speed!
        </p>

        {/* Typed Text Animation */}
        <div className='mb-10 text-center text-base font-medium md:mb-14 md:text-xl'>
          <TypedText
            strings={['Work with Experts', 'Perform Fast', 'Stay Secure', 'For Your Success']}
            speed={100}
            delay={2500}
          />
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className='group relative rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl md:p-8'
            >
              {/* Icon */}
              <div className='mb-4 text-3xl text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 md:mb-6 md:text-5xl'>
                {icon}
              </div>

              {/* Title */}
              <h3 className='relative mb-2 inline-block text-lg font-semibold text-white group-hover:text-gray-100 md:mb-4 md:text-xl'>
                {title}
                <span className='absolute bottom-0 left-0 block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full'></span>
              </h3>

              {/* Description */}
              <p className='text-sm leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-white md:text-base'>
                {description}
              </p>

              {/* Glow Hover Effect */}
              <div className='pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
