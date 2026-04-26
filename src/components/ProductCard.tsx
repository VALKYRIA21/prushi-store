import { Plus } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, cart } = useCart();
  const inCart = cart.find(item => item.id === product.id);

  // Dynamically get the icon component
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>>)[product.icon] || Icons.Package;

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <article
      className="product-card"
      style={{ animationDelay: `${index * 80}ms` }}
      id={`product-${product.id}`}
    >
      <div className="product-card__icon-area">
        <div className="product-card__icon-bg">
          <IconComponent size={36} strokeWidth={1.4} />
        </div>
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
      </div>

      <div className="product-card__footer">
        <span className="product-card__price">
          ${product.price.toFixed(2)}
        </span>

        <button
          className={`product-card__add-btn ${inCart ? 'product-card__add-btn--active' : ''}`}
          onClick={handleAdd}
          aria-label={`Añadir ${product.name} al carrito`}
          id={`add-btn-${product.id}`}
        >
          <Plus size={18} strokeWidth={2} />
          <span>{inCart ? `En carrito (${inCart.quantity})` : 'Añadir'}</span>
        </button>
      </div>
    </article>
  );
}
