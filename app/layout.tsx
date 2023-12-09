import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const font = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Fetch Request',
  description: 'Showcase of fetch request',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  )
}
