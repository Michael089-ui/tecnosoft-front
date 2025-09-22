import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import Layout from '../components/Layout';

const ProductsPage = () => {
  return (
    <Layout>
      <div style={{ padding: '40px 0', minHeight: '80vh' }}>
        <div className="container">
          {/* Título principal */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '40px' 
          }}>
            <h1 style={{ 
              color: '#FFFFFF', 
              fontSize: '2.2rem',
              marginBottom: '10px'
            }}>
              Productos Disponibles
            </h1>
            <p style={{ 
              color: '#A0AEC0', 
              fontSize: '1rem'
            }}>
              Descubre nuestra selección de productos
            </p>
          </div>

          {/* Grid de productos - 5 POR HILERA */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            gap: '20px',
            padding: '20px 0'
          }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Contador de productos */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: '30px',
            color: '#57606F',
            fontSize: '0.9rem'
          }}>
            <p>{products.length} productos en total</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;