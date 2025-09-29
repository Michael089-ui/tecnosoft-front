// src/pages/LoginPage.jsx

import React from 'react';
import '../styles/LoginPage.css'; // Asegúrate de que el CSS esté importado

export default function LoginPage() {
    return (
        // Contenedor principal para centrar el formulario
        <div className="login-page"> 
            
            {/* Tarjeta del Formulario de Login */}
            <div className="login-card">
                <div className="login-avatar-placeholder"></div>
                
                <h2 className="login-title">Technosoft</h2>

                <form className="login-form">
                    <input type="text" placeholder="Nombre de Usuario" className="login-input" />
                    <input type="password" placeholder="Contraseña de Usuario" className="login-input" />
                    
                    <a href="/reset-password" className="login-forgot-password">
                        ¿Olvidaste Tu Contraseña?
                    </a>

                    <button type="submit" className="login-button">
                        Ingresar
                    </button>
                </form>
            </div>
            
            {/* Opcional: Footer inferior pequeño del mockup */}
            <div className="login-bottom-bar">
                TechnoSoft Solutions - Login 2025
            </div>
        </div>
    );
}