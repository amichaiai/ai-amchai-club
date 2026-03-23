import Hero from './components/Hero'
import PainSection from './components/PainSection'
import AboutSection from './components/AboutSection'
import ValueSection from './components/ValueSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import SignupSection from './components/SignupSection'
import Footer from './components/Footer'
import StickyButton from './components/StickyButton'

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainSection />
      <AboutSection />
      <ValueSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <SignupSection />
      <Footer />
      <StickyButton />
    </main>
  )
}

export default App
