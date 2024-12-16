import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import StickyHero from './Components/StickyHero'
import AltasianAi from './Components/AltasianAi'
import AltasianTeam from './Components/AltasianTeam'
import EmpowerTeam from './Components/EmpowerTeam'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-36 md:gap-44'>
      <Header/>
      <Hero/>
  

  <StickyHero/>
  <AltasianAi/>
  <AltasianTeam/>
  <EmpowerTeam/>
  <Testimonials/>
  <Footer/>

<div className="w-screen h-20 bg-black flex items-center justify-center">
    <h5 className='text-white'>You have reached the end  🧍‍♂️</h5>
</div>
    </main>
  )
}

export default App