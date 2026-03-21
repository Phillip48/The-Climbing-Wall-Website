import { useState } from 'react'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import StatsStrip    from './components/StatsStrip'
import Screenshots   from './components/Screenshots'
import Features      from './components/Features'
import HowItWorks    from './components/HowItWorks'
import CTA           from './components/CTA'
import Footer        from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  const openPrivacy = () => {
    setShowPrivacy(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closePrivacy = () => {
    setShowPrivacy(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showPrivacy) {
    return (
      <>
        <Navbar />
        <PrivacyPolicy onBack={closePrivacy} />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Screenshots />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer onPrivacy={openPrivacy} />
    </>
  )
}
