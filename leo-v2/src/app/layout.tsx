import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'
import { auth } from '@/auth'
import { WebVitals } from '@/components/WebVitals'
import { Resource } from 'sst'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leo',
  description: 'Find all your projects here!',
  robots: 'noindex, nofollow',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider
          baseUrl='https://localhost:3000/'
          basePath='/api/auth'
          session={session}
          refetchOnWindowFocus={false}
          refetchWhenOffline={false}
        >
          <WebVitals />
          {children}
          <Toaster richColors theme='dark' />
        </SessionProvider>
      </body>
    </html>
  )
}
