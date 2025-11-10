import React from 'react'
import './Presentation.css'

const Presentation = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop',
      alt: 'Gallinas de calidad'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&h=600&fit=crop',
      alt: 'Huevos frescos'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559311563-69b3c9e7c4e4?w=800&h=600&fit=crop',
      alt: 'Nuestra granja'
    }
  ]

  return (
    <section className="presentation">
      <div className="presentation-container">
        <div className="presentation-images">
          {images.map((image) => (
            <div key={image.id} className="presentation-image-wrapper">
              <img src={image.src} alt={image.alt} className="presentation-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Presentation
