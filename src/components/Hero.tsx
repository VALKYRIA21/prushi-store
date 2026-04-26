import { ArrowDown, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__badge">
          <Sparkles size={14} strokeWidth={2} />
          <span>Skincare Premium</span>
        </div>
        <h1 className="hero__title">
          Tu piel merece lo
          <span className="hero__highlight"> extraordinario</span>
        </h1>
        <p className="hero__subtitle">
          Descubre nuestra selección curada de productos de cuidado facial 
          y corporal. Ingredientes puros, resultados visibles.
        </p>
        <a href="#catalogo" className="hero__cta" id="hero-cta">
          <span>Ver Catálogo</span>
          <ArrowDown size={16} strokeWidth={2} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="hero__deco hero__deco--1" />
      <div className="hero__deco hero__deco--2" />
      <div className="hero__deco hero__deco--3" />
    </section>
  );
}
