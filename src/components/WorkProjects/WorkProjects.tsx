import './WorkProjects.css'
import Image from "next/image";


export default function WorkProjects() {
    return (
      <section id="projects">
      <h1 className="section">Portafolio</h1>
      <p>Aca les proyecto todos los proyectos que e construido</p>
      <ul className="projects">
        <li className="project">
          <aside className="description">
            <h4>Recipify</h4>
            <p>
              En este proyecto echo en equipo basado en next.js, es una web
              donde te registras y buscas recetas de cocina también podes
              publicar tus recetas en la web
            </p>
          </aside>
          <figure className="figure">
            <Image src="/img/recipify.png" alt="proyecto crud" width={370} height={170}/>
            <ul>
              <a
                href="https://github.com/javierh-castro/proyect-recipify"
                target="_blank"
                className="bi bi-github"
              ></a>
              <a
                href="https://recipify-rho.vercel.app/recetas"
                target="_blank"
                className="bi bi-link"
              ></a>
            </ul>
          </figure>
        </li>
        <li className="project">
          <aside className="description">
            <h4>Un e-commerce web</h4>
            <p>
              Es un commerce con react donde podes filtrar por precio y
              categoría y tiene una carrito de compra.
            </p>
          </aside>
          <figure className="figure">
            <img src="img/commerce.png" alt="proyecto crud" />
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
          <aside className="description">
            <h4>Control financiero</h4>
            <p>
              Ayuda a tener un balance financiero y también genera un registro
              de gastos e ingresos.
            </p>
          </aside>
          <figure className="figure">
            <img src="img/income expenses.png" alt="proyecto crud" />
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
          <aside className="description">
            <h4>Tic Tac Toe</h4>
            <p>Se trata del juego tic tac toe y esta basado en react.</p>
          </aside>
          <figure className="figure">
            <img src="img/tic tac toe.png" alt="proyecto crud" />
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
          <aside className="description">
            <h4>Organizador de tareas</h4>
            <p>
              Este proyecto es para organizar las tareas que tenes pendientes y
              estas por hacer.
            </p>
          </aside>
          <figure className="figure">
            <img src="img/task.png" alt="proyecto crud" />
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
          <aside className="description">
            <h4>Crud de usuarios</h4>
            <p>
              El proyecto muestra un crud de usuarios y también se puede
              organizar los usuarios según su categorías.
            </p>
          </aside>
          <figure className="figure">
            <img src="img/crud 2.png" alt="proyecto crud" />
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
  