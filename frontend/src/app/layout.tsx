import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sustainable Landscaping Platform',
  description: 'AI-powered sustainable landscape design platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}