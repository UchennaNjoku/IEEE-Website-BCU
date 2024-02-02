import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from "./header";
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
      <html lang="en" className={`overflow-x-hidden w-screen ${inter.variable}`}>
        <body>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
  )
}
