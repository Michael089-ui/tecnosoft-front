// src/components/Navbar.jsx (El código que debería funcionar)

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    // Usa solo un contenedor raíz, que será la barra de navegación
    <nav className="navbar"> 
        <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </nav>
  );
}