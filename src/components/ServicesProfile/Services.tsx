import React from "react";
import "./Services.css";
import Image from "next/image";

function ServicesProfile() {
  return (
    <section className="ServicesProfile">
      <h1>Servicios</h1>
      <ul className="cards-container">
        <div className="card">
          <Image src="/img/diseño.jpg" alt="diseño" width={500} height={300} />
          <aside>
            <h3>Diseño</h3>
            <p>
              Me especializo en diseñar software intuitivo y atractivo, desde la
              concepción inicial hasta el producto final. Utilizo métodos ágiles
              para iterar rápidamente y ajustar el diseño según el feedback de
              los usuarios, asegurando que cumpla con altos estándares de
              calidad y sus necesidades.
            </p>
          </aside>
        </div>
        <div className="card">
          <Image
            src="/img/desarrollo.jpg"
            alt="desarrollo"
            width={500}
            height={300}
          />
          <aside>
            <h3>Desarrollo</h3>
            <p>
              En el desarrollo aseguro la robustez y escalabilidad del sistema.
              Colaboro estrechamente con equipos utilizando metodologías para
              adaptar rápidamente el producto a medida que evoluciona,
              garantizando soluciones que no solo funcionen bien, sino que
              también sean fáciles de mantener.
            </p>
          </aside>
        </div>
        <div className="card">
          <Image
            src="/img/errores.jpg"
            alt="errores"
            width={500}
            height={300}
          />
          <aside>
            <h3>Mantenimiento</h3>
            <p>
              En el mantenimiento de software, garantizo sistemas eficientes y
              sin problemas. Detecto y corrijo problemas antes de que afecten a
              los usuarios, implemento actualizaciones cuidadosamente para
              mantener un funcionamiento seguro y continuo, adaptándome a nuevas
              necesidades según surjan.
            </p>
          </aside>
        </div>
      </ul>
    </section>
  );
}

export default ServicesProfile;
