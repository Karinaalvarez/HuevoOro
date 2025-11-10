# Sistema Web Huevo D'Oro - Documentación del Proyecto

## 📋 Descripción General

Sistema web completo para la gestión y promoción de productos avícolas "Huevo D'Oro", desarrollado con React, PHP y MySQL.

## ✅ Estado Actual - Página de Inicio Completada

### Componentes Implementados:

1. **Navbar** - Barra de navegación con:
   - Logo circular "HUEVO D'ORO"
   - Menú de navegación (Inicio, Nosotros, Productos, Galería, Recetas, Contacto)
   - Icono de usuario para login
   - Diseño responsive

2. **HeroSlider** - Carrusel principal con:
   - 3 slides con transiciones automáticas
   - Controles de navegación (flechas y puntos)
   - Títulos y descripciones superpuestos
   - Imágenes temporales de Unsplash

3. **Presentation** - Sección de presentación con:
   - 3 imágenes destacadas en grid
   - Efectos hover
   - Diseño responsive

4. **WhyChooseUs** - Sección "Por qué Elegirnos" con:
   - 5 características con iconos
   - 4 valores en badges
   - Imagen lateral
   - Layout en dos columnas

5. **Footer** - Pie de página con:
   - Información de ubicación
   - Datos de contacto
   - Enlaces a redes sociales
   - Horarios de atención

## 🎨 Diseño

- **Colores principales:**
  - Azul oscuro: `#2c4a6e`
  - Azul medio: `#4a6fa5`
  - Dorado: `#d4a574`
  - Beige: `#c9b896`

- **Tipografía:** Segoe UI, sans-serif
- **Responsive:** Adaptado para desktop, tablet y móvil

## 📁 Estructura de Archivos Creados

```
huevo-d-oro/
├── backend/
│   ├── config/
│   │   └── database.php          # Configuración de BD
│   ├── .htaccess                 # Configuración Apache
│   └── database.sql              # Script de base de datos
├── public/
│   └── images/
│       ├── README.md             # Guía de imágenes
│       └── placeholder.txt       # URLs temporales
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css        # Barra de navegación
│   │   ├── HeroSlider.jsx/css    # Carrusel principal
│   │   ├── Presentation.jsx/css  # Sección presentación
│   │   ├── WhyChooseUs.jsx/css   # Por qué elegirnos
│   │   └── Footer.jsx/css        # Pie de página
│   ├── pages/
│   │   ├── Inicio.jsx            # Página principal ✅
│   │   ├── Nosotros.jsx          # Placeholder
│   │   ├── Productos.jsx         # Placeholder
│   │   ├── Galeria.jsx           # Placeholder
│   │   ├── Recetas.jsx           # Placeholder
│   │   ├── Contacto.jsx          # Placeholder
│   │   └── Login.jsx             # Placeholder
│   ├── App.jsx                   # Componente principal
│   ├── App.css                   # Estilos globales
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Reset CSS
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── INSTALACION.md                # Guía de instalación
├── PROYECTO.md                   # Este archivo
└── start.bat                     # Script de inicio rápido

```

## 🗄️ Base de Datos

### Tablas Creadas:

1. **usuarios** - Gestión de usuarios (admin/cliente)
2. **productos** - Catálogo de productos
3. **recetas** - Recetas con huevo
4. **categorias_galeria** - Categorías de fotos
5. **galeria** - Galería de imágenes
6. **proveedores** - Proveedores de insumos
7. **contactos** - Mensajes de contacto
8. **banners** - Banners dinámicos
9. **configuracion** - Configuración del sitio

### Usuario Admin por Defecto:
- Email: `admin@huevooro.com`
- Password: `admin123`

## 🚀 Cómo Iniciar el Proyecto

### Opción 1: Usando el script (Windows)
```bash
# Doble clic en start.bat
```

### Opción 2: Manual
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

### Requisitos Previos:
1. ✅ XAMPP corriendo (Apache + MySQL)
2. ✅ Base de datos importada desde `backend/database.sql`
3. ✅ Node.js instalado

## 📝 Próximas Páginas a Desarrollar

### Orden Sugerido:

1. **Login/Registro** - Sistema de autenticación
2. **Dashboard Admin** - Panel de administración
3. **Gestión de Productos** - CRUD de productos
4. **Página de Productos (Cliente)** - Catálogo público
5. **Gestión de Recetas** - CRUD de recetas
6. **Página de Recetas (Cliente)** - Recetas públicas
7. **Gestión de Galería** - CRUD de galería
8. **Página de Galería (Cliente)** - Galería pública
9. **Gestión de Proveedores** - CRUD de proveedores
10. **Página de Contacto** - Formulario de contacto
11. **Notificaciones** - Sistema de notificaciones
12. **Gestión de Usuarios** - CRUD de usuarios
13. **Gestión de Banners** - Administrar banners
14. **Página Nosotros** - Información de la empresa

## 🎯 Funcionalidades Pendientes

### Backend PHP:
- [ ] API de autenticación (login/registro)
- [ ] API CRUD de productos
- [ ] API CRUD de recetas
- [ ] API CRUD de galería
- [ ] API CRUD de proveedores
- [ ] API de contacto
- [ ] API de notificaciones
- [ ] API de configuración
- [ ] Subida de imágenes
- [ ] Validaciones

### Frontend React:
- [ ] Sistema de autenticación
- [ ] Dashboard de administrador
- [ ] Formularios de gestión
- [ ] Validaciones con JavaScript
- [ ] Integración AJAX
- [ ] Manejo de estados
- [ ] Protección de rutas
- [ ] Notificaciones en tiempo real

## 📸 Imágenes

Actualmente se usan imágenes temporales de Unsplash. Para usar imágenes propias:

1. Coloca las imágenes en `public/images/`
2. Actualiza las rutas en los componentes:
   - `HeroSlider.jsx` - Líneas 14, 21, 28
   - `Presentation.jsx` - Líneas 8, 13, 18
   - `WhyChooseUs.jsx` - Línea 73

## 🔧 Tecnologías Utilizadas

- **Frontend:**
  - React 18
  - React Router DOM
  - Lucide React (iconos)
  - Vite (build tool)

- **Backend:**
  - PHP 7.4+
  - MySQL
  - PDO para conexión a BD

- **Estilos:**
  - CSS puro
  - Diseño responsive
  - Flexbox y Grid

## 📞 Soporte

Para continuar con el desarrollo, muéstrame el diseño de la siguiente página que quieres implementar.

---

**Última actualización:** Noviembre 2024
**Estado:** Página de Inicio ✅ Completada
