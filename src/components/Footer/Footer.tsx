import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Disponible para trabajar, conectemos.</h3>
      <div>Encontrame en las redes: 
      <div className="links_description">
            <a
              href="https://github.com/javierh-castro/mi_pagina_web"
              target="_blank"
              className="bi bi-github"
            ></a>
            <a
              href="https://www.linkedin.com/in/javierhcc"
              target="_blank"
              className="bi bi-linkedin"
            ></a>
            <a
              href="mailto:javiercastrohernan@gmail.com"
              target="_blank"
              className="bi bi-envelope"
            ></a>
          </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="">Javier Castro</a> Developer.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
