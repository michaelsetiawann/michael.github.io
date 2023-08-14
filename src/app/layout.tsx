import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://glennprays.tech'),
  title: {
    default: 'Homepage',
    template: `%s | glennprays;`,    
  },
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
