import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import FloatingImage from './components/Story'



const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
      <About/>
      <Navbar/>
      <Features/>
      <FloatingImage/>
    </main>
  )
}

export default App
