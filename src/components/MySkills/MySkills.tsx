import './MySkills.css'

export default function MySkills() {
    return (
      <section className="skills">
        <h1 className="no-responsive section">Habilidades</h1>
        <div className="format">
          <article className="skills-text">
            <h1 className="responsive section">Habilidades</h1>
            {/* <h1 className="section">Habilidades</h1> */}
            <ul className="text-separation">
              <li>
                <p>
                  Poseo sólidos conocimientos y experiencia en desarrollo de
                  software, destacándome en la creación de aplicaciones
                  innovadoras y eficientes. Mi destreza incluye programación en
                  varios lenguajes y resolución de problemas.
                </p>
              </li>
              <li>
                <p>
                  Estoy encantado de tener la oportunidad de discutir cómo mis
                  habilidades y experiencia que puedan contribuir al éxito de sus
                  proyecto.
                </p>
              </li>
              <li>
                <p>
                  Siempre estoy en la búsqueda de mejorar mis habilidades y la
                  adaptación constante a las nuevas tendencias y tecnologías del
                  campo.
                </p>
              </li>
            </ul>
          </article>
          <article className="habilidades">
            <ul className="skills-list">
              <li>
                <picture className="icon">
                  <img src="./icon/js.ico" alt="img icon" />
                </picture>
              </li>
              <li>
                <picture className="icon">
                  <img src="/icon/html.ico" alt="img icon" />
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
                  <img src="/icon/expressjs.png" alt="img icon" />
                </picture>
              </li>
              <li>
                <picture className="icon">
                  <img src="/icon/tailwind.png" alt="img icon" />
                </picture>
              </li>
              <li>
                <picture className="icon">
                  <img src="/icon/mongo.png" alt="img icon" />
                </picture>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
  