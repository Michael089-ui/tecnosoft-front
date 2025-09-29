// src/pages/ListadoServiciosPage.jsx
import React from 'react';
import mockServices from '../data/services';
import '../styles/ListadoServiciosPage.css';

const ServiceCard = ({ service }) => {
    return (
        <article className="page-listadoservicios__card">
            <div className="page-listadoservicios__card-content">
                <div className="page-listadoservicios__card-image-placeholder">
                    <img 
                        src={service.imageSrc} 
                        alt={service.title}
                        className="service-image"
                        onError={(e) => {
                            console.error(`Error cargando imagen para: ${service.name}`);
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>';
                        }}
                    />
                </div>
                <h3>{service.title}</h3>
                <p className="service-header">{service.header}</p>
                <p className="service-description">{service.description}</p>
                <div className="page-listadoservicios__card-actions">
                    <button className="page-listadoservicios__card-button page-listadoservicios__card-button--primary">
                        Detalle
                    </button>
                    <button className="page-listadoservicios__card-button page-listadoservicios__card-button--secondary">
                        Desde producto
                    </button>
                </div>
            </div>
        </article>
    );
};

export default function ListadoServiciosPage() {
    return (
        <main className="page-listadoservicios">
            <header className="page-listadoservicios__header">
                <h1>Nuestros Servicios</h1>
            </header>
            <section className="page-listadoservicios__grid">
                {mockServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </section>
        </main>
    );
}