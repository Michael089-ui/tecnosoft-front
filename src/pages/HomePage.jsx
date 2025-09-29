// Generated from image: image_550b06.png (Mockup 1: Home)
import React from 'react';
import heroImage from '../image/servicios.png'; // Usamos una imagen existente como placeholder
import '../styles/HomePage.css';

// Subcomponente para la sección Hero
const HomeHero = () => (
  <section className="page-home__hero">
    <div className="page-home__hero-content-wrapper">
      {/* Usamos servicios.png como ejemplo, pero idealmente sería una imagen de hero */}
      <img src={heroImage} alt="Innovación en Desarrollo de Software" className="page-home__hero-image" />
      <div className="page-home__hero-text">
        <h1>Innovación en Desarrollo de Software</h1>
        <p>En TecnoSoft impulsamos tu negocio con soluciones digitales a la medida</p>
        <a href="/servicios" className="page-home__hero-button">Conoce nuestros servicios</a>
      </div>
    </div>
  </section>
);

// Subcomponente para la sección Quiénes Somos
const HomeAbout = () => (
  <section className="page-home__about">
    <div className="page-home__about-content">
      <h2>¿Quiénes somos?</h2>
      <p>
        TecnoSoft es una empresa de servicios tecnológicos enfocada en desarrollo de software, 
        soluciones digitales y consultoría en innovación tecnológica
      </p>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main className="page-home">
      <HomeHero />
      <HomeAbout />
    </main>
  );
}