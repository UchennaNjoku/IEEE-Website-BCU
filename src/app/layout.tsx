import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Navbar  from "./Navbar";
import './globals.css';
import {Providers} from "./providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`overflow-x-hidden bg-black w-screen ${inter.variable}`}>
        <body>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
  )
}
