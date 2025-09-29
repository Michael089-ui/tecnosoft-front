// src/components/AdminSidebar.jsx (CORREGIDO Y LIMPIO)
import React from 'react';
import { Link } from 'react-router-dom';
// Asegúrate de que esta ruta es correcta (sube un nivel a src/, entra a styles/)
import '../styles/AdminSidebar.css';

export default function AdminSidebar({ userName = 'Name User' }) {
    return (
        <aside className="admin-sidebar">
            <div className="admin-sidebar__profile">
                <div className="admin-sidebar__profile-circle"></div>
                <p>Bienvenido ({userName})</p>
            </div>
            <nav className="admin-sidebar__nav">
                <ul>
                    {/* DashBoard (Usa la clase 'active' para resaltarlo) */}
                    <li>
                        <Link to="/admin" className="admin-sidebar__nav-item admin-sidebar__nav-item--active">
                            DashBoard
                        </Link>
                    </li>
                    
                    {/* Enlaces anidados (usando rutas relativas a /admin) */}
                    <li><Link to="servicios" className="admin-sidebar__nav-item">Gestionar servicios</Link></li>
                    <li><Link to="usuarios" className="admin-sidebar__nav-item">Usuarios</Link></li>
                    
                    <li className="admin-sidebar__separator"></li>
                    
                    <li><Link to="configuracion" className="admin-sidebar__nav-item">Configuración</Link></li>
                    
                    {/* Logout (Redirige a la pantalla de Login) */}
                    <li><Link to="/login" className="admin-sidebar__nav-item">Logout</Link></li>
                </ul>
            </nav>
        </aside>
    );
}