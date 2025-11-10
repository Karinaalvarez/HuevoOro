import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Presentation from '../components/Presentation'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'
import './Inicio.css'

const Inicio = () => {
  return (
    <div className="inicio-page">
      <Navbar />
      <HeroSlider />
      <Presentation />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default Inicio
