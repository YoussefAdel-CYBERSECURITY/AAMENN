'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import ThreeBackground from '@/components/ThreeBackground'
import { ReactNode, useEffect } from 'react'
import { initGSAP } from '@/lib/gsap-config'

export default function ClientLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    initGSAP()
  }, [])

  return (
    <ThemeProvider>
      <ThreeBackground />
      <Navbar />
      {children}
    </ThemeProvider>
  )
}
