'use client';

import { useState } from 'react';

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Trusty Vision 👋

I'd like to book a Free Consultation.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918527596754?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      id='consulationForm'
      className='relative flex min-h-screen w-full items-center justify-center bg-background py-16 text-white'
    >
      {/* Optional: background video */}
      <video
        autoPlay
        loop
        muted
        className='absolute left-0 top-0 h-full w-full object-cover opacity-30'
      >
        <source src='/assets/consultation-bg.mp4' type='video/mp4' />
      </video>

      <div className='relative z-10 w-full max-w-6xl px-6 md:px-12'>
        {/* Heading */}
        <div className='mb-8 text-center'>
          <h2 className='text-4xl font-bold uppercase text-secondary md:text-5xl'>
            Book a Free Consultation
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Share your ideas with <span className='text-primary'>Trusty Vision</span> — we’ll guide
            you with the best digital solutions for your business.
          </p>
          <p className='mt-2 text-lg font-semibold text-primary'>
            📞You can also call us and talk about your website directly — we’ll guide you
            personally!
          </p>
        </div>

        {/* Two-column layout */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          {/* Info Section */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-semibold text-secondary'>Why Consultation?</h3>
              <p className='mt-2 leading-relaxed text-gray-300'>
                A consultation helps us understand your vision, goals, and challenges. We provide
                expert advice, a clear strategy, and a roadmap — absolutely free.
              </p>
            </div>
            <div>
              <h4 className='text-lg font-semibold text-primary'>📍 Location</h4>
              <p className='text-gray-400'>New Delhi, India</p>
            </div>
            <div>
              <h4 className='text-lg font-semibold text-primary'>✉️ Email</h4>
              <p className='text-gray-400'>jeeshankmr2004@gmail.com</p>
            </div>
            <div>
              <h4 className='text-lg font-semibold text-primary'>📞 Phone</h4>
              <p className='text-gray-400'>+91 85275 96754</p>
            </div>
          </div>

          {/* Form Section */}
          <div className='rounded-2xl bg-primary/10 p-8 shadow-lg backdrop-blur-md'>
            <form onSubmit={handleSubmit} className='space-y-5'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='w-full rounded-lg border border-primary/40 bg-background p-3 text-white outline-none focus:ring-2 focus:ring-primary'
                onChange={handleChange}
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='w-full rounded-lg border border-primary/40 bg-background p-3 text-white outline-none focus:ring-2 focus:ring-primary'
                onChange={handleChange}
                required
              />
              <input
                type='tel'
                name='phone'
                placeholder='Your Phone'
                className='w-full rounded-lg border border-primary/40 bg-background p-3 text-white outline-none focus:ring-2 focus:ring-primary'
                onChange={handleChange}
              />
              <textarea
                name='message'
                placeholder='Tell us about your project'
                rows={5}
                className='w-full rounded-lg border border-primary/40 bg-background p-3 text-white outline-none focus:ring-2 focus:ring-primary'
                onChange={handleChange}
                required
              ></textarea>
              <button
                type='submit'
                className='w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-primary/80'
              >
                Book Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
