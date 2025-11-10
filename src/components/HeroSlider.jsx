import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './HeroSlider.css'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'AVICULTURA',
      subtitle: "HUEVO D'ORO",
      tagline: '"Más que huevos, tradición y calidad"',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'CALIDAD PREMIUM',
      subtitle: 'HUEVOS FRESCOS',
      tagline: '"Directo de nuestra granja a tu mesa"',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=1920&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'TRADICIÓN',
      subtitle: 'Y EXPERIENCIA',
      tagline: '"Años de dedicación en cada huevo"',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920&h=600&fit=crop'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              <p className="slide-tagline">{slide.tagline}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev" onClick={prevSlide}>
        <ChevronLeft size={40} />
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        <ChevronRight size={40} />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
