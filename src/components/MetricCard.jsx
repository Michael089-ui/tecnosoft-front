// src/components/MetricCard.jsx
import React from 'react';
import '../styles/MetricCard.css';

export default function MetricCard({ title, value, iconClass, colorClass }) {
    return (
        <div className={`metric-card ${colorClass || ''}`}>
            <div className="metric-card__icon-container">
                {/* Reemplaza con un icono real (ej: Font Awesome) si los tienes */}
                <i className={`metric-card__icon ${iconClass || 'fas fa-chart-bar'}`}></i>
            </div>
            <div className="metric-card__details">
                <p className="metric-card__title">{title}</p>
                <h3 className="metric-card__value">{value}</h3>
            </div>
        </div>
    );
}