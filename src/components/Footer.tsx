import { Heart } from 'lucide-react';
import CatLogo from './CatLogo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <CatLogo size={28} />
          <span className="footer__name">Prushi Store</span>
        </div>
        <p className="footer__copy">
          Hecho con <Heart size={13} strokeWidth={2.5} className="footer__heart" /> en Venezuela
          &nbsp;·&nbsp; © {year}
        </p>
      </div>
    </footer>
  );
}
