import "./WorkProjects.css";
import Image from "next/image";

export default function WorkProjects() {
  return (
    <section className="work-projects">
      <h1>Portafolio</h1>
      <ul className="projects">
        <li className="project">
          <Image
            src="/img/buscarclima.png"
            alt="proyecto task"
            width={500}
            height={300}
          />
          <div className="container-project">
            <div className="description-project">
              <h4 className="offer">Buscar clima</h4>
              <p>
                Este proyecto podes localizar en tiempo real la temperatura
                que tiene esa ubicación.
              </p>
            </div>
            <ul className="url-links">
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
                Es un proyecto construido en equipo de desarrolladores basado en next.js, en la web
                podes registrar y buscas recetas de cocina también podes
                publicar tus recetas en la web
              </p>
            </div>
            <ul className="url-links">
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
                Es un commerce con react donde podes filtrar por precio y
                categoría y tiene una carrito de compra.
              </p>
            </div>
            <ul className="url-links">
              <a
                href="https://github.com/javierh-castro/proyect-ecommerce/tree/master"
                target="_blank"
                className="bi bi-github"
              ></a>
              <a
                href="https://ecommerce-javier.netlify.app/"
                target="_blank"
                className="bi bi-link"
              >
                {" "}
              </a>
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
                Ayuda a tener un balance financiero y también genera un registro
                de gastos e ingresos.
              </p>
            </div>
            <ul className="url-links">
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
              <p>Se trata del juego tic tac toe y esta basado en react.</p>
            </div>
            <ul className="url-links">
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
                El proyecto muestra un crud de usuarios y también se puede
                organizar los usuarios según su categorías.
              </p>
            </div>
            <ul className="url-links">
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
          </div>
        </li>
      </ul>
    </section>
  );
}
