import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <img src={recipe.image} alt={recipe.title} className="recipe-card-img" />
      <div className="recipe-card-overlay">
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <button className="recipe-card-btn">Ver receta</button>
      </div>
    </div>
  )
}

export default RecipeCard
