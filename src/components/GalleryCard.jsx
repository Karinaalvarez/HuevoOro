import React from 'react'
import './GalleryCard.css'

const GalleryCard = ({ item, onClick }) => {
  return (
    <div className="gallery-card" onClick={() => onClick(item)}>
      <img src={item.image} alt={item.title} className="gallery-card-img" />
      <div className="gallery-card-overlay">
        <span className="gallery-card-number">{item.number}</span>
        <div className="gallery-card-content">
          <h3 className="gallery-card-title">{item.title}</h3>
          {item.subtitle && <p className="gallery-card-subtitle">{item.subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
