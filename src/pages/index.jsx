import React from 'react'

import LandingCard from '../components/LandingCard'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-b from-indigo-900 to-indigo-500 flex flex-col items-center justify-center h-screen">
      <LandingCard />
      <Footer />
    </main>
  )
}

export default LandingPage
