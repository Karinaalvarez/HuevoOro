import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-circle">
            <span className="logo-text">HUEVO D'ORO</span>
          </div>
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className={`nav-link ${isActive('/nosotros')}`}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/productos" className={`nav-link ${isActive('/productos')}`}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/galeria" className={`nav-link ${isActive('/galeria')}`}>
              Galería
            </Link>
          </li>
          <li>
            <Link to="/recetas" className={`nav-link ${isActive('/recetas')}`}>
              Recetas
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={`nav-link ${isActive('/contacto')}`}>
              Contacto
            </Link>
          </li>
        </ul>

        <Link to="/login" className="user-icon">
          <User size={28} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
