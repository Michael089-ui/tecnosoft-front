
TecnoSoft 

Project Title	TecnoSoft - Frontend (React/Vite)
Este proyecto constituye la interfaz de usuario (Frontend) de la aplicación TecnoSoft. Finaliza la implementación de la vista ProductsPage e integra todos los assets de producto de forma local.


2. Getting Started (Inicio Rápido)

Prerequisites	Asegúrate de tener instalado Node.js (versión LTS recomendada) y npm (o yarn) en tu sistema.

Installation	

1. Clona el repositorio.
2. Navega a la carpeta raíz. 
3. Ejecuta 

npm install (o yarn install).
Run Locally	Para iniciar el servidor de desarrollo (Vite) en 
localhost:3000: npm run dev (o yarn dev).

Export to Sheets
3. Features (Funcionalidades)	

* Vista de Productos Terminada: Implementación completa de la vista ProductsPage con diseño de grid adaptable.
* Gestión de Assets Locales: Se integraron los 10 assets de imagen de producto usando la carpeta src/assets/.
* Estructura Modular: Organización clara de archivos usando convenciones de React (Components, Pages, Data, Styles).

4. Technical Details & Fixes (Detalles Técnicos y Correcciones)
Usa esta sección para documentar las soluciones a los problemas de configuración más críticos.

* Rutas de Imágenes: Se corrigió el error de "Failed to resolve import" estandarizando los nombres de archivo (src/assets/) a minúsculas y usando guiones bajos (_) para la compatibilidad con el bundler (Vite).
* Corrección de Importación: La importación de datos en ProductsPage.jsx se corrigió a import products from '../data/products'; para coincidir con la exportación por defecto de products.js.
* Archivo de Datos (products.js): Implementación del patrón de importación de módulos de JS para cargar las imágenes de forma dinámica, usando la variable imageSrc en cada objeto.

5. Project Structure (Estructura del Proyecto)
En esta sección, puedes copiar y pegar el bloque de código de la estructura para que se vea claro.



src/
├── assets/         # Recursos estáticos (Imágenes de productos, logos, etc.)
│   └── ... (Imágenes de productos)
├── components/     # Componentes reutilizables (ProductCard, Layout, Navbar, etc.)
├── data/           # Datos estáticos (Mock data)
│   └── products.js # LISTA DE PRODUCTOS Y RUTAS DE IMAGEN
├── pages/          # Vistas principales (ProductsPage, LoginPage, etc.)
│   └── ProductsPage.jsx
└── styles/         # Archivos CSS globales y de componentes
