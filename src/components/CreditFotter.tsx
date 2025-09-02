'use client';

export default function CreditFooter() {
  return (
    <footer className='border-t border-gray-800 bg-black px-4 py-6 text-gray-400'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row'>
        {/* Left - Brand */}
        <div className='text-2xl text-base font-extrabold tracking-wide md:text-3xl'>
          <span className='bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-lg text-transparent'>
            Trusty
          </span>
          <span className='ml-1 text-lg text-secondary'>Vision</span>
        </div>

        {/* Right - Links */}
        <div className='flex gap-6 text-sm'>
          <a href='/privacy-policy' className='transition duration-300 hover:text-indigo-500'>
            Privacy Policy
          </a>
          <a href='/terms-of-service' className='transition duration-300 hover:text-indigo-500'>
            Terms of Service
          </a>
          {/* <a
                        href=""
                        className="hover:text-indigo-500 transition duration-300"
                    >
                        Contact
                    </a> */}
          <a
            href='#consultation'
            onClick={(e) => {
              e.preventDefault(); // Prevent default jump
              const element = document.getElementById('consulationForm');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='transition duration-300 hover:text-indigo-500'
          >
            Contact
          </a>
        </div>
      </div>

      {/* Copyright + Developer Credit */}
      <div className='mt-4 text-center text-xs text-gray-500'>
        © {new Date().getFullYear()} Trusty Vision. All Rights Reserved.
        <br />
        Developed with ❤️ by{' '}
        <a
          href='https://www.jeeshanportfolio.online'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium text-indigo-500 transition duration-300 hover:text-white'
        >
          Jeeshan
        </a>
      </div>
    </footer>
  );
}
