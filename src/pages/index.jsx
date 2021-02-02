import React from 'react'

import LandingCard from '../components/LandingCard'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-blue-600 flex flex-col items-center justify-center h-screen">
      <LandingCard />
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </main>
  )
}

export default LandingPage
