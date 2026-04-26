import type { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: 'Sérum Vitamina C',
    price: 28.99,
    description: 'Ilumina y unifica el tono de tu piel con antioxidantes puros.',
    icon: 'Sun',
    category: 'Facial',
  },
  {
    id: 2,
    name: 'Crema Hidratante',
    price: 34.50,
    description: 'Hidratación profunda con ácido hialurónico y ceramidas.',
    icon: 'Droplets',
    category: 'Facial',
  },
  {
    id: 3,
    name: 'Limpiador Facial',
    price: 19.99,
    description: 'Limpieza suave que respeta la barrera natural de tu piel.',
    icon: 'Sparkles',
    category: 'Limpieza',
  },
  {
    id: 4,
    name: 'Protector Solar SPF50',
    price: 24.99,
    description: 'Protección avanzada UVA/UVB con acabado invisible.',
    icon: 'Shield',
    category: 'Protección',
  },
  {
    id: 5,
    name: 'Tónico Rosas',
    price: 22.00,
    description: 'Equilibra el pH y prepara tu piel para el tratamiento.',
    icon: 'Flower2',
    category: 'Facial',
  },
  {
    id: 6,
    name: 'Mascarilla Nocturna',
    price: 39.99,
    description: 'Regeneración celular mientras duermes con retinol suave.',
    icon: 'Moon',
    category: 'Tratamiento',
  },
];
