import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative flex min-h-screen w-full flex-col items-center bg-[#0e0e0e] px-6 py-10 text-white md:flex-row md:px-10 md:py-0'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-[#0e0e0e]'>
        <Image src='/background.jpg' alt='background' fill className='object-cover opacity-20' />
      </div>

      {/* Left side content */}
      <div className='relative z-10 mb-10 flex-1 text-center md:mb-0 md:text-left'>
        <p className='mb-3 text-sm text-orange-500'>● Corporate business theme</p>
        <h1 className='mb-6 text-3xl font-extrabold leading-snug md:text-5xl md:leading-tight'>
          We make quality <br /> design & developments
        </h1>

        <div className='mt-8 flex flex-col items-center gap-4 md:flex-row'>
          <Image src='/profile.jpg' alt='Author' width={80} height={80} className='rounded-full' />
          <span className='mt-2 font-empathy text-4xl md:mt-0 md:text-6xl'>Jeeshan</span>
        </div>
      </div>

      {/* Right side - Why we are best */}
      <div className='relative z-10 max-w-md flex-1 text-center text-gray-300 md:text-left'>
        <h2 className='mb-6 text-2xl font-bold text-white md:text-3xl'>Why We Are Best</h2>
        <p className='mb-6 text-base leading-relaxed text-gray-400 md:text-lg'>
          Trusty Vision delivers innovative, personalized web solutions that reflect your brand’s
          vision — backed by unwavering dedication to client satisfaction.
        </p>

        <div className='space-y-4 md:space-y-5'>
          <div className='flex items-start justify-center gap-3 md:justify-start'>
            <span className='text-xl text-orange-500'>✓</span>
            <p>Highly trained in administrative tasks</p>
          </div>
          <div className='flex items-start justify-center gap-3 md:justify-start'>
            <span className='text-xl text-orange-500'>✓</span>
            <p>Professionally managed and fully supported</p>
          </div>
          <div className='flex items-start justify-center gap-3 md:justify-start'>
            <span className='text-xl text-orange-500'>✓</span>
            <p>Proficient in Google and most productivity suites</p>
          </div>
          <div className='flex items-start justify-center gap-3 md:justify-start'>
            <span className='text-xl text-orange-500'>✓</span>
            <p>Free consultation available anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
