import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center bg-[#0e0e0e] text-white px-6 md:px-10 py-10 md:py-0">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#0e0e0e]">
        <Image
          src="/background.jpg"
          alt="background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Left side content */}
      <div className="relative z-10 flex-1 text-center md:text-left mb-10 md:mb-0">
        <p className="text-sm text-orange-500 mb-3">
          ● Corporate business theme
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight mb-6">
          We make quality <br /> design & developments
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          <Image
            src="/profile.jpg"
            alt="Author"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="font-empathy text-4xl md:text-6xl mt-2 md:mt-0">
            Jeeshan
          </span>
        </div>
      </div>

      {/* Right side - Why we are best */}
      <div className="relative z-10 flex-1 max-w-md text-gray-300 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Why We Are Best
        </h2>
        <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-400">
          Trusty Vision delivers innovative, personalized web solutions
          that reflect your brand’s vision — backed by unwavering dedication
          to client satisfaction.
        </p>

        <div className="space-y-4 md:space-y-5">
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <span className="text-orange-500 text-xl">✓</span>
            <p>Highly trained in administrative tasks</p>
          </div>
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <span className="text-orange-500 text-xl">✓</span>
            <p>Professionally managed and fully supported</p>
          </div>
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <span className="text-orange-500 text-xl">✓</span>
            <p>Proficient in Google and most productivity suites</p>
          </div>
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <span className="text-orange-500 text-xl">✓</span>
            <p>Free consultation available anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
