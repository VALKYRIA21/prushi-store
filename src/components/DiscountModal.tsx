import { useEffect } from 'react';
import { X, BadgePercent } from 'lucide-react';
import './DiscountModal.css';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscountModal({ isOpen, onClose }: DiscountModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="discount-modal-overlay"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="discount-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="discount-modal-title"
      >
        <button
          className="discount-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="discount-modal__icon" aria-hidden="true">
          <BadgePercent size={28} strokeWidth={1.6} />
        </div>

        <p className="discount-modal__eyebrow">Oferta</p>
        <h2 id="discount-modal-title" className="discount-modal__title">
          Paga en divisas y ahorra
          <span className="discount-modal__methods">
           Al pagar en dólares (Efectivo, PayPal, Zelle, Binance, Zinli, Wally), Recibirás un descuento en tu compra✨.
          </span>
        </h2>

        <button className="discount-modal__cta" onClick={onClose}>
          Ver catálogo
        </button>
      </div>
    </div>
  );
}
