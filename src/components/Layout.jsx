import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1A2228',
        padding: '20px 0',
        borderBottom: '1px solid #57606F'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ color: '#2E86DE', fontSize: '1.5rem', margin: 0 }}>🏪 TecnoSoft</h1>
            <nav>
              <span style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
                Bienvenido
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1A2228',
        padding: '20px 0',
        borderTop: '1px solid #57606F',
        marginTop: 'auto'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            color: '#57606F',
            fontSize: '0.8rem'
          }}>
            <p style={{ margin: 0 }}>© 2024 TecnoSoft. Todos los derechos reservados.</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#privacidad" style={{ color: '#57606F', textDecoration: 'none' }}>
                Política de privacidad
              </a>
              <a href="#terminos" style={{ color: '#57606F', textDecoration: 'none' }}>
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;