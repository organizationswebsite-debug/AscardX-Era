import { Sora, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { brand } from '@/lib/site';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  metadataBase: new URL(brand.url),
  title: { default: 'AscardX Era | Engineering the Future Through Intelligent Technology', template: '%s | AscardX Era' },
  description: 'AscardX Era delivers web, software, AI and mobile solutions for startups, growing companies and enterprises. A Moaz Group company.',
  openGraph: { siteName: 'AscardX Era', type: 'website' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-electric focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
