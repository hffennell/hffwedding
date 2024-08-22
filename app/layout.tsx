import { Metadata } from 'next';
import { Lexend_Deca, Nanum_Myeongjo } from 'next/font/google'
import Footer from '@/components/faqFooter';
import ShowBreakpoints from '@/components/visual/breakpointView';
import './globals.css'

const lexend = Lexend_Deca({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--lexend'
});

const nanum = Nanum_Myeongjo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--nanum'
});

export const metadata: Metadata = {
  title: {
    template: '%s | Hannah & David\'s Wedding',
    default: 'Hannah & David 2025',
  },
  description: 'Welcome to Hannah Fennell and David Freedland\'s Wedding Website! We will be getting married May 2025 in Wilmington, NC. View photos, directions, registry details and more!',
  openGraph: {
    title: 'Hannah & David 2025',
    description: 'Welcome to Hannah Fennell and David Freedland\'s Wedding Website! View photos, directions, registry details and more!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${nanum.variable}`}>
        {/* <ShowBreakpoints /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
