import React, { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import Modal from '../components/Modal'
import { Search } from 'lucide-react'
import './Productos.css'

const Productos = () => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const products = useMemo(() => ([
    {
      id: 1,
      name: 'Huevo Mediano',
      price: 75,
      image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?w=800&h=600&fit=crop',
      short: 'Docena de huevos medianos, frescos del día.',
      description: 'Huevos medianos provenientes de gallinas Hy-Line Brown con alimentación balanceada. Ideales para uso diario en el hogar. Sin hormonas ni conservantes.'
    },
    {
      id: 2,
      name: 'Huevo Pack 15',
      price: 95,
      image: 'https://images.unsplash.com/photo-1498654077810-12f23ab7ae6e?w=800&h=600&fit=crop',
      short: 'Paquete económico de 15 unidades.',
      description: 'Presentación práctica de 15 huevos para familias pequeñas o consumo moderado. Frescura garantizada con recolección diaria.'
    },
    {
      id: 3,
      name: 'Huevo Grande 30',
      price: 190,
      image: 'https://images.unsplash.com/photo-1587486913049-53fc4f4b0f9b?w=800&h=600&fit=crop',
      short: 'Cartón de 30 huevos tamaño grande.',
      description: 'Huevos grandes con cáscara resistente y yema de color intenso. Perfectos para repostería y comida diaria.'
    },
    {
      id: 4,
      name: 'Huevo Extra Grande 30',
      price: 210,
      image: 'https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?w=800&h=600&fit=crop',
      short: 'Cartón de 30 huevos extra grandes.',
      description: 'Nuestra presentación premium. Huevos extra grandes seleccionados con estándares de calidad estrictos.'
    },
    {
      id: 5,
      name: 'Huevo Orgánico',
      price: 120,
      image: 'https://images.unsplash.com/photo-1517957754645-7085cf8f3b4a?w=800&h=600&fit=crop',
      short: 'Docena de huevos orgánicos certificados.',
      description: 'Producidos con prácticas sostenibles y alimento certificado. Sabor auténtico y fresco.'
    },
    {
      id: 6,
      name: 'Huevo Criollo',
      price: 110,
      image: 'https://images.unsplash.com/photo-1517959473566-231b6fef64b0?w=800&h=600&fit=crop',
      short: 'Docena de huevo criollo de campo.',
      description: 'Huevos con yema intensa y sabor tradicional. Ideal para recetas típicas.'
    },
    {
      id: 7,
      name: 'Huevo Seleccionado',
      price: 130,
      image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800&h=600&fit=crop',
      short: 'Docena de huevos seleccionados por tamaño y peso.',
      description: 'Selección premium con control de tamaño, peso y frescura. Excelente presentación para regalo o eventos.'
    },
    {
      id: 8,
      name: 'Huevo para Repostería (Cartón)',
      price: 175,
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
      short: 'Cartón de 30 ideal para negocios y repostería.',
      description: 'Excelente relación calidad-precio. Ideal para panaderías, reposterías y restaurantes.'
    }
  ]), [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.short.toLowerCase().includes(q)
    )
  }, [products, query])

  return (
    <div className="productos-page">
      <Navbar />

      {/* Hero */}
      <section className="productos-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">Nuestros productos</h1>
            <a className="hero-cta" href="#grid">Compra ahora</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="productos-content">
        <div className="container">
          <h2 className="section-heading">Productos</h2>

          {/* Search */}
          <div className="search-row">
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar producto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Buscar producto"
              />
              <Search className="search-icon" size={22} />
            </div>
          </div>

          {/* Grid */}
          <div id="grid" className="grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onReadMore={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal detalle */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name || ''}
      >
        {selected && (
          <div>
            <img src={selected.image} alt={selected.name} style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
            <p style={{ marginBottom: 12 }}>{selected.description}</p>
            <strong style={{ color: '#2c4a6e' }}>Precio: L. {selected.price.toLocaleString()}</strong>
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  )
}

export default Productos
