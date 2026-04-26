import { ShoppingBag, Moon, Sun } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import CatLogo from './CatLogo';
import './Header.css';

export default function Header() {
  const { totalItems, openDrawer } = useCart();
  const { theme, toggleTheme } = useTheme();

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

        <div className="header__actions">
          <button
            className="header__theme-btn"
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

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
      </div>
    </header>
  );
}
