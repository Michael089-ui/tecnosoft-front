import { useState } from "react";
import products from "../data/products"; 

const ServiceDetail = () => {
  
  const defaultService = products.find((p) => p.id === 1);

  const [service, setService] = useState(defaultService);

  const formatPrice = (value) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(value);

  const togglePromo = () => {
    const newPromo = !service.promo;
    setService({
      ...service,
      promo: newPromo,
      price: newPromo ? +(defaultService.price * 0.85).toFixed(2) : defaultService.price,
    });
  };

  return (
    <main className="main-content">
      <div className="service-card">
        {/* LEFT */}
        <section className="left">
          <img
            src="servicios.png"
            alt="Imagen del servicio"
            className="service-img"
          />
          <button className="btn">{service.name}</button>
          <button className="btn">{formatPrice(service.price)}</button>
        </section>

        {/* RIGHT */}
        <section className="right">
          <div className="info">
            <div className="label">Descripción del producto</div>
            <div className="value">{service.description}</div>
          </div>
          <div className="info">
            <div className="label">Cantidad en Stock</div>
            <div className="value">{service.stock}</div>
          </div>
          <div className="info">
            <div className="label">¿Está en promoción?</div>
            <div className="value">
              {service.promo
                ? "10% de descuento en el primer proyecto"
                : "No aplica"}
            </div>
          </div>

          <div className="info">
            <div className="label">Activar Promoción</div>
            <div className="value">
              <input
                type="checkbox"
                checked={service.promo}
                onChange={togglePromo}
              />
            </div>
          </div>

          <button className="btn">
            {service.promo ? "Contratar (descuento)" : "Contratar"}
          </button>
        </section>
      </div>
    </main>
  );
};

export default ServiceDetail;
