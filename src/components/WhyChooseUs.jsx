import React from 'react'
import { Award, Users, Lightbulb, TrendingUp, Heart } from 'lucide-react'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={40} />,
      title: 'Experiencia comprobada:',
      description: 'Contamos con años de trayectoria ofreciendo soluciones efectivas y personalizadas.'
    },
    {
      icon: <Users size={40} />,
      title: 'Atención al cliente excepcional:',
      description: 'Nos enfocamos en entender tus necesidades y acompañarte en cada paso.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovación constante:',
      description: 'Utilizamos tecnología de punta y metodologías modernas para mantenernos a la vanguardia.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Resultados reales:',
      description: 'Nuestro compromiso es generar impacto tangible en tu negocio o proyecto.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Valores sólidos:',
      description: 'Trabajamos con ética, transparencia y responsabilidad social.'
    }
  ]

  const values = [
    { label: 'SEGURIDAD' },
    { label: 'HIGIENE/INOCUIDAD' },
    { label: 'CALIDAD' },
    { label: 'INNOVACIÓN' }
  ]

  return (
    <section className="why-choose-us">
      <div className="why-choose-container">
        <div className="content-wrapper">
          <div className="features-section">
            <h2 className="section-title">Por que Elegirnos?</h2>
            
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <strong>{feature.title}</strong> {feature.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="values-section">
              {values.map((value, index) => (
                <button key={index} className="value-badge">
                  {value.label}
                </button>
              ))}
            </div>
          </div>

          <div className="image-section">
            <div className="image-carousel">
              <img 
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=600&fit=crop" 
                alt="Pollito" 
                className="carousel-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
