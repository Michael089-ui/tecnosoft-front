// src/App.js

import Login from './components/Login'; // Importas tu componente

function App() {
  return (
    // Le añadimos una clase al div principal para poder centrar el contenido
    <div className="app-container">
      <Login /> {/* ¡Y aquí lo usas como si fuera una etiqueta HTML! */}
    </div>
  );
}

export default App;