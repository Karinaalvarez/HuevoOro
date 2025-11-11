import React, { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryCard from '../components/GalleryCard'
import Modal from '../components/Modal'
import './Galeria.css'

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const categories = [
    { id: 'all', label: 'TODAS' },
    { id: 'produccion', label: 'PRODUCCION' },
    { id: 'local', label: 'LOCAL' },
    { id: 'gallinas', label: 'GALLINAS' },
    { id: 'instalacion', label: 'INSTALACION' },
    { id: 'alimentos', label: 'ALIMENTOS' }
  ]

  const galleryData = {
    produccion: [
      {
        id: 'prod1',
        number: '01',
        title: 'clasificacion de huevos',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1587486913049-53fc4f4b0f9b?w=800&h=600&fit=crop',
        description: 'Proceso de clasificación de huevos por tamaño y calidad con tecnología moderna.'
      },
      {
        id: 'prod2',
        number: '02',
        title: 'Proceso de alimentacion',
        subtitle: 'High quality furniture designed to last.',
        image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop',
        description: 'Sistema automatizado de alimentación que garantiza la nutrición balanceada de nuestras aves.'
      },
      {
        id: 'prod3',
        number: '03',
        title: 'Empacado',
        subtitle: 'Beauty meets daily responsibility.',
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&h=600&fit=crop',
        description: 'Área de empaque donde cada huevo es cuidadosamente seleccionado y preparado para distribución.'
      }
    ],
    local: [
      {
        id: 'local1',
        number: '01',
        title: 'galpon',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1559311563-69b3c9e7c4e4?w=800&h=600&fit=crop',
        description: 'Galpones modernos con ventilación controlada y sistemas de bioseguridad.'
      },
      {
        id: 'local2',
        number: '02',
        title: 'area de descanso',
        subtitle: 'High quality furniture designed to last.',
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop',
        description: 'Espacios diseñados para el bienestar y descanso de las aves.'
      },
      {
        id: 'local3',
        number: '03',
        title: 'solar',
        subtitle: 'Beauty meets daily responsibility.',
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop',
        description: 'Área solar donde las gallinas pueden disfrutar de luz natural y espacio al aire libre.'
      }
    ],
    gallinas: [
      {
        id: 'gall1',
        number: '01',
        title: 'Hy-Line Brown',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop',
        description: 'Nuestras gallinas Hy-Line Brown, conocidas por su alta producción y calidad de huevos.'
      },
      {
        id: 'gall2',
        number: '02',
        title: 'Cuidado veterinario',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop',
        description: 'Atención veterinaria constante para garantizar la salud de nuestras aves.'
      },
      {
        id: 'gall3',
        number: '03',
        title: 'Bienestar animal',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop',
        description: 'Compromiso con el bienestar y cuidado ético de nuestras gallinas.'
      }
    ],
    instalacion: [
      {
        id: 'inst1',
        number: '01',
        title: 'Infraestructura moderna',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1559311563-69b3c9e7c4e4?w=800&h=600&fit=crop',
        description: 'Instalaciones de última generación diseñadas para optimizar la producción.'
      },
      {
        id: 'inst2',
        number: '02',
        title: 'Sistemas de control',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
        description: 'Tecnología de punta para monitoreo y control de temperatura, humedad y ventilación.'
      },
      {
        id: 'inst3',
        number: '03',
        title: 'Bioseguridad',
        subtitle: '',
        image: 'https://images.unsplash.com/photo-1587486913049-53fc4f4b0f9b?w=800&h=600&fit=crop',
        description: 'Protocolos estrictos de bioseguridad en todas nuestras instalaciones.'
      }
    ],
    alimentos: [
      {
        id: 'alim1',
        number: '01',
        title: 'concentrado natural',
        subtitle: 'proveedor:',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
        description: 'Concentrado natural de alta calidad para nutrición balanceada de nuestras aves.'
      },
      {
        id: 'alim2',
        number: '02',
        title: 'brown',
        subtitle: 'High quality furniture designed to last.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
        description: 'Alimento especializado para gallinas Hy-Line Brown, formulado para máxima producción.'
      },
      {
        id: 'alim3',
        number: '03',
        title: 'solar',
        subtitle: 'Beauty meets daily responsibility.',
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=600&fit=crop',
        description: 'Suplementos nutricionales que complementan la dieta de nuestras gallinas.'
      }
    ]
  }

  const filteredData = useMemo(() => {
    if (selectedCategory === 'all') {
      return Object.entries(galleryData).map(([key, items]) => ({
        category: key,
        items
      }))
    }
    return [{
      category: selectedCategory,
      items: galleryData[selectedCategory] || []
    }]
  }, [selectedCategory])

  return (
    <div className="galeria-page">
      <Navbar />

      {/* Hero Banner */}
      <section className="galeria-hero">
        <div className="hero-content-galeria">
          <div className="hero-text-box">
            <h1 className="hero-title-galeria">
              Galeria de fotos de avicola Huevo D'Oro
              <span className="hero-egg-icon">🥚</span>
            </h1>
            <p className="hero-subtitle-galeria">
              Porque estamos comprometidos con la confianza del concumidor
            </p>
            <div className="hero-categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-badge ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="galeria-content">
        <div className="galeria-container">
          {filteredData.map(({ category, items }) => (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="gallery-grid">
                {items.map((item) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    onClick={setSelectedItem}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ''}
      >
        {selectedItem && (
          <div>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
            />
            <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
              {selectedItem.description}
            </p>
            {selectedItem.subtitle && (
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                {selectedItem.subtitle}
              </p>
            )}
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  )
}

export default Galeria
