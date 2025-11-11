import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contacto.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contacto-page">
      <Navbar />

      <section className="contacto-content">
        <div className="contacto-layout">
          {/* Left Side - Info */}
          <div className="contacto-info">
            <h1>Contáctanos</h1>
            <p className="subtitle">
              Estamos aquí para atenderte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            
            <p className="description">
              En Huevo D'Oro nos dedicamos a la producción de huevos frescos de la más alta calidad. 
              Nuestro compromiso es brindarte productos nutritivos y saludables, directamente desde nuestras 
              granjas hasta tu mesa. ¿Tienes preguntas sobre nuestros productos, pedidos mayoristas o 
              quieres conocer más sobre nuestros procesos? ¡Escríbenos!
            </p>

            <div className="info-details">
              <div className="info-item">
                <div className="info-item-icon">📞</div>
                <div className="info-item-content">
                  <h3>Teléfono</h3>
                  <p><a href="tel:+50498765432">+504 9876-5432</a></p>
                  <p><a href="tel:+50422334455">+504 2233-4455</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item-icon">📍</div>
                <div className="info-item-content">
                  <h3>Ubicación</h3>
                  <p>San Jerónimo, Namasigüe</p>
                  <p>Choluteca, Honduras</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item-icon">🕐</div>
                <div className="info-item-content">
                  <h3>Horario de Atención</h3>
                  <p>Lunes - Viernes: 7:00 AM - 6:00 PM</p>
                  <p>Sábado: 7:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contacto-form-wrapper">
            <div className="contacto-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">NOMBRE</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-MAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MENSAJE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                ENVIAR
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contacto
