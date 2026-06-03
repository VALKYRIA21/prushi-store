import { X } from 'lucide-react';
import type { Product } from '../data/products';
import './IngredientsModal.css';

interface IngredientsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function IngredientsModal({ isOpen, onClose, product }: IngredientsModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose} aria-hidden="true">
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} strokeWidth={2} />
        </button>
        
        <h2 id="modal-title" className="modal-title">
          Ingredientes
        </h2>
        <h3 className="modal-subtitle">{product.name}</h3>

        <div className="modal-body">
          {product.ingredientes_completos && product.ingredientes_completos.length > 0 ? (
            <ul className="ingredients-list">
              {product.ingredientes_completos.map((ing, idx) => (
                <li key={idx} className="ingredient-item">
                  {ing}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-ingredients">Información de ingredientes no disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
}
