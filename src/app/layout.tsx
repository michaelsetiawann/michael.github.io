import Provider from '@/components/middleware/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/header/Navigation'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://glennprays.tech'),
  title: {
    default: 'Homepage',
    template: `%s | glennprays;`,
  },
  description: 'Hello, i\'m Glenn Pray. Here, you will find a comprehensive collection of my professional journey, including my resume, portfolio, showcased projects, and blog posts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className='min-h-screen w-full flex flex-col bg-neutral-200 dark:bg-neutral-900'>
            <Navigation />
            <div className='px-8 pt-5 flex-grow'>
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
