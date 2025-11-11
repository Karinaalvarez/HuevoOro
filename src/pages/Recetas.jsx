import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeCard from '../components/RecipeCard'
import Modal from '../components/Modal'
import './Recetas.css'

const Recetas = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const recipes = [
    {
      id: 1,
      title: 'NutriVital',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      ingredients: [
        '2 huevos',
        '1 taza de arroz integral',
        '1/2 taza de frijoles negros',
        '1 aguacate',
        'Tomates cherry',
        'Espinacas frescas',
        'Aceite de oliva',
        'Sal y pimienta al gusto'
      ],
      instructions: 'Bowl nutritivo con huevo cocido, arroz integral, frijoles negros, aguacate y vegetales frescos. Perfecto para una comida balanceada y saludable. Cocina el arroz y los frijoles por separado. Hierve los huevos durante 7 minutos. Corta el aguacate y los tomates. Mezcla todo en un bowl y añade las espinacas frescas. Adereza con aceite de oliva, sal y pimienta.'
    },
    {
      id: 2,
      title: 'FitFuel',
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=600&fit=crop',
      ingredients: [
        '3 huevos duros',
        'Pechuga de pollo a la plancha',
        'Arroz integral',
        'Brócoli al vapor',
        'Zanahorias baby',
        'Aceite de oliva',
        'Limón'
      ],
      instructions: 'Plato fitness con huevos duros, pollo a la plancha, arroz integral y vegetales al vapor. Ideal para deportistas y personas activas. Cocina el pollo con especias. Prepara el arroz integral. Cuece los huevos y los vegetales al vapor. Sirve todo junto y añade un toque de limón.'
    },
    {
      id: 3,
      title: 'NutriVital Green',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop',
      ingredients: [
        '1 huevo poached',
        'Aguacate machacado',
        'Espinacas salteadas',
        'Quinoa',
        'Tomates cherry',
        'Semillas de chía',
        'Aceite de oliva'
      ],
      instructions: 'Bowl verde con huevo poached sobre aguacate, espinacas salteadas y quinoa. Rico en nutrientes y antioxidantes. Cocina la quinoa. Saltea las espinacas con ajo. Prepara el huevo poached. Machaca el aguacate y monta el bowl con todos los ingredientes. Decora con semillas de chía.'
    },
    {
      id: 4,
      title: 'NutriVital Scramble',
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&h=600&fit=crop',
      ingredients: [
        '3 huevos',
        'Pimientos de colores',
        'Cebolla',
        'Tomate',
        'Queso rallado',
        'Cilantro fresco',
        'Aceite de oliva'
      ],
      instructions: 'Huevos revueltos con vegetales coloridos, perfectos para un desayuno energético. Pica los vegetales. Bate los huevos. Saltea los vegetales y añade los huevos. Cocina a fuego medio revolviendo constantemente. Añade queso y cilantro al final.'
    },
    {
      id: 5,
      title: 'Power Breakfast',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=600&fit=crop',
      ingredients: [
        '2 huevos',
        'Pan integral tostado',
        'Aguacate',
        'Tomate',
        'Rúcula',
        'Queso feta',
        'Aceite de oliva'
      ],
      instructions: 'Tostada de aguacate con huevo y vegetales frescos. Desayuno completo y delicioso. Tuesta el pan. Machaca el aguacate y untálo en el pan. Frie o pochea los huevos. Coloca los huevos sobre el aguacate y añade tomate, rúcula y queso feta.'
    },
    {
      id: 6,
      title: 'Protein Bowl',
      image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=800&h=600&fit=crop',
      ingredients: [
        '2 huevos duros',
        'Quinoa',
        'Garbanzos asados',
        'Espinacas',
        'Zanahoria rallada',
        'Hummus',
        'Tahini'
      ],
      instructions: 'Bowl proteico con huevo, quinoa, garbanzos y hummus. Alto en proteínas y fibra. Cocina la quinoa y los garbanzos. Asa los garbanzos con especias. Hierve los huevos. Monta el bowl con todos los ingredientes y añade hummus y tahini por encima.'
    }
  ]

  return (
    <div className="recetas-page">
      <Navbar />

      {/* Hero Section */}
      <section className="recetas-hero">
        {/* Info Box */}
        <div className="recetas-info-box">
          <div>
            <h1 className="info-title">
              Receta con alimentos nutritivos Huevos
              <span className="info-egg-icon">🥚</span>
            </h1>
            <p className="info-description">
              Aqui encontraras una lista de ingredientes para consumir nuestros huevos, mantente saludable
            </p>
          </div>
          <button className="info-cta-btn">Contactanos ya!</button>
        </div>

        {/* Featured Recipes */}
        <div className="featured-recipes-grid">
          <RecipeCard recipe={recipes[0]} onClick={setSelectedRecipe} />
          <RecipeCard recipe={recipes[1]} onClick={setSelectedRecipe} />
          <RecipeCard recipe={recipes[2]} onClick={setSelectedRecipe} />
          <RecipeCard recipe={recipes[3]} onClick={setSelectedRecipe} />
        </div>
      </section>

      {/* All Recipes Grid */}
      <section className="recetas-content">
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} />
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        title={selectedRecipe?.title || ''}
      >
        {selectedRecipe && (
          <div>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
            />
            <h3 style={{ color: '#2c4a6e', marginBottom: 12 }}>Ingredientes:</h3>
            <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
              {selectedRecipe.ingredients.map((ing, idx) => (
                <li key={idx} style={{ marginBottom: 6 }}>{ing}</li>
              ))}
            </ul>
            <h3 style={{ color: '#2c4a6e', marginBottom: 12 }}>Preparación:</h3>
            <p style={{ lineHeight: 1.6 }}>{selectedRecipe.instructions}</p>
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  )
}

export default Recetas
