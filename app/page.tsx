import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Trust from '@/components/Trust'
import Comparison from '@/components/Comparison'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Trust />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  )
}
