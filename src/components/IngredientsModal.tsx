import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Product } from '../data/products';
import './IngredientsModal.css';

interface IngredientsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function IngredientsModal({ isOpen, onClose, product }: IngredientsModalProps) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(0);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const hasVarieties = product.variedades_incluidas && product.variedades_incluidas.length > 0;
  const hasIngredients = product.ingredientes_completos && product.ingredientes_completos.length > 0;

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
          {hasVarieties ? (
            <div className="ingredients-tabs">
              <div className="tabs-header">
                {product.variedades_incluidas!.map((varie, idx) => (
                  <button
                    key={idx}
                    className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {varie.tipo}
                  </button>
                ))}
              </div>
              <div className="tab-content">
                <ul className="ingredients-list">
                  {product.variedades_incluidas![activeTab].ingredientes_completos.map((ing, idx) => (
                    <li key={idx} className="ingredient-item">
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : hasIngredients ? (
            <ul className="ingredients-list">
              {product.ingredientes_completos!.map((ing, idx) => (
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
