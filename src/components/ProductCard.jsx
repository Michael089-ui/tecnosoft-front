import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      background: '#2A343D',
      border: '1px solid #57606F',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
      height: '250px'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img 
        src={product.image} 
        alt={product.name}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderRadius: '6px',
          marginBottom: '15px'
        }}
      />
      
      <h3 style={{
        color: '#FFFFFF',
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '8px'
      }}>
        {product.name}
      </h3>
      
      <p style={{
        color: '#2E86DE',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        margin: '0'
      }}>
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;