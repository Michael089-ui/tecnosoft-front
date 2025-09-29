// src/pages/AdminDashboardPage.jsx (MODIFICADO para incluir Métricas)
import React from 'react';
import MetricCard from '../components/MetricCard'; // IMPORTA EL NUEVO COMPONENTE
import '../styles/AdminDashboardPage.css';

// Mock data para la tabla (se mantiene)
const mockServicesData = [
    { id: 1, nombre: 'Desarrollo Web', precio: 'S/ 900.000', estado: 'Activo' },
    { id: 2, nombre: 'Consultoría IT', precio: 'S/ 500.000', estado: 'Pendiente' },
    { id: 3, nombre: 'Seguridad Cloud', precio: 'S/ 1.200.000', estado: 'Activo' },
];

const mockMetrics = [
    { title: "Servicios Activos", value: "34", iconClass: "fas fa-check-circle", colorClass: "color-green" },
    { title: "Ventas (Últimos 30 Días)", value: "S/ 5.8K", iconClass: "fas fa-dollar-sign", colorClass: "color-blue" },
    { title: "Usuarios Registrados", value: "1,204", iconClass: "fas fa-users", colorClass: "color-orange" },
    { title: "Tickets Abiertos", value: "12", iconClass: "fas fa-exclamation-triangle", colorClass: "color-red" },
];

export default function AdminDashboardPage() {
    return (
        <div className="admin-dashboard__container">
            
            {/* 1. Sección de Métricas (Las Cards) */}
            <section className="admin-dashboard__metrics-grid">
                {mockMetrics.map((metric, index) => (
                    <MetricCard 
                        key={index}
                        title={metric.title}
                        value={metric.value}
                        iconClass={metric.iconClass}
                        colorClass={metric.colorClass}
                    />
                ))}
            </section>
            
            {/* 2. Sección de la Tabla CRUD (Anteriormente todo el componente) */}
            <section className="page-admindashboard__crud-section">
                <div className="page-admindashboard__menu-bar">
                    <button className="page-admindashboard__menu-button">Menú Gestión de Servicios</button>
                </div>
                
                <header className="page-admindashboard__crud-header">
                    <h2>Gestión de Servicios (CRUD)</h2>
                    <button className="page-admindashboard__crud-button-new">Crear Nuevo Servicio</button>
                </header>

                {/* Contenido de la Tabla (Mantener el código de la tabla aquí) */}
                <div className="page-admindashboard__table-container">
                    {/* ... (código de la tabla de servicios) ... */}
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
        </div>
    );
}