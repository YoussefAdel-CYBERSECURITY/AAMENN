'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  )
}
