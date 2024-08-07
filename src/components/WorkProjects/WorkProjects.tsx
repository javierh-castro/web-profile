"use client"

import useTranslation from "@/src/hooks/use-translation";
import "./WorkProjects.css";
import Image from "next/image";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiCss3, SiNodedotjs, SiZod } from "react-icons/si";

export default function WorkProjects() {
  const { t } = useTranslation();

  const redirectToExternalPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="work-projects">
      <h1>{t("nav.projects")}</h1>
      <ul className="projects">
        <li className="project">
          <Image
            src="/img/buscarclima.png"
            alt="Estado del tiempo"
            width={500}
            height={300}
            onClick={() => redirectToExternalPage('https://cheery-cat-44c418.netlify.app/')}
            className="cursor-pointer"
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">{t("workprojects.title1")}</h4>
              <p>
                {t("workprojects.time")}
              </p>
            </div>
            <ul className="url-links">
              <ul className="urls">
                <a
                  href="https://github.com/javierh-castro/clima-react"
                  target="_blank"
                  className="bi bi-github"
                ></a>
                <a
                  href="https://cheery-cat-44c418.netlify.app/"
                  target="_blank"
                  className="bi bi-link"
                ></a>
              </ul>
              <ul className="stack">
                <SiNextdotjs/>
                <SiTypescript/>
                <SiZod/>
              </ul>
            </ul>
          </div>
        </li>
        <li className="project">
          <Image
            src="/img/recipify.png"
            alt="Recipify"
            width={500}
            height={300}
            onClick={() => redirectToExternalPage('https://github.com/javierh-castro/proyect-recipify')}
            className="cursor-pointer"
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Recipify</h4>
              <p>
              {t("workprojects.recipify", ["nextauth"])}
              </p>
            </div>
            <ul className="url-links">
              <ul className="urls">
                <a
                  href="https://github.com/javierh-castro/proyect-recipify"
                  target="_blank"
                  className="bi-github"
                ></a>
                <a
                  href="https://recipify-rho.vercel.app/recetas"
                  target="_blank"
                  className="bi bi-link"
                ></a>
              </ul>
              <ul className="stack">
                <SiNextdotjs />
                <SiTypescript />
                <SiTailwindcss/>
              </ul>
            </ul>
          </div>
        </li>
        <li className="project">
          <Image
            src="/img/commerce.png"
            alt="E-commerce jc"
            width={500}
            height={300}
            onClick={() => redirectToExternalPage('https://ecommerce-javier.netlify.app/')}
            className="cursor-pointer"
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">E-commerce web</h4>
              <p>
              {t("workprojects.ecommerce")}
              </p>
            </div>
            <ul className="url-links">
              <ul className="urls">
                <a
                  href="https://github.com/javierh-castro/proyect-ecommerce/tree/master"
                  target="_blank"
                  className="bi bi-github"
                ></a>
                <a
                  href="https://ecommerce-javier.netlify.app/"
                  target="_blank"
                  className="bi bi-link"
                ></a>
              </ul>
              <ul className="stack">
                <SiReact />
                <SiCss3 />
              </ul>
            </ul>
          </div>
        </li>

        <li className="project">
          <Image
            src="/img/income expenses.png"
            alt="Control financier"
            width={500}
            height={300}
            onClick={() => redirectToExternalPage('https://income-expenses-example.netlify.app/')}
            className="cursor-pointer"
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">{t("workprojects.title4")}</h4>
              <p>
                {t("workprojects.financial")}
              </p>
            </div>
            <ul className="url-links">
              <ul className="urls">
                <a
                  href="https://github.com/javierh-castro/Income-and-Expenses"
                  target="_blank"
                  className="bi bi-github"
                ></a>
                <a
                  href="https://income-expenses-example.netlify.app/"
                  target="_blank"
                  className="bi bi-link"
                ></a>
              </ul>
              <ul className="stack">
                <SiReact />
                <SiTailwindcss />
              </ul>
            </ul>
          </div>
        </li>
        <li className="project">
          <Image
            src="/img/tic tac toe.png"
            alt="Tic Tac Toe"
            width={500}
            height={300}
            onClick={() => redirectToExternalPage('https://javierh-castro.github.io/tic-tac-toe/')}
            className="cursor-pointer"
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Tic Tac Toe</h4>
              <p>
                {t("workprojects.tictactoe")}
              </p>
            </div>
            <ul className="url-links">
              <ul className="urls">
                <a
                  href="https://github.com/javierh-castro/tic-tac-toe"
                  target="_blank"
                  className="bi bi-github"
                ></a>
                <a
                  href="https://javierh-castro.github.io/tic-tac-toe/"
                  target="_blank"
                  className="bi bi-link"
                ></a>
              </ul>
              <ul className="stack">
                <SiReact />
                <SiCss3 />
              </ul>
            </ul>
          </div>
        </li>
        <li className="project">
          <Image
            src="/img/crud 2.png"
            alt="Crud de usuarios"
            width={500}
            height={300}
            onClick={() => redirectToExternalPage('https://github.com/javierh-castro/CRUD-2')}
            className="cursor-pointer"
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Crud Users</h4>
              <p>
                {t("workprojects.crud")}
              </p>
            </div>
            <ul className="url-links">
              <ul className="urls">
                <a
                  href="https://github.com/javierh-castro/CRUD-2"
                  target="_blank"
                  className="bi bi-github"
                ></a>
                <a
                  href="https://github.com/javierh-castro/CRUD-2"
                  target="_blank"
                  className="bi bi-link"
                ></a>
              </ul>
              <ul className="stack">
                <SiNodedotjs />
                <SiTypescript />
              </ul>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
