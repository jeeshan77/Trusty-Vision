import contacts from '@/data/contacts.json';
import { Tooltip } from 'flowbite-react';
import gsap from 'gsap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiCheckCircleBold, PiEnvelopeSimpleBold, PiPhoneBold } from 'react-icons/pi';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

interface HomepageFooterProps {
  className?: string;
}

export default function HomepageFooter(props: HomepageFooterProps) {
  const { className } = props;
  const [sectionId, setSectionId] = useState('');

  useEffect(() => {
    if (sectionId.length)
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#banner' === sectionId ? 0 : sectionId,
          autoKill: false
        }
      });
    setSectionId('');
  }, [sectionId]);

  return (
    <div
      className={`${className} flex h-full w-full flex-col items-center justify-center gap-10 p-10`}
    >
      {/* Heading */}
      <div className='flex flex-row gap-5 font-montserrat text-4xl uppercase text-secondary'>
        <div className='text-primary'>our</div>
        contacts
      </div>

      {/* Social Icons */}
      <div className='flex flex-row gap-4 text-5xl text-secondary md:gap-10 md:text-6xl'>
        <Link
          href='https://www.linkedin.com/in/jeeshan-gosain/'
          target='_blank'
          className='cursor-pointer text-secondary hover:text-primary'
        >
          <FaLinkedin />
        </Link>
        <Link
          href='https://github.com/jeeshan77'
          target='_blank'
          className='cursor-pointer text-secondary hover:text-primary'
        >
          <FaGithub />
        </Link>
        <Link
          href='https://www.instagram.com/jaanu_._.7/#'
          target='_blank'
          className='cursor-pointer text-secondary hover:text-primary'
        >
          <FaInstagram />
        </Link>
        <Link
          href='https://t.me/trustyvision7'
          target='_blank'
          className='cursor-pointer text-secondary hover:text-primary'
        >
          <FaTelegram />
        </Link>
        <Link
          href='https://x.com/jeeshan7704'
          target='_blank'
          className='cursor-pointer text-secondary hover:text-primary'
        >
          <FaTwitter />
        </Link>
      </div>

      {/* Services Heading */}
      <span className='cursor-default self-center font-quicksand text-3xl text-primary md:self-start md:px-20'>
        Service
      </span>

      {/* Desktop Layout */}
      <div className='hidden w-full font-quicksand text-2xl text-secondary md:flex md:flex-row md:justify-between md:px-20'>
        {/* Desktop Services */}
        <div className='flex flex-col text-start'>
          <div
            onClick={() => setSectionId('#technologies')}
            className='cursor-pointer hover:text-primary'
          >
            Technologies
          </div>
          <div
            onClick={() => setSectionId('#examples')}
            className='cursor-pointer hover:text-primary'
          >
            Examples
          </div>
          <div
            onClick={() => setSectionId('#reviews')}
            className='cursor-pointer hover:text-primary'
          >
            Reviews
          </div>
          <div
            onClick={() => setSectionId('#aboutUs')}
            className='cursor-pointer hover:text-primary'
          >
            About Us
          </div>
        </div>

        {/* Desktop Contact */}
        <div className='flex flex-col items-end'>
          {/* Email */}
          <Tooltip
            placement='left'
            trigger='click'
            className='bg-gradient-to-br from-primary px-2 py-0'
            content={
              <div className='flex items-center justify-center gap-1 font-sans text-xl'>
                <PiCheckCircleBold />
                <span className=' text-2xl'>Copied!</span>
              </div>
            }
          >
            <div
              className='flex cursor-pointer flex-row items-center gap-2 hover:text-primary md:flex-row-reverse'
              onClick={() => navigator.clipboard.writeText(contacts.email)}
            >
              <PiEnvelopeSimpleBold /> {contacts.email}
            </div>
          </Tooltip>

          {/* Phone */}
          <Tooltip
            placement='left'
            trigger='click'
            className='bg-gradient-to-br from-primary px-2 py-0'
            content={
              <div className='flex items-center justify-center gap-1 font-sans text-xl'>
                <PiCheckCircleBold />
                <span className=' text-2xl'>Copied!</span>
              </div>
            }
          >
            <div
              className='flex cursor-pointer flex-row items-center gap-2 hover:underline md:flex-row-reverse'
              onClick={() => navigator.clipboard.writeText(contacts.number)}
            >
              <PiPhoneBold /> {contacts.number}
            </div>
          </Tooltip>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='flex w-full flex-col items-center gap-2 text-center font-quicksand text-2xl text-secondary md:hidden'>
        {/* Services */}
        <div className='flex flex-col gap-2'>
          <div
            onClick={() => setSectionId('#technologies')}
            className='cursor-pointer hover:text-primary'
          >
            Technologies
          </div>
          <div
            onClick={() => setSectionId('#examples')}
            className='cursor-pointer hover:text-primary'
          >
            Examples
          </div>
          <div
            onClick={() => setSectionId('#reviews')}
            className='cursor-pointer hover:text-primary'
          >
            Reviews
          </div>
          <div
            onClick={() => setSectionId('#aboutUs')}
            className='cursor-pointer hover:text-primary'
          >
            About Us
          </div>
        </div>

        {/* Spacer */}
        <div className='h-6'></div>

        {/* Contact Info */}
        <div className='flex flex-col gap-2'>
          {/* Email */}
          <Tooltip
            placement='top'
            trigger='click'
            className='bg-gradient-to-br from-primary px-2 py-0'
            content={
              <div className='flex items-center justify-center gap-1 font-sans text-xl'>
                <PiCheckCircleBold />
                <span className=' text-2xl'>Copied!</span>
              </div>
            }
          >
            <div
              className='flex cursor-pointer flex-row items-center justify-center gap-2 hover:text-primary'
              onClick={() => navigator.clipboard.writeText(contacts.email)}
            >
              <PiEnvelopeSimpleBold /> {contacts.email}
            </div>
          </Tooltip>

          {/* Phone */}
          <Tooltip
            placement='top'
            trigger='click'
            className='bg-gradient-to-br from-primary px-2 py-0'
            content={
              <div className='flex items-center justify-center gap-1 font-sans text-xl'>
                <PiCheckCircleBold />
                <span className=' text-2xl'>Copied!</span>
              </div>
            }
          >
            <div
              className='flex cursor-pointer flex-row items-center justify-center gap-2 hover:underline'
              onClick={() => navigator.clipboard.writeText(contacts.number)}
            >
              <PiPhoneBold /> {contacts.number}
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
