import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {

  return (
    <main className="bg-primary overflow-hidden">
    <Navbar />
    <Hero />
    </main>
  )
}

export default App
