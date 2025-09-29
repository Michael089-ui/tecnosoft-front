// src/pages/AdminConfigPage.jsx (MODIFICADO)
import React from 'react';
import '../styles/AdminConfigPage.css'; // Asegúrate de importar el CSS

const mockSettings = {
    general: { title: "General", description: "Configuración global de la aplicación." },
    security: { title: "Seguridad y Roles", description: "Gestión de permisos y sesiones." },
    integrations: { title: "Integraciones", description: "Conexión con servicios externos." },
};

// Componente de una tarjeta de ajuste individual
const SettingCard = ({ title, description, children }) => (
    <div className="config-card">
        <h3 className="config-card__title">{title}</h3>
        <p className="config-card__description">{description}</p>
        <div className="config-card__content">
            {children}
        </div>
    </div>
);

export default function AdminConfigPage() {
    return (
        <div className="admin-config-page">
            <header className="admin-config-header">
                {/* Ícono de engranaje para configuración */}
                <i className="fas fa-cog admin-config-icon"></i> 
                <h1>Configuración del Sistema</h1>
            </header>

            <section className="config-settings-grid">
                
                <SettingCard 
                    title={mockSettings.general.title} 
                    description={mockSettings.general.description}
                >
                    <label className="config-label">Nombre de la Empresa:</label>
                    <input type="text" value="TechnoSoft Solutions" className="config-input" />
                    <label className="config-label">Zona Horaria:</label>
                    <select className="config-select">
                        <option>America/Lima</option>
                        <option>America/Bogota</option>
                    </select>
                </SettingCard>

                <SettingCard 
                    title={mockSettings.security.title} 
                    description={mockSettings.security.description}
                >
                    <div className="config-toggle-group">
                        <label className="config-label">Doble Factor de Autenticación:</label>
                        <input type="checkbox" defaultChecked className="config-checkbox" />
                    </div>
                    <label className="config-label">Máximo de Sesiones:</label>
                    <input type="number" value="5" className="config-input" />
                </SettingCard>

                <SettingCard 
                    title={mockSettings.integrations.title} 
                    description={mockSettings.integrations.description}
                >
                    <label className="config-label">API Key de Pagos:</label>
                    <input type="text" placeholder="******************" className="config-input config-input--readonly" readOnly />
                    <button className="config-button config-button--action">Generar Nueva Clave</button>
                </SettingCard>

            </section>
        </div>
    );
}