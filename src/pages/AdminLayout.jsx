// src/pages/AdminLayout.jsx

// ... imports ...
import AdminSidebar from '../components/AdminSidebar';
import '../styles/AdminDashboardPage.css'; // ¡Importante que esté aquí!
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    // Usa la clase principal que tiene display: flex
    <div className="page-admindashboard__layout">
      
      <AdminSidebar />
      
      <div className="page-admindashboard__content">
        
        <header className="page-admindashboard__top-bar">
            <h2>Technosoft</h2>
        </header>

        <main className="page-admindashboard__main-view">
            <Outlet />
        </main>
        
        <footer className="page-admindashboard__admin-footer">
            <p>TechnoSoft Solutions - CPanel Administration 2025</p>
        </footer>
      </div>
    </div>
  );
}