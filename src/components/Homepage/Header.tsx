import { Navbar } from 'flowbite-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ContactUsButton from '../buttons/ContactUsButton';
import Link from 'next/link';

export default function HomepageHeader() {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const [sectionId, setSectionId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollToPlugin);

      const handleScroll = () => {
        if (isOpen) return; // prevent hiding while menu open
        const currentScrollPos = window.scrollY;
        const isScrolledDown = prevScrollPos.current < currentScrollPos;

        setHeaderVisible(!isScrolledDown);
        prevScrollPos.current = currentScrollPos;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen]);

  useEffect(() => {
    if (sectionId.length) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#banner' === sectionId ? 0 : sectionId,
          autoKill: false
        }
      });
      setSectionId('');
    }
  }, [sectionId]);

  // const handleNavClick = (id?: string) => {
  //   if (id) setSectionId(id);
  //   setIsOpen(false);
  // };
  const handleNavClick = (id?: string) => {
    if (!id) return;

    // if mobile menu is open, wait for collapse animation
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setSectionId(id), 300); // match your transition duration
    } else {
      setSectionId(id);
    }
  };


  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-1000 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <Navbar className='bg-background/60' rounded fluid>
        {/* ✅ Brand (logo + text inline, like before) */}
        <Navbar.Brand
          className='flex cursor-pointer items-center gap-2'
          onClick={() => handleNavClick('#banner')}
        >
          <Image
            width={50}
            height={50}
            alt='logo'
            className='h-11 w-auto md:h-14 md:w-auto'
            src='/assets/logo.png'
          />
          <span className='self-center whitespace-nowrap text-2xl font-extrabold tracking-wide md:text-3xl'>
            <span className='bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'>
              Trusty
            </span>
            <span className='ml-1 text-secondary'>Vision</span>
          </span>
        </Navbar.Brand>

        {/* Right controls */}
        <div className='flex items-center gap-5 md:order-2'>
          <ContactUsButton onClick={() => handleNavClick('#consulationForm')} />
          <Navbar.Toggle
            className='ml-7 md:ml-0'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen((v) => !v);
            }}
          />
        </div>

        {/* Desktop menu */}
        <Navbar.Collapse className='hidden md:flex md:items-center'>
          <Link
            href='/examples'
            className='cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base'
          >
            Examples
          </Link>
          <div
            onClick={() => handleNavClick('#technologies')}
            className='cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base'
          >
            Technologies
          </div>
          <div
            onClick={() => handleNavClick('#reviews')}
            className='cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base'
          >
            Reviews
          </div>
          <div
            onClick={() => handleNavClick('#aboutUs')}
            className='cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base'
          >
            About Us
          </div>
          <a
            href='/order-now#ordernow'
            className='cursor-pointer p-2 text-xl text-secondary hover:text-primary md:p-0 md:text-base'
          >
            Let's Build
          </a>
        </Navbar.Collapse>

        {/* Mobile menu */}
        <div
          className={`
            w-full overflow-hidden transition-all duration-300 ease-out md:hidden
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className='flex flex-col px-2 pb-3'>
            <Link
              href='/examples'
              onClick={() => setIsOpen(false)}
              className='cursor-pointer p-2 text-xl text-secondary hover:text-primary'
            >
              Examples
            </Link>
            <button
              onClick={() => handleNavClick('#technologies')}
              className='p-2 text-left text-xl text-secondary hover:text-primary'
            >
              Technologies
            </button>
            <button
              onClick={() => handleNavClick('#reviews')}
              className='p-2 text-left text-xl text-secondary hover:text-primary'
            >
              Reviews
            </button>
            <button
              onClick={() => handleNavClick('#aboutUs')}
              className='p-2 text-left text-xl text-secondary hover:text-primary'
            >
              About Us
            </button>
            <a
              href='/order-now#ordernow'
              onClick={() => setIsOpen(false)}
              className='cursor-pointer p-2 text-xl text-secondary hover:text-primary'
            >
              Let's Build
            </a>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
