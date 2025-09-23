// src/components/Login.jsx

import React from 'react';
import './Login.css'; // 1. Importamos la hoja de estilos

function Login() {
  // El return contiene toda tu estructura HTML, ahora como JSX
  return (
    <>
      {/* La etiqueta vacía <> ... </> es un Fragmento, sirve para agrupar elementos sin crear un div extra */}
      
      {/* Barra Superior con Iconos */}
      <header className="top-bar">
        <div className="icons">
          <span>🌙</span>
          <span>⚙️</span>
        </div>
      </header>

      {/* Contenedor Principal */}
      <main className="login-container">
        <div className="logo"></div>
        <h1>Technosoft</h1>

        <form className="login-form">
          <input type="text" placeholder="Nombre de Usuario" required />
          <input type="password" placeholder="Contraseña de Usuario" required />
          <a href="#" className="forgot-password">¿Olvidaste Tu Contraseña?</a>
          <button type="submit">Ingresar</button>
        </form>
      </main>

      {/* Barra Inferior */}
      <footer>
        <p>TechnoSoft Solutions - Login 2025</p>
      </footer>
    </>
  );
}

export default Login; // Esto permite que otros archivos usen este componente