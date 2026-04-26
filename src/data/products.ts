import type { Product } from '../context/CartContext';

/* ═══ Productos más vendidos (se muestran arriba) ═══ */
export const bestSellers: Product[] = [
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
    name: 'Protector Solar SPF50',
    price: 24.99,
    description: 'Protección avanzada UVA/UVB con acabado invisible.',
    icon: 'Shield',
    category: 'Protección',
  },
  {
    id: 4,
    name: 'Mascarilla Nocturna',
    price: 39.99,
    description: 'Regeneración celular mientras duermes con retinol suave.',
    icon: 'Moon',
    category: 'Tratamiento',
  },
];

/* ═══ Categorías con sus productos ═══ */
export interface Category {
  name: string;
  icon: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    name: 'Cuidado Facial',
    icon: 'Sparkles',
    products: [
      {
        id: 10,
        name: 'Sérum Vitamina C',
        price: 28.99,
        description: 'Ilumina y unifica el tono de tu piel con antioxidantes puros.',
        icon: 'Sun',
        category: 'Cuidado Facial',
      },
      {
        id: 11,
        name: 'Crema Hidratante',
        price: 34.50,
        description: 'Hidratación profunda con ácido hialurónico y ceramidas.',
        icon: 'Droplets',
        category: 'Cuidado Facial',
      },
      {
        id: 12,
        name: 'Tónico de Rosas',
        price: 22.00,
        description: 'Equilibra el pH y prepara tu piel para el tratamiento.',
        icon: 'Flower2',
        category: 'Cuidado Facial',
      },
      {
        id: 13,
        name: 'Contorno de Ojos',
        price: 31.99,
        description: 'Reduce ojeras y líneas finas con péptidos y cafeína.',
        icon: 'Eye',
        category: 'Cuidado Facial',
      },
      {
        id: 14,
        name: 'Sérum Retinol 0.5%',
        price: 36.00,
        description: 'Renueva y alisa la textura de la piel durante la noche.',
        icon: 'Moon',
        category: 'Cuidado Facial',
      },
      {
        id: 15,
        name: 'Gel Aloe Vera',
        price: 15.99,
        description: 'Calma e hidrata pieles irritadas o sensibles al instante.',
        icon: 'Leaf',
        category: 'Cuidado Facial',
      },
    ],
  },
  {
    name: 'Limpieza',
    icon: 'Waves',
    products: [
      {
        id: 20,
        name: 'Limpiador Facial Suave',
        price: 19.99,
        description: 'Limpieza suave que respeta la barrera natural de tu piel.',
        icon: 'Sparkles',
        category: 'Limpieza',
      },
      {
        id: 21,
        name: 'Agua Micelar',
        price: 16.50,
        description: 'Desmaquilla y limpia en un solo paso, sin enjuagar.',
        icon: 'Droplets',
        category: 'Limpieza',
      },
      {
        id: 22,
        name: 'Exfoliante Enzimático',
        price: 26.99,
        description: 'Elimina células muertas sin microplásticos ni abrasión.',
        icon: 'RotateCcw',
        category: 'Limpieza',
      },
      {
        id: 23,
        name: 'Aceite Limpiador',
        price: 23.50,
        description: 'Disuelve maquillaje waterproof y protector solar en profundidad.',
        icon: 'FlaskConical',
        category: 'Limpieza',
      },
      {
        id: 24,
        name: 'Mascarilla de Arcilla',
        price: 21.00,
        description: 'Purifica poros y absorbe exceso de grasa con arcilla verde.',
        icon: 'Layers',
        category: 'Limpieza',
      },
    ],
  },
  {
    name: 'Protección Solar',
    icon: 'Shield',
    products: [
      {
        id: 30,
        name: 'Protector Solar SPF50',
        price: 24.99,
        description: 'Protección avanzada UVA/UVB con acabado invisible.',
        icon: 'Shield',
        category: 'Protección Solar',
      },
      {
        id: 31,
        name: 'Bruma Solar SPF30',
        price: 18.99,
        description: 'Spray ligero ideal para reaplicar sobre el maquillaje.',
        icon: 'Wind',
        category: 'Protección Solar',
      },
      {
        id: 32,
        name: 'Protector Solar Tinted',
        price: 27.50,
        description: 'SPF50 con color adaptable que unifica el tono de tu piel.',
        icon: 'Palette',
        category: 'Protección Solar',
      },
      {
        id: 33,
        name: 'Bálsamo Labial SPF25',
        price: 9.99,
        description: 'Hidrata y protege tus labios del sol con manteca de karité.',
        icon: 'Heart',
        category: 'Protección Solar',
      },
    ],
  },
];
