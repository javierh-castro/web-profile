import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
          <h3>Disponible para trabajar, conectemos.</h3>
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
