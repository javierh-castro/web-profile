'use client'

import "./MySkills.css";
import useTranslation from "@/src/hooks/use-translation";

export default function MySkills() {
  const { t } = useTranslation();

  return (
    <section className="skills">
      <h1 className="no-responsive section">{t("nav.skills")}</h1>
      <div className="format">
        <article className="skills-text">
          <p>
            {t("skills.1")}
          </p>
          <p>
          {t("skills.2")}
          </p>
          <p>
          {t("skills.3")}
          </p>
        </article>
        <article className="skills-icon">
          <ul className="skills-list">
            <li>
              <picture className="icon">
                <img src="/icon/js.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/css.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/bootstrap.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/node.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/Mysql.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/mongodb.svg" alt="img icon" />
              </picture>
            </li>
          </ul>
          <ul className="skills-list">
            <li>
              <picture className="icon">
                <img src="/icon/postgresql.svg" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/python.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/react.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/types.ico" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/tailwind.png" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/astro.svg" alt="img icon" />
              </picture>
            </li>
          </ul>
          <ul className="skills-list">
            <li>
              <picture className="icon">
                <img src="/icon/expressjs.svg" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/zod.svg" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/nextjs.png" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/nestjs.png" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/jest.svg" alt="img icon" />
              </picture>
            </li>
            <li>
              <picture className="icon">
                <img src="/icon/redux.svg" alt="img icon" />
              </picture>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
