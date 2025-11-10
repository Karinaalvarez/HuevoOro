# Guía de Instalación - Huevo D'Oro

## Requisitos Previos

- **XAMPP** instalado (Apache + MySQL + PHP 7.4 o superior)
- **Node.js** v16 o superior
- **npm** o **yarn**

## Paso 1: Configurar la Base de Datos

1. Inicia XAMPP y activa **Apache** y **MySQL**
2. Abre phpMyAdmin en tu navegador: `http://localhost/phpmyadmin`
3. Importa el archivo de base de datos:
   - Clic en "Importar"
   - Selecciona el archivo `backend/database.sql`
   - Clic en "Continuar"

**Usuario Admin por defecto:**
- Email: `admin@huevooro.com`
- Password: `admin123`

## Paso 2: Configurar el Backend PHP

1. El backend ya está configurado en `backend/config/database.php`
2. Si necesitas cambiar las credenciales de MySQL, edita este archivo
3. Asegúrate de que XAMPP esté corriendo

## Paso 3: Instalar Dependencias de React

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

## Paso 4: Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en: `http://localhost:3000`

## Paso 5: Agregar Imágenes

Coloca las imágenes necesarias en la carpeta `public/images/`:

- `slider1.jpg`, `slider2.jpg`, `slider3.jpg` - Para el slider principal
- `gallinas.jpg`, `huevos.jpg`, `granja.jpg` - Para la sección de presentación
- `pollito.jpg` - Para la sección "Por qué elegirnos"

## Estructura del Proyecto

```
huevo-d-oro/
├── backend/              # API PHP
│   ├── config/          # Configuración
│   ├── api/             # Endpoints
│   └── database.sql     # Script de BD
├── public/              # Archivos estáticos
│   └── images/          # Imágenes
├── src/                 # Código React
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas
│   └── App.jsx         # Componente principal
└── package.json        # Dependencias

```

## Próximos Pasos

Una vez que tengas la página de inicio funcionando, continuaremos con:

1. Página de Login/Registro
2. Dashboard de Administrador
3. Gestión de Productos
4. Gestión de Recetas
5. Gestión de Galería
6. Y más...

## Solución de Problemas

### Error de conexión a MySQL
- Verifica que MySQL esté corriendo en XAMPP
- Revisa las credenciales en `backend/config/database.php`

### Puerto 3000 ocupado
- Cambia el puerto en `vite.config.js`

### Imágenes no se muestran
- Verifica que las imágenes estén en `public/images/`
- Verifica los nombres de archivo
