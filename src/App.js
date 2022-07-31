import React from 'react'
import Driver from './components/driver/Driver'
import Find from './components/Find/Find'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/Hero'
import Luxury from './components/luxury/Luxury'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Find />
      <Driver/> 
      <Luxury /> <br></br>
      <Footer />
    </>
  )
}

export default App