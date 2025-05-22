import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eduace',
  description: 'Eduace is a learning management system that empowers educators to create, manage, and deliver engaging online courses.',
  generator: '??',
  icons: {
    icon: '/images/eduace-logo.png',
    shortcut: '/images/eduace-logo.png',
    apple: '/images/eduace-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
