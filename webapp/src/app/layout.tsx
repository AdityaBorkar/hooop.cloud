import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'

import './globals.css'
import { WebAnalytics } from '@/elements/WebAnalytics'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})
const geistMono = localFont({
  variable: '--font-mono',
  src: './fonts/GeistMonoVF.woff',
})

export const metadata: Metadata = {
  title: 'hooop.cloud',
  description: 'Manage all your infrastructure using Hooop Cloud.',
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${inter.variable} font-sans`}>
        <WebAnalytics />
        <Toaster richColors theme="dark" />
        {children}
      </body>
    </html>
  )
}
