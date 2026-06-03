export interface Variety {
  tipo: string;
  ingredientes_completos: string[];
}

export interface Product {
  id: number;
  name: string;
  stock: number;
  description: string;
  icon: string;
  category: string;
  ingredientes_completos?: string[];
  caracteristicas_formula: string[];
  presentacion?: string;
  variedades_incluidas?: Variety[];
}

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
        id: 1,
        name: 'Global Beauty Care Vitamin C Facial Serum (15ML)',
        stock: 4,
        description: 'Fórmula concentrada iluminadora que ayuda a unificar el tono de la piel y suavizar líneas finas.',
        icon: 'Sun',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Propilenglicol", "Ácido ascórbico (Vitamina C)", "Niacinamida (Vitamina B3)", "Hialuronato de sodio", "Extracto de fruto de pomelo", "Carbómero", "Arginina", "Fenoxietanol", "Alantoína", "EDTA disódico", "Aceite de ricino hidrogenado PEG-40", "Fragancia"],
        caracteristicas_formula: ["Fórmula concentrada iluminadora", "Ayuda a unificar el tono y suavizar líneas", "Apto para todo tipo de piel"]
      },
      {
        id: 2,
        name: 'Global Beauty Care Retinol Facial Serum (15ML)',
        stock: 4,
        description: 'Fórmula concentrada antiedad que estimula la renovación celular y minimiza arrugas.',
        icon: 'Moon',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Propilenglicol", "Retinol", "Palmitato de retinol", "Acetato de tocoferilo (Vitamina E)", "Hialuronato de sodio", "Carbómero", "Arginina", "Fenoxietanol", "Alantoína", "EDTA disódico", "Aceite de ricino hidrogenado PEG-40", "Fragancia", "BHT"],
        caracteristicas_formula: ["Fórmula concentrada antiedad", "Estimula la renovación celular", "Se recomienda su uso preferentemente en la rutina nocturna"]
      },
      {
        id: 3,
        name: 'Global Beauty Care Facial Serum Concentrated Retinol (10 Capsules)',
        stock: 4,
        description: 'Cápsulas monodosis herméticas que conservan la potencia del retinol puro sin oxidación.',
        icon: 'Eye',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Ciclopentasiloxano", "Dimeticonol", "Dimeticona", "Retinol", "Palmitato de retinol", "Acetato de tocoferilo (Vitamina E)", "Aceite de Glycine Soja (Soja)", "BHT"],
        caracteristicas_formula: ["Cápsulas monodosis herméticas", "Conserva la potencia del retinol sin oxidación", "Textura sedosa de absorción rápida"]
      },
      {
        id: 4,
        name: 'Global Beauty Care Blemish Control Oil-Free Soothing Moisturizer (50ML)',
        stock: 2,
        description: 'Crema hidratante libre de aceites que calma rojeces gracias al aloe vera y pepino.',
        icon: 'Sparkles',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Ácido hialurónico", "Extracto de hoja de Aloe Barbadensis", "Extracto de fruto de Cucumis Sativus (Pepino)", "Ácido salicílico", "Carbómero", "Fenoxietanol", "Etilhexilglicerina"],
        caracteristicas_formula: ["Crema hidratante libre de aceites", "Calma rojeces e irritaciones gracias al aloe y pepino", "Ideal para pieles con tendencia al acné"]
      },
      {
        id: 5,
        name: 'Global Beauty Care Power Moisturizer with Retinol (50ML)',
        stock: 2,
        description: 'Crema hidratante reconstructora con antioxidantes diseñada para atenuar arrugas de expresión.',
        icon: 'Droplets',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Caprílico/Triglicérido cáprico", "Retinol", "Acetato de tocoferilo (Vitamina E)", "Hialuronato de sodio", "Estearato de glicerilo", "Fenoxietanol", "BHT"],
        caracteristicas_formula: ["Crema hidratante reconstructora", "Combina retinol con antioxidantes esenciales", "Fórmula diseñada para atenuar arrugas de expresión"]
      },
      {
        id: 6,
        name: 'Global Beauty Care Retinol Renewing Double Serum (50ML)',
        stock: 6,
        description: 'Suero de doble acción texturizante que refina el tono y la textura irregular de la piel.',
        icon: 'Layers',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Ciclohexasiloxano", "Retinol", "Niacinamida", "Aceite de semilla de Simmondsia Chinensis (Jojoba)", "Hialuronato de sodio", "Fenoxietanol", "Fragancia"],
        caracteristicas_formula: ["Suero de doble acción texturizante", "Refina el tono y la textura irregular de la piel", "Combina una fase hidrofílica y una lipofílica"]
      },
      {
        id: 7,
        name: 'Global Beauty Care Power Serum (50ML)',
        stock: 4,
        description: 'Suero concentrado restaurador global que combate múltiples signos del envejecimiento.',
        icon: 'Zap',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Propilenglicol", "Péptidos de colágeno", "Ácido hialurónico", "Niacinamida", "Extracto de Camellia Sinensis (Té verde)", "Fenoxietanol", "Carbómero"],
        caracteristicas_formula: ["Suero concentrado restaurador global", "Combate múltiples signos del envejecimiento", "Aumenta la densidad y luminosidad cutánea"]
      },
      {
        id: 8,
        name: 'Glow Up Hyaluronic Acid 2% + Rice Ferment Night Booster (30ML)',
        stock: 2,
        description: 'Booster nocturno ultra-hidratante. El fermento de arroz ilumina y suaviza manchas cutáneas.',
        icon: 'Moon',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Hialuronato de sodio (2%)", "Filtrado de fermento de arroz", "Glicerina", "Propanodiol", "Fenoxietanol", "Etilhexilglicerina", "Goma xantana"],
        caracteristicas_formula: ["Booster nocturno ultra-hidratante", "El fermento de arroz ilumina y suaviza manchas", "Complejo de ácido hialurónico concentrado al 2%"]
      },
      {
        id: 9,
        name: 'Glow Up Vitamin C + Rose Ferment Antioxidant Serum (30ML)',
        stock: 2,
        description: 'Suero antioxidante que defiende la piel de los radicales libres aportando un acabado luminoso.',
        icon: 'Sun',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Ácido ascórbico (Vitamina C)", "Filtrado de fermento de rosa", "Glicerina", "Niacinamida", "Propanodiol", "Fenoxietanol", "Fragancia natural"],
        caracteristicas_formula: ["Suero antioxidante protector", "Defiende la piel de los radicales libres", "Aporta un acabado luminoso instantáneo"]
      },
      {
        id: 10,
        name: 'Multi-Peptide Anti-Aging Serum (30ML)',
        stock: 1,
        description: 'Complejo de péptidos dirigidos que estimula la síntesis de colágeno estructural y firmeza.',
        icon: 'Sparkles',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Palmitoil tripéptido-1", "Palmitoil tetrapéptido-7", "Hialuronato de sodio", "Propanodiol", "Fenoxietanol", "Carbómero"],
        caracteristicas_formula: ["Complejo de péptidos dirigidos", "Estimula la síntesis de colágeno estructural", "Mejora visiblemente la firmeza del óvalo facial"]
      },
      {
        id: 11,
        name: 'Super Greens Vitality Serum with Spinach & Hyaluronic Acid (30ML)',
        stock: 2,
        description: 'Inyección de vitaminas y vitalidad para pieles estresadas con base de ácido hialurónico puro.',
        icon: 'Leaf',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Extracto de hoja de Spinacia Oleracea (Espinaca)", "Hialuronato de sodio", "Extracto de Brassica Oleracea (Col rizada)", "Fenoxietanol", "Clorofilina"],
        caracteristicas_formula: ["Suero nutritivo superalimento (Supergreens)", "Inyección de vitaminas y vitalidad para pieles estresadas", "Base de ácido hialurónico puro"]
      },
      {
        id: 12,
        name: 'Glow Up Serum with Watermelon Extract and Niacinamide (30ML)',
        stock: 3,
        description: 'Suero hidratante de acabado húmedo ("Dewy") que minimiza la apariencia de poros abiertos.',
        icon: 'Heart',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Extracto de fruto de Citrullus Lanatus (Sandía)", "Niacinamida", "Hialuronato de sodio", "Fenoxietanol", "Fragancia", "Mica"],
        caracteristicas_formula: ["Suero hidratante de acabado húmedo ('Dewy')", "La sandía refresca e hidrata profundamente", "La niacinamida minimiza la apariencia de poros"]
      },
      {
        id: 13,
        name: 'Glow Up Revitalizing Serum with Pomegranate Extract and Peptides (30ML)',
        stock: 2,
        description: 'Suero revitalizante y energético que actúa como un potente escudo antioxidante facial.',
        icon: 'Flame',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Extracto de fruto de Punica Granatum (Granada)", "Palmitoil tripéptido-5", "Hialuronato de sodio", "Fenoxietanol", "Etilhexilglicerina"],
        caracteristicas_formula: ["Suero revitalizante y energético", "La granada actúa como un potente escudo antioxidante", "Los péptidos rellenan líneas finas superficiales"]
      },
      {
        id: 14,
        name: 'Glow Up Renewing Serum with Avocado Extract and Ceramides (30ML)',
        stock: 2,
        description: 'Suero reparador de la barrera cutánea que nutre intensamente las zonas resecas de la piel.',
        icon: 'ShieldAlert',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Extracto de fruto de Persea Gratissima (Aguacate)", "Ceramida NP", "Ceramida AP", "Fitoesfingosina", "Hialuronato de sodio", "Fenoxietanol"],
        caracteristicas_formula: ["Suero reparador de la barrera cutánea", "El aguacate nutre intensamente las zonas secas", "Las ceramidas restauran la protección lipídica natural"]
      },
      {
        id: 15,
        name: 'Super Greens Brightening Eye Cream with Kale and Vitamin C (15ML)',
        stock: 1,
        description: 'Crema de contorno de ojos iluminadora que desvanece efectivamente la apariencia de ojeras oscuras.',
        icon: 'Eye',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Caprílico/Triglicérido cáprico", "Glicerina", "Extracto de hoja de Brassica Oleracea (Col rizada)", "Ácido ascórbico (Vitamina C)", "Estearato de glicerilo", "Alcohol cetílico", "Fenoxietanol"],
        caracteristicas_formula: ["Crema de contorno de ojos iluminadora", "Desvanece la apariencia de ojeras oscuras", "Fórmula ligera rica en nutrientes verdes"]
      },
      {
        id: 16,
        name: 'Global Beauty Care Collagen Serum Under Eye Roller (15ML)',
        stock: 1,
        description: 'Aplicador roll-on metálico con efecto frío que drena bolsas e hidrata la zona ocular.',
        icon: 'RotateCw',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Propilenglicol", "Colágeno hidrolizado", "Hialuronato de sodio", "Extracto de Camellia Sinensis", "Fenoxietanol", "Hidroxiethylcelulosa"],
        caracteristicas_formula: ["Aplicador roll-on metálico con effecto frío", "Drena las bolsas debajo de los ojos eficazmente", "Aporta colágeno para dar firmeza a la delicada zona ocular"]
      },
      {
        id: 17,
        name: 'Global Beauty Care Blemish Control Treatment Cream Gel (15ML)',
        stock: 1,
        description: 'Tratamiento localizado con Ácido salicílico al 2% que desatasca poros y mitiga brotes activos.',
        icon: 'Activity',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Ácido salicílico (2%)", "Glicerina", "Acrilatos/C10-30 Alquil Acrilato Crosspolymer", "Extracto de hoja de Aloe Barbadensis", "Extracto de Hammamelis Virginiana", "Fenoxietanol"],
        caracteristicas_formula: ["Tratamiento localizado en crema-gel para imperfecciones", "Ácido salicílico al 2% que desatasca los poros", "Trata y disminuye manchas y brotes activos rápidamente"]
      },
      {
        id: 18,
        name: 'Global Beauty Care Smooth & Lift Collagen Facial Serum (30ML)',
        stock: 1,
        description: 'Suero de efecto tensor y reafirmante que ayuda a restaurar niveles estructurales de colágeno.',
        icon: 'TrendingUp',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Colágeno soluble", "Hialuronato de sodio", "Pantenol", "Carbómero", "Arginina", "Fenoxietanol", "Clorfenesina"],
        caracteristicas_formula: ["Suero de efecto tensor y reafirmante", "Restaura los niveles de colágeno perdidos", "Mejora el volumen y la suavidad de las líneas corporales/faciales"]
      },
      {
        id: 19,
        name: 'Global Beauty Care Smooth & Lift Collagen Skin Cream (50ML)',
        stock: 1,
        description: 'Crema facial reestructurante que sella la humedad formando una duradera capa protectora.',
        icon: 'Smile',
        category: 'Cuidado Facial',
        ingredientes_completos: ["Agua", "Glicerina", "Ácido esteárico", "Colágeno soluble", "Manteca de Butyrospermum Parkii", "Alcohol cetílico", "Dimeticona", "Fenoxietanol"],
        caracteristicas_formula: ["Crema hidratante reestructurante facial", "Sella la humedad formando una capa protectora", "Efecto lifting y suavizante continuo"]
      }
    ]
  },
  {
    name: 'Limpieza',
    icon: 'Waves',
    products: [
      {
        id: 20,
        name: 'Global Beauty Care Gel Face Mask (3-Pack)',
        stock: 3,
        description: 'Tratamiento facial triple en gel con efectos iluminadores, purificantes y tensores.',
        icon: 'Layers',
        category: 'Limpieza',
        presentacion: 'Empaque con 3 mascarillas individuales de gel (Multi-Pack)',
        caracteristicas_formula: ["Tratamiento facial triple en gel", "Cada mascarilla está formulada para un beneficio específico", "Fórmulas refrescantes de rápida absorción"],
        variedades_incluidas: [
          {
            tipo: "Charcoal Gel Mask (Purificante)",
            ingredientes_completos: ["Agua", "Glicerina", "Polvo de carbón vegetal", "Extracto de Hamamelis Virginiana", "Alcohol polivinílico", "Fenoxietanol", "Fragancia"]
          },
          {
            tipo: "Vitamin C Gel Mask (Iluminadora)",
            ingredientes_completos: ["Agua", "Glicerina", "Ácido ascórbico (Vitamina C)", "Hialuronato de sodio", "Carbómero", "Fenoxietanol", "Fragancia"]
          },
          {
            tipo: "Gold Gel Mask (Antiedad/Firmeza)",
            ingredientes_completos: ["Agua", "Glicerina", "Colágeno hidrolizado", "Oro coloidal", "Mica", "Fenoxietanol", "Etilhexilglicerina"]
          }
        ]
      },
      {
        id: 21,
        name: 'Global Beauty Care Clay Face Mask (3-Pack)',
        stock: 4,
        description: 'Set de limpieza profunda tradicional multizona (Contiene pepino, sal rosa, minerales y aguacate).',
        icon: 'Grid',
        category: 'Limpieza',
        presentacion: 'Empaque con 3 mascarillas individuales de arcilla (Multi-Pack Tradicional)',
        caracteristicas_formula: ["Set de limpieza profunda multizona (Multi-masking)", "Absorbe impurezas y exceso de grasa sin resecar", "Perfecto para tratar diferentes zonas del rostro al mismo tiempo"],
        variedades_incluidas: [
          {
            tipo: "Dead Sea Minerals Clay Mask (Desintoxicante)",
            ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Lodo del Mar Muerto (Sales minerales)", "Glicerina", "Fenoxietanol", "Fragancia"]
          },
          {
            tipo: "Avocado & Oatmeal Clay Mask (Nutritiva/Purificante)",
            ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Extracto de fruto de Persea Gratissima (Aguacate)", "Extracto de avena sativa", "Glicerina", "Fenoxietanol"]
          },
          {
            tipo: "Cucumber & Pink Salt Clay Mask (Renovadora/Suave)",
            ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Extracto de fruto de Cucumis Sativus (Pepino)", "Cloruro de sodio (Sal rosa del Himalaya)", "Glicerina", "Fenoxietanol"]
          }
        ]
      },
      {
        id: 22,
        name: 'Global Beauty Care Clay Face Mask Botanical (3-Pack)',
        stock: 4,
        description: 'Set de mascarillas de arcilla con extractos botánicos de cúrcuma, miel, coco y manzanilla.',
        icon: 'Flower',
        category: 'Limpieza',
        presentacion: 'Empaque con 3 mascarillas individuales de arcilla (Multi-Pack Botánico)',
        caracteristicas_formula: ["Set de mascarillas de arcilla con extractos botánicos", "Diseñado para calmar, nutrir e iluminar la piel profundamente", "Ideal para sesiones de multi-masking según la necesidad de cada zona del rostro"],
        variedades_incluidas: [
          {
            tipo: "Turmeric & Honey Clay Mask (Iluminadora y Antioxidante)",
            ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Glicerina", "Extracto de raíz de Curcuma Longa (Cúrcuma)", "Extracto de miel", "Alantoína", "Fenoxietanol", "Fragancia"]
          },
          {
            tipo: "Coconut & Shea Butter Clay Mask (Nutritiva e Hidratante)",
            ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Glicerina", "Aceite de Cocos Nucifera (Coco)", "Manteca de Butyrospermum Parkii (Karité)", "Fenoxietanol", "Fragancia"]
          },
          {
            tipo: "Chamomile & Sage Clay Mask (Calmante y Purificante)",
            ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Glicerina", "Extracto de flor de Chamomilla Recutita (Manzanilla)", "Extracto de hoja de Salvia Officinalis (Salvia)", "Fenoxietanol", "Fragancia"]
          }
        ]
      },
      {
        id: 23,
        name: 'Global Beauty Care Clay Face Mask Fig (1-Pack, 35G)',
        stock: 8,
        description: 'Mascarilla individual de arcilla enriquecida con propiedades antioxidantes y suavizantes del higo.',
        icon: 'Flame',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Glicerina", "Extracto de fruto de Ficus Carica (Higo)", "Fenoxietanol", "Goma xantana", "Etilhexilglicerina", "Fragancia"],
        caracteristicas_formula: ["Mascarilla de arcilla individual", "Propiedades antioxidantes y suavizantes del higo", "Limpia impurezas profundamente"]
      },
      {
        id: 24,
        name: 'Global Beauty Care Clay Face Mask Honey (1-Pack, 35G)',
        stock: 6,
        description: 'Mascarilla de arcilla nutritiva que combina la limpieza con la alta hidratación de la miel pura.',
        icon: 'Disc',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Glicerina", "Extracto de miel", "Alantoína", "Fenoxietanol", "Goma xantana", "Etilhexilglicerina", "Fragancia"],
        caracteristicas_formula: ["Mascarilla de arcilla nutritiva", "Combina la limpieza de la arcilla con la hidratación de la miel", "Ideal para pieles opacas"]
      },
      {
        id: 25,
        name: 'Global Beauty Care Face Mask Peel Off Pumpkin (1-Pack, 35G)',
        stock: 6,
        description: 'Mascarilla exfoliante peel-off con enzimas de calabaza que remueven impurezas superficiales.',
        icon: 'Smile',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Alcohol polivinílico", "Alcohol desnaturalizado", "Glicerina", "Extracto de fruto de Cucurbita Pepo (Calabaza)", "Fenoxietanol", "Fragancia", "Óxidos de hierro"],
        caracteristicas_formula: ["Mascarilla exfoliante peel-off", "Enzimas de calabaza que promueven la renovación celular", "Remueve células muertas superficiales"]
      },
      {
        id: 26,
        name: 'Global Beauty Care Face Mask Peel Off Black Sugar Extract (1-Pack, 35G)',
        stock: 8,
        description: 'Mascarilla peel-off purificante con extracto de azúcar negro para eliminar puntos negros.',
        icon: 'RefreshCw',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Alcohol polivinílico", "Alcohol desnaturalizado", "Glicerina", "Extracto de azúcar negro (Melaza)", "Extracto de carbón vegetal", "Fenoxietanol", "Fragancia"],
        caracteristicas_formula: ["Mascarilla peel-off purificante", "El azúcar negro ayuda a suavizar la textura", "Elimina puntos negros e impurezas de los poros"]
      },
      {
        id: 27,
        name: 'Global Beauty Care Power Bubbling Clay Mask (74ML)',
        stock: 3,
        description: 'Fórmula efervescente auto-espumosa con Arcilla Kaolin y Carbón para desintoxicar poros.',
        icon: 'Wind',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Caolín", "Bentonita", "Metil perfluorobutil éter", "Glicerina", "Polvo de carbón vegetal", "Lauril sulfato de sodio", "Fenoxietanol", "Goma xantana", "Fragancia"],
        caracteristicas_formula: ["Fórmula efervescente auto-espumosa con Arcilla Kaolin y Bentonita", "Las burbujas de oxígeno limpian profundamente los poros", "Remueve el exceso de sebo y toxinas ambientales"]
      },
      {
        id: 28,
        name: 'Global Beauty Care Retinol Essence Mask (1-Pack)',
        stock: 2,
        description: 'Mascarilla de tejido (Sheet Mask) saturada en esencia de retinol para un shot intensivo antiedad.',
        icon: 'FileText',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Glicerina", "Propilenglicol", "Retinol", "Hialuronato de sodio", "Alantoína", "Polisorbato 20", "Fenoxietanol", "Clorfenesina", "Fragancia"],
        caracteristicas_formula: ["Mascarilla de tejido (Sheet Mask) saturada en esencia", "Tratamiento intensivo antienvejecimiento de 15 minutos", "Deja la piel visiblemente más firme"]
      },
      {
        id: 29,
        name: 'Tea Tree Power + Caffeine + B5 Revive Serum Mask (30ML)',
        stock: 4,
        description: 'Suero en mascarilla descongestionante. Controla imperfecciones y regula el exceso de brillo.',
        icon: 'Coffee',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Aceite de hoja de Melaleuca Alternifolia (Árbol de té)", "Cafeína", "Pantenol (Vitamina B5)", "Glicerina", "Extracto de Centella Asiática", "Fenoxietanol"],
        caracteristicas_formula: ["Suero en mascarilla descongestionante", "La cafeína reduce la hinchazón y revitaliza", "El árbol de té controla imperfecciones y brotes"]
      },
      {
        id: 30,
        name: 'Rice Water Foaming Enzyme Cleanser (74ML)',
        stock: 2,
        description: 'Limpiador facial espumoso con papaína que realiza una microexfoliación diaria muy suave.',
        icon: 'Sparkles',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Metil cocoil taurato de sodio", "Cocamidopropil betaína", "Filtrado de fermento de arroz", "Extracto de flor de Camellia Japonica", "Papaína (Enzima)", "Glicerina", "Fenoxietanol"],
        caracteristicas_formula: ["Limpiador facial espumoso enzimático", "La papaína realiza una microexfoliación suave", "El agua de arroz unifica el tono e ilumina"]
      },
      {
        id: 31,
        name: 'Global Beauty Care Blemish Control Pore Clearing Scrub (74ML)',
        stock: 1,
        description: 'Exfoliante microfino con ácido salicílico para limpiar impurezas físicas y puntos negros acumulados.',
        icon: 'Scissors',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Lauril sulfato de sodio", "Sílice hidratada (Microexfoliante)", "Glicerina", "Ácido salicílico", "Extracto de fruto de Cucumis Sativus", "Fenoxietanol"],
        caracteristicas_formula: ["Exfoliante microfino para poros obstaculizados", "Remueve físicamente la piel muerta e impurezas acumuladas", "Previene de forma activa la formación de nuevos puntos negros"]
      },
      {
        id: 32,
        name: 'Global Beauty Care Blemish Control Oil-Free Clarifying Cleanser (74ML)',
        stock: 1,
        description: 'Gel limpiador espumoso clarificante que remueve impurezas y regula el sebo cutáneo.',
        icon: 'Waves',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Cocamidopropil betaína", "Metil cocoil taurato de sodio", "Ácido salicílico", "Glicerina", "Extracto de Aloe Barbadensis", "Fenoxietanol"],
        caracteristicas_formula: ["Gel limpiador espumoso clarificante", "Remueve impurezas superficiales y maquillaje sin resecar", "Controla el brillo diario facial regulando la producción de grasa"]
      },
      {
        id: 33,
        name: 'Rice Water Milky Toner (118ML)',
        stock: 1,
        description: 'Tónico de textura lechosa inspirado en K-Beauty que calma, nutre e ilumina el tono cutáneo.',
        icon: 'Droplets',
        category: 'Limpieza',
        ingredientes_completos: ["Agua", "Filtrado de fermento de arroz", "Glicerina", "Propanodiol", "Extracto de semilla de Oryza Sativa (Arroz)", "Triglicérido caprílico/cáprico", "Lecitina hidrogenada", "Fenoxietanol", "Etilhexilglicerina"],
        caracteristicas_formula: ["Tónico de textura lechosa profundamente hidratante", "Inspirado en las rutinas de belleza coreanas (K-Beauty)", "Nutre, calma e ilumina el tono de la piel instantáneamente"]
      }
    ]
  },
  {
    name: 'Cuidado Corporal',
    icon: 'Shield',
    products: [
      {
        id: 34,
        name: 'Global Beauty Care Collagen Body Lotion Revitalizing (296 ML)',
        stock: 2,
        description: 'Loción corporal reafirmante con colágeno y manteca de karité para mejorar la elasticidad.',
        icon: 'Sparkles',
        category: 'Cuidado Corporal',
        ingredientes_completos: ["Agua", "Aceite mineral", "Glicerina", "Alcohol cetearílico", "Estearato de glicerilo", "Colágeno soluble", "Manteca de butyrospermum parkii (Karité)", "Dimeticona", "Carbómero", "Trietanolamina", "Fenoxietanol", "Fragancia"],
        caracteristicas_formula: ["Loción corporal reafirmante", "Mejora la elasticidad y textura de la piel seca", "Acción hidratante prolongada"]
      },
      {
        id: 35,
        name: 'Global Beauty Care Hyaluronic Acid Hydrating Body Lotion (296ML)',
        stock: 2,
        description: 'Loción corporal de hidratación intensa que retiene la humedad natural cutánea de forma prolongada.',
        icon: 'Droplets',
        category: 'Cuidado Corporal',
        ingredientes_completos: ["Agua", "Aceite mineral", "Glicerina", "Alcohol cetearílico", "Estearato de glicerilo", "Hialuronato de sodio", "Acetato de tocoferilo", "Dimeticona", "Carbómero", "Trietanolamina", "Fenoxietanol", "Fragancia"],
        caracteristicas_formula: ["Loción corporal de hidratación intensa", "Retiene la humedad natural de la barrera cutánea", "Textura ligera de rápida absorción"]
      },
      {
        id: 36,
        name: 'Global Beauty Care Vitamin C Illuminating Body Lotion (296ML)',
        stock: 2,
        description: 'Loción corporal iluminadora con Vitamina C y Niacinamida para unificar el tono del cuerpo.',
        icon: 'Sun',
        category: 'Cuidado Corporal',
        ingredientes_completos: ["Agua", "Aceite mineral", "Glicerina", "Alcohol cetearílico", "Estearato de glicerilo", "Ácido ascórbico (Vitamina C)", "Niacinamida", "Dimeticona", "Carbómero", "Trietanolamina", "Fenoxietanol", "Fragancia"],
        caracteristicas_formula: ["Loción corporal iluminadora", "Ayuda a unificar el tono de la piel del cuerpo", "Aporta un brillo saludable y natural"]
      },
      {
        id: 37,
        name: 'Global Beauty Care Glow Vitamin C Radiance, Face and Body Oil (95ML)',
        stock: 3,
        description: 'Aceite ligero multiusos que aporta un resplandor instantáneo sin sensación grasosa.',
        icon: 'Zap',
        category: 'Cuidado Corporal',
        ingredientes_completos: ["Aceite de Glycine Soja (Soja)", "Aceite de semilla de Helianthus Annuus (Girasol)", "Tetrahexildecil ascorbato (Vitamina C)", "Acetato de tocoferilo", "Fragancia"],
        caracteristicas_formula: ["Aceite ligero multiusos iluminador", "Aporta un resplandor instantáneo sin dejar sensación grasa", "Nutre profundamente rostro y cuerpo"]
      },
      {
        id: 38,
        name: 'Global Beauty Care Smooth Retinol Repair, and Body Oil (95ML)',
        stock: 3,
        description: 'Aceite emoliente de noche diseñado para suavizar y promover la renovación de la textura de la piel.',
        icon: 'Moon',
        category: 'Cuidado Corporal',
        ingredientes_completos: ["Aceite de Glycine Soja (Soja)", "Aceite de semilla de Helianthus Annuus (Girasol)", "Retinol", "Palmitato de retinol", "Acetato de tocoferilo", "BHT", "Fragancia"],
        caracteristicas_formula: ["Aceite de noche reparador", "Promueve la suavidad y renovación de la textura de la piel", "Fórmula emoliente antiedad"]
      },
      {
        id: 39,
        name: 'Hyaluronic Acid Exfoliant Body Scrub with Sea Salt & Cucumber (170GR)',
        stock: 2,
        description: 'Exfoliante mecánico con sal marina y pepino que remueve células muertas hidratando con ácido hialurónico.',
        icon: 'Scissors',
        category: 'Cuidado Corporal',
        ingredientes_completos: ["Sal marina", "Agua", "Lauret sulfato de sodio", "Glicerina", "Extracto de fruto de Pepino", "Ácido hialurónico", "Sílice", "Fenoxietanol", "Fragancia"],
        caracteristicas_formula: ["Exfoliante corporal mecánico con sal marina y pepino", "Remueve células muertas sin resecar el cuerpo", "Deja la piel suave y profundamente hidratada gracias al AH"]
      }
    ]
  }
];

export const bestSellers: Product[] = [
  categories[0].products[0],
  categories[0].products[4],
  categories[1].products[0],
  categories[2].products[1]
];