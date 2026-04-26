import { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const {
    cart,
    userData,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeFromCart,
    setUserData,
    totalPrice,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    if (isDrawerOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen, closeDrawer]);

  // WhatsApp checkout
  const handleCheckout = () => {
    if (!userData.name.trim() || !userData.address.trim()) {
      return;
    }

    const baseNumber = "584168279049"; // Número con código de país

    const paymentDetails: Record<string, string> = {
      'Pago Móvil': 'Banco Mercantil, 0416-8279049, V-12345678',
      'Efectivo': 'Acordar entrega para pago en efectivo',
      'PayPal': 'pagos@prushistore.com',
      'Zelle': 'zelle@prushistore.com (Prushi Store LLC)',
      'Binance': 'ID: 123456789 o pagos@prushistore.com',
      'Zinli': 'pagos@prushistore.com',
      'Wally': '0416-8279049'
    };

    const itemsText = cart
      .map(item => `- ${item.name} (x${item.quantity}) — $${(item.price * item.quantity).toFixed(2)}`)
      .join('%0A');

    const paymentLabel = userData.paymentMethod || 'No especificado';
    const accountDetails = userData.paymentMethod ? `%0A*Datos de pago:* ${paymentDetails[userData.paymentMethod]}` : '';
    const giftText = userData.isGift === 'Sí' ? '%0A*¿Es regalo?:* Sí 🎁' : '';
    const noteText = userData.note.trim() ? `%0A*Nota:* ${userData.note}` : '';

    const message = `*Pedido de Skincare — Prushi Store*%0A%0A` +
      `*Nombre:* ${userData.name}%0A` +
      `*Ubicación:* ${userData.address}%0A` +
      `*Método de pago:* ${paymentLabel}${accountDetails}${giftText}%0A%0A` +
      `*Productos:*%0A${itemsText}%0A%0A` +
      `*Total:* $${totalPrice.toFixed(2)}` +
      noteText;

    window.open(`https://wa.me/${baseNumber}?text=${message}`, '_blank');
  };

  const isFormValid = userData.name.trim() !== '' && userData.address.trim() !== '';

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="drawer-overlay"
        ref={overlayRef}
        onClick={closeDrawer}
        aria-hidden="true"
        id="drawer-overlay"
      />

      {/* Drawer */}
      <aside
        className="drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
        id="cart-drawer"
      >
        {/* Header */}
        <div className="drawer__header">
          <div className="drawer__title-group">
            <ShoppingBag size={20} strokeWidth={1.8} />
            <h2 className="drawer__title">Tu Carrito</h2>
            <span className="drawer__count">{cart.length}</span>
          </div>
          <button
            className="drawer__close"
            onClick={closeDrawer}
            aria-label="Cerrar carrito"
            id="close-drawer"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="drawer__content">
          {cart.length === 0 ? (
            <div className="drawer__empty">
              <div className="drawer__empty-icon">
                <ShoppingBag size={48} strokeWidth={1.2} />
              </div>
              <p className="drawer__empty-text">Tu carrito está vacío</p>
              <p className="drawer__empty-sub">
                Explora nuestro catálogo y encuentra tu rutina perfecta
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <ul className="drawer__items">
                {cart.map(item => (
                  <li key={item.id} className="drawer__item" id={`cart-item-${item.id}`}>
                    <div className="drawer__item-info">
                      <span className="drawer__item-name">{item.name}</span>
                      <span className="drawer__item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="drawer__item-actions">
                      <div className="drawer__qty-controls">
                        <button
                          className="drawer__qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Reducir cantidad"
                        >
                          <Minus size={14} strokeWidth={2.5} />
                        </button>
                        <span className="drawer__qty-value">{item.quantity}</span>
                        <button
                          className="drawer__qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          <Plus size={14} strokeWidth={2.5} />
                        </button>
                      </div>
                      <button
                        className="drawer__remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <Trash2 size={15} strokeWidth={1.8} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Separator */}
              <div className="drawer__separator" />

              {/* User Form */}
              <div className="drawer__form">
                <h3 className="drawer__form-title">Datos de Envío</h3>
                <div className="drawer__field">
                  <label htmlFor="user-name" className="drawer__label">Nombre</label>
                  <input
                    type="text"
                    id="user-name"
                    className="drawer__input"
                    placeholder="Tu nombre completo"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  />
                </div>
                <div className="drawer__field">
                  <label htmlFor="user-address" className="drawer__label">Ciudad / Dirección</label>
                  <input
                    type="text"
                    id="user-address"
                    className="drawer__input"
                    placeholder="Ciudad y dirección de entrega"
                    value={userData.address}
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                  />
                </div>
                <div className="drawer__field">
                  <label htmlFor="user-payment" className="drawer__label">Método de Pago</label>
                  <select
                    id="user-payment"
                    className="drawer__select"
                    value={userData.paymentMethod}
                    onChange={(e) => setUserData({ ...userData, paymentMethod: e.target.value })}
                  >
                    <option value="">Selecciona un método</option>
                    <option value="Pago Móvil">Pago Móvil</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Zelle">Zelle</option>
                    <option value="Binance">Binance</option>
                    <option value="Zinli">Zinli</option>
                    <option value="Wally">Wally</option>
                  </select>
                </div>
                <div className="drawer__field">
                  <label htmlFor="user-gift" className="drawer__label">¿Es para un regalo?</label>
                  <select
                    id="user-gift"
                    className="drawer__select"
                    value={userData.isGift}
                    onChange={(e) => setUserData({ ...userData, isGift: e.target.value })}
                  >
                    <option value="No">No</option>
                    <option value="Sí">Sí, es un regalo 🎁</option>
                  </select>
                </div>
                <div className="drawer__field">
                  <label htmlFor="user-note" className="drawer__label">Nota (opcional)</label>
                  <textarea
                    id="user-note"
                    className="drawer__textarea"
                    placeholder="Alguna indicación especial..."
                    rows={3}
                    value={userData.note}
                    onChange={(e) => setUserData({ ...userData, note: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="drawer__footer">
            <div className="drawer__total-row">
              <span className="drawer__total-label">Total</span>
              <span className="drawer__total-value">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              className={`drawer__checkout-btn ${!isFormValid ? 'drawer__checkout-btn--disabled' : ''}`}
              onClick={handleCheckout}
              disabled={!isFormValid}
              id="checkout-button"
            >
              <MessageCircle size={18} strokeWidth={2} />
              <span>Finalizar por WhatsApp</span>
            </button>
            <p className="drawer__shipping-notice">
              ✨ Los productos se envían  2 horas después de hacerse el pago.
            </p>
            {!isFormValid && (
              <p className="drawer__form-hint">
                Completa tu nombre y dirección para continuar
              </p>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
