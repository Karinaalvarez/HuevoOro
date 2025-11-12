import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Package, 
  ChefHat, 
  Image, 
  FolderTree, 
  Users, 
  UserCog, 
  Bell, 
  Palette, 
  Truck,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      navigate('/login')
    }
  }

  const menuItems = [
    {
      section: 'Principal',
      items: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null }
      ]
    },
    {
      section: 'Contenido',
      items: [
        { id: 'productos', icon: Package, label: 'Productos', badge: null },
        { id: 'recetas', icon: ChefHat, label: 'Recetas', badge: null },
        { id: 'galeria', icon: Image, label: 'Galería', badge: null },
        { id: 'categorias', icon: FolderTree, label: 'Categorías Galería', badge: null },
        { id: 'proveedores', icon: Truck, label: 'Proveedores', badge: null }
      ]
    },
    {
      section: 'Gestión',
      items: [
        { id: 'notificaciones', icon: Bell, label: 'Notificaciones', badge: '3' },
        { id: 'usuarios', icon: UserCog, label: 'Usuarios', badge: null },
        { id: 'clientes', icon: Users, label: 'Clientes', badge: null }
      ]
    },
    {
      section: 'Configuración',
      items: [
        { id: 'tematica', icon: Palette, label: 'Temática', badge: null }
      ]
    }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#2c4a6e' }}>
              Bienvenido al Dashboard
            </h2>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Desde aquí puedes administrar todo el contenido de tu sitio web Huevo D'Oro.
              Selecciona una opción del menú lateral para comenzar.
            </p>
          </div>
        )
      case 'productos':
        return <div><h2>Gestión de Productos</h2><p>Aquí podrás agregar, editar y eliminar productos.</p></div>
      case 'recetas':
        return <div><h2>Gestión de Recetas</h2><p>Administra las recetas con huevo.</p></div>
      case 'galeria':
        return <div><h2>Gestión de Galería</h2><p>Sube y organiza las fotos de tu negocio.</p></div>
      case 'categorias':
        return <div><h2>Categorías de Galería</h2><p>Crea y edita categorías para organizar las imágenes.</p></div>
      case 'proveedores':
        return <div><h2>Gestión de Proveedores</h2><p>Administra la información de tus proveedores.</p></div>
      case 'notificaciones':
        return <div><h2>Notificaciones</h2><p>Revisa los mensajes de contacto de los clientes.</p></div>
      case 'usuarios':
        return <div><h2>Gestión de Usuarios</h2><p>Administra usuarios administradores y clientes.</p></div>
      case 'clientes':
        return <div><h2>Clientes Registrados</h2><p>Lista de clientes que se han registrado.</p></div>
      case 'tematica':
        return <div><h2>Configuración de Temática</h2><p>Personaliza banners e imágenes del sitio.</p></div>
      default:
        return <div><h2>Sección no encontrada</h2></div>
    }
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">🥚</div>
            <h2>Huevo D'Oro</h2>
          </div>
          <div className="sidebar-role">Panel Administrador</div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((section, idx) => (
            <div key={idx} className="nav-section">
              <div className="nav-section-title">{section.section}</div>
              {section.items.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveSection(item.id)
                      setSidebarOpen(false)
                    }}
                  >
                    <div className="nav-item-icon">
                      <Icon size={20} />
                    </div>
                    <span className="nav-item-text">{item.label}</span>
                    {item.badge && <span className="nav-item-badge">{item.badge}</span>}
                  </div>
                )
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">AD</div>
            <div className="user-details">
              <div className="user-name">Admin</div>
              <div className="user-email">admin@huevooro.com</div>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <div className="dashboard-header">
          <h1>
            {menuItems
              .flatMap(s => s.items)
              .find(i => i.id === activeSection)?.label || 'Dashboard'}
          </h1>
          <div className="dashboard-header-actions">
            <button className="header-btn">
              <Bell size={18} />
              Notificaciones
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1001,
          background: '#4a6fa5',
          color: '#fff',
          border: 'none',
          padding: '0.75rem',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'none'
        }}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  )
}

export default Dashboard
