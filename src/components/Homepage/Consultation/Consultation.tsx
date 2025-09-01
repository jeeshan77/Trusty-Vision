'use client';

import { useState } from 'react';

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
      id="consulationForm"
      className="relative w-full py-16 bg-background text-white min-h-screen flex items-center justify-center"
    >
      {/* Optional: background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/assets/consultation-bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-6xl w-full px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary uppercase">
            Book a Free Consultation
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Share your ideas with <span className="text-primary">Trusty Vision</span> —
            we’ll guide you with the best digital solutions for your business.
          </p>
          <p className="mt-2 text-lg font-semibold text-primary">
             📞You can also call us and talk about your website directly — we’ll guide you personally!
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-secondary">Why Consultation?</h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                A consultation helps us understand your vision, goals, and challenges. 
                We provide expert advice, a clear strategy, and a roadmap — absolutely free.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-primary">📍 Location</h4>
              <p className="text-gray-400">New Delhi, India</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-primary">✉️ Email</h4>
              <p className="text-gray-400">jeeshankmr2004@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-primary">📞 Phone</h4>
              <p className="text-gray-400">+91 85275 96754</p>
            </div>
          </div>
          

          {/* Form Section */}
          <div className="bg-primary/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-background border border-primary/40 text-white focus:ring-2 focus:ring-primary outline-none"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-background border border-primary/40 text-white focus:ring-2 focus:ring-primary outline-none"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full p-3 rounded-lg bg-background border border-primary/40 text-white focus:ring-2 focus:ring-primary outline-none"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                className="w-full p-3 rounded-lg bg-background border border-primary/40 text-white focus:ring-2 focus:ring-primary outline-none"
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/80 transition"
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
