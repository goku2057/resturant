import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/hook/redux-toolkit/provider'
import { AppProvider } from '@/components/appContext'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaur App',
  description: 'Order, pickup, enjoy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
            <AppProvider>
              <ReduxProvider >
                {children}
              </ReduxProvider>
            </AppProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
