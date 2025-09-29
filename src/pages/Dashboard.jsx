// src/pages/AdminDashboardPage.jsx (MODIFICADO)
import React from 'react';
import '../styles/AdminDashboardPage.css'; 

// Mock data para la tabla
const mockServicesData = [
    { id: 1, nombre: 'Desarrollo Web', precio: 'S/ 900.000', estado: 'Activo' },
    { id: 2, nombre: 'Consultoría IT', precio: 'S/ 500.000', estado: 'Pendiente' },
    { id: 3, nombre: 'Seguridad Cloud', precio: 'S/ 1.200.000', estado: 'Activo' },
];

// Componente de la tabla CRUD
const ServicesCrud = () => (
    <section className="page-admindashboard__crud-section">
        {/* Barra de Menú de Gestión (dentro del contenido principal) */}
        <div className="page-admindashboard__menu-bar">
            <button className="page-admindashboard__menu-button">Menú Gestión de Servicios</button>
        </div>
        
        <header className="page-admindashboard__crud-header">
            <button className="page-admindashboard__crud-button-new">Crear Nuevo Servicio</button>
        </header>

        <div className="page-admindashboard__table-container">
            <table className="page-admindashboard__table">
                <thead>
                    <tr className="page-admindashboard__table-header-row">
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mockServicesData.map(service => (
                        <tr key={service.id} className="page-admindashboard__table-data-row">
                            <td data-label="Nombre">{service.nombre}</td>
                            <td data-label="Precio">{service.precio}</td>
                            <td data-label="Estado">
                                <span className={`page-admindashboard__status page-admindashboard__status--${service.estado.toLowerCase().replace(/í/g, 'i')}`}>
                                    {service.estado}
                                </span>
                            </td>
                            <td data-label="Acciones" className="page-admindashboard__actions-cell">
                                <a href={`/detalle-servicio/${service.id}`} className="page-admindashboard__action-button page-admindashboard__action-button--edit">Editar</a>
                                <button className="page-admindashboard__action-button page-admindashboard__action-button--delete">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
);

// Este componente ahora solo retorna el contenido específico del Dashboard.
export default function AdminDashboardPage() {
    return (
        <ServicesCrud />
    );
}