"use client"
import "./WorkProjects.css";
import Image from "next/image";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiCss3, SiNodedotjs, SiZod } from "react-icons/si";

export default function WorkProjects() {

  const redirectToExternalPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="work-projects">
      <h1>Portafolio</h1>
      <ul className="projects">
        <li className="project" onClick={() => redirectToExternalPage('https://cheery-cat-44c418.netlify.app/')}>
          <Image
            src="/img/buscarclima.png"
            alt="Estado del tiempo"
            width={500}
            height={300}
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Estado del tiempo</h4>
              <p>
                Consulta el tiempo de cualquier ciudad con esta aplicación
                construida con React y TypeScript. Este proyecto también se
                utilizo Zod para validación y esquema de datos.
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
            alt="proyecto crud"
            width={500}
            height={300}
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Recipify</h4>
              <p>
                Recipefy es desarrollado junto a compañeros para la asignatura
                de programación. La web permite registrarse, buscar recetas de
                cocina y publicar las recetas.
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
            alt="proyecto ecommerce"
            width={500}
            height={300}
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Un e-commerce web</h4>
              <p>
                Mi primer e-commerce cuenta con un filtro por precio y
                categoría, y dispone de un carrito de compras.
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
            alt="proyecto expenses"
            width={500}
            height={300}
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Control financiero</h4>
              <p>
                Organiza el balance financiero y genera un registro detallado de
                gastos e ingresos.
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
            alt="proyecto tic tac toe"
            width={500}
            height={300}
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Tic Tac Toe</h4>
              <p>
                Juego de Tic Tac Toe desarrollado con React. Utiliza React
                Context Provider para la gestión del estado
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
            alt="proyecto task"
            width={500}
            height={300}
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Crud de usuarios</h4>
              <p>
                Un CRUD que muestra detalles de los usuarios y se integra con
                una base de datos.
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
