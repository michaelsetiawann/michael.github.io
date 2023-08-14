import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://glennprays.tech'),
  title: 'Hello!',
  description: 'Hello, i\'m Glenn Pray. Here, you will find a comprehensive collection of my professional journey, including my resume, portfolio, showcased projects, and blog posts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
