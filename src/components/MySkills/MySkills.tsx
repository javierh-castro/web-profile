import "./MySkills.css";

export default function MySkills() {
  return (
    <section className="skills">
      <h1 className="no-responsive section">Habilidades</h1>
      <div className="format">
        <article className="skills-text">
          <p>
            Poseo sólidos conocimientos y experiencia en desarrollo de software,
            destacándome en la creación de aplicaciones innovadoras y
            eficientes. Mi destreza incluye programación en varios lenguajes y
            resolución de problemas.
          </p>
          <p>
            Estoy encantado de tener la oportunidad de discutir cómo mis
            habilidades y experiencia que puedan contribuir al éxito de sus
            proyecto.
          </p>
          <p>
            Siempre estoy en la búsqueda de mejorar mis habilidades y la
            adaptación constante a las nuevas tendencias y tecnologías del
            campo.
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
