import CreditFooter from '@/components/CreditFotter';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export default function TermsOfService() {
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
          <h1 className='mb-8 text-center text-5xl font-bold text-white'>Terms of Service</h1>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Introduction</h2>
            <p className='leading-relaxed text-gray-300'>
              Welcome to Trusty Vision. By using our website and services, you agree to comply with
              and be bound by these Terms of Service. Please read them carefully.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Use of Services</h2>
            <p className='leading-relaxed text-gray-300'>
              You agree to use our services for lawful purposes only. You may not use our website to
              upload, post, or transmit content that is harmful, offensive, or violates any laws.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Intellectual Property</h2>
            <p className='leading-relaxed text-gray-300'>
              All content on Trusty Vision, including designs, text, graphics, and software, is the
              property of Trusty Vision or its licensors and is protected by copyright and other
              intellectual property laws.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Limitation of Liability</h2>
            <p className='leading-relaxed text-gray-300'>
              Trusty Vision is not responsible for any damages or losses resulting from the use of
              our website or services. We provide our services "as is" without warranties of any
              kind.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Termination</h2>
            <p className='leading-relaxed text-gray-300'>
              We reserve the right to terminate or suspend access to our services at any time,
              without prior notice, for violations of these Terms of Service.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Governing Law</h2>
            <p className='leading-relaxed text-gray-300'>
              These Terms of Service are governed by and construed in accordance with the laws of
              India.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='mb-2 text-2xl font-semibold text-white'>Contact</h2>
            <p className='leading-relaxed text-gray-300'>
              If you have any questions about these Terms of Service, please contact us at
              <a className='ml-1 text-blue-500 hover:underline' href='mailto:info@trustyvision.com'>
                jeeshankmr2004@gmail.com
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
