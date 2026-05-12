import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Remaking - Tecnologia e Criatividade',
  description: 'Agência de tecnologia e criatividade unindo Portugal e o mundo. Especialistas em IA, Programação, Fotografia e Filmagem.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F8F9FA] text-[#0A0B10] antialiased suppressHydrationWarning" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
