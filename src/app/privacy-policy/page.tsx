import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import CreditFooter from '@/components/CreditFotter';
export default function PrivacyPolicy() {
  return (
    <div className='page'>
      <div className='relative min-h-screen bg-black px-6 py-16 text-gray-300 md:px-20'>
        {/* Back to Home Link */}
        <Link
          href='/'
          className='absolute left-6 top-6 flex items-center text-gray-400 hover:text-white'
        >
          <HiArrowLeft className='mr-2' size={24} />
          Home
        </Link>

        <div className='mx-auto max-w-4xl rounded-3xl bg-gray-900 p-10 shadow-lg'>
          <h1 className='mb-8 text-center text-5xl font-bold text-white'>Privacy Policy</h1>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Introduction</h2>
            <p className='leading-relaxed text-gray-300'>
              Trusty Vision values your privacy. This Privacy Policy explains how we collect, use,
              and protect your information when you visit our website or use our services.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Information We Collect</h2>
            <p className='leading-relaxed text-gray-300'>
              We may collect your name, email, phone number, and any information you provide via our
              contact forms. We may also use cookies or analytics tools to understand how users
              interact with our website.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>How We Use Your Information</h2>
            <p className='leading-relaxed text-gray-300'>
              Your information helps us respond to inquiries, improve our services, and send updates
              if you have opted in.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Cookies</h2>
            <p className='leading-relaxed text-gray-300'>
              Our website may use cookies to enhance your browsing experience and analyze traffic.
              You can choose to disable cookies in your browser settings.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Third-Party Services</h2>
            <p className='leading-relaxed text-gray-300'>
              We may use trusted third-party services such as hosting providers and analytics tools.
              Their privacy policies govern how your data is handled when using their services.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Data Protection</h2>
            <p className='leading-relaxed text-gray-300'>
              We implement reasonable security measures to protect your data. However, no method of
              transmission over the Internet is completely secure.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Contact</h2>
            <p className='leading-relaxed text-gray-300'>
              If you have any questions regarding this Privacy Policy, please contact us at
              <a className='ml-1 text-blue-500 hover:underline' href='mailto:info@trustyvision.com'>
                info@trustyvision.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <CreditFooter />
    </div>
  );
}
