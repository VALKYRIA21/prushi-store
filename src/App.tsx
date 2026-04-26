import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />

      {/* Catalog Section */}
      <section className="catalog" id="catalogo">
        <div className="catalog__inner">
          <div className="catalog__header">
            <span className="catalog__label">Colección</span>
            <h2 className="catalog__title">Nuestros Productos</h2>
            <p className="catalog__subtitle">
              Cada producto es seleccionado cuidadosamente con ingredientes de la más alta calidad.
            </p>
          </div>

          <div className="catalog__grid">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
}

export default App;
