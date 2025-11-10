import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import './Nosotros.css'

const Nosotros = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', content: '' })

  const openModal = (title, content) => {
    setModalContent({ title, content })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const sections = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop',
      title: 'Nosotros',
      preview: 'En Huevo D´Oro creemos en la transparencia, la innovación y el compromiso con la salud de nuestros consumidores. Somos un emprendimiento ubicado en la zona sur de Honduras...',
      fullContent: (
        <>
          <p>
            En Huevo D´Oro creemos en la transparencia, la innovación y el compromiso con la 
            salud de nuestros consumidores. Somos un emprendimiento ubicado en la zona sur 
            de Honduras, en la comunidad de San Jerónimo, Namasigüe, Choluteca, dedicado a la 
            producción de huevos semicriollos de gallinas Hy-Line Brown bajo estrictas medidas 
            de bioseguridad y bienestar animal.
          </p>
          <h3>Nuestra Historia</h3>
          <p>
            Fundada con la visión de ofrecer productos avícolas de la más alta calidad, 
            Huevo D´Oro ha crecido desde sus humildes comienzos hasta convertirse en un 
            referente de confianza en la región. Nuestro compromiso con la excelencia y 
            la innovación nos ha permitido desarrollar procesos únicos que garantizan 
            la frescura y calidad de cada huevo que producimos.
          </p>
          <h3>Nuestros Valores</h3>
          <ul>
            <li><strong>Transparencia:</strong> Operamos con honestidad en todos nuestros procesos</li>
            <li><strong>Innovación:</strong> Implementamos tecnología de punta en nuestra producción</li>
            <li><strong>Compromiso:</strong> Dedicados a la salud y bienestar de nuestros consumidores</li>
            <li><strong>Calidad:</strong> Estándares rigurosos en cada etapa de producción</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop',
      title: 'Nuestros Huevos',
      preview: 'Nuestros huevos se caracterizan por su alto valor nutritivo, frescura y sabor auténtico, libres de conservantes y hormonas...',
      fullContent: (
        <>
          <p>
            Nuestros huevos se caracterizan por su alto valor nutritivo, frescura y sabor 
            auténtico, libres de conservantes y hormonas, garantizando un producto natural 
            y de confianza para las familias hondureñas.
          </p>
          <h3>Características de Nuestros Huevos</h3>
          <ul>
            <li><strong>Alto Valor Nutritivo:</strong> Ricos en proteínas, vitaminas y minerales esenciales</li>
            <li><strong>Frescura Garantizada:</strong> Recolección diaria y distribución inmediata</li>
            <li><strong>Sabor Auténtico:</strong> Producto de gallinas alimentadas con dieta balanceada</li>
            <li><strong>100% Natural:</strong> Sin conservantes, hormonas ni químicos artificiales</li>
            <li><strong>Certificación de Calidad:</strong> Cumplimos con todos los estándares sanitarios</li>
          </ul>
          <h3>Proceso de Producción</h3>
          <p>
            Cada huevo pasa por un riguroso control de calidad desde su recolección hasta 
            su empaque. Nuestras instalaciones cuentan con tecnología moderna que garantiza 
            la trazabilidad completa del producto, asegurando que cada huevo que llega a 
            tu mesa cumple con nuestros altos estándares de calidad.
          </p>
        </>
      )
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1559311563-69b3c9e7c4e4?w=400&h=300&fit=crop',
      title: 'Software de Gestión',
      preview: 'Además de la producción avícola, desarrollamos un software innovador de gestión local diseñado especialmente para productores...',
      fullContent: (
        <>
          <p>
            Además de la producción avícola, desarrollamos un software innovador de gestión 
            local diseñado especialmente para productores. Esta herramienta permite llevar un 
            control detallado de la alimentación, vacunación, gastos, producción, enfermedades, 
            clientes y ventas, facilitando la toma de decisiones y mejorando la rentabilidad 
            de cada granja.
          </p>
          <h3>Características del Software</h3>
          <ul>
            <li><strong>Control de Alimentación:</strong> Registro detallado de consumo y costos</li>
            <li><strong>Gestión de Vacunación:</strong> Calendario y seguimiento de vacunas</li>
            <li><strong>Control de Gastos:</strong> Análisis financiero completo</li>
            <li><strong>Registro de Producción:</strong> Estadísticas diarias, semanales y mensuales</li>
            <li><strong>Gestión de Enfermedades:</strong> Historial médico de las aves</li>
            <li><strong>Base de Datos de Clientes:</strong> CRM integrado</li>
            <li><strong>Control de Ventas:</strong> Facturación y reportes</li>
          </ul>
          <h3>Beneficios</h3>
          <p>
            Nuestro software ha sido diseñado por productores para productores, entendiendo 
            las necesidades reales del sector avícola. La interfaz intuitiva permite una 
            adopción rápida, mientras que las funcionalidades avanzadas proporcionan insights 
            valiosos para optimizar la operación de tu granja.
          </p>
        </>
      )
    }
  ]

  const values = [
    {
      id: 1,
      icon: '👨‍👩‍👧‍👦',
      title: 'Nuestros Valores',
      description: 'Transparencia, procesos claros y confiables para generar confianza. Calidad, huevos frescos, nutritivos y libres de químicos innecesarios...',
      fullContent: (
        <>
          <h3>Transparencia</h3>
          <p>
            Operamos con procesos claros y confiables que generan confianza en nuestros 
            clientes. Cada etapa de nuestra producción está documentada y disponible para 
            auditorías, garantizando la trazabilidad completa de nuestros productos.
          </p>
          <h3>Calidad</h3>
          <p>
            Nuestros huevos son frescos, nutritivos y libres de químicos innecesarios. 
            Implementamos controles de calidad rigurosos en cada etapa, desde la alimentación 
            de las aves hasta el empaque final del producto.
          </p>
          <h3>Compromiso</h3>
          <p>
            Estamos comprometidos con la salud de nuestros consumidores y el bienestar de 
            nuestras aves. Invertimos constantemente en mejorar nuestras instalaciones y 
            procesos para ofrecer siempre lo mejor.
          </p>
        </>
      )
    },
    {
      id: 2,
      icon: '🏭',
      title: 'Nuestro Proceso',
      description: 'Gallinas Hy-Line Brown criadas en instalaciones modernas. Alimentación balanceada y natural. Recolección diaria de huevos. Sistema de bioseguridad estricto...',
      fullContent: (
        <>
          <h3>Instalaciones Modernas</h3>
          <p>
            Nuestras gallinas Hy-Line Brown son criadas en instalaciones de última generación 
            que garantizan su bienestar y productividad óptima. Los galpones cuentan con 
            ventilación controlada, iluminación adecuada y sistemas de limpieza automatizados.
          </p>
          <h3>Alimentación Balanceada</h3>
          <p>
            Proporcionamos una dieta natural y balanceada, formulada específicamente para 
            maximizar la calidad nutricional de los huevos. Trabajamos con proveedores 
            certificados que garantizan la calidad de cada ingrediente.
          </p>
          <h3>Bioseguridad</h3>
          <p>
            Implementamos un sistema de bioseguridad estricto que incluye controles de acceso, 
            protocolos de desinfección, monitoreo veterinario constante y programas de 
            vacunación preventiva.
          </p>
          <h3>Recolección y Distribución</h3>
          <p>
            Los huevos son recolectados diariamente, clasificados por tamaño y calidad, 
            y distribuidos de inmediato para garantizar la máxima frescura en el punto de venta.
          </p>
        </>
      )
    },
    {
      id: 3,
      icon: '💡',
      title: 'Innovación Tecnológica',
      description: 'Nuestro software de gestión es una herramienta única en el mercado local, diseñada para productores que...',
      fullContent: (
        <>
          <h3>Desarrollo Propio</h3>
          <p>
            Hemos desarrollado un software de gestión avícola único en el mercado local, 
            diseñado específicamente para las necesidades de los productores hondureños. 
            Esta herramienta nace de nuestra propia experiencia y los desafíos que hemos 
            enfrentado en la gestión diaria de nuestra granja.
          </p>
          <h3>Funcionalidades Principales</h3>
          <ul>
            <li>Dashboard con métricas en tiempo real</li>
            <li>Alertas automáticas de vacunación y alimentación</li>
            <li>Reportes financieros detallados</li>
            <li>Análisis predictivo de producción</li>
            <li>Gestión de inventario de insumos</li>
            <li>Sistema de facturación integrado</li>
          </ul>
          <h3>Disponibilidad</h3>
          <p>
            El software está disponible para otros productores que deseen optimizar sus 
            operaciones. Ofrecemos capacitación completa y soporte técnico continuo para 
            garantizar el máximo aprovechamiento de la herramienta.
          </p>
        </>
      )
    }
  ]

  return (
    <div className="nosotros-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="nosotros-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">SOBRE NOSOTROS</h1>
          <p className="hero-subtitle">Canva</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="nosotros-content">
        <div className="content-container">
          {sections.map((section) => (
            <div key={section.id} className="content-card">
              <div className="card-image">
                <img src={section.image} alt={section.title} />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  <span className="title-bullet">●</span> {section.title}
                </h3>
                <p className="card-text">{section.preview}</p>
                <button 
                  className="read-more-btn"
                  onClick={() => openModal(section.title, section.fullContent)}
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">
                <span className="value-bullet">●</span> {value.title}
              </h3>
              <p className="value-description">{value.description}</p>
              <button 
                className="read-more-btn"
                onClick={() => openModal(value.title, value.fullContent)}
              >
                Leer más
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} title={modalContent.title}>
        {modalContent.content}
      </Modal>

      <Footer />
    </div>
  )
}

export default Nosotros
