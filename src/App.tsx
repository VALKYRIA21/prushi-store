import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import DiscountModal from './components/DiscountModal';
import Footer from './components/Footer';
import { categories } from './data/products';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsDiscountModalOpen(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  const closeDiscountModal = useCallback(() => {
    setIsDiscountModalOpen(false);
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />

      {/* Best Sellers Section */}
      {/* <section className="catalog" id="catalogo">
        <div className="catalog__inner">
          <div className="catalog__header">
            <span className="catalog__label">Favoritos</span>
            <h2 className="catalog__title">Los Productos Más Vendidos</h2>
            <p className="catalog__subtitle">
              Los favoritos de nuestra comunidad para una piel radiante y saludable.
            </p>
          </div>

          <div className="catalog__grid">
            {bestSellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Categories Tabs Section */}
      <section className="catalog catalog--categories" id="catalogo">
        <div className="catalog__inner">
          <div className="catalog__header">
            <h2 className="catalog__title">Catálogo</h2>
          </div>

          <div className="catalog__tabs">
            {categories.map((category, index) => (
              <button
                key={category.name}
                className={`catalog__tab ${activeCategory === index ? 'catalog__tab--active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="catalog__grid" key={activeCategory}>
            {categories[activeCategory].products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
      <DiscountModal isOpen={isDiscountModalOpen} onClose={closeDiscountModal} />
    </div>
  );
}

export default App;
