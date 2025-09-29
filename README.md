````markdown
# 🚀 TecnoSoft: Plataforma E-commerce y Servicios Tecnológicos

[![React Badge](https://img.shields.io/badge/Tecnología-React%20JS-blue)](https://reactjs.org/)
[![Vite Badge](https://img.shields.io/badge/Build%20Tool-Vite-purple)](https://vitejs.dev/)
[![Status Badge](https://img.shields.io/badge/Estado-Finalizado%20(Frontend)-brightgreen)](link-a-tu-repo-de-github)

## 🌟 Descripción General

**TecnoSoft** es la interfaz de usuario de una plataforma moderna de **e-commerce enfocada en productos y servicios tecnológicos**. Este frontend está construido con **React** y **Vite**, ofreciendo una experiencia de usuario rápida y modular.

### ¿Qué hace TecnoSoft?

* **E-commerce de Productos:** Muestra un catálogo de equipos (laptops, monitores, impresoras 3D, etc.) con gestión de *assets* locales.
* **Gestión de Servicios:** Incluye una sección administrativa para gestionar servicios como Consultoría IT y Desarrollo Web (CRUD).
* **Diseño Modular:** Componentes reutilizables (`ProductCard`, `Layout`, etc.) para un mantenimiento eficiente.

---

## 🛠 Puesta en Marcha

Para levantar el proyecto en tu entorno local.

### Prerrequisitos

* [Node.js](https://nodejs.org/) (versión LTS)
* npm o yarn
* Git

### Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://www.youtube.com/watch?v=eQMcIGVc8N0](https://www.youtube.com/watch?v=eQMcIGVc8N0)
    cd tecnosoft-front
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o yarn install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    # El frontend se ejecutará en http://localhost:3000
    ```

---

## 💻 Características Principales y Estructura

### Vista de Productos Terminada

La sección clave del proyecto es la vista de catálogo (`ProductsPage`).

* **Implementación:** Componente `ProductsPage.jsx` con un diseño de *grid* adaptable (utilizando `ProductsPage.css`).
* **Carga de Imágenes:** Los *assets* (10 imágenes de productos) se gestionan localmente en `src/assets/` y se cargan mediante importaciones de módulos en `src/data/products.js`.
* **Componente Base:** Uso del componente `ProductCard.jsx` para la visualización individual de cada artículo.

### Estructura de Archivos

````

src/
├── assets/         \# 10 imágenes de productos (laptops, monitores, impresoras, etc.)
├── components/     \# Elementos de UI reutilizables (ProductCard, Navbar, Footer, Layout)
├── data/           \# Datos estáticos (Mock data)
│   └── products.js \# Arreglo de productos y las importaciones de assets
├── pages/          \# Vistas principales (ProductsPage, LoginPage, AdminDashboardPage)
└── styles/         \# Archivos CSS (ProductsPage.css, ProductCard.css, etc.)

```

---

## ⚙️ Notas de Configuración (Para Desarrolladores)

Durante la implementación, se realizaron ajustes cruciales para la resolución de *assets* en el *bundler* (Vite):

1.  **Importación por Defecto:** Se estandarizó la importación de la *mock data* en `ProductsPage.jsx` a **`import products from '../data/products';`** para coincidir con la convención `export default` en `products.js`.
2.  **Nombres de Assets:** Se corrigieron los errores de compilación (`Failed to resolve import...`) al asegurar que todas las importaciones de imagen en `products.js` coincidieran **exactamente** con los nombres de archivo en disco, eliminando dobles extensiones (`.jpg.jpg`) y estandarizando mayúsculas/minúsculas.

---

## 🤝 Contribuciones

Si deseas mejorar o extender esta plataforma, eres bienvenido a enviar un *Pull Request*.
```
