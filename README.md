💻 Proyecto TecnoSoft - Frontend
Este proyecto constituye la interfaz de usuario (Frontend) de la aplicación TecnoSoft, desarrollado usando React y Vite.

🚀 Inicio Rápido
Prerrequisitos
Asegúrate de tener instalado Node.js (versión LTS recomendada) y npm (o yarn) en tu sistema.

Instalación
Clona este repositorio o descarga los archivos.

Navega a la carpeta raíz del proyecto (/tecnosoft-front).

Instala las dependencias:

Bash

npm install
# o si usas yarn
yarn install
Ejecución
Para iniciar el servidor de desarrollo (Vite) en localhost:3000:

Bash

npm run dev
# o
yarn dev
📂 Estructura del Proyecto
La estructura del proyecto sigue una convención clara, organizando los archivos por su función:

src/
├── assets/         # Recursos estáticos (Imágenes de productos, logos, etc.)
│   ├── laptop.jpg
│   ├── teclado_mecanico.jpg
│   └── ... (Tus 10 imágenes corregidas)
├── components/     # Componentes reutilizables (ProductCard, Layout, Navbar, etc.)
│   ├── ProductCard.jsx
│   └── Layout.jsx
├── data/           # Datos estáticos (Mock data)
│   └── products.js # LISTA DE PRODUCTOS Y RUTAS DE IMAGEN
├── pages/          # Vistas principales (ProductsPage, LoginPage, AdminDashboardPage)
│   └── ProductsPage.jsx
└── styles/         # Archivos CSS globales y de componentes
    ├── ProductsPage.css
    └── ProductCard.css
🌟 Configuraciones y Cambios Importantes
Durante el desarrollo, se realizaron ajustes críticos para asegurar el correcto funcionamiento de la vista de productos (ProductsPage.jsx) y la carga de imágenes locales:

1. Gestión de Imágenes de Productos
Las imágenes de los 10 productos fueron movidas a la carpeta src/assets/ para una gestión centralizada de recursos estáticos.

Archivo Modificado: src/data/products.js

Implementación: Se utiliza el patrón de importación de módulos de JavaScript para cargar las imágenes, evitando rutas relativas estáticas:

JavaScript

import laptopImg from '../assets/laptop.jpg'; 
// ...
const mockProducts = [
    { id: 1, name: '...', imageSrc: laptopImg, ... }
];
export default mockProducts;
Corrección de Rutas: Se implementó una convención estricta de minúsculas y guiones bajos en los nombres de archivo (teclado_mecanico.jpg) para evitar errores de compilación ([plugin:vite:import-analysis] Failed to resolve import...).

2. Vista de Productos (ProductsPage.jsx)
Se corrigió la manera en que se acceden a los datos de los productos para resolver los errores de importación.

Archivo Modificado: src/pages/ProductsPage.jsx

Corrección de Importación: Se cambió la importación nombrada a una importación por defecto, alineándose con el export default de products.js:

Antes (Error)	Después (Correcto)
import { products } from '../data/products';	import products from '../data/products';

Export to Sheets
3. Componente ProductCard.jsx
Este componente utiliza la propiedad imageSrc del objeto producto para mostrar la imagen:

JavaScript

<img src={product.imageSrc} alt={product.name} className="product-card__image" />
Asegúrate de que este componente también importe su CSS (import './ProductCard.css';) para aplicar los estilos visuales de la tarjeta (fondo, colores, etc.).



puedes exportarlo para importarlo directamente a git hub?


No puedo interactuar directamente con tu sistema de archivos ni exportar proyectos directamente a GitHub, ya que soy un modelo de lenguaje y no tengo acceso a tu entorno local o a tus cuentas externas.

Sin embargo, puedo darte los pasos exactos que debes seguir en tu terminal para crear un repositorio en GitHub e importar todo tu proyecto, incluyendo todos los cambios que realizamos.
