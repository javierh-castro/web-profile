import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
          <h3>Disponible para trabajar, conectemos.</h3>
          <div className="footer-contact">
            <p className="contact-text">Feel free to contact and reach us !!</p>

            <ul>
              <li className="contact-item">
                <a href="tel:+01123456790" className="contact-link">
                  numero
                </a>
              </li>

              <li className="contact-item">
                <a href="mailto:info.tourly.com" className="contact-link">
                  gmail
                </a>
              </li>

              <li className="contact-item">
                <address>Localidad</address>
              </li>
            </ul>
          </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="">Javier Castro</a> Developer.
          </p>

          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">
                Term &amp; Condition
              </a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
