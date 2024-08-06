'use client'

import React from "react";
import "./Services.css";
import Image from "next/image";
import useTranslation from "@/src/hooks/use-translation";

function ServicesProfile() {
  const { t } = useTranslation();

  return (
    <section className="ServicesProfile">
      <h1>{t("nav.services")}</h1>
      <ul className="cards-container">
        <div className="card">
          <Image src="/img/diseño.jpg" alt="diseño" width={500} height={300} />
          <aside>
            <h3>{t("servicesprofile.desing")}</h3>
            <p>
              {t("servicesprofile.desingdescription")}
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
            <h3>{t("servicesprofile.development")}</h3>
            <p>
            {t("servicesprofile.developmentdescription")}
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
            <h3>{t("servicesprofile.maintenance")}</h3>
            <p>
            {t("servicesprofile.maintenancedescription")}
            </p>
          </aside>
        </div>
      </ul>
    </section>
  );
}

export default ServicesProfile;
