// src/pages/AdminUsuariosPage.jsx (CÓDIGO COMPLETO Y CORREGIDO)

import React from 'react';
// ¡LÍNEA FALTANTE! Importa el CSS aquí.
import '../styles/AdminUsuariosPage.css'; 

// Mock data (incluye esto en tu archivo si no lo tienes)
const mockUsers = [
    { id: 1, name: 'Juan Pérez', email: 'juan@ts.com', role: 'Admin', status: 'Activo' },
    { id: 2, name: 'Ana García', email: 'ana@ts.com', role: 'Editor', status: 'Inactivo' },
    { id: 3, name: 'Luis Martínez', email: 'luis@ts.com', role: 'Colaborador', status: 'Activo' },
    { id: 4, name: 'Sofía Díaz', email: 'sofia@ts.com', role: 'Invitado', status: 'Activo' },
    { id: 5, name: 'Carlos López', email: 'carlos@ts.com', role: 'Admin', status: 'Inactivo' },
    { id: 6, name: 'Elena Torres', email: 'elena@ts.com', role: 'Editor', status: 'Activo' },
];

export default function AdminUsuariosPage() {
    return (
        <div className="admin-usuarios-page">
            <header className="admin-usuarios-header">
                {/* Asegúrate de tener una librería de iconos (ej. Font Awesome) 
                    para que se muestre el icono fas fa-users */}
                <i className="fas fa-users admin-usuarios-icon"></i> 
                <h1>Gestión de Usuarios</h1>
            </header>
            
            <section className="admin-usuarios-list-container">
                <div className="admin-usuarios-controls">
                    <p className="admin-usuarios-status-text">Usuarios Activos: <span>{mockUsers.filter(u => u.status === 'Activo').length}</span></p>
                    <button className="admin-usuarios-btn-new">Añadir Nuevo Usuario</button>
                </div>
                
                <ul className="admin-usuarios-list">
                    {mockUsers.map(user => (
                        <li key={user.id} className="admin-usuarios-list-item">
                            <span className="admin-usuarios-name">{user.name}</span>
                            <span className="admin-usuarios-role">({user.role})</span>
                            <span className={`admin-usuarios-status status-${user.status.toLowerCase()}`}>{user.status}</span>
                            <div className="admin-usuarios-actions">
                                <button className="admin-usuarios-btn-edit">Editar</button>
                                <button className="admin-usuarios-btn-delete">Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}