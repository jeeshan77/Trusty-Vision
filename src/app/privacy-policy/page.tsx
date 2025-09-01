import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import CreditFooter from '@/components/CreditFotter';
export default function PrivacyPolicy() {
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
                    <h1 className="text-5xl font-bold text-white mb-8 text-center">Privacy Policy</h1>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Trusty Vision values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Information We Collect</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may collect your name, email, phone number, and any information you provide via our contact forms. We may also use cookies or analytics tools to understand how users interact with our website.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">How We Use Your Information</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Your information helps us respond to inquiries, improve our services, and send updates if you have opted in.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Cookies</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Our website may use cookies to enhance your browsing experience and analyze traffic. You can choose to disable cookies in your browser settings.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Third-Party Services</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may use trusted third-party services such as hosting providers and analytics tools. Their privacy policies govern how your data is handled when using their services.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Data Protection</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is completely secure.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Contact</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If you have any questions regarding this Privacy Policy, please contact us at
                            <a className="text-blue-500 hover:underline ml-1" href="mailto:info@trustyvision.com">info@trustyvision.com</a>.
                        </p>
                    </section>
                </div>
            </div>
            <CreditFooter />
        </div>
    );
}
