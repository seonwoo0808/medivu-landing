import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - MEDIVU',
    default: 'MEDIVU - Eliminate the hassle of diagnostic report writing',
  },
  description:
    'MEDIVU is an AI-powered platform that automates the creation of diagnostic reports, allowing medical professionals to focus more on patient care and less on paperwork.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={clsx('h-full scroll-smooth antialiased', inter.className)}
      >
        {children}
      </body>
    </html>
  )
}
