import CatLogo from "./CatLogo";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      id="footer"
    >
      <div className="footer__inner">
        <div className="footer__brand">
          <CatLogo size={28} />
          <span className="footer__name">Prushi Store</span>
        </div>
        <p className="footer__copy">
          <a
            href="https://github.com/VALKYRIA21"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            VALKYRIA21
          </a> © {year}
        </p>
      </div>
    </footer>
  );
}
