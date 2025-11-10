import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Ubicación</h3>
            <div className="footer-item">
              <MapPin size={20} />
              <div>
                <p className="location-highlight">Estamos en San Jerónimo, Namasigüe, Choluteca</p>
                <p className="location-description">
                  una región estratégica de la zona sur de Honduras, ideal para el desarrollo de proyectos agroindustriales sostenibles.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="footer-item">
              <Phone size={20} />
              <span>+504 9999-9999</span>
            </div>
            <div className="footer-item">
              <Mail size={20} />
              <span>info@huevooro.com</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Síguenos</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={24} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Horario</h3>
            <p>Lunes a Viernes: 7:00 AM - 5:00 PM</p>
            <p>Sábados: 7:00 AM - 12:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Huevo D'Oro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
