"use client";

import { useState, useEffect } from "react";

type TypedTextProps = {
  strings: string[];
  speed?: number;
  delay?: number;
};

const services = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "From static websites to complex web applications, we build scalable and robust web solutions tailored to your needs.",
    icon: "💻",
  },
  {
    title: "WEB DESIGNING",
    description:
      "Creative and user-friendly web designs that engage your audience and enhance your brand identity.",
    icon: "🎨",
  },
  {
    title: "eCOMMERCE DEVELOPMENT",
    description:
      "We offer end-to-end support across the full e-commerce lifecycle, helping businesses increase online sales and win new markets.",
    icon: "🛒",
  },
  {
    title: "MOBILE COMMERCE",
    description:
      "From strategy & design to development, testing, and deployment, we implement enterprise mobility solutions for a wide range of industries promised to help you in this mobile-first world.",
    icon: "📱",
  },
  {
    title: "AI/ML/IOT Development",
    description:
      "This synergy enables data-driven insights, automation, and enhanced connectivity, empowering businesses to make informed decisions and optimize processes in real-time.",
    icon: "🤖",
  },
  {
    title: "FULL STACK DEVELOPMENT",
    description:
      "From static applications to highly customized dashboard apps, our Full stack engineers deliver with ease, precision and within timelines.",
    icon: "⚡",
  },
];

// Typed Text Animation component
const TypedText: React.FC<TypedTextProps> = ({ strings, speed = 100, delay = 2500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === strings.length) setIndex(0);

    const timeout = setTimeout(() => {
      if (!deleting && subIndex === strings[index].length) {
        setTimeout(() => setDeleting(true), delay);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
      } else {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, strings, speed, delay]);

  return (
    <span className="text-white font-semibold text-sm md:text-base">
      {strings[index].substring(0, subIndex)}
      <span className="blinking-cursor">|</span>
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
    <section className="py-14 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 text-center tracking-wide uppercase">
          Our Core Services
        </h2>
        <p className="text-center text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-6 md:mb-8">
          Our services & bespoke solutions ensure that you leverage infinite possibilities for your business and watch your ideas grow into a reality at speed!
        </p>

        {/* Typed Text Animation */}
        <div className="text-center mb-10 md:mb-14 text-base md:text-xl font-medium">
          <TypedText
            strings={["Work with Experts", "Perform Fast", "Stay Secure", "For Your Success"]}
            speed={100}
            delay={2500}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Icon */}
              <div className="text-3xl md:text-5xl mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 text-white">
                {icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-4 relative inline-block group-hover:text-gray-100">
                {title}
                <span className="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span>
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                {description}
              </p>

              {/* Glow Hover Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
