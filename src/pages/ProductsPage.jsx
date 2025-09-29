// src/pages/ProductsPage.jsx

import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products'; 
import '../styles/ProductsPage.css';

const ProductsPage = () => {
    return (
        <div className="products-page">
            <div className="products-container">
                
                {/* Título principal */}
                <div className="products-header">
                    <h1 className="products-title">Productos Disponibles</h1>
                    <p className="products-subtitle">Descubre nuestra selección de productos</p>
                </div>

                {/* Grid de productos */}
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                        />
                    ))}
                </div>

                {/* Contador de productos */}
                <div className="products-counter">
                    <p>{products.length} productos en total</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;