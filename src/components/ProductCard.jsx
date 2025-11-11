import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product, onReadMore }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.short}</p>
        <div className="product-footer">
          <span className="product-price">L. {product.price.toLocaleString()}</span>
          <button className="product-btn" onClick={() => onReadMore(product)}>Leer más</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
