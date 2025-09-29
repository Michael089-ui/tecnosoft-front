import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Páginas públicas
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ListadoServiciosPage from "./pages/ListadoServiciosPage";
import DetalleServicioPage from "./pages/DetalleServicioPage";
import LoginPage from "./pages/LoginPage";

// Admin
import AdminLayout from "./pages/AdminLayout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminUsuariosPage from "./pages/AdminUsuariosPage";
import AdminConfigPage from "./pages/AdminConfigPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Rutas públicas con layout */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/productos"
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />
        <Route
          path="/servicios"
          element={
            <Layout>
              <ListadoServiciosPage />
            </Layout>
          }
        />
        <Route
          path="/detalle-servicio/:id"
          element={
            <Layout>
              <DetalleServicioPage />
            </Layout>
          }
        />

        {/* 🔐 Login (CORREGIDO: Ahora usa el Layout) */}
        <Route 
          path="/login" 
          element={
            <Layout>
              <LoginPage /> 
            </Layout>
          } 
        />

        {/* ⚙️ Admin con rutas anidadas */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="servicios" element={<ListadoServiciosPage />} />
          <Route path="usuarios" element={<AdminUsuariosPage />} />
          <Route path="configuracion" element={<AdminConfigPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;