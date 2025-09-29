// Generated from image: image_54b930.png (Detalle de un servicio)
import React from 'react';
// import ServiceDetail from '../components/ServiceDetail'; // Componente no usado directamente
import '../styles/DetalleServicioPage.css';

const ServiceForm = () => (
  <form className="page-detalleservicio__form">
    {/* Columna izquierda: Imagen y botones */}
    <div className="page-detalleservicio__left-column">
      <div className="page-detalleservicio__image-placeholder">
        {/* Placeholder de imagen */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 4-4 4M8 12h8"></path></svg>
      </div>
      <div className="page-detalleservicio__buttons-group">
        <button type="button" className="page-detalleservicio__button page-detalleservicio__button--save">Guardar</button>
        <button type="button" className="page-detalleservicio__button page-detalleservicio__button--cancel">Eliminar</button>
      </div>
    </div>

    {/* Columna derecha: Detalles del formulario */}
    <div className="page-detalleservicio__right-column">
      <div className="page-detalleservicio__field-row">
        <label className="page-detalleservicio__label">Descripción del producto</label>
        <input type="text" className="page-detalleservicio__input" placeholder="Descripción breve" />
      </div>
      <div className="page-detalleservicio__field-row">
        <label className="page-detalleservicio__label">Descripción detallada</label>
        <textarea className="page-detalleservicio__input page-detalleservicio__textarea" placeholder="Descripción larga"></textarea>
      </div>
      <div className="page-detalleservicio__field-row">
        <label className="page-detalleservicio__label">Cantidad en Stock</label>
        <input type="number" className="page-detalleservicio__input" placeholder="Cantidad" />
      </div>
      <div className="page-detalleservicio__field-row">
        <label className="page-detalleservicio__label">Tasa de envío</label>
        <input type="text" className="page-detalleservicio__input" placeholder="Tasa fija" />
      </div>
      <div className="page-detalleservicio__field-row">
        <label className="page-detalleservicio__label">¿Está en promoción?</label>
        <select className="page-detalleservicio__input">
          <option>¿Está en promoción?</option>
          <option>Sí</option>
          <option>No</option>
        </select>
      </div>
    </div>
  </form>
);

export default function DetalleServicioPage() {
  return (
    <main className="page-detalleservicio">
      {/* Barra azul superior, simulada con el fondo del main y padding */}
      <header className="page-detalleservicio__header-bar" /> 
      
      <section className="page-detalleservicio__content-container">
        <ServiceForm />
      </section>

      {/* El footer ya viene del Layout */}
    </main>
  );
}