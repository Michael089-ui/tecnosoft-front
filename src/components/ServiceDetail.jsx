import { useEffect, useState } from "react";
import products from "../data/products";

const ServiceDetail = () => {
  const [service, setService] = useState(null);
  const [defaultService, setDefaultService] = useState(null);

  useEffect(() => {
    // Tomar el ID de la querystring (?id=2)
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")) || 1;

    const foundService = products.find((p) => p.id === id) || products[0];
    setService(foundService);
    setDefaultService(foundService);
  }, []);

  const formatPrice = (value) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(value);

  const togglePromo = () => {
    if (!service || !defaultService) return;

    const newPromo = !service.promo;
    setService({
      ...service,
      promo: newPromo,
      price: newPromo
        ? +(defaultService.price * 0.85).toFixed(2)
        : defaultService.price,
    });
  };

  if (!service) return <p>Cargando detalle...</p>;

  return (
    <main className="main-content">
      <div className="service-card">
        {/* LEFT */}
        <section className="left">
          <img
            src={service.image}
            alt={service.name}
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
