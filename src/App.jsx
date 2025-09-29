import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import ProductsPage from "./pages/ProductsPage";
import MockupTecnoSoft from "./components/MockupTecnoSoft"; 
import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Mockup 1*/}
          <Route path="/" element={<MockupTecnoSoft />} />

          {/* Productos */}
          <Route path="/productos" element={<ProductsPage />} />

          {/* Detalle de servicios */}
          <Route path="/servicio/:id" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

