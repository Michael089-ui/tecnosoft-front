// src/components/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

export default function ProductCard({ product, isDarkDesign = false }) {
    const cardClass = `product-card ${isDarkDesign ? 'product-card--dark' : ''}`;

    // ✅ CORRECCIÓN: Usar la imagen real del producto en lugar del placeholder
    const imageUrl = product.imageSrc || `https://via.placeholder.com/200x150?text=${product.name.replace(/ /g, '+')}`;

    return (
        <Link to={`/productos/${product.id}`} className={cardClass}>
            <div className="product-card__image-container">
                <img 
                    src={imageUrl} 
                    alt={product.name} 
                    className="product-card__image"
                    onError={(e) => {
                        // Fallback al placeholder si la imagen falla
                        console.error(`Error cargando imagen para: ${product.name}`);
                        e.target.src = `https://via.placeholder.com/200x150?text=${product.name.replace(/ /g, '+')}`;
                    }}
                /> 
            </div>
            <div className="product-card__details">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__price">${product.price}</p>
            </div>
        </Link>
    );
}