import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { About } from './sections/About'

function App() {

  return (
    <main className="bg-primary overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0"/>
    </div>
    </main>
  )
}

export default App
