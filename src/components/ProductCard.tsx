import { useState } from "react";
import { X } from "lucide-react";
import * as Icons from "lucide-react";
import { useCart } from "../context/CartContext";
import type { Product } from "../context/CartContext";
import IngredientsModal from "./IngredientsModal";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  //const { addToCart, cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  //const inCart = cart.find((item) => item.id === product.id);

  const IconComponent =
    (
      Icons as unknown as Record<
        string,
        React.ComponentType<{ size?: number; strokeWidth?: number }>
      >
    )[product.icon] || Icons.Package;

  // const handleAdd = () => {
  //   addToCart(product);
  // };

  const isOutOfStock = product.stock === 0;
  //const isLimitReached = inCart && inCart.quantity >= product.stock;

  return (
    <>
      <article
        className={`product-card ${isOutOfStock ? "product-card--out-of-stock" : ""}`}
        style={{ animationDelay: `${index * 80}ms` }}
        id={`product-${product.id}`}
      >
        {product.image ? (
          <div
            className="product-card__image-wrapper"
            onClick={() => setIsImageOpen(true)}
            role="button"
            tabIndex={0}
            aria-label={`Ver imagen de ${product.name}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-card__image"
              loading="lazy"
            />

            <div className="product-card__tags product-card__tags--floating">
              <span className="product-card__category">{product.category}</span>
              <span
                className={`product-card__stock-tag ${isOutOfStock ? "product-card__stock-tag--out" : product.stock < 3 ? "product-card__stock-tag--low" : ""}`}
              >
                {isOutOfStock ? "Agotado" : `${product.stock} disponibles`}
              </span>
            </div>
          </div>
        ) : (
          <div className="product-card__icon-area">
            <div className="product-card__icon-bg">
              <IconComponent
                size={36}
                strokeWidth={1.4}
              />
            </div>
            <div className="product-card__tags">
              <span className="product-card__category">{product.category}</span>
              <span
                className={`product-card__stock-tag ${isOutOfStock ? "product-card__stock-tag--out" : product.stock < 3 ? "product-card__stock-tag--low" : ""}`}
              >
                {isOutOfStock ? "Agotado" : `${product.stock} disponibles`}
              </span>
            </div>
          </div>
        )}

        <div className="product-card__info">
          <h3 className="product-card__name">{product.name}</h3>
          {product.tipo_piel && (
            <div>
              <span className="product-card__skin-type">
                Piel: {product.tipo_piel}
              </span>
            </div>
          )}
          <p className="product-card__desc">{product.description}</p>

          {product.caracteristicas_formula &&
            product.caracteristicas_formula.length > 0 && (
              <ul className="product-card__features">
                {product.caracteristicas_formula.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
        </div>

        <div className="product-card__footer">
          {/* --- PRECIO DINÁMICO --- */}
          {/* <span className="product-card__price">
            {product.price && product.price > 0
              ? `$${product.price}`
              : "Consultar"}
          </span> */}

          <div className="product-card__actions">
            {/* {((product.ingredientes_completos &&
              product.ingredientes_completos.length > 0) ||
              (product.variedades_incluidas &&
                product.variedades_incluidas.length > 0)) && (
              <button
                className="product-card__ingredients-btn"
                onClick={() => setIsModalOpen(true)}
                aria-label={`Ver ingredientes de ${product.name}`}
              >
                <Info
                  size={18}
                  strokeWidth={2}
                />
              </button>
            )} */}

            {/* <button
              className={`product-card__add-btn ${inCart ? "product-card__add-btn--active" : ""}`}
              onClick={handleAdd}
              disabled={isOutOfStock || isLimitReached}
              aria-label={`Añadir ${product.name} al carrito`}
              id={`add-btn-${product.id}`}
            >
              <Plus
                size={18}
                strokeWidth={2}
              />
              <span>
                {isOutOfStock
                  ? "Agotado"
                  : inCart
                    ? isLimitReached
                      ? `Límite (${inCart.quantity})`
                      : `En carrito (${inCart.quantity})`
                    : "Añadir"}
              </span>
            </button> */}
          </div>
        </div>
      </article>

      <IngredientsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />

      {isImageOpen && product.image && (
        <div
          className="image-lightbox"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            className="image-lightbox__close"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageOpen(false);
            }}
            aria-label="Cerrar imagen"
          >
            <X
              size={24}
              strokeWidth={2}
            />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="image-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
