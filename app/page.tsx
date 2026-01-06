import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import HowItWorks from '@/components/HowItWorks'
import Trust from '@/components/Trust'
import Pricing from '@/components/Pricing'
import Comparison from '@/components/Comparison'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Trust />
      <Pricing />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  )
}
