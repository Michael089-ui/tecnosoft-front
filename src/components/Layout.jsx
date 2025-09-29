// src/components/Layout.jsx (CÓDIGO CORREGIDO)

import React from "react";
import Navbar from "./Navbar";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      
      {/* 1. Navbar: Actúa como el Header completo de la página */}
      <Navbar /> 

      {/* 2. Contenido dinámico */}
      <main>{children}</main>

      {/* 3. Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Tecnosoft. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;