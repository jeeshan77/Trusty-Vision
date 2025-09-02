import { ButtonHTMLAttributes, MouseEvent as ReactMouseEvent } from 'react';

interface ContactUsButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function ContactUsButton(props: ContactUsButtonProps) {
  const handleScroll = (e: ReactMouseEvent<HTMLDivElement>) => {
    const section = document.getElementById('consulationForm');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Call existing onClick if provided
    if (props.onClick) props.onClick(e);
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#7287b5] to-[#5a6a99] px-5 py-3 font-montserrat text-base text-white shadow-lg  transition-all duration-300 hover:scale-105
    hover:from-[#5a6a99] hover:to-[#4b5580] hover:shadow-xl md:text-4xl`}
      onClick={handleScroll}
    >
      <span className='text-center text-xl'>Book Free Consultation</span>
    </div>
  );
}
