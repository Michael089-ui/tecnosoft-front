document.addEventListener('DOMContentLoaded', function () {
    const service = {
      name: "Auditoría de seguridad TI",
      price: 249.00,
      description: "Evaluación completa de vulnerabilidades y plan de mitigación.",
      stock: 12,
      promo: true
    };
  
    const nameEl = document.getElementById('service-title');
    const priceEl = document.getElementById('service-price');
    const descEl = document.getElementById('service-desc');
    const stockEl = document.getElementById('service-stock');
    const promoEl = document.getElementById('service-promo');
    const promoToggle = document.getElementById('promo-toggle');
    const ctaBtn = document.getElementById('cta');
  
    function formatPrice(value){
      return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
    }
  
    function render(service){
      nameEl.textContent = service.name;
      priceEl.textContent = formatPrice(service.price);
      descEl.textContent = service.description;
      stockEl.textContent = service.stock;
      if (service.promo){
        promoEl.textContent = "PROMO";
        promoEl.classList.remove('no');
        promoEl.classList.add('yes');
      } else {
        promoEl.textContent = "No";
        promoEl.classList.remove('yes');
        promoEl.classList.add('no');
      }
      promoToggle.checked = service.promo;
      ctaBtn.textContent = service.promo ? "Contratar (descuento)" : "Contratar";
    }
  
    promoToggle.addEventListener('change', function (e) {
      service.promo = e.target.checked;
      service.price = service.promo ? +(249.00 * 0.85).toFixed(2) : 249.00;
      render(service);
    });
  
    render(service);
  });
  