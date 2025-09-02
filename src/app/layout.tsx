import type { Metadata } from 'next';
import { Coiny, Dongle, Inter, Quicksand, Montserrat, Comfortaa, Exo_2 } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const coiny = Coiny({ variable: '--font-coiny', weight: '400', subsets: ['latin'] });
const dongle = Dongle({ variable: '--font-dongle', weight: '400', subsets: ['latin'] });
const quicksand = Quicksand({ variable: '--font-quicksand', weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: '500',
  subsets: ['latin']
});
const comfortaa = Comfortaa({
  variable: '--font-comfortaa',
  subsets: ['latin'],
  weight: ['500'] // pick what you need
});
const exo2 = Exo_2({
  variable: '--font-exo2',
  subsets: ['latin'],
  weight: ['500'] // Semi-bold
});

export const metadata: Metadata = {
  title: 'Trusty Vision – Web Dev & Full-Stack Services',
  description:
    'Trusty Vision offers expert web development, SEO, and digital solutions to boost your online presence and grow your business efficiently.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' }, // normal favicon
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' }, // Android
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' } // Android
    ],
    apple: '/apple-touch-icon.png'
  },
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${coiny.variable} ${dongle.variable} ${exo2.variable} ${quicksand.variable} ${montserrat.variable} ${comfortaa.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
