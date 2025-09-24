const ProductCard = ({ product }) => {
  const handleClick = () => {
    // Redirige al proyecto del detalle con el ID en querystring
    window.location.href = `http://localhost:5173/?id=${product.id}`;
  };

  return (
    <div
      style={{
        background: '#2A343D',
        border: '1px solid #57606F',
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderRadius: '6px',
          marginBottom: '15px',
        }}
      />
      <h3 style={{ color: '#FFFFFF' }}>{product.name}</h3>
      <p style={{ color: '#2E86DE', fontWeight: 'bold' }}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
