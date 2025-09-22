# 🛍️ TecnoSoft Frontend - React App

## 📋 Descripción
Aplicación frontend desarrollada con React que muestra una interfaz de productos con diseño moderno y responsive. Incluye un catálogo de productos con paleta de colores personalizada.

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** versión 16 o superior
- **npm** (viene incluido con Node.js)

### Pasos de instalación

1. **Navegar al directorio del proyecto**
   ```bash
   cd D:\xampp\htdocs\frontend\tecnosoft-front
Instalar dependencias

bash
npm install
Ejecutar en modo desarrollo

bash
npm run dev
Abrir en el navegador

La aplicación se abre automáticamente en: http://localhost:3000

Si no se abre, visitar la URL manualmente

Comandos disponibles
bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Previsualiza build de producción
📦 Dependencias
Production
react ^18.2.0 - Biblioteca principal de React

react-dom ^18.2.0 - Renderizado de React en el DOM

Development
@vitejs/plugin-react ^4.0.0 - Plugin de React para Vite

vite ^4.3.0 - Servidor de desarrollo y bundler

🏗️ Estructura del Proyecto
text
tecnosoft-front/
├── node_modules/          # Dependencias instaladas
├── src/                   # Código fuente
│   ├── components/        # Componentes reutilizables
│   │   ├── ProductCard.jsx    # Tarjeta de producto individual
│   │   └── Layout.jsx         # Layout principal con header/footer
│   ├── pages/             # Páginas/views
│   │   └── ProductsPage.jsx   # Página principal de productos
│   ├── data/              # Datos y mockups
│   │   └── products.js        # Array de productos de ejemplo
│   ├── styles/            # Archivos de estilos
│   │   └── global.css         # Estilos globales
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada
├── index.html             # HTML principal
├── vite.config.js         # Configuración de Vite
├── package.json           # Dependencias y scripts
└── package-lock.json      # Versiones exactas de dependencias
🎨 Paleta de Colores
Color	Uso
#1E272E	Fondo oscuro principal
#57606F	Bordes y elementos secundarios
#2E86DE	Botones y acentos azules
#FFFFFF	Texto principal
📱 Características
Diseño responsive con 5 cards por fila en desktop

Layout moderno con header y footer

Navegación estática sin dependencias de routing

Datos mock en archivo separado para fácil modificación

Estilos vanilla CSS sin preprocessors

🔧 Personalización
Agregar nuevos productos
Editar src/data/products.js:

javascript
{
  id: 9,
  name: "Nuevo Producto",
  price: 999,
  description: "Descripción del producto",
  image: "https://via.placeholder.com/300x200",
  category: "Categoría"
}
Modificar estilos
Estilos globales: src/styles/global.css

Estilos de componentes: Modificar estilos inline en cada componente

Cambiar paleta de colores
Actualizar los valores hexadecimales en los componentes y archivos CSS.

📞 Soporte y Troubleshooting
Problemas comunes
Error de puerto: Verificar que el puerto 3000 esté libre

Dependencias faltantes: Ejecutar npm install nuevamente

Errores de consola: Revisar la consola del navegador para detalles

Verificación de instalación
bash
node --version    # Debe ser v16+
npm --version     # Debe ser v8+
npm list          # Lista dependencias instaladas
