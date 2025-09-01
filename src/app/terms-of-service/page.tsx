import CreditFooter from '@/components/CreditFotter';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export default function TermsOfService() {
    return (
        <div className="page">

            <div className="min-h-screen bg-black text-gray-300 py-16 px-6 md:px-20 relative">

                {/* Back to Home Link */}
                <Link
                    href="/"
                    className="absolute top-6 left-6 flex items-center text-gray-400 hover:text-white"
                >
                    <HiArrowLeft className="mr-2" size={24} />
                    Home
                </Link>

                <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-10 shadow-lg">
                    <h1 className="text-5xl font-bold text-white mb-8 text-center">Terms of Service</h1>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Welcome to Trusty Vision. By using our website and services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Use of Services</h2>
                        <p className="text-gray-300 leading-relaxed">
                            You agree to use our services for lawful purposes only. You may not use our website to upload, post, or transmit content that is harmful, offensive, or violates any laws.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Intellectual Property</h2>
                        <p className="text-gray-300 leading-relaxed">
                            All content on Trusty Vision, including designs, text, graphics, and software, is the property of Trusty Vision or its licensors and is protected by copyright and other intellectual property laws.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Limitation of Liability</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Trusty Vision is not responsible for any damages or losses resulting from the use of our website or services. We provide our services "as is" without warranties of any kind.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Termination</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We reserve the right to terminate or suspend access to our services at any time, without prior notice, for violations of these Terms of Service.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Governing Law</h2>
                        <p className="text-gray-300 leading-relaxed">
                            These Terms of Service are governed by and construed in accordance with the laws of India.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Contact</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us at
                            <a className="text-blue-500 hover:underline ml-1" href="mailto:info@trustyvision.com">jeeshankmr2004@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </div>
            <CreditFooter />
        </div>
    );
}
