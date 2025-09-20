'use client';

import InfinityPreloader from '@/components/InfinityPreloader';
import { useState } from 'react';
import Select from 'react-select';

export default function WhatsAppOrderForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState<any>(null);
  const [subService, setSubService] = useState<any>(null); // new
  const [details, setDetails] = useState('');

  const phoneNumber = '8527596754';

  const serviceOptions = [
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Web Design', label: 'Web Design' },
    { value: 'Web Hosting', label: 'Web Hosting' },
    { value: 'E-commerce Development', label: 'E-commerce Development' },
    { value: 'Mobile Commerce', label: 'Mobile Commerce' },
    { value: 'AI/ML', label: 'AI/ML' },
    { value: 'IoT Development', label: 'IoT Development' },
    { value: 'Full Stack Development', label: 'Full Stack Development' }
  ];

  // Sub-services based on first service selection
  const subServiceOptions: { [key: string]: any[] } = {
    'Web Development': [
      { value: 'Portfolio Website', label: 'Portfolio Website' },
      { value: 'Private Company Website', label: 'Private Company Website' },
      { value: 'Government Website', label: 'Government Website' },
      { value: 'E-commerce Website', label: 'E-commerce Website' },
      { value: 'Blog Website', label: 'Blog Website' }
    ],
    'Web Design': [
      { value: 'UI/UX Design', label: 'UI/UX Design' },
      { value: 'Landing Page Design', label: 'Landing Page Design' }
    ],
    'Full Stack Development': [
      { value: 'App Development', label: 'App Development' },
      { value: 'Web Development', label: 'Web Development' }
    ],
    'E-commerce Development': [
      { value: 'Shopify', label: 'Shopify' },
      { value: 'WooCommerce', label: 'WooCommerce' },
      { value: 'Custom E-commerce', label: 'Custom E-commerce' }
    ]
    // Add more sub-services for other main services as needed
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'rgba(31, 31, 31, 0.3)',
      borderRadius: '1rem',
      border: '1px solid rgba(79, 70, 229, 0.5)',
      color: '#fff',
      minHeight: '3rem'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#fff'
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#9ca3af'
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#1f1f1f',
      borderRadius: '1rem',
      marginTop: 4,
      outline: 'none',
      boxShadow: 'none'
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#374151' : '#1f1f1f',
      color: '#fff',
      cursor: 'pointer',
      outline: 'none',
      boxShadow: 'none'
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#fff',
      '&:hover': { color: '#6366f1' }
    })
  };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!name || !email || !service || !subService) {
  //       alert('Please fill all required fields.');
  //       return;
  //     }

  //     const message = `Hello 👋,%0A
  // I would like to order a service from *Trusty Vision*.%0A%0A
  // *Name:* ${name}%0A
  // *Email:* ${email}%0A
  // *Service:* ${service.label}%0A
  // *Sub-Service:* ${subService.label}%0A
  // *Details:* ${details}`;

  //     const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  //     window.open(whatsappURL, '_blank');
  //   };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiresSubService = service && subServiceOptions[service.value];

    if (!name || !email || !service || (requiresSubService && !subService)) {
      alert('Please fill all required fields.');
      return;
    }

    const message = `Hello 👋,%0A
I would like to order a service from *Trusty Vision*.%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Service:* ${service.label}%0A
${requiresSubService ? `*Sub-Service:* ${subService.label}%0A` : ''}*Details:* ${details}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };


  return (
    <InfinityPreloader>
      <div
        id='ordernow'
        className='relative flex h-screen w-full items-center justify-center bg-background'
      >
        <video
          autoPlay
          loop
          muted
          className='absolute left-0 top-0 h-full w-full object-cover opacity-30'
        >
          <source src='/assets/videos/it-background.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='relative z-10 flex w-full max-w-md flex-col items-center rounded-3xl bg-primary/20 p-10 shadow-xl backdrop-blur-md'>
          <h2 className='mb-6 text-center text-3xl font-bold uppercase text-secondary md:text-4xl'>
            Order Your Service
          </h2>
          <p className='mb-6 text-center text-gray-300'>
            Share your project details with <span className='text-primary'>Trusty Vision</span> —
            we’ll guide you with the best IT solutions.
          </p>
          <form className='flex w-full flex-col gap-4' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full rounded-xl border border-primary/50 bg-background/30 p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary'
              required
            />
            <input
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full rounded-xl border border-primary/50 bg-background/30 p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary'
              required
            />

            {/* First Select */}
            <Select
              value={service}
              onChange={(selectedOption) => {
                setService(selectedOption);
                setSubService(null); // reset sub-service when main service changes
              }}
              options={serviceOptions}
              placeholder='Select Service'
              styles={customStyles}
              className='w-full'
              required
            />

            {/* Second Select (Sub-service) */}
            {service && subServiceOptions[service.value] && (
              <Select
                value={subService}
                onChange={(selectedOption) => setSubService(selectedOption)}
                options={subServiceOptions[service.value]}
                placeholder='Select Sub-Service'
                styles={customStyles}
                className='w-full'
                required
              />
            )}

            <textarea
              placeholder='Additional Details (optional)'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className='w-full rounded-xl border border-primary/50 bg-background/30 p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary'
              rows={4}
            />
            <button
              type='submit'
              className='w-full rounded-2xl bg-primary py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/80'
            >
              Submit & Open WhatsApp
            </button>
          </form>
        </div>
      </div>
    </InfinityPreloader>
  );
}
