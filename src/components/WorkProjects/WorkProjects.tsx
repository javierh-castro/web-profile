import "./WorkProjects.css";
import Image from "next/image";

export default function WorkProjects() {
  return (
    <section className="work-projects">
      <div className="section">
      <h1>Portafolio</h1>
      <p>Aquí encontrarás una selección de mis proyectos, que demuestran mis habilidades y experiencia en desarrollo frontend. Desde la creación de interfaces de usuario interactivas hasta la implementación de componentes reutilizables, me enorgullece compartir el trabajo que he realizado.</p>
      </div>
      <ul className="projects">
          <li className="project">
            <div className="description">
              <h4 className="offer">Recipify</h4>
              <p>
                En este proyecto echo en equipo basado en next.js, es una web
                donde te registras y buscas recetas de cocina también podes
                publicar tus recetas en la web
              </p>
            </div>
            <figure className="figure">
              <Image
                src="/img/recipify.png"
                alt="proyecto crud"
                width={500}
                height={300}
              />
              <ul>
                <a
                  href="https://github.com/javierh-castro/proyect-recipify"
                  target="_blank"
                  className="bi-github"
                >
                </a>
                <a
                  href="https://recipify-rho.vercel.app/recetas"
                  target="_blank"
                  className="bi bi-link"
                ></a>
              </ul>
            </figure>
          </li>
        <li className="project">
          <div className="description">
            <h4 className="offer">Un e-commerce web</h4>
            <p>
              Es un commerce con react donde podes filtrar por precio y
              categoría y tiene una carrito de compra.
            </p>
          </div>
          <figure className="figure">
          <Image
                src="/img/commerce.png"
                alt="proyecto ecommerce"
                width={500}
                height={300}
              />
            <ul>
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
          </figure>
        </li>

        <li className="project">
          <div className="description">
            <h4 className="offer">Control financiero</h4>
            <p>
              Ayuda a tener un balance financiero y también genera un registro
              de gastos e ingresos.
            </p>
          </div>
          <figure className="figure">
            <Image
                src="/img/income expenses.png"
                alt="proyecto expenses"
                width={500}
                height={300}
              />
            <ul>
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
          </figure>
        </li>
        <li className="project">
          <div className="description">
            <h4 className="offer">Tic Tac Toe</h4>
            <p>Se trata del juego tic tac toe y esta basado en react.</p>
          </div>
          <figure className="figure">
            <Image
                src="/img/recipify.png"
                alt="proyecto tic tac toe"
                width={500}
                height={300}
              />
            <ul>
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
          </figure>
        </li>
        <li className="project">
          <div className="description">
            <h4 className="offer">Organizador de tareas</h4>
            <p>
              Este proyecto es para organizar las tareas que tenes pendientes y
              estas por hacer.
            </p>
          </div>
          <figure className="figure">
            <Image
                src="/img/task.png"
                alt="proyecto task"
                width={500}
                height={300}
              />
            <ul>
              <a
                href="https://github.com/javierh-castro/React-task-control-example"
                target="_blank"
                className="bi bi-github"
              ></a>
              <a
                href="https://javierh-castro.github.io/React-task-control-example/"
                target="_blank"
                className="bi bi-link"
              ></a>
            </ul>
          </figure>
        </li>
        <li className="project">
          <div className="description">
            <h4 className="offer">Crud de usuarios</h4>
            <p>
              El proyecto muestra un crud de usuarios y también se puede
              organizar los usuarios según su categorías.
            </p>
          </div>
          <figure className="figure">
            <Image
                src="/img/crud 2.png"
                alt="proyecto task"
                width={500}
                height={300}
              />
            <ul>
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
          </figure>
        </li>
      </ul>
    </section>
  );
}
