import React from "react";
import { useNavigate } from "react-router-dom";
import "./MockupTecnoSoft.css";
const MockupTecnoSoft = () => {
  const navigate = useNavigate();
  return (
    <div className="mockup">
      <section className="cards-container">
        <div className="card small-card">
          <h2>Consultoría</h2>
          <p>
            Te asesoramos para implementar las mejores soluciones tecnológicas
            en tu empresa.
          </p>
          <button className="btn" onClick={() => navigate("/consultoria")}>
            Ver más
          </button>
        </div>

        <div className="card big-card">
          <img
            src="https://global.tiffin.edu/img/article/cuales-son-las-etapas-del-desarrollo-de-software.webp"
            alt="Desarrollo de software"
          />
          <div className="big-card-content">
            <h1>Innovación en Desarrollo de Software</h1>
            <p>
              En TecnoSoft impulsamos tu negocio con soluciones digitales a la
              medida.
            </p>
            <button className="btn" onClick={() => navigate("/productos")}>
              Conoce nuestros servicios
            </button>
          </div>
        </div>

        <div className="card small-card">
          <h2>Soporte</h2>
          <p>
            Brindamos soporte técnico y mantenimiento para garantizar la
            continuidad de tu negocio.
          </p>
          <button className="btn" onClick={() => navigate("/soporte")}>
            Ver más
          </button>
        </div>
      </section>
    </div>
  );
};
export default MockupTecnoSoft;
