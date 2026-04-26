import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CatLogo from './CatLogo';
import './Header.css';

export default function Header() {
  const { totalItems, openDrawer } = useCart();

  return (
    <header className="header" id="header">
      <div className="header__inner">
        <div className="header__brand">
          <CatLogo size={38} />
          <div className="header__logo-text">
            <span className="header__name">Prushi</span>
            <span className="header__tagline">skincare</span>
          </div>
        </div>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#catalogo" className="header__link">Catálogo</a>
        </nav>

        <button
          className="header__cart-btn"
          onClick={openDrawer}
          aria-label={`Abrir carrito, ${totalItems} productos`}
          id="cart-button"
        >
          <ShoppingBag size={22} strokeWidth={1.8} />
          {totalItems > 0 && (
            <span className="header__badge" key={totalItems}>
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
