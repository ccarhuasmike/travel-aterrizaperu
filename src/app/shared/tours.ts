import type { Language } from './translation.service';

export type TranslatableTourField =
  | 'titulo'
  | 'lugar'
  | 'duracion'
  | 'tipo'
  | 'grupo'
  | 'idioma'
  | 'descripcion'
  | 'noches'
  | 'saliendo'
  | 'descripcionbreve'
  | 'incluye';

export interface Tour {
  id: string;
  titulo: string;
  lugar: string;
  imagen: string;
  precio: number;
  rating: string;
  descuento?: string;
  duracion: string;
  tipo: string;
  grupo: string;
  idioma: string;
  descripcion: string[];
  noches?: string;
  saliendo?: string;
  descripcionbreve?: string;
  paquete?: string;
  galeriaImagen?: string[];
  incluye?: string[];
  translations?: Partial<Record<Exclude<Language, 'es'>, Partial<Pick<Tour, TranslatableTourField>>>>;
}

export const TOURS: Tour[] = [
  {
    id: 'punta-cana-caribe-deluxe-Princess',
    titulo: 'Punta Cana - Caribe Deluxe Princess',
    lugar: 'Punta Cana, Republica Dominicana',
    imagen: 'assets/images/listing/PuntaCana/0000759_punta-cana-caribe-deluxe-princess_550.png',
    galeriaImagen: [
      'assets/images/listing/PuntaCana/0000758_punta-cana-caribe-deluxe-princess_320.png',
      'assets/images/listing/PuntaCana/0000759_punta-cana-caribe-deluxe-princess_550.png',
      'assets/images/listing/PuntaCana/0000760_punta-cana-caribe-deluxe-princess_550.png',
      'assets/images/listing/PuntaCana/0000761_punta-cana-caribe-deluxe-princess_550.png',
    ],
    precio: 1655.00,
    rating: '5.0 (30)',
    descuento: '',
    duracion: '2 días',
    tipo: 'Aventura',
    grupo: '50 personas',
    idioma: 'Español, Inglés',
    descripcion: [
      'Punta Cana con todo listo para que solo disfrutes.',
      'Ubicado frente a las paradisíacas playas de Punta Cana, rodeado de palmeras y aguas turquesas. Disfruta del Caribe, actividades acuáticas y una experiencia todo incluido inolvidable.',
      'Fechas de viaje 30 de diciembre – 03 de enero, 2027 5 días · 4 noches',
    ],
    noches: '4 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquete-playa-caribe',
    incluye: [
      'Boleto aéreo Lima/Punta Cana/Lima con LATAM Airlines - Permite mochila + Carry-On (12 kg)',
      'Traslados incluidos: Aeropuerto – hotel – aeropuerto (Servicio Compartido)',
      '4 noches de alojamiento en Grand Sirenis Punta Cana - Habitación Doble',
      'Sistema de alimentación Todo Incluido: Desayuno y almuerzo buffet, cena buffet o a la carta, piqueos y bebidas ilimitadas',
      'Seguro de viajes',
    ],
    translations: {
      en: {
        saliendo: "Leaving Lima",
        titulo: 'Punta Cana - Caribe Deluxe Princess',
        lugar: 'Punta Cana, Dominican Republic',
        duracion: '2 days',
        tipo: 'Adventure',
        grupo: '50 people',
        noches: '4 Nights',
        idioma: 'Spanish, English',
        descripcion: ['Punta Cana is ready for you to simply enjoy.', 'Located opposite the idyllic beaches of Punta Cana, surrounded by palm trees and turquoise waters. Enjoy the Caribbean, water activities, and an unforgettable all-inclusive experience.', 'Travel dates December 30 – January 3, 2027 5 days · 4 nights'],
        incluye: ['Air ticket Lima/Punta Cana/Lima with LATAM Airlines - Allows backpack + Carry-On (12 kg)', 'Transfers included: Airport – hotel – airport (Shared Service)', '4 nights accommodation at Grand Sirenis Punta Cana - Double Room', 'All-Inclusive Meal Plan: Buffet breakfast and lunch, buffet or à la carte dinner, snacks and unlimited drinks', 'Travel insurance'],
      },
      pt: {
        saliendo: "Saindo de Lima",
        titulo: 'Punta Cana - Caribe Deluxe Princess',
        lugar: 'Turquia e Grecia',
        duracion: '3 dias',
        tipo: 'Cidade',
        grupo: '30 pessoas',
        noches: '4 noites',
        idioma: 'Espanhol, Inglês',
        descripcion: ['Punta Cana está pronta para você simplesmente aproveitar.', 'Localizado em frente às praias paradisíacas de Punta Cana, rodeado por palmeiras e águas turquesa. Desfrute do Caribe, de atividades aquáticas e de uma experiência inesquecível com tudo incluído.', 'Datas da viagem: 30 de dezembro a 3 de janeiro de 2027 · 5 dias · 4 noites'],
        incluye: ['Passagem aérea Lima/Punta Cana/Lima com a LATAM Airlines - Permite mochila + bagagem de mão (12 kg)', 'Traslados incluídos: Aeroporto – hotel – aeroporto (Serviço Compartilhado)', '4 noites de hospedagem no Grand Sirenis Punta Cana - Quarto Duplo', 'Plano de refeições com tudo incluído: café da manhã e almoço em estilo buffet, jantar em estilo buffet ou à la carte, lanches e bebidas ilimitadas.', 'Seguro de viagem']
      },
    },
  },
  {
    id: 'punta-cana-grand-sirenis',
    titulo: 'Punta Cana - Grand Sirenis',
    lugar: 'Punta Cana, Rep. Dominicana',
    imagen: 'assets/images/listing/punta-cana-grand-sirenis/0000762_punta-cana-grand-sirenis_550.webp',
    galeriaImagen: [
      'assets/images/listing/punta-cana-grand-sirenis/0000762_punta-cana-grand-sirenis_550.webp',
      'assets/images/listing/punta-cana-grand-sirenis/0000763_punta-cana-grand-sirenis_550.webp',
      'assets/images/listing/punta-cana-grand-sirenis/0000764_punta-cana-grand-sirenis_550.webp',
      'assets/images/listing/punta-cana-grand-sirenis/0000765_punta-cana-grand-sirenis_550.webp',
    ],
    precio: 1579.00,
    rating: '5.0 (30)',
    descuento: '',
    duracion: '2 días',
    tipo: 'Aventura',
    grupo: '50 personas',
    idioma: 'Español',
    descripcion: [
      "Punta Cana con todo listo para que solo disfrutes.",
      'En el corazón del Caribe, con acceso a playas paradisíacas y paisajes tropicales únicos. Relájate, disfruta actividades frente al mar y descubre la magia de Punta Cana.',
      'Fechas de viaje 30 de diciembre – 03 de enero, 2027 5 días · 4 noches',
    ],
    noches: '4 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquete-playa-caribe',
    incluye: [
      'Boleto aéreo Lima/Punta Cana/Limacon LATAM Airlines - Permite mochila + Carry-On (12 kg)',
      'Traslados incluidos: Aeropuerto – hotel – aeropuerto (Servicio Compartido)',
      '4 noches de alojamiento en Grand Sirenis Punta Cana - Habitación Doble',
      'Sistema de alimentación Todo Incluido: Desayuno y almuerzo buffet, cena buffet o a la carta, piqueos y bebidas ilimitadas',
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: "Punta Cana - Grand Sirenis",
        lugar: "Punta Cana, Dominican Republic",
        duracion: "2 days",
        tipo: "Adventure",
        grupo: "50 people",
        idioma: "Spanish, English",
        descripcion: [
          "Punta Cana with everything ready for you to just enjoy.",
          "In the heart of the Caribbean, with access to paradisiacal beaches and unique tropical landscapes. Relax, enjoy activities by the sea, and discover the magic of Punta Cana.",
          "Travel dates December 30 – January 3, 2027 5 days · 4 nights"
        ],
        saliendo: "Leaving Lima",
        incluye: [
          "Air ticket Lima/Punta Cana/Lima with LATAM Airlines - Allows backpack + Carry-On (12 kg)",
          "Transfers included: Airport – hotel – airport (Shared Service)",
          "4 nights accommodation at Grand Sirenis Punta Cana - Double Room",
          "All-Inclusive meal plan: Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks",
          "Travel insurance"
        ]
      },
      pt: {
        titulo: "Punta Cana - Grand Sirenis",
        lugar: "Punta Cana, República Dominicana",
        duracion: "2 días",
        tipo: "Aventura",
        grupo: "50 personas",
        idioma: "Español",
        descripcion: [
          "Punta Cana está pronta para você simplesmente aproveitar.",
          "No coração do Caribe, com acesso a praias paradisíacas e paisagens tropicais únicas. Relaxe, aproveite atividades à beira-mar e descubra a magia de Punta Cana.",
          "Datas de viagem 30 de dezembro – 03 de janeiro, 2027 5 dias · 4 noites"
        ],
        saliendo: "Saindo de Lima",
        incluye: [
          "Passagem aérea Lima/Punta Cana/Lima com LATAM Airlines - Permite mochila + Carry-On (12 kg)",
          "Traslados incluídos: Aeroporto – hotel – aeroporto (Serviço Compartilhado)",
          "4 noites de hospedagem no Grand Sirenis Punta Cana - Quarto Duplo",
          "Plano de alimentação All-Inclusive: Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas",
          "Seguro de viagem"
        ]
      }
    }
  },
  {
    "id": "punta-cana-vista-sol",
    "titulo": "Punta Cana - Vista Sol",
    "lugar": "Punta Cana, Rep. Dominicana",
    "imagen": "assets/images/listing/Punta Cana - Vista Sol/0000769_punta-cana-vista-sol_550.webp",
    "galeriaImagen": [
      "assets/images/listing/Punta Cana - Vista Sol/0000285_punta-cana-vista-sol_550.webp",
      "assets/images/listing/Punta Cana - Vista Sol/0000769_punta-cana-vista-sol_550.webp",
      "assets/images/listing/Punta Cana - Vista Sol/0000948_punta-cana-vista-sol_550.webp",
      "assets/images/listing/Punta Cana - Vista Sol/0000768_punta-cana-vista-sol_550.webp"
    ],
    "precio": 1629.00,
    "rating": "4.8 (18)",
    "descuento": "",
    "duracion": "4 Noches",
    "tipo": "Todo Incluido",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Celebra el Año Nuevo en Vista Sol Punta Cana con la mejor atención y sistema todo incluido.",
      'Ubicado en Playa Bávaro, cerca de restaurantes y actividades acuáticas. Relájate frente al mar y descubre todo el encanto del Caribe dominicano.',
      'Fechas de viaje 30 de diciembre – 03 de enero, 2027 5 días · 4 noches'
    ],
    "noches": "4 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      'Boleto aéreo Lima/Punta Cana/Limacon LATAM Airlines - Permite mochila + Carry-On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Compartido)',
      '4 noches de alojamientoVista Sol Punta Cana - Habitación Comfort con balcón privado',
      'Sistema de alimentación Todo IncluidoDesayuno y almuerzo buffet, cena buffet o a la carta, piqueos y bebidas ilimitadas',
      'Cena de gala de Año Nuevo',
      'Seguro de viajes'
    ],
    translations: {
      en: {
        titulo: "Punta Cana - Vista Sol",
        lugar: "Punta Cana, Dominican Republic",
        noches: "4 Nights",
        saliendo: "Leaving Lima",
        descripcion: [
          "Celebrate the New Year at Vista Sol Punta Cana with the best service and all-inclusive system.",
          "Located on Bávaro Beach, close to restaurants and water activities. Relax by the sea and discover all the charm of the Dominican Caribbean.",
          "Travel dates December 30 – January 3, 2027 5 days · 4 nights"
        ],
        incluye: [
          'Air ticket Lima/Punta Cana/Lima with LATAM Airlines - Allows backpack + Carry-On (12 kg)',
          'Transfers included Airport – hotel – airport (Shared Service)',
          '4 nights accommodation Vista Sol Punta Cana - Comfort Room with private balcony',
          'All-Inclusive meal plan Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks',
          'New Year\'s Eve gala dinner',
          'Travel insurance'
        ]
      },
      pt: {
        titulo: "Punta Cana - Vista Sol",
        lugar: "Punta Cana, República Dominicana",
        noches: "4 noites",
        saliendo: "Saindo de Lima",
        descripcion: [
          "Celebre o Ano Novo no Vista Sol Punta Cana com o melhor serviço e sistema all-inclusive.",
          "Localizado na Praia de Bávaro, perto de restaurantes e atividades aquáticas. Relaxe à beira-mar e descubra todo o charme do Caribe dominicano.",
          "Datas de viagem 30 de dezembro – 03 de janeiro, 2027 5 dias · 4 noites"
        ],
        incluye: [
          'Passagem aérea Lima/Punta Cana/Lima com LATAM Airlines - Permite mochila + Carry-On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Compartilhado)',
          '4 noites de acomodação Vista Sol Punta Cana - Quarto Conforto com varanda privativa',
          'Plano de alimentação All-Inclusive Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas',
          'Jantar de gala de Ano Novo',
          'Seguro de viagem'
        ]
      }
    }
  },
  {
    "id": "punta-cana-whala-bavaro",
    "titulo": "Punta Cana - Whala!Bávaro",
    "lugar": "Punta Cana, Rep. Dominicana",
    "imagen": "assets/images/listing/Punta Cana - Whala!Bávaro/0000771_punta-cana-whalabavaro_550.webp",
    "galeriaImagen": [
      "assets/images/listing/Punta Cana - Whala!Bávaro/0000771_punta-cana-whalabavaro_550.webp",
      "assets/images/listing/Punta Cana - Whala!Bávaro/0000772_punta-cana-whalabavaro_550.webp",
      "assets/images/listing/Punta Cana - Whala!Bávaro/0000947_punta-cana-whalabavaro_550.webp",
      "assets/images/listing/Punta Cana - Whala!Bávaro/0000773_punta-cana-whalabavaro_550.webp",
    ],
    "precio": 1359.00,
    "rating": "4.7 (22)",
    "descuento": "12% Off",
    "duracion": "4 Noches",
    "tipo": "Todo Incluido",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Punta Cana con todo listo para que solo disfrutes.",
      "A pocos pasos de Playa Bávaro, una de las zonas más emblemáticas de Punta Cana. Vive una experiencia tropical rodeada de sol, mar y la esencia del Caribe dominicano.",
      "Fechas de viaje 30 de diciembre – 03 de enero, 2027 5 días · 4 noches"
    ],
    "noches": "4 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Boleto aéreo Lima/Punta Cana/Lima con LATAM Airlines - Permite mochila + Carry-On (12 kg)",
      "Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Compartido)",
      "4 noches de alojamiento Whalá!Bávaro - Habitación Doble",
      "Sistema de alimentación Todo Incluido Desayuno y almuerzo buffet, cena buffet o a la carta, piqueos y bebidas ilimitadas",
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: "Punta Cana - Whala!Bávaro",
        lugar: "Punta Cana, Dominican Republic",
        duracion: "4 nights",
        tipo: "All Inclusive",
        grupo: "50 people",
        idioma: "Spanish, English",
        saliendo: "Leaving Lima",
        descripcion: [
          "Punta Cana with everything ready for you to just enjoy.",
          "In the heart of the Caribbean, with access to paradisiacal beaches and unique tropical landscapes. Relax, enjoy activities by the sea, and discover the magic of Punta Cana.",
          "Travel dates December 30 – January 3, 2027 5 days · 4 nights"
        ],
        incluye: [
          "Air ticket Lima/Punta Cana/Lima with LATAM Airlines - Allows backpack + Carry-On (12 kg)",
          "Transfers included: Airport – hotel – airport (Shared Service)",
          "4 nights accommodation at Whalá!Bávaro - Double Room",
          "All-Inclusive meal plan: Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks",
          "Travel insurance"
        ]
      },
      pt: {
        titulo: "Punta Cana - Whala!Bávaro",
        lugar: "Punta Cana, República Dominicana",
        duracion: "4 noites",
        tipo: "Tudo Incluído",
        grupo: "50 pessoas",
        idioma: "Espanhol, Inglês",
        saliendo: "Saindo de Lima",
        descripcion: [
          "Punta Cana está pronta para você simplesmente aproveitar.",
          "No coração do Caribe, com acesso a praias paradisíacas e paisagens tropicais únicas. Relaxe, aproveite atividades à beira-mar e descubra a magia de Punta Cana.",
          "Datas de viagem 30 de dezembro – 03 de janeiro, 2027 5 dias · 4 noites"
        ],
        incluye: [
          "Passagem aérea Lima/Punta Cana/Lima com LATAM Airlines - Permite mochila + Carry-On (12 kg)",
          "Traslados incluídos: Aeroporto – hotel – aeroporto (Serviço Compartilhado)",
          "4 noites de hospedagem no Whalá!Bávaro - Quarto Duplo",
          "Plano de alimentação All-Inclusive: Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas",
          "Seguro de viagem"
        ]
      }
    }
  },
  {
    "id": "cartagena-plaza-hotel",
    "titulo": "Cartagena Plaza Hotel",
    "lugar": "Cartagena, Colombia",
    "imagen": "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000775_cartagena-cartagena-plaza-hotel_550.webp",
    "galeriaImagen": [
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000775_cartagena-cartagena-plaza-hotel_550.webp",
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000776_cartagena-cartagena-plaza-hotel_550.webp",
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000777_cartagena-cartagena-plaza-hotel_550.webp",
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000778_cartagena-cartagena-plaza-hotel_550.webp"
    ],
    "precio": 935.00,
    "rating": "4.6 (15)",
    "descuento": "",
    "duracion": "3 Noches",
    "tipo": "Playa / Ciudad",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Escapada de Año Nuevo a Cartagena de Indias alojándote en el Cartagena Plaza Hotel."
    ],
    "noches": "3 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Boleto aéreo Lima/Punta Cana/Lima con LATAM Airlines - Permite mochila + Carry-On (12 kg)",
      "Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Compartido)",
      "4 noches de alojamiento Whalá!Bávaro - Habitación Doble",
      "Sistema de alimentación Todo Incluido Desayuno y almuerzo buffet, cena buffet o a la carta, piqueos y bebidas ilimitadas",
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: "Cartagena Plaza Hotel",
        lugar: "Cartagena, Colombia",
        descripcion: [
          "New Year's getaway to Cartagena de Indias staying at the Cartagena Plaza Hotel."
        ],
        noches: "3 Nights",
        saliendo: "Leaving Lima",
        incluye: [
          "Air ticket Lima/Punta Cana/Lima with LATAM Airlines - Allows backpack + Carry-On (12 kg)",
          "Transfers included Airport – hotel – airport (Shared Service)",
          "4 nights of accommodation at Whalá!Bávaro - Double Room",
          "All-Inclusive meal plan: Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks",
          "Travel insurance"
        ]
      },
      pt: {
        titulo: "Cartagena Plaza Hotel",
        lugar: "Cartagena, Colômbia",
        descripcion: [
          "Escapada de Ano Novo para Cartagena de Indias hospedando-se no Cartagena Plaza Hotel."
        ],
        noches: "3 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Passagem aérea Lima/Punta Cana/Lima com LATAM Airlines - Permite mochila + Carry-On (12 kg)",
          "Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Compartilhado)",
          "4 noites de hospedagem no Whalá!Bávaro - Quarto Duplo",
          "Plano de alimentação Tudo Incluído: Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas",
          "Seguro de viagem"
        ]
      }
    }
  },
  {
    "id": "cartagena-decameron",
    "titulo": "Cartagena - Decameron",
    "lugar": "Cartagena, Colombia",
    "imagen": "assets/images/listing/cartagena-decameron/0000779_cartagena-decameron_550.webp",
    "galeriaImagen": [
      "assets/images/listing/cartagena-decameron/0000779_cartagena-decameron_550.webp",
      "assets/images/listing/cartagena-decameron/0000780_cartagena-decameron_550.webp",
      "assets/images/listing/cartagena-decameron/0000781_cartagena-decameron_550.webp",
      "assets/images/listing/cartagena-decameron/0000782_cartagena-decameron_550.webp"
    ],
    "precio": 1295.00,
    "rating": "4.9 (40)",
    "descuento": "",
    "duracion": "3 Noches",
    "tipo": "Todo Incluido",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Vive el Año Nuevo caribeño en el Hotel Decameron Cartagena con todo incluido."
    ],
    "noches": "3 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Boleto aéreo Lima/Punta Cana/Lima con LATAM Airlines - Permite mochila + Carry-On (12 kg)",
      "Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Compartido)",
      "4 noches de alojamiento Whalá!Bávaro - Habitación Doble",
      "Sistema de alimentación Todo Incluido Desayuno y almuerzo buffet, cena buffet o a la carta, piqueos y bebidas ilimitadas",
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: "Cartagena - Decameron",
        lugar: "Cartagena, Colombia",
        descripcion: [
          "Celebrate New Year's in the Caribbean at the Decameron Cartagena Hotel with all-inclusive."
        ],
        noches: "3 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Air ticket Lima/Punta Cana/Lima with LATAM Airlines - Allows backpack + Carry-On (12 kg)",
          "Transfers included Airport – hotel – airport (Shared Service)",
          "4 nights accommodation at Whalá!Bávaro - Double Room",
          "All-Inclusive meal plan: Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks",
          "Travel insurance"
        ]
      },
      pt: {
        titulo: "Cartagena - Decameron",
        lugar: "Cartagena, Colômbia",
        descripcion: [
          "Celebre o Ano Novo no Caribe no Hotel Decameron Cartagena com tudo incluído."
        ],
        noches: "3 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Passagem aérea Lima/Punta Cana/Lima com LATAM Airlines - Permite mochila + Carry-On (12 kg)",
          "Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Compartilhado)",
          "4 noites de acomodação no Whalá!Bávaro - Quarto Duplo",
          "Plano de alimentação Tudo Incluído: Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas",
          "Seguro de viagem"
        ]
      }
    }
  },
  {
    "id": "cartagena-dreams-karibana",
    "titulo": "Cartagena - Dreams Karibana",
    "lugar": "Cartagena, Colombia",
    "imagen": "assets/images/listing/Cartagena - Dreams Karibana/0000783_cartagena-dreams-karibana_550.png",
    "galeriaImagen": [
      "assets/images/listing/Cartagena - Dreams Karibana/0000783_cartagena-dreams-karibana_550.png",
      "assets/images/listing/Cartagena - Dreams Karibana/0000784_cartagena-dreams-karibana_550.png",
      "assets/images/listing/Cartagena - Dreams Karibana/0000785_cartagena-dreams-karibana_550.png",
      "assets/images/listing/Cartagena - Dreams Karibana/0000786_cartagena-dreams-karibana_550.png"
    ],
    "precio": 1785.00,
    "rating": "5.0 (12)",
    "descuento": "",
    "duracion": "3 Noches",
    "tipo": "Todo Incluido",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Experiencia de lujo para Año Nuevo en Dreams Karibana Cartagena."
    ],
    "noches": "3 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Vuelo",
      "Hotel",
      "Traslado",
      "Seguro"
    ],
    "translations": {
      "en": {
        titulo: "Cartagena - Dreams Karibana",
        lugar: "Cartagena, Colombia",
        descripcion: [
          "Luxury New Year's experience at Dreams Karibana Cartagena."
        ],
        noches: "3 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Flight",
          "Hotel",
          "Transfer",
          "Insurance"
        ]
      },
      "pt": {
        titulo: "Cartagena - Dreams Karibana",
        lugar: "Cartagena, Colômbia",
        descripcion: [
          "Experiência de Ano Novo de luxo no Dreams Karibana Cartagena."
        ],
        noches: "3 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Voo",
          "Hotel",
          "Traslado",
          "Seguro"
        ]
      }
    }
  },
  {
    "id": "aruba-eagle-aruba-resort",
    "titulo": "Aruba - Eagle Aruba Resort",
    "lugar": "Oranjestad, Aruba",
    "imagen": "assets/images/listing/Aruba - Eagle Aruba Resort/0000794_aruba-eagle-aruba-resort_550.webp",
    "galeriaImagen": [
      "assets/images/listing/Aruba - Eagle Aruba Resort/0000791_aruba-eagle-aruba-resort_550.webp",
      "assets/images/listing/Aruba - Eagle Aruba Resort/0000792_aruba-eagle-aruba-resort_550.webp",
      "assets/images/listing/Aruba - Eagle Aruba Resort/0000793_aruba-eagle-aruba-resort_550.webp",
      "assets/images/listing/Aruba - Eagle Aruba Resort/0000794_aruba-eagle-aruba-resort_550.webp"
    ],
    "precio": 2298.00,
    "rating": "4.9 (10)",
    "descuento": "",
    "duracion": "4 Noches",
    "tipo": "Playa",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Pasa el Año Nuevo en las arenas blancas de Eagle Beach hospedándote en Eagle Aruba Resort."
    ],
    "noches": "4 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Vuelo",
      "Hotel",
      "Traslado",
      "Seguro"
    ],
    translations: {
      en: {
        titulo: "Aruba - Eagle Aruba Resort",
        lugar: "Oranjestad, Aruba",
        descripcion: [
          "Spend New Year's on the white sands of Eagle Beach staying at Eagle Aruba Resort."
        ],
        noches: "4 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Flight",
          "Hotel",
          "Transfer",
          "Insurance"
        ]
      },
      pt: {
        titulo: "Aruba - Eagle Aruba Resort",
        lugar: "Oranjestad, Aruba",
        descripcion: [
          "Passe o Ano Novo nas areias brancas de Eagle Beach hospedando-se no Eagle Aruba Resort."
        ],
        noches: "4 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Voo",
          "Hotel",
          "Traslado",
          "Seguro"
        ]
      }
    }
  },
  {
    "id": "aruba-embassy-suites-by-hilton",
    "titulo": "Aruba - Embassy Suites By Hilton",
    "lugar": "Oranjestad, Aruba",
    "imagen": "assets/images/listing/Aruba - Embassy Suites By Hilton/0000796_aruba-embassy-suites-by-hilton_550.webp",
    "galeriaImagen": [
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000796_aruba-embassy-suites-by-hilton_550.webp",
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000797_aruba-embassy-suites-by-hilton_550.webp",
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000795_aruba-embassy-suites-by-hilton_550.webp",
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000798_aruba-embassy-suites-by-hilton_550.webp",
    ],
    "precio": 1970.00,
    "rating": "4.8 (14)",
    "descuento": "",
    "duracion": "4 Noches",
    "tipo": "Playa / Relax",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Alojamiento en Embassy Suites By Hilton en Aruba saliendo desde Lima para Año Nuevo."
    ],
    "noches": "4 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Vuelo",
      "Hotel",
      "Traslado",
      "Seguro"
    ],
    translations: {
      en: {
        titulo: "Aruba - Embassy Suites By Hilton",
        lugar: "Oranjestad, Aruba",
        descripcion: [
          "Stay at the Embassy Suites By Hilton in Aruba departing from Lima for New Year's."
        ],
        noches: "4 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Flight",
          "Hotel",
          "Transfer",
          "Insurance"
        ]
      },
      pt: {
        titulo: "Aruba - Embassy Suites By Hilton",
        lugar: "Oranjestad, Aruba",
        descripcion: [
          "Fique no Embassy Suites By Hilton em Aruba saindo de Lima para o Ano Novo."
        ],
        noches: "4 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Voo",
          "Hotel",
          "Traslado",
          "Seguro"
        ]
      }
    }
  },
  {
    "id": "aruba-secrets-baby-beach",
    "titulo": "Aruba - Secrets Baby Beach",
    "lugar": "Sint Nicolaas, Aruba",
    "imagen": "assets/images/listing/Aruba - Embassy Suites By Hilton/0000795_aruba-embassy-suites-by-hilton_550.webp",
    "galeriaImagen": [
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000795_aruba-embassy-suites-by-hilton_550.webp",
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000796_aruba-embassy-suites-by-hilton_550.webp",
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000797_aruba-embassy-suites-by-hilton_550.webp",
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000798_aruba-embassy-suites-by-hilton_550.webp"],
    "precio": 2844.00,
    "rating": "5.0 (8)",
    "descuento": "",
    "duracion": "4 Noches",
    "tipo": "Todo Incluido",
    "grupo": "Año Nuevo",
    "idioma": "Español",
    "descripcion": [
      "Experiencia exclusivo todo incluido de Año Nuevo en Secrets Baby Beach Aruba."
    ],
    "noches": "4 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Vuelo",
      "Hotel",
      "Traslado",
      "Seguro"
    ],
    translations: {
      en: {
        titulo: "Aruba - Secrets Baby Beach",
        lugar: "Sint Nicolaas, Aruba",
        descripcion: [
          "Exclusive all-inclusive New Year's experience at Secrets Baby Beach Aruba."
        ],
        noches: "4 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Flight",
          "Hotel",
          "Transfer",
          "Insurance"
        ]
      },
      pt: {
        titulo: "Aruba - Secrets Baby Beach",
        lugar: "Sint Nicolaas, Aruba",
        descripcion: [
          "Experiência exclusiva com tudo incluído de Ano Novo no Secrets Baby Beach Aruba."
        ],
        noches: "4 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Voo",
          "Hotel",
          "Traslado",
          "Seguro"
        ]
      }
    }
  },
  {
    "id": "panama",
    "titulo": "Panamá",
    "lugar": "Ciudad de Panamá, Panamá",
    "imagen": "assets/images/listing/panamá/0000799_panama_550.webp",
    "galeriaImagen": [
      "assets/images/listing/panamá/0000799_panama_550.webp",
      "assets/images/listing/panamá/0000800_panama_550.webp",
      "assets/images/listing/panamá/0000801_panama_550.webp",
      "assets/images/listing/panamá/0000803_panama_550.png"
    ],
    "precio": 559.00,
    "rating": "4.5 (35)",
    "descuento": "",
    "duracion": "3 Noches",
    "tipo": "Ciudad / Compras",
    "grupo": "General",
    "idioma": "Español",
    "descripcion": [
      "Paquete de viaje a Panamá por 3 noches saliendo desde Lima con vuelo, hotel y traslados."
    ],
    "noches": "3 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Vuelo",
      "Hotel",
      "Traslado"
    ],
    translations: {
      en: {
        titulo: "Panama",
        lugar: "Panama City, Panama",
        descripcion: [
          "3-night travel package to Panama departing from Lima with flight, hotel, and transfers."
        ],
        noches: "3 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Flight",
          "Hotel",
          "Transfer"
        ]
      },
      pt: {
        titulo: "Panamá",
        lugar: "Cidade do Panamá, Panamá",
        descripcion: [
          "Pacote de viagem de 3 noites para o Panamá saindo de Lima com voo, hotel e traslados."
        ],
        noches: "3 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Voo",
          "Hotel",
          "Traslado"
        ]
      }
    }
  },
  // paquetes-nacionales


  {
    id: 'cusco-casa-andina-standard-catedral',
    titulo: 'Casa Andina Standard Catedral',
    lugar: 'Cusco, Perú',
    imagen: 'assets/images/listing/Cusco - Casa Andina Standard Catedral/0000814_cusco-casa-andina-standard-catedral_550.webp',
    galeriaImagen: [
      'assets/images/listing/Cusco - Casa Andina Standard Catedral/0000814_cusco-casa-andina-standard-catedral_550.webp',
      'assets/images/listing/Cusco - Casa Andina Standard Catedral/0000815_cusco-casa-andina-standard-catedral_550.webp',
      'assets/images/listing/Cusco - Casa Andina Standard Catedral/0000816_cusco-casa-andina-standard-catedral_550.webp',
      'assets/images/listing/Cusco - Casa Andina Standard Catedral/0000817_cusco-casa-andina-standard-catedral_550.webp',

    ],
    precio: 529.00,
    rating: '5.0 (20)',
    descuento: '',
    duracion: '3 Noches',
    tipo: 'Cultura / Historia',
    grupo: 'Año Nuevo',
    idioma: 'Español',
    descripcion: [
      'Disfruta de la mística ciudad del Cusco y la magia de Machu Picchu hospedándote en el acogedor Casa Andina Standard Catedral durante Año Nuevo.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-nacionales',
    incluye: [
      'Boleto aéreo Lima/Cusco/Lima Con LATAM Airlines - Permite bolso o mochila + equipaje de mano (12kg)',
      'Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Privado)',
      '3 noches de alojamiento Casa Andina Standard Catedral - Habitación Tradicional',
      'Desayuno diario',
      'City Tour con entradas Servicio regular',
      'Boleto Turístico del Cusco Parcial 1 día de vigencia',
      'Impuestos'
    ],
    translations: {
      en: {
        titulo: "Casa Andina Standard Catedral",
        lugar: "Cusco, Peru",
        descripcion: [
          "Enjoy the mystical city of Cusco and the magic of Machu Picchu while staying at the cozy Casa Andina Standard Catedral during New Year's."
        ],
        noches: "3 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Flight Lima/Cusco/Lima with LATAM Airlines - Allows bag or backpack + hand luggage (12kg)",
          "Transfers included Airport – hotel – airport (Private Service)",
          "3 nights accommodation Casa Andina Standard Catedral - Traditional Room",
          "Daily breakfast",
          "City Tour with entrance Regular service",
          "Cusco Tourist Ticket Partial 1 day validity",
          "Taxes"
        ]
      },
      pt: {
        titulo: "Casa Andina Standard Catedral",
        lugar: "Cusco, Peru",
        descripcion: [
          "Disfruta de la mística ciudad del Cusco y la magia de Machu Picchu hospedándote en el acogedor Casa Andina Standard Catedral durante Año Nuevo."
        ],
        noches: "3 Noches",
        saliendo: "Saliendo de Lima",
        incluye: [
          "Boleto aéreo Lima/Cusco/Lima Con LATAM Airlines - Permite bolso o mochila + equipaje de mano (12kg)",
          "Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Privado)",
          "3 noches de alojamiento Casa Andina Standard Catedral - Habitación Tradicional",
          "Desayuno diario",
          "City Tour con entradas Servicio regular",
          "Boleto Turístico del Cusco Parcial 1 día de vigencia",
          "Impuestos"
        ]
      }
    }
  },
  {
    id: 'cusco-casa-andina-standard-cusco-plaza',
    titulo: 'Cusco - Casa Andina Standard Cusco Plaza',
    lugar: 'Cusco, Perú',
    imagen: 'assets/images/listing/cusco-casa-andina-standard-cusco-plaza/0000819_cusco-casa-andina-standard-cusco-plaza_550.webp',
    galeriaImagen: [
      'assets/images/listing/cusco-casa-andina-standard-cusco-plaza/0000819_cusco-casa-andina-standard-cusco-plaza_550.webp',
      'assets/images/listing/cusco-casa-andina-standard-cusco-plaza/0000820_cusco-casa-andina-standard-cusco-plaza_550.webp',
      'assets/images/listing/cusco-casa-andina-standard-cusco-plaza/0000821_cusco-casa-andina-standard-cusco-plaza_550.webp',
      'assets/images/listing/cusco-casa-andina-standard-cusco-plaza/0000946_cusco-casa-andina-standard-cusco-plaza_550.webp',

    ],
    precio: 569.00,
    rating: '4.9 (28)',
    descuento: '12% Off',
    duracion: '3 Noches',
    tipo: 'Cultura / Historia',
    grupo: 'Año Nuevo',
    idioma: 'Español',
    descripcion: [
      'Ubicado a pasos de la Plaza de Armas del Cusco, perfecto para vivir la festividad de Año Nuevo en el corazón de la ciudad imperial.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-nacionales',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ],
    translations: {
      en: {
        titulo: "Cusco - Casa Andina Standard Cusco Plaza",
        lugar: "Cusco, Peru",
        descripcion: [
          "Located steps from the Plaza de Armas of Cusco, perfect for experiencing the New Year's celebration in the heart of the imperial city."
        ],
        noches: "3 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Flight",
          "Hotel",
          "Transfer",
          "Insurance"
        ]
      },
      pt: {
        titulo: "Cusco - Casa Andina Standard Cusco Plaza",
        lugar: "Cusco, Peru",
        descripcion: [
          "Localizado a poucos passos da Plaza de Armas em Cusco, é perfeito para vivenciar as festividades de Ano Novo no coração da cidade imperial."
        ],
        noches: "3 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Voo",
          "Hotel",
          "Traslado",
          "Seguro"
        ]
      }
    }
  },
  {
    id: 'cusco-tierra-viva-cusco-habitacion-estandar',
    titulo: 'Tierra Viva (Hab. Estándar)',
    lugar: 'Cusco, Perú',
    imagen: 'assets/images/listing/cusco-tierra-viva-cusco-estandar/0000919_cusco-tierra-viva-cusco-habitacion-estandar_550.webp',
    galeriaImagen: [
      'assets/images/listing/cusco-tierra-viva-cusco-estandar/0000919_cusco-tierra-viva-cusco-habitacion-estandar_550.webp',
      'assets/images/listing/cusco-tierra-viva-cusco-estandar/0000920_cusco-tierra-viva-cusco-habitacion-estandar_550.webp',
      'assets/images/listing/cusco-tierra-viva-cusco-estandar/0000921_cusco-tierra-viva-cusco-habitacion-estandar_550.webp',
      'assets/images/listing/cusco-tierra-viva-cusco-estandar/0000952_cusco-tierra-viva-cusco-habitacion-estandar_550.webp',
    ],
    precio: 455.00,
    rating: '4.8 (15)',
    descuento: '',
    duracion: '3 Noches',
    tipo: 'Cultura / Historia',
    grupo: 'Año Nuevo',
    idioma: 'Español',
    descripcion: [
      'Cusco con todo listo para que solo disfrutes.',
      'Ubicado en el centro de Cusco, el punto perfecto para descubrir la esencia de la ciudad imperial. Conecta con su historia, cultura y los principales atractivos turísticos de la región.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-nacionales',
    incluye: [
      'Boleto aéreo Lima/Cusco/Lima Con LATAM Airlines - Permite bolso o mochila + equipaje de mano (12kg)',
      'Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Privado)',
      '3 noches de alojamiento Tierra Viva Cusco - Habitación Estándar',
      'Desayuno diario',
      'City Tour con entradas Servicio regular',
      'Boleto Turístico del Cusco Parcial 1 día de vigencia',
      'Impuestos'
    ],
    translations: {
      en: {
        titulo: "Tierra Viva (Standard Room)",
        lugar: "Cusco, Peru",
        descripcion: [
          "Cusco ready for you to just enjoy.",
          "Located in the center of Cusco, the perfect point to discover the essence of the imperial city. Connect with its history, culture, and the main tourist attractions of the region.",
          "Travel dates December 31 – January 3, 2027 4 days · 3 nights"
        ],
        noches: "3 Nights",
        saliendo: "Departing from Lima",
        incluye: [
          "Air ticket Lima/Cusco/Lima with LATAM Airlines - Allows bag or backpack + hand luggage (12kg)",
          "Transfers included Airport – hotel – airport (Private Service)",
          "3 nights accommodation Tierra Viva Cusco - Standard Room",
          "Daily breakfast",
          "City Tour with entrance Regular service",
          "Cusco Tourist Ticket Partial 1 day validity",
          "Taxes"
        ]
      },
      pt: {
        titulo: "Terra Viva (Quarto Standard)",
        lugar: "Cusco, Peru",
        descripcion: [
          "Cusco pronto para você apenas aproveitar.",
          "Localizado no centro de Cusco, o ponto perfeito para descobrir a essência da cidade imperial. Conecte-se com sua história, cultura e as principais atrações turísticas da região.",
          "Datas de viagem 31 de dezembro – 03 de janeiro, 2027 4 dias · 3 noites"
        ],
        noches: "3 Noites",
        saliendo: "Saindo de Lima",
        incluye: [
          "Passagem aérea Lima/Cusco/Lima com LATAM Airlines - Permite bolsa ou mochila + bagagem de mão (12kg)",
          "Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Privado)",
          "3 noites de acomodação Tierra Viva Cusco - Quarto Standard",
          "Café da manhã diário",
          "City Tour com entrada Serviço regular",
          "Bilhete Turístico de Cusco Parcial 1 dia de validade",
          "Impostos"
        ]
      }
    }
  },
  {
    id: 'tarapoto-tucan-suites',
    titulo: 'Tarapoto - Tucan Suites',
    lugar: 'Tarapoto, San Martín, Perú',
    imagen: 'assets/images/listing/tarapoto-tucan-suites/0000914_tarapoto-tucan-suites_550.webp',
    galeriaImagen: [
      'assets/images/listing/tarapoto-tucan-suites/0000914_tarapoto-tucan-suites_550.webp',
      'assets/images/listing/tarapoto-tucan-suites/0000915_tarapoto-tucan-suites_550.webp',
      'assets/images/listing/tarapoto-tucan-suites/0000951_tarapoto-tucan-suites_550.webp',
      'assets/images/listing/tarapoto-tucan-suites/0000916_tarapoto-tucan-suites_550.webp',
    ],
    precio: 615.00,
    rating: '4.9 (18)',
    descuento: '',
    duracion: '3 Noches',
    tipo: 'Naturaleza / Selva',
    grupo: 'Año Nuevo',
    idioma: 'Español',
    descripcion: [
      'Tarapoto con todo listo para que solo disfrutes.',
      'Disfruta una ubicación privilegiada en Tarapoto, la puerta de entrada a la Amazonía peruana. Explora naturaleza, aventura y experiencias únicas entre paisajes tropicales inolvidables.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-nacionales',
    incluye: [
      'Boleto aéreo Lima/Tarapoto/Lima Con LATAM Airlines - Permite bolso o mochila + equipaje de mano (12kg)',
      'Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Privado)',
      '3 noches de alojamiento Tucan Suites - Habitación Deluxe',
      'Desayuno diario',
      'Tour Cascada de Ahuashiyacu y Lamas',
      'Impuestos'
    ],
    translations: {
      en: {
        titulo: 'Tarapoto - Tucan Suites',
        lugar: 'Tarapoto, San Martín, Perú',
        descripcion: [
          'Tarapoto with everything ready for you to just enjoy.',
          'Enjoy a privileged location in Tarapoto, the gateway to the Peruvian Amazon. Explore nature, adventure, and unique experiences among unforgettable tropical landscapes.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        incluye: [
          'Air ticket Lima/Tarapoto/Lima with LATAM Airlines - Allows bag or backpack + hand luggage (12kg)',
          'Transfers included Airport – hotel – airport (Private Service)',
          '3 nights accommodation Tucan Suites - Deluxe Room',
          'Daily breakfast',
          'Cascada de Ahuashiyacu and Lamas Tour',
          'Taxes'
        ]
      },
      pt: {
        titulo: 'Tarapoto - Tucan Suites',
        lugar: 'Tarapoto, San Martín, Perú',
        descripcion: [
          'Tarapoto com tudo pronto para você apenas aproveitar.',
          'Desfrute de uma localização privilegiada em Tarapoto, a porta de entrada para a Amazônia peruana. Explore a natureza, a aventura e experiências únicas entre paisagens tropicais inesquecíveis.',
          'Datas de viagem 31 de dezembro – 03 de janeiro, 2027 4 dias · 3 noites'
        ],
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
        incluye: [
          'Passagem aérea Lima/Tarapoto/Lima com LATAM Airlines - Permite bolsa ou mochila + bagagem de mão (12kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Privado)',
          '3 noites de acomodação Tucan Suites - Quarto Deluxe',
          'Café da manhã diário',
          'Tour Cascada de Ahuashiyacu e Lamas',
          'Impostos'
        ]
      }
    }
  },
  {
    id: 'arequipa',
    titulo: 'Arequipa',
    lugar: 'Arequipa, Perú',
    imagen: 'assets/images/listing/arequipa/0000822_arequipa_550.webp',
    galeriaImagen: [
      'assets/images/listing/arequipa/0000822_arequipa_550.webp',
      'assets/images/listing/arequipa/0000823_arequipa_550.webp',
      'assets/images/listing/arequipa/0000824_arequipa_550.webp',
      'assets/images/listing/arequipa/0000825_arequipa_550.webp',
    ],
    precio: 215.00,
    rating: '4.7 (32)',
    descuento: '',
    duracion: '2 Noches',
    tipo: 'Ciudad / Gastronomía',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Arequipa con todo listo para que solo disfrutes.',
      'Ubicado a pocos minutos de la Plaza de Armas y de los lugares más emblemáticos de Arequipa. El punto de partida ideal para descubrir su historia, cultura y paisajes únicos',
      'Fechas de viaje 01 de setiembre – 30 de noviembre, 2026 3 días · 2 noches'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-nacionales',
    incluye: [
      'Boleto aéreo Lima/Arequipa/Lima',
      'Traslados incluidos Aeropuerto – hotel – aeropuerto',
      '2 noches de alojamiento Terramística Centro / Terramística Monasterio / Terramística de Vallecito - Habitación doble',
      'Desayunos incluidos'
    ],
    translations: {
      en: {
        titulo: 'Arequipa',
        lugar: 'Arequipa, Peru',
        descripcion: [
          'Arequipa with everything ready for you to just enjoy.',
          'Located just minutes from the Plaza de Armas and the most emblematic places in Arequipa. The ideal starting point to discover its history, culture, and unique landscapes.',
          'Travel dates September 1 – November 30, 2026 3 days · 2 nights'
        ],
        duracion: '2 nights',
        tipo: 'City / Gastronomy',
        noches: '2 Nights',
        saliendo: 'Departing from Lima',
        incluye: [
          'Air ticket Lima/Arequipa/Lima',
          'Transfers included Airport – hotel – airport',
          '2 nights accommodation Terramística Centro / Terramística Monasterio / Terramística de Vallecito - Double Room',
          'Daily breakfast'
        ]
      },
      pt: {
        titulo: 'Arequipa',
        lugar: 'Arequipa, Peru',
        descripcion: [
          'Arequipa com tudo pronto para você apenas aproveitar.',
          'Localizado a poucos minutos da Plaza de Armas e dos lugares mais emblemáticos de Arequipa. O ponto de partida ideal para descobrir sua história, cultura e paisagens únicas.',
          'Datas de viagem 1 de setembro – 30 de novembro, 2026 3 dias · 2 noites'
        ],
        tipo: 'Cidade / Gastronomia',
        duracion: '2 noites',
        noches: '2 Noites',
        saliendo: 'Saindo de Lima',
        incluye: [
          'Passagem aérea Lima/Arequipa/Lima',
          'Traslados incluídos Aeroporto – hotel – aeroporto',
          '2 noites de acomodação Terramística Centro / Terramística Monasterio / Terramística de Vallecito - Quarto Duplo',
          'Café da manhã diário'
        ]
      }
    }
  },
  {
    id: 'vichayito',
    titulo: 'Vichayito',
    lugar: 'Piura, Perú',
    imagen: 'assets/images/listing/vichayito_1/0000885_vichayito_550.png',
    galeriaImagen: [
      'assets/images/listing/vichayito_1/0000885_vichayito_550.png',
      'assets/images/listing/vichayito_1/0000884_vichayito_550.png',
      'assets/images/listing/vichayito_1/0000886_vichayito_550.png',
      'assets/images/listing/vichayito_1/0000887_vichayito_550.png',
    ],
    precio: 209.00,
    rating: '4.8 (25)',
    descuento: '13% Off',
    duracion: '2 Noches',
    tipo: 'Playa / Relax',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Relájate en las cálidas playas del norte peruano en Vichayito, ideal para desconectarse y disfrutar del mar.',
      'Vichayito con todo listo para que solo disfrutes.',
      'Ubicado en una zona privilegiada de Vichayito, ideal para disfrutar de sus playas, el clima cálido y la tranquilidad del norte peruano.',
      'Fechas de viaje 01 de noviembre – 15 de diciembre, 2026 3 días · 2 noches'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Talara/Lima',
      '2 noches de alojamiento Hotel Categoría 3 - Habitación doble',
      'Desayunos incluidos'
    ],
    translations: {
      en: {
        titulo: 'Vichayito',
        lugar: 'Piura, Peru',
        descripcion: [
          'Relax on the warm beaches of northern Peru in Vichayito, ideal for disconnecting and enjoying the sea.',
          'Vichayito with everything ready for you to just enjoy.',
          'Located in a privileged area of Vichayito, ideal for enjoying its beaches, warm climate, and the tranquility of northern Peru.',
          'Travel dates November 1 – December 15, 2026 3 days · 2 nights'
        ],
        noches: '2 Nights',
        duracion: '2 Nights',
        tipo: 'Beach / Relax',
        saliendo: 'Departing from Lima',
        incluye: [
          'Air ticket Lima/Talara/Lima',
          '2 nights accommodation Hotel Category 3 - Double room',
          'Breakfasts included'
        ]
      },
      pt: {
        titulo: 'Vichayito',
        lugar: 'Piura, Peru',
        descripcion: [
          'Relaxe nas praias quentes do norte do Peru em Vichayito, ideal para se desconectar e aproveitar o mar.',
          'Vichayito com tudo pronto para você apenas aproveitar.',
          'Localizado em uma área privilegiada de Vichayito, ideal para desfrutar de suas praias, clima quente e a tranquilidade do norte do Peru.',
          'Datas de viagem 1 de novembro – 15 de dezembro, 2026 3 dias · 2 noites'
        ],
        noches: '2 Noites',
        duracion: '2 Noites',
        tipo: 'Praia / Relax',
        saliendo: 'Saindo de Lima',
        incluye: [
          'Passagem aérea Lima/Talara/Lima',
          '2 noites de acomodação Hotel Categoria 3 - Quarto duplo',
          'Cafés da manhã incluídos'
        ]
      }
    }
  },
  {
    id: 'cusco',
    titulo: 'Cusco',
    lugar: 'Cusco, Perú',
    imagen: 'assets/images/listing/cusco_1/0000876_cusco_550.webp',
    galeriaImagen: [
      'assets/images/listing/cusco_1/0000876_cusco_550.webp',
      'assets/images/listing/cusco_1/0000877_cusco_550.webp',
      'assets/images/listing/cusco_1/0000878_cusco_550.webp',
      'assets/images/listing/cusco_1/0000879_cusco_550.webp',
    ],
    precio: 209.00,
    rating: '4.9 (45)',
    descuento: '16% Off',
    duracion: '2 Noches',
    tipo: 'Cultura / Aventura',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Visita la capital del Imperio Inca por 2 noches saliendo desde Lima con tarifa de descuento especial.',
      'Cusco con todo listo para que solo disfrutes.',
      'Ubicado en una zona estratégica de Cusco, con fácil acceso a sus principales atractivos, restaurantes y calles llenas de historia y tradición.',
      'Fechas de viaje 19 de octubre – 15 de diciembre, 2026 3 días · 2 noches'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-nacionales',
    incluye: [
      'Boleto aéreo Lima/Cusco/Lima',
      'Traslados incluidos Aeropuerto – hotel – aeropuerto',
      '2 noches de alojamiento Hotel Categoría 3 - Habitación doble',
      'Desayunos incluidos'
    ],
    translations: {
      en: {
        titulo: 'Cusco',
        lugar: 'Cusco, Peru',
        descripcion: [
          'Visit the capital of the Inca Empire for 2 nights departing from Lima with a special discount rate.',
          'Cusco with everything ready for you to just enjoy.',
          'Located in a strategic area of Cusco, with easy access to its main attractions, restaurants, and streets full of history and tradition.',
          'Travel dates October 19 – December 15, 2026 3 days · 2 nights'
        ],
        noches: '2 Nights',
        duracion: '2 Nights',
        tipo: 'Culture / Adventure',
        saliendo: 'Departing from Lima',
        incluye: [
          'Air ticket Lima/Cusco/Lima',
          'Transfers included Airport – hotel – airport',
          '2 nights accommodation Hotel Category 3 - Double room',
          'Breakfasts included'
        ]
      },
      pt: {
        titulo: 'Cusco',
        lugar: 'Cusco, Peru',
        descripcion: [
          'Visite a capital do Império Inca por 2 noites partindo de Lima com uma tarifa de desconto especial.',
          'Cusco com tudo pronto para você apenas aproveitar.',
          'Localizado em uma área estratégica de Cusco, com fácil acesso às suas principais atrações, restaurantes e ruas cheias de história e tradição.',
          'Datas de viagem 19 de outubro – 15 de dezembro, 2026 3 dias · 2 noites'
        ],
        noches: '2 Noites',
        duracion: '2 Noites',
        tipo: 'Cultura / Aventura',
        saliendo: 'Saindo de Lima',
        incluye: [
          'Passagem aérea Lima/Cusco/Lima',
          'Traslados incluídos Aeroporto – hotel – aeroporto',
          '2 noites de acomodação Hotel Categoria 3 - Quarto duplo',
          'Cafés da manhã incluídos'
        ]
      }
    }
  },
  {
    id: 'tarapoto',
    titulo: 'Tarapoto',
    lugar: 'Tarapoto, San Martín, Perú',
    imagen: 'assets/images/listing/tarapoto_1/0000880_tarapoto_550.png',
    galeriaImagen: [
      'assets/images/listing/tarapoto_1/0000880_tarapoto_550.png',
      'assets/images/listing/tarapoto_1/0000881_tarapoto_550.png',
      'assets/images/listing/tarapoto_1/0000882_tarapoto_550.png',
      'assets/images/listing/tarapoto_1/0000883_tarapoto_550.png',
    ],
    precio: 209.00,
    rating: '4.7 (20)',
    descuento: '16% Off',
    duracion: '2 Noches',
    tipo: 'Naturaleza / Aventura',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Disfruta del clima tropical y los hermosos paisajes naturales de la selva de Tarapoto a un precio de oferta.',
      'Tarapoto con todo listo para que solo disfrutes.',
      'Ubicado en una zona estratégica de Tarapoto, con fácil acceso a sus principales atractivos y rodeado del encanto natural de la selva peruana.',
      'Fechas de viaje 19 de octubre - 15 de diciembre, 2026 3 días · 2 noches',

    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-nacionales',
    incluye: [
      'Boleto aéreo Lima/Tarapoto/Lima',
      'Traslados incluidos Aeropuerto – hotel – aeropuerto',
      '2 noches de alojamiento Hotel Categoría 3 - Habitación doble',
      'Desayunos incluidos',
      'Cataratas Ahuashiyacu'
    ],
    translations: {
      en: {
        titulo: 'Tarapoto',
        lugar: 'Tarapoto, San Martín, Peru',
        descripcion: [
          'Enjoy the tropical climate and beautiful natural landscapes of the Tarapoto jungle at a special offer price.',
          'Tarapoto with everything ready for you to just enjoy.',
          'Located in a strategic area of Tarapoto, with easy access to its main attractions and surrounded by the natural charm of the Peruvian jungle.',
          'Travel dates October 19 - December 15, 2026 3 days · 2 nights'
        ],
        noches: '2 Nights',
        saliendo: 'Departing from Lima',
        incluye: [
          'Air ticket Lima/Tarapoto/Lima',
          'Transfers included Airport – hotel – airport',
          '2 nights accommodation Hotel Category 3 - Double room',
          'Breakfasts included',
          'Ahuashiyacu Waterfalls'
        ]
      },
      pt: {
        titulo: 'Tarapoto',
        lugar: 'Tarapoto, San Martín, Peru',
        descripcion: [
          'Desfrute do clima tropical e das belas paisagens naturais da selva de Tarapoto a um preço especial.',
          'Tarapoto com tudo pronto para você apenas aproveitar.',
          'Localizado em uma área estratégica de Tarapoto, com fácil acesso às suas principais atrações e rodeado pelo encanto natural da selva peruana.',
          'Datas de viagem 19 de outubro – 15 de dezembro, 2026 3 dias · 2 noites'
        ],
        noches: '2 Noites',
        saliendo: 'Saindo de Lima',
        incluye: [
          'Passagem aérea Lima/Tarapoto/Lima',
          'Traslados incluídos Aeroporto – hotel – aeroporto',
          '2 noites de acomodação Hotel Categoria 3 - Quarto duplo',
          'Cafés da manhã incluídos',
          'Cataratas Ahuashiyacu'
        ]
      }
    }
  },






  {
    id: 'joyas-de-europa',
    titulo: 'Joyas de Europa',
    lugar: 'Europa',
    imagen: 'assets/images/listing/joyas-de-europa/0000930_joyas-de-europa_550.webp',
    galeriaImagen: [
      'assets/images/listing/joyas-de-europa/0000930_joyas-de-europa_550.webp',
      'assets/images/listing/joyas-de-europa/0000931_joyas-de-europa_550.webp',
      'assets/images/listing/joyas-de-europa/0000932_joyas-de-europa_550.webp',
      'assets/images/listing/joyas-de-europa/0000933_joyas-de-europa_550.webp'
    ],
    precio: 3249.00,
    rating: '4.8 (15)',
    descuento: '6% Off',
    duracion: '14 Noches',
    tipo: 'Internacional / Cultural',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Descubre las principales ciudades e íconos de Europa en un recorrido inolvidable de 14 noches.',
      'Paquete completo con vuelos, alojamientos y traslados gestionados para tu comodidad.',
      'Recorre paisajes icónicos y disfruta de la riqueza cultural del continente europeo.',
      'Descubre Europa recorriendo ciudades emblemáticas como Madrid, Barcelona, Roma, Venecia y París. Un viaje diseñado para vivir su historia, cultura y los paisajes más fascinantes del continente.'
    ],
    noches: '14 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destino-europa',
    incluye: [
      'Boleto aéreo Lima - Madrid - Lima Con Air Europa',
      'Traslados llegada y salida Aeropuerto de Barajas (MAD) – Hotel',
      '14 noches de alojamiento Según itinerario',
      'Desayuno buffet',
      'Visita con guía local Barcelona, Roma, Florencia, Venecia, París y Madrid',
      'Guía acompañante de habla hispana Durante todo el viaje',
      'Tarjeta de asistencia desde Lima'
    ],
    translations: {
      en: {
        titulo: 'Jewels of Europe',
        descripcion: [
          'Discover the main cities and icons of Europe on an unforgettable 14-night tour.',
          'Complete package with flights, accommodations, and transfers managed for your convenience.',
          'Explore iconic landscapes and enjoy the cultural richness of the European continent.',
          'Discover Europe by visiting emblematic cities such as Madrid, Barcelona, Rome, Venice, and Paris. A trip designed to experience its history, culture, and the most fascinating landscapes of the continent.'
        ],
        noches: '14 Nights',
        saliendo: 'Departing from Lima',
        incluye: [
          'Air ticket Lima - Madrid - Lima with Air Europa',
          'Arrival and departure transfers Airport of Barajas (MAD) – Hotel',
          '14 nights of accommodation According to itinerary',
          'Buffet breakfast',
          'Sightseeing with local guide Barcelona, Rome, Florence, Venice, Paris and Madrid',
          'Spanish-speaking tour guide Throughout the trip',
          'Assistance card from Lima'
        ]
      },
      pt: {
        titulo: 'Joias da Europa',
        descripcion: [
          'Descubra as principais cidades e ícones da Europa em um inesquecível tour de 14 noites.',
          'Pacote completo com voos, acomodações e traslados gerenciados para sua conveniência.',
          'Explore paisagens icônicas e aproveite a riqueza cultural do continente europeu.',
          'Descubra a Europa visitando cidades emblemáticas como Madrid, Barcelona, Roma, Veneza e Paris. Uma viagem projetada para vivenciar sua história, cultura e as paisagens mais fascinantes do continente.'
        ],
        noches: '14 Noites',
        saliendo: 'Saindo de Lima',
        incluye: [
          'Passagem aérea Lima - Madrid - Lima com Air Europa',
          'Traslados de chegada e saída Aeroporto de Barajas (MAD) – Hotel',
          '14 noites de acomodação Conforme itinerário',
          'Café da manhã buffet',
          'Passeios com guia local Barcelona, Roma, Florença, Veneza, Paris e Madrid',
          'Guia acompanhante de língua espanhola Durante toda a viagem',
          'Cartão de assistência desde Lima'
        ]

      }
    }
  },
  {
    id: 'eco-europa-clasica',
    titulo: 'Eco Europa Clásica',
    lugar: 'Europa',
    imagen: 'assets/images/listing/eco-europa-clasica/0000937_eco-europa-clasica_550.webp',
    galeriaImagen: [
      'assets/images/listing/eco-europa-clasica/0000937_eco-europa-clasica_550.webp',
      'assets/images/listing/eco-europa-clasica/0000934_eco-europa-clasica_550.webp',
      'assets/images/listing/eco-europa-clasica/0000935_eco-europa-clasica_550.webp',
      'assets/images/listing/eco-europa-clasica/0000936_eco-europa-clasica_550.webp'
    ],
    precio: 2209.00,
    rating: '4.6 (12)',
    duracion: '14 Noches',
    tipo: 'Internacional / Económico',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Una alternativa ideal para conocer Europa a tu propio ritmo con servicios esenciales incluidos.',
      'Alojamiento, traslados y seguro cubiertos para una experiencia tranquila y económica.',
      'Vive la magia de Europa recorriendo destinos icónicos, calles llenas de historia y paisajes inolvidables. Una experiencia que reúne lo mejor de España, Francia e Italia en un solo viaje.'
    ],
    noches: '14 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destino-europa',
    incluye: [
      'Traslados llegada y salida Aeropuerto de Barajas (MAD) – Hotel',
      '14 noches de alojamiento Según itinerario',
      'Desayuno buffet',
      'Visita con guía local Barcelona, Roma, Florencia, Venecia, París y Madrid',
      'Guía acompañante de habla hispana Durante todo el viaje',
      'Seguro de viaje MAPFRE Aplica desde llegada del pasajero a territorio europeo'
    ],
    translations: {
      en: {
        titulo: 'Eco Classic Europe',
        descripcion: [
          'An ideal alternative to explore Europe at your own pace with essential services included.',
          'Accommodation, transfers, and insurance covered for a worry-free and economical experience.',
          'Experience the magic of Europe by visiting iconic destinations, streets full of history, and unforgettable landscapes. A journey that brings together the best of Spain, France, and Italy in one trip.'
        ],
        noches: '14 Nights',
        saliendo: 'Departing from Lima',
        duracion: '14 Nights',
        lugar: 'Europe',
        tipo: 'International / Economic',
        incluye: [
          'Transfers upon arrival and departure Madrid Airport (MAD) – Hotel',
          '14 nights accommodation According to itinerary',
          'Buffet breakfast',
          'Sightseeing with local guide Barcelona, Rome, Florence, Venice, Paris and Madrid',
          'Spanish-speaking tour guide Throughout the trip',
          'MAPFRE travel insurance Applies from passenger arrival in European territory'
        ]
      },
      pt: {
        titulo: 'Eco Europa Clássica',
        descripcion: [
          'Uma alternativa ideal para conhecer a Europa no seu próprio ritmo com serviços essenciais incluídos.',
          'Acomodação, traslados e seguro cobertos para uma experiência tranquila e econômica.',
          'Viva a magia da Europa visitando destinos icônicos, ruas cheias de história e paisagens inesquecíveis. Uma experiência que reúne o melhor da Espanha, França e Itália em uma única viagem.'
        ],
        noches: '14 Noites',
        duracion: '14 Noites',
        saliendo: 'Saindo de Lima',
        lugar: 'Europa',
        tipo: 'Internacional / Econômico',
        incluye: [
          'Traslados na chegada e saída Aeroporto de Madrid (MAD) – Hotel',
          '14 noites de acomodação De acordo com o itinerário',
          'Café da manhã buffet',
          'Passeios com guia local Barcelona, Roma, Florença, Veneza, Paris e Madrid',
          'Guia acompanhante de língua espanhola Durante toda a viagem',
          'Seguro de viagem MAPFRE Aplica desde a chegada do passageiro ao território europeu'
        ]
      }
    }
  },
  {
    id: 'eco-europa-magica',
    titulo: 'Eco Europa Mágica',
    lugar: 'Europa',
    imagen: 'assets/images/listing/eco-europa-magica/0000938_eco-europa-magica_550.webp',
    galeriaImagen: [
      'assets/images/listing/eco-europa-magica/0000938_eco-europa-magica_550.webp',
      'assets/images/listing/eco-europa-magica/0000939_eco-europa-magica_550.webp',
      'assets/images/listing/eco-europa-magica/0000940_eco-europa-magica_550.webp',
      'assets/images/listing/eco-europa-magica/0000941_eco-europa-magica_550.webp'
    ],
    precio: 2465.00,
    rating: '4.7 (18)',

    duracion: '16 Noches',
    tipo: 'Internacional / Cultural',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Disfruta de 16 noches mágicas recorriendo los destinos más deslumbrantes de Europa.',
      'Un itinerario extendido diseñado para aprovechar al máximo tu estancia en el continente.',
      'Explora la magia de Europa visitando ciudades icónicas, pueblos con encanto y paisajes de postal. Una experiencia inolvidable desde Madrid, París y Zúrich hasta Venecia, Florencia y Roma.'
    ],
    noches: '16 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destino-europa',
    incluye: [
      'Traslados llegada y salida  Aeropuerto de Barajas (MAD) – Hotel',
      '16 noches de alojamiento Según itinerario',
      'Desayuno buffet',
      'Visita con guía local Madrid, París, Venecia, Florencia, Roma y Barcelona',
      'Guía acompañante de habla hispana Durante todo el viaje',
      'Seguro de viaje MAPFRE Aplica desde llegada del pasajero a territorio europeo'
    ],
    translations: {
      en: {
        titulo: 'Eco Magical Europe',
        descripcion: [
          'Enjoy 16 magical nights exploring the most dazzling destinations in Europe.',
          'An extended itinerary designed to make the most of your stay on the continent.',
          'Explore the magic of Europe by visiting iconic cities, charming towns, and postcard-perfect landscapes. An unforgettable experience from Madrid, Paris, and Zurich to Venice, Florence, and Rome.'
        ],
        duracion: '16 Nights',
        tipo: 'International / Cultural',
        noches: '16 Nights',
        incluye: [
          'Transfers upon arrival and departure Madrid Airport (MAD) – Hotel',
          '16 nights accommodation According to itinerary',
          'Buffet breakfast',
          'Sightseeing with local guide Madrid, Paris, Venice, Florence, Rome and Barcelona',
          'Spanish-speaking tour guide Throughout the trip',
          'MAPFRE travel insurance Applies from passenger arrival in European territory'
        ]
      },
      pt: {
        titulo: 'Europa Mágica Ecológica',
        descripcion: [
          'Desfrute de 16 noites mágicas explorando os destinos mais deslumbrantes da Europa.',
          'Um itinerário estendido projetado para aproveitar ao máximo a sua estadia no continente.',
          'Explore a magia da Europa visitando cidades icônicas, vilarejos encantadores e paisagens de cartão-postal. Uma experiência inesquecível de Madrid, Paris e Zurique a Veneza, Florença e Roma.'
        ],
        duracion: '16 noites',
        tipo: 'Internacional / Cultural',
        noches: '16 noites',
        incluye: [
          'Traslados na chegada e saída Aeroporto de Madrid (MAD) – Hotel',
          '16 noites de acomodação De acordo com o itinerário',
          'Café da manhã buffet',
          'Passeios com guia local Madrid, Paris, Veneza, Florença, Roma e Barcelona',
          'Guia acompanhante de língua espanhola Durante toda a viagem',
          'Seguro de viagem MAPFRE Aplica desde a chegada do passageiro ao território europeu'
        ]
      }
    }
  },
  {
    id: 'leyendas-de-europa',
    titulo: 'Leyendas de Europa',
    lugar: 'Europa',
    imagen: 'assets/images/listing/leyendas-de-europa/0000942_leyendas-de-europa_550.webp',
    galeriaImagen: [
      'assets/images/listing/leyendas-de-europa/0000942_leyendas-de-europa_550.webp',
      'assets/images/listing/leyendas-de-europa/0000943_leyendas-de-europa_550.webp',
      'assets/images/listing/leyendas-de-europa/0000944_leyendas-de-europa_550.webp',
      'assets/images/listing/leyendas-de-europa/0000945_leyendas-de-europa_550.webp'
    ],
    precio: 2955.00,
    rating: '4.9 (22)',

    duracion: '20 Noches',
    tipo: 'Internacional / Gran Tour',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'El viaje más completo: 20 noches para sumergirte en la historia, arquitectura y leyendas de Europa.',
      'Ideal para quienes buscan una experiencia profunda e inolvidable con todo el respaldo necesario.',
      'Recorre Europa visitando ciudades icónicas, pueblos con encanto y destinos llenos de historia. Desde Madrid hasta Roma, pasando por París, Ámsterdam, Viena y Venecia, descubre lo mejor del continente en un solo viaje.'
    ],
    noches: '20 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destino-europa',
    incluye: [
      'Traslados llegada y salida Aeropuerto de Barajas (MAD) – Hotel',
      '20 noches de alojamiento Según itinerario',
      'Desayuno buffet',
      'Visita con guía local Madrid, París, Ámsterdam, Praga, Viena, Venecia, Florencia, Roma y Barcelona',
      'Crucero por el Rin',
      'Guía acompañante de habla hispana Durante todo el viaje',
      'Seguro de viaje MAPFRE Aplica desde llegada del pasajero a territorio europeo'
    ],
    translations: {
      en: {
        titulo: 'Legends of Europe',
        descripcion: [
          'The most complete trip: 20 nights to immerse yourself in the history, architecture, and legends of Europe.',
          'Ideal for those seeking a deep and unforgettable experience with all the necessary support.',
          'Travel through Europe visiting iconic cities, charming towns, and destinations full of history. From Madrid to Rome, passing through Paris, Amsterdam, Vienna, and Venice, discover the best of the continent in a single trip.'
        ],
        duracion: '20 Nights',
        tipo: 'International / Grand Tour',
        noches: '20 Nights',
        saliendo: 'Departing from Lima',
        incluye: [
          'Transfers upon arrival and departure Madrid Airport (MAD) – Hotel',
          '20 nights of accommodation According to itinerary',
          'Buffet breakfast',
          'Sightseeing with local guide Madrid, Paris, Amsterdam, Prague, Vienna, Venice, Florence, Rome and Barcelona',
          'Rhine cruise',
          'Spanish-speaking tour guide Throughout the trip',
          'MAPFRE travel insurance Applies from the passenger\'s arrival in European territory'
        ]
      },
      pt: {
        titulo: 'Lendas da Europa',
        descripcion: [
          'A viagem mais completa: 20 noites para se aprofundar na história, arquitetura e lendas da Europa.',
          'Ideal para quem busca uma experiência profunda e inesquecível com todo o suporte necessário.',
          'Viaje pela Europa visitando cidades icônicas, vilarejos encantadores e destinos cheios de história. De Madrid a Roma, passando por Paris, Amsterdã, Viena e Veneza, descubra o melhor do continente em uma única viagem.'
        ],
        duracion: '20 Noites',
        tipo: 'Internacional / Grande Tour',
        noches: '20 Noites',
        saliendo: 'Saindo de Lima',
        lugar: 'Europa',
        incluye: [
          'Traslados na chegada e saída Aeroporto de Madrid (MAD) – Hotel',
          '20 noites de acomodação De acordo com o itinerário',
          'Café da manhã buffet',
          'Passeios com guia local Madrid, Paris, Amsterdã, Praga, Viena, Veneza, Florença, Roma e Barcelona',
          'Cruzeiro pelo Reno',
          'Guia acompanhante de língua espanhola Durante toda a viagem',
          'Seguro de viagem MAPFRE Aplica desde a chegada do passageiro ao território europeu'
        ]
      }
    }
  },
  {
    id: 'buenos-aires',
    titulo: 'Buenos Aires',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos-aires/0000897_buenos-aires_550.webp',
    galeriaImagen: [
      'assets/images/listing/buenos-aires/0000897_buenos-aires_550.webp',
      'assets/images/listing/buenos-aires/0000898_buenos-aires_550.webp',
      'assets/images/listing/buenos-aires/0000899_buenos-aires_550.webp',
      'assets/images/listing/buenos-aires/0000896_buenos-aires_550.webp'
    ],
    precio: 619.00,
    rating: '4.8 (25)',
    descuento: '11% Off',
    duracion: '3 Noches',
    tipo: 'Internacional / Ciudad',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Disfruta del tango, la gastronomía y el encanto urbano de Buenos Aires a precio de oferta.',
      'Un paquete ideal de 3 noches para recorrer sus barrios más emblemáticos.',
      'Con una ubicación conveniente en Buenos Aires, ideal para moverte con facilidad y conocer distintos puntos de la ciudad.',
      'Fechas de viaje 19 de octubre – 15 de diciembre, 2026 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreoLima/Buenos Aires/Lima',
      'Traslados incluidosAeropuerto – hotel – aeropuerto',
      '3 noches de alojamientoHotel Categoría 3 - Habitación doble',
      'Desayunos incluidos',
      'City Tour',
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: 'Buenos Aires',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Enjoy the tango, gastronomy, and urban charm of Buenos Aires at a special price.',
          'An ideal 3-night package to explore its most emblematic neighborhoods.',
          'Conveniently located in Buenos Aires, perfect for getting around and discovering different points of the city.',
          'Travel dates October 19 – December 15, 2026 4 days · 3 nights'
        ],
        incluye: [
          'Air ticket Lima/Buenos Aires/Lima',
          'Transfers included Airport – hotel – airport',
          '3 nights accommodation Hotel Category 3 - Double room',
          'Breakfast included',
          'City Tour',
          'Travel insurance'
        ],
        duracion: '3 nights',
        tipo: 'International / City',
        saliendo: 'Departing from Lima',
      },
      pt: {
        titulo: 'Buenos Aires',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Desfrute do tango, gastronomia e charme urbano de Buenos Aires a um preço especial.',
          'Um pacote ideal de 3 noites para explorar seus bairros mais emblemáticos.',
          'Localizado convenientemente em Buenos Aires, perfeito para se locomover e descobrir diferentes pontos da cidade.',
          'Datas de viagem 19 de outubro – 15 de dezembro, 2026 4 dias · 3 noites'
        ],
        incluye: [
          'Passagem aérea Lima/Buenos Aires/Lima',
          'Traslados incluídos Aeroporto – hotel – aeroporto',
          '3 noites de acomodação Hotel Categoria 3 - Quarto duplo',
          'Café da manhã incluído',
          'City Tour',
          'Seguro de viagem'
        ],
        duracion: '3 noites',
        tipo: 'Internacional / Cidade',
        saliendo: 'Saindo de Lima',
        noches: '3 noites',
      }
    }


  },
  {
    id: 'buenos-aires-dora-hotel',
    titulo: 'Buenos Aires - Dora Hotel',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos-aires-dora-hotel/0000904_buenos-aires-dora-hotel_550.webp',
    galeriaImagen: [
      'assets/images/listing/buenos-aires-dora-hotel/0000904_buenos-aires-dora-hotel_550.webp',
      'assets/images/listing/buenos-aires-dora-hotel/0000826_buenos-aires-dora-hotel_550.webp',
      'assets/images/listing/buenos-aires-dora-hotel/0000827_buenos-aires-dora-hotel_550.webp',
      'assets/images/listing/buenos-aires-dora-hotel/0000829_buenos-aires-dora-hotel_550.webp'
    ],
    precio: 645.00,
    rating: '4.6 (14)',
    descuento: '17% Off',
    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Celebra el Año Nuevo en Buenos Aires hospedándote en el céntrico Dora Hotel.',
      'Incluye seguro de viaje para mayor tranquilidad durante tus vacaciones.',
      'Ubicado en el corazón de Buenos Aires, a pocos minutos de Puerto Madero y la calle Florida. Disfruta de restaurantes, tiendas, atractivos turísticos y la esencia de la ciudad a tu alcance.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Buenos Aires/Limacon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Semi-privado)',
      '3 noches de alojamientoDora Hotel - Habitación Superior',
      'Desayunos incluidos',
      'Excursión de medio día City tour en servicio regularRegreso al hotel por cuenta propia',
      'Tax FreeGuía para recuperar el impuesto',
      'Tour de Compras en fábricas de cuero, ropa, etc.Cortesía',
      'Casino Puerto MaderoEntrada y traslado gratis brindado por el Casino para mayores de 18 años (Cortesía)',
      '10% de descuento por consumo a la cartaRestaurant Puerto Cristal en Puerto Madero (Cortesía)',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Buenos Aires - Dora Hotel',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Celebrate New Year in Buenos Aires staying at the central Dora Hotel.',
          'Includes travel insurance for added peace of mind during your vacation.',
          'Located in the heart of Buenos Aires, just minutes from Puerto Madero and Florida Street. Enjoy restaurants, shops, tourist attractions, and the essence of the city at your fingertips.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        incluye: [
          'Air ticket Lima/Buenos Aires/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Semi-private service)',
          '3 nights accommodation Dora Hotel - Superior Room',
          'Breakfasts included',
          'Half-day City tour in regular service Return to the hotel on your own',
          'Tax Free Guide to recover the tax',
          'Shopping tour in leather, clothing factories, etc. Courtesy',
          'Puerto Madero Casino Free entry and transfer provided by the Casino for those over 18 years old (Courtesy)',
          '10% discount for à la carte consumption Restaurant Puerto Cristal in Puerto Madero (Courtesy)',
          'Travel insurance'
        ],
        duracion: '3 Nights',
        tipo: 'International / New Year',
        grupo: 'General',
        idioma: 'Spanish',
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
      },
      pt: {
        titulo: 'Buenos Aires - Dora Hotel',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Celebre o Ano Novo em Buenos Aires hospedando-se no central Dora Hotel.',
          'Inclui seguro de viagem para maior tranquilidade durante suas férias.',
          'Localizado no coração de Buenos Aires, a poucos minutos de Puerto Madero e da Rua Florida. Aproveite restaurantes, lojas, atrações turísticas e a essência da cidade ao seu alcance.',
          'Datas de viagem 31 de dezembro – 3 de janeiro, 2027 4 dias · 3 noites'
        ],
        incluye: [
          'Passagem aérea Lima/Buenos Aires/Lima com LATAM Airlines - Permite bagagem ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço semi-privado)',
          '3 noites de acomodação Dora Hotel - Quarto Superior',
          'Cafés da manhã incluídos',
          'City tour de meio dia em serviço regular Retorno ao hotel por conta própria',
          'Tax Free Guia para recuperar o imposto',
          'Tour de compras em couro, fábricas de roupas, etc. Cortesia',
          'Cassino Puerto Madero Entrada gratuita e traslado fornecido pelo Cassino para maiores de 18 anos (Cortesia)',
          '10% de desconto para consumo à la carte Restaurante Puerto Cristal em Puerto Madero (Cortesia)',
          'Seguro de viagem'
        ],
        duracion: '3 Noites',
        tipo: 'Internacional / Ano Novo',
        grupo: 'Geral',
        idioma: 'Espanhol',
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
      }
    }
  },
  {
    id: 'buenos-aires-grand-brizo',
    titulo: 'Buenos Aires - Grand Brizo',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos-aires-grand-brizo/0000949_buenos-aires-grand-brizo_550.webp',
    galeriaImagen: [
      'assets/images/listing/buenos-aires-grand-brizo/0000949_buenos-aires-grand-brizo_550.webp',
      'assets/images/listing/buenos-aires-grand-brizo/0000830_buenos-aires-grand-brizo_550.webp',
      'assets/images/listing/buenos-aires-grand-brizo/0000831_buenos-aires-grand-brizo_550.webp',
      'assets/images/listing/buenos-aires-grand-brizo/0000832_buenos-aires-grand-brizo_550.webp'
    ],
    precio: 785.00,
    rating: '4.9 (20)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Vive una experiencia superior de Año Nuevo en Buenos Aires alojándote en Grand Brizo.',
      'Ubicación privilegiada con todas las comodidades y traslados garantizados.',
      'Ubicado en el centro de Buenos Aires, a pocos pasos del Obelisco y la Avenida 9 de Julio. Disfruta de los principales atractivos turísticos, restaurantes y la vibrante vida porteña.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Buenos Aires/Limacon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Semi-privado)',
      '3 noches de alojamientoGrand Brizo - Habitación Comfort',
      'Desayunos incluidos',
      'Excursión de medio día City tour en servicio regularRegreso al hotel por cuenta propia',
      'Tax FreeGuía para recuperar el impuesto',
      'Tour de Compras en fábricas de cuero, ropa, etc.Cortesía',
      'Casino Puerto MaderoEntrada y traslado gratis brindado por el Casino para mayores de 18 años - Cortesía',
      '10% de descuento por consumo a la cartaRestaurant Puerto Cristal en Puerto Madero - Cortesía',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Buenos Aires - Grand Brizo',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Celebrate New Year in Buenos Aires staying at Grand Brizo.',
          'Privileged location with all amenities and guaranteed transfers.',
          'Located in the center of Buenos Aires, just steps from the Obelisk and Avenida 9 de Julio. Enjoy the main tourist attractions, restaurants, and the vibrant city life.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        incluye: [
          'Air ticket Lima/Buenos Aires/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Semi-private service)',
          '3 nights accommodation Grand Brizo - Comfort Room',
          'Breakfasts included',
          'Half-day City tour in regular service Return to the hotel on your own',
          'Tax Free Guide to recover the tax',
          'Shopping tour in leather, clothing factories, etc. Courtesy',
          'Puerto Madero Casino Free entry and transfer provided by the Casino for those over 18 years old (Courtesy)',
          '10% discount for à la carte consumption Restaurant Puerto Cristal in Puerto Madero (Courtesy)',
          'Travel insurance'
        ],
        duracion: '3 Nights',
        tipo: 'International / New Year',
        grupo: 'General',
        idioma: 'Spanish',
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
      },
      pt: {
        titulo: 'Buenos Aires - Grand Brizo',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Celebre o Ano Novo em Buenos Aires hospedando-se no Grand Brizo.',
          'Localização privilegiada com todas as comodidades e traslados garantidos.',
          'Localizado no centro de Buenos Aires, a poucos passos do Obelisco e da Avenida 9 de Julio. Aproveite as principais atrações turísticas, restaurantes e a vibrante vida da cidade.',
          'Datas de viagem 31 de dezembro – 3 de janeiro, 2027 4 dias · 3 noites'
        ],
        incluye: [
          'Passagem aérea Lima/Buenos Aires/Lima com LATAM Airlines - Permite bagagem ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço semi-privado)',
          '3 noites de acomodação Grand Brizo - Quarto Conforto',
          'Cafés da manhã incluídos',
          'City tour de meio dia em serviço regular Retorno ao hotel por conta própria',
          'Tax Free Guia para recuperar o imposto',
          'Tour de compras em couro, fábricas de roupas, etc. Cortesia',
          'Cassino Puerto Madero Entrada gratuita e traslado fornecido pelo Cassino para maiores de 18 anos (Cortesia)',
          '10% de desconto para consumo à la carte Restaurante Puerto Cristal em Puerto Madero (Cortesia)',
          'Seguro de viagem'
        ],
        duracion: '3 Noites',
        tipo: 'Internacional / Ano Novo',
        grupo: 'Geral',
        idioma: 'Espanhol',
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
      }
    }
  },
  {
    id: 'buenos-aires-hotel-madero',
    titulo: 'Buenos Aires - Hotel Madero',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos-aires-hotel-madero/0000834_buenos-aires-hotel-madero_550.webp',
    galeriaImagen: [
      'assets/images/listing/buenos-aires-hotel-madero/0000834_buenos-aires-hotel-madero_550.webp',
      'assets/images/listing/buenos-aires-hotel-madero/0000835_buenos-aires-hotel-madero_550.webp',
      'assets/images/listing/buenos-aires-hotel-madero/0000836_buenos-aires-hotel-madero_550.webp',
      'assets/images/listing/buenos-aires-hotel-madero/0000837_buenos-aires-hotel-madero_550.webp'
    ],
    precio: 945.00,
    rating: '4.9 (15)',
    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Pasa el Año Nuevo en Puerto Madero con alojamiento exclusivo en el Hotel Madero.',
      'Servicios de primer nivel con traslados y seguro de viaje incluidos.',
      'Hospédate en el elegante Puerto Madero, uno de los sectores más exclusivos de la ciudad. Disfruta de gastronomía, paseos junto al río y fácil acceso a los principales atractivos turísticos.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Buenos Aires/LimaCon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Semi-privado)',
      '3 noches de alojamientoHotel Madero - Habitación Superior',
      'Desayunos incluidos',
      'Excursión de medio día City tour en servicio regularRegreso al hotel por cuenta propia',
      'Tax FreeGuía para recuperar el impuesto',
      'Tour de Compras en fábricas de cuero, ropa, etc.Cortesía',
      'Casino Puerto MaderoEntrada y traslado gratis brindado por el Casino para mayores de 18 años - Cortesía',
      '10% de descuento por consumo a la cartaRestaurant Puerto Cristal en Puerto Madero - Cortesía',
      'Seguro de viajes',
    ],
    translations: {
      en: {
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Celebrate New Year in Puerto Madero with exclusive accommodation at the Hotel Madero.',
          'Top-notch services with transfers and travel insurance included.',
          'Stay in the elegant Puerto Madero, one of the most exclusive areas of the city. Enjoy gastronomy, walks along the river, and easy access to the main tourist attractions.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        incluye: [
          'Air ticket Lima/Buenos Aires/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Semi-private service)',
          '3 nights accommodation Hotel Madero - Superior Room',
          'Breakfasts included',
          'Half-day City tour in regular service Return to the hotel on your own',
          'Tax Free Guide to recover the tax',
          'Shopping tour in leather, clothing factories, etc. Courtesy',
          'Puerto Madero Casino Free entry and transfer provided by the Casino for those over 18 years old - Courtesy',
          '10% discount for à la carte consumption Restaurant Puerto Cristal in Puerto Madero - Courtesy',
          'Travel insurance'
        ],
        duracion: '3 Nights',
        tipo: 'International / New Year',
        grupo: 'General',
        idioma: 'Spanish',
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
      },
      pt: {
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Celebre o Ano Novo em Puerto Madero com acomodação exclusiva no Hotel Madero.',
          'Serviços de primeira linha com traslados e seguro de viagem incluídos.',
          'Fique no elegante Puerto Madero, uma das áreas mais exclusivas da cidade. Aproveite a gastronomia, passeios ao longo do rio e fácil acesso às principais atrações turísticas.',
          'Datas de viagem 31 de dezembro – 3 de janeiro, 2027 4 dias · 3 noites'
        ],
        incluye: [
          'Passagem aérea Lima/Buenos Aires/Lima com LATAM Airlines - Permite bagagem ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço semi-privado)',
          '3 noites de acomodação Hotel Madero - Quarto Superior',
          'Cafés da manhã incluídos',
          'City tour de meio dia em serviço regular Retorno ao hotel por conta própria',
          'Tax Free Guia para recuperar o imposto',
          'Tour de compras em couro, fábricas de roupas, etc. Cortesia',
          'Cassino Puerto Madero Entrada gratuita e traslado fornecido pelo Cassino para maiores de 18 anos (Cortesia)',
          '10% de desconto para consumo à la carte Restaurante Puerto Cristal em Puerto Madero (Cortesia)',
          'Seguro de viagem'
        ],
        duracion: '3 Noites',
        tipo: 'Internacional / Ano Novo',
        grupo: 'Geral',
        idioma: 'Espanhol',
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
      }
    }
  },
  {
    id: 'buenos-aires-ker-san-telmo',
    titulo: 'Buenos Aires - Ker San Telmo',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos-aires-ker-san-telmo/0000950_buenos-aires-ker-san-telmo_550.webp',
    galeriaImagen: [
      'assets/images/listing/buenos-aires-ker-san-telmo/0000950_buenos-aires-ker-san-telmo_550.webp',
      'assets/images/listing/buenos-aires-ker-san-telmo/0000841_buenos-aires-ker-san-telmo_550.webp',
      'assets/images/listing/buenos-aires-ker-san-telmo/0000839_buenos-aires-ker-san-telmo_550.webp',
      'assets/images/listing/buenos-aires-ker-san-telmo/0000840_buenos-aires-ker-san-telmo_550.webp'
    ],
    precio: 675.00,
    rating: '4.7 (16)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Año Nuevo en el pintoresco barrio de San Telmo con estancia en Ker San Telmo Hotel.',
      'Combinación perfecta entre tradición urbana y confort total.',
      'Ubicado en el corazón de San Telmo, cerca de Plaza de Mayo y Puerto Madero. Descubre calles llenas de historia, cafés tradicionales y los principales atractivos de Buenos Aires.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Buenos Aires/Lima\nCon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidos\nAeropuerto – hotel – aeropuerto (Servicio Semi-privado)',
      '3 noches de alojamiento\nKer San Telmo - Habitación Classic',
      'Desayunos incluidos',
      'Excursión de medio día City tour en servicio regular Regreso al hotel por cuenta propia',
      'Tax Free Guía para recuperar el impuesto',
      'Tour de Compras en fábricas de cuero, ropa, etc. Cortesía',
      'Casino Puerto Madero Entrada y traslado gratis brindado por el Casino para mayores de 18 años - Cortesía',
      '10% de descuento por consumo a la carta Restaurant Puerto Cristal en Puerto Madero - Cortesía',
      'Seguro de viajes'
    ],
    translations: {
      en: {
        titulo: 'New Year in San Telmo with Stay at Ker San Telmo Hotel',
        lugar: 'San Telmo, Buenos Aires',
        descripcion: [
          'Celebrate New Year in the picturesque San Telmo neighborhood with a stay at Ker San Telmo Hotel.',
          'Perfect combination of urban tradition and total comfort.',
          'Located in the heart of San Telmo, near Plaza de Mayo and Puerto Madero. Discover streets full of history, traditional cafes, and the main attractions of Buenos Aires.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        incluye: [
          'Air ticket Lima/Buenos Aires/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Semi-private service)',
          '3 nights accommodation Ker San Telmo - Classic Room',
          'Breakfasts included',
          'Half-day City tour in regular service Return to the hotel on your own',
          'Tax Free Guide to recover the tax',
          'Shopping tour in leather, clothing factories, etc. Courtesy',
          'Puerto Madero Casino Free entry and transfer provided by the Casino for those over 18 years old - Courtesy',
          '10% discount for à la carte consumption Restaurant Puerto Cristal in Puerto Madero - Courtesy',
          'Travel insurance'
        ],
        duracion: '3 Nights',
        tipo: 'International / New Year',
        grupo: 'General',
        idioma: 'Spanish',
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
      },
      pt: {
        titulo: 'Ano Novo em San Telmo com Estadia no Ker San Telmo Hotel',
        lugar: 'San Telmo, Buenos Aires',
        descripcion: [
          'Celebre o Ano Novo no pitoresco bairro de San Telmo com uma estadia no Ker San Telmo Hotel.',
          'Combinação perfeita de tradição urbana e total conforto.',
          'Localizado no coração de San Telmo, perto da Plaza de Mayo e Puerto Madero. Descubra ruas cheias de história, cafés tradicionais e as principais atrações de Buenos Aires.',
          'Datas de viagem 31 de dezembro – 3 de janeiro de 2027 4 dias · 3 noites'
        ],
        incluye: [
          'Passagem aérea Lima/Buenos Aires/Lima com LATAM Airlines - Permite bagagem ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço semi-privado)',
          '3 noites de acomodação Ker San Telmo - Quarto Clássico',
          'Cafés da manhã incluídos',
          'City tour de meio dia em serviço regular Retorno ao hotel por conta própria',
          'Tax Free Guia para recuperar o imposto',
          'Tour de compras em fábricas de couro, roupas, etc. Cortesia',
          'Cassino Puerto Madero Entrada gratuita e traslado fornecido pelo Cassino para maiores de 18 anos - Cortesia',
          '10% de desconto para consumo à la carte Restaurante Puerto Cristal em Puerto Madero - Cortesia',
          'Seguro de viagem'
        ],
        duracion: '3 Noites',
        tipo: 'Internacional / Ano Novo',
        grupo: 'Geral',
        idioma: 'Espanhol',
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
      }
    }
  },
  {
    id: 'buenos-aires-sheraton',
    titulo: 'Buenos Aires - Sheraton',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos-aires-sheraton/0000842_buenos-aires-sheraton_550.webp',
    galeriaImagen: [
      'assets/images/listing/buenos-aires-sheraton/0000842_buenos-aires-sheraton_550.webp',
      'assets/images/listing/buenos-aires-sheraton/0000843_buenos-aires-sheraton_550.webp',
      'assets/images/listing/buenos-aires-sheraton/0000844_buenos-aires-sheraton_550.webp',
      'assets/images/listing/buenos-aires-sheraton/0000845_buenos-aires-sheraton_550.webp'
    ],
    precio: 1019.00,
    rating: '5.0 (30)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Una estadía de lujo para celebrar Año Nuevo en el Sheraton Buenos Aires.',
      'Máximo confort con vuelo, hotel, traslados y seguro integrados.',
      'Hospédate en el corazón de Retiro, cerca de los íconos más importantes de la ciudad. Recorre Puerto Madero, el Obelisco y exclusivos restaurantes a solo unos minutos.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Buenos Aires/Limacon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Semi-privado)',
      '3 noches de alojamientoSheraton Buenos Aires - Habitación Clásica',
      'Desayunos incluidos',
      'Excursión de medio día City tour en servicio regularRegreso al hotel por cuenta propia',
      'Tax FreeGuía para recuperar el impuesto',
      'Tour de Compras en fábricas de cuero, ropa, etc.Cortesía',
      'Casino Puerto MaderoEntrada y traslado gratis brindado por el Casino para mayores de 18 años - Cortesía',
      '10% de descuento por consumo a la cartaRestaurant Puerto Cristal en Puerto Madero - Cortesía',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Buenos Aires - Sheraton',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Celebrate New Year in the picturesque neighborhood of San Telmo with a stay at the Ker San Telmo Hotel.',
          'Perfect blend of urban tradition and total comfort.',
          'Located in the heart of San Telmo, near Plaza de Mayo and Puerto Madero. Discover streets full of history, traditional cafés, and the main attractions of Buenos Aires.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        incluye: [
          'Air ticket Lima/Buenos Aires/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Semi-private service)',
          '3 nights accommodation Ker San Telmo - Classic Room',
          'Breakfasts included',
          'Half-day city tour in regular service Return to the hotel on your own',
          'Tax Free Guide to recover the tax',
          'Shopping tour in leather factories, clothing, etc. Courtesy',
          'Puerto Madero Casino Free entry and transfer provided by the Casino for those over 18 - Courtesy',
          '10% discount for à la carte consumption Puerto Cristal Restaurant in Puerto Madero - Courtesy',
          'Travel insurance'
        ],
        duracion: '3 Nights',
        tipo: 'International / New Year',
        grupo: 'General',
        idioma: 'Spanish',
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
      },
      pt: {
        titulo: 'Buenos Aires - Sheraton',
        lugar: 'Buenos Aires, Argentina',
        descripcion: [
          'Uma escapadela luxuosa de Ano Novo no Sheraton Buenos Aires.',
          'Máximo conforto com voo, hotel, traslados e seguro incluídos.',
          'Hospede-se no coração do Retiro, perto dos pontos turísticos mais emblemáticos da cidade. Explore Puerto Madero, o Obelisco e restaurantes exclusivos a poucos minutos de distância.',
          'Datas da viagem: 31 de dezembro de 2026 a 3 de janeiro de 2027 (4 dias · 3 noites)',
        ],
        incluye: [
          'Passagem aérea Lima/Buenos Aires/Lima com LATAM Airlines - Permite bagagem ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço semi-privado)',
          '3 noites de acomodação Ker San Telmo - Quarto Clássico',
          'Cafés da manhã incluídos',
          'Passeio pela cidade de meio dia em serviço regular Retorno ao hotel por conta própria',
          'Guia Tax Free para recuperar o imposto',
          'Tour de compras em fábricas de couro, roupas, etc. Cortesia',
          'Cassino Puerto Madero Entrada gratuita e traslado fornecido pelo Cassino para maiores de 18 anos - Cortesia',
          '10% de desconto para consumo à la carte no Restaurante Puerto Cristal em Puerto Madero - Cortesia',
          'Seguro de viagem'
        ],
        duracion: '3 Noites',
        tipo: 'Internacional / Ano Novo',
        grupo: 'Geral',
        idioma: 'Espanhol',
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
      }
    }
  },
  {
    id: 'cartagena',
    titulo: 'Cartagena',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/Cartagena/0000888_cartagena_550.webp',
    galeriaImagen: [
      'assets/images/listing/Cartagena/0000888_cartagena_550.webp',
      'assets/images/listing/Cartagena/0000889_cartagena_550.webp',
      'assets/images/listing/Cartagena/0000890_cartagena_550.webp',
      'assets/images/listing/Cartagena/0000891_cartagena_550.webp'
    ],
    precio: 529.00,
    rating: '4.8 (28)',
    descuento: '10% Off',
    duracion: '3 Noches',
    tipo: 'Internacional / Playa',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Disfruta de las playas y la histórica Ciudad Amurallada de Cartagena.',
      'Paquete con vuelo, alojamiento y traslados a precio promocional.',
      'Ubicado en una excelente zona para descubrir lo mejor de Cartagena y sus playas. Disfruta de una ciudad llena de historia, sabores caribeños y paisajes inolvidables.',
      'Fechas de viaje 19 de octubre – 15 de diciembre, 2026 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreoLima/Cartagena/Lima',
      'Traslados incluidosAeropuerto – hotel – aeropuerto',
      '3 noches de alojamientoHotel Categoría 3 - Habitación doble',
      'Desayunos incluidos',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Cartagena',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'Enjoy the beaches and the historic Walled City of Cartagena.',
          'Package with flight, accommodation, and transfers at a promotional price.',
          'Located in an excellent area to discover the best of Cartagena and its beaches. Enjoy a city full of history, Caribbean flavors, and unforgettable landscapes.',
          'Travel dates October 19 – December 15, 2026 4 days · 3 nights'
        ],
        incluye: [
          'Air ticket Lima/Cartagena/Lima with LATAM Airlines - Allows luggage or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Semi-private service)',
          '3 nights accommodation Cartagena Marriott Hotel - Classic Room',
          'Breakfasts included',
          'Half-day city tour in regular service Return to the hotel on your own',
          'Tax Free Guide to recover the tax',
          'Shopping tour in leather factories, clothing, etc. Courtesy',
          'Puerto Madero Casino Free entry and transfer provided by the Casino for those over 18 - Courtesy',
          '10% discount for à la carte consumption at Puerto Cristal Restaurant in Puerto Madero - Courtesy',
          'Travel insurance'
        ],
        duracion: '3 Nights',
        tipo: 'International / Beach',
        grupo: 'General',
        idioma: 'Spanish',
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
      },
      pt: {
        titulo: 'Cartagena',
        lugar: 'Cartagena de Indias, Colômbia',
        descripcion: [
          'Aproveite as praias e a histórica Cidade Murada de Cartagena.',
          'Pacote com voo, acomodação e traslados a um preço promocional.',
          'Localizado em uma excelente área para descobrir o melhor de Cartagena e suas praias. Aproveite uma cidade cheia de história, sabores caribenhos e paisagens inesquecíveis.',
          'Datas de viagem 19 de outubro – 15 de dezembro, 2026 4 dias · 3 noites'
        ],
        incluye: [
          'Passagem aérea Lima/Cartagena/Lima com LATAM Airlines - Permite bagagem ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço semi-privado)',
          '3 noites de acomodação Cartagena Marriott Hotel - Quarto Clássico',
          'Cafés da manhã incluídos',
          'Passeio pela cidade de meio dia em serviço regular Retorno ao hotel por conta própria',
          'Guia Tax Free para recuperar o imposto',
          'Tour de compras em fábricas de couro, roupas, etc. Cortesia',
          'Cassino Puerto Madero Entrada gratuita e traslado fornecido pelo Cassino para maiores de 18 anos - Cortesia',
          '10% de desconto para consumo à la carte no Restaurante Puerto Cristal em Puerto Madero - Cortesia',
          'Seguro de viagem'
        ],
        duracion: '3 Noites',
        tipo: 'Internacional / Praia',
        grupo: 'Geral',
        idioma: 'Espanhol',
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
      }
    }
  },
  {
    id: 'cartagena-cartagena-plaza-hotel',
    titulo: 'Cartagena - Cartagena Plaza Hotel',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000775_cartagena-cartagena-plaza-hotel_550.webp",
    galeriaImagen: [
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000775_cartagena-cartagena-plaza-hotel_550.webp",
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000776_cartagena-cartagena-plaza-hotel_550.webp",
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000777_cartagena-cartagena-plaza-hotel_550.webp",
      "assets/images/listing/Cartagena - Cartagena Plaza Hotel/0000778_cartagena-cartagena-plaza-hotel_550.webp"
    ],
    precio: 935.00,
    rating: '4.7 (19)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Recibe el Año Nuevo frente al mar en el Cartagena Plaza Hotel.',
      'Incluye seguro médico de viaje, pasajes aéreos y traslados.',
      'Hospédate cerca del Centro Histórico y de las playas más populares de Cartagena. Explora calles llenas de historia, sabores caribeños y paisajes inolvidables.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Cartagena/Limacon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Compartido)',
      '3 noches de alojamientoCartagena Plaza - Habitación Estándar',
      'Sistema alimentaciónDesayunos incluidos',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Cartagena - Cartagena Plaza Hotel',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'Celebrate the New Year by the sea at the Cartagena Plaza Hotel.',
          'Includes travel medical insurance, airfare, and transfers.',
          'Stay near the Historic Center and the most popular beaches of Cartagena. Explore streets full of history, Caribbean flavors, and unforgettable landscapes.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'International / New Year',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima/Cartagena/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Shared Service)',
          '3 nights accommodation Cartagena Plaza - Standard Room',
          'Meal plan Breakfast included',
          'Travel insurance'
        ]
      },
      pt: {
        titulo: 'Cartagena - Cartagena Plaza Hotel',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'Celebre o Ano Novo à beira-mar no Cartagena Plaza Hotel.',
          'Inclui seguro médico de viagem, passagens aéreas e traslados.',
          'Fique perto do Centro Histórico e das praias mais populares de Cartagena. Explore ruas cheias de história, sabores caribenhos e paisagens inesquecíveis.',
          'Datas de viagem 31 de dezembro – 03 de janeiro, 2027 4 dias · 3 noites'
        ],
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Internacional / Ano Novo',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima/Cartagena/Lima com LATAM Airlines - Permite bolsa ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Compartilhado)',
          '3 noites de alojamento Cartagena Plaza - Quarto Standard',
          'Plano de refeições Café da manhã incluído',
          'Seguro de viagem'
        ]
      }
    }
  },
  {
    id: 'cartagena-decameron',
    titulo: 'Cartagena - Decameron',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena-decameron-1/0000779_cartagena-decameron_550.webp',
    galeriaImagen: [
      'assets/images/listing/cartagena-decameron-1/0000779_cartagena-decameron_550.webp',
      'assets/images/listing/cartagena-decameron-1/0000780_cartagena-decameron_550.webp',
      'assets/images/listing/cartagena-decameron-1/0000781_cartagena-decameron_550.webp',
      'assets/images/listing/cartagena-decameron-1/0000782_cartagena-decameron_550.webp'
    ],
    precio: 1295.00,
    rating: '4.8 (32)',

    duracion: '3 Noches',
    tipo: 'Internacional / Todo Incluido',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Experiencia Todo Incluido para celebrar Año Nuevo en Decameron Cartagena.',
      'Comidas, bebidas, entretenimiento y traslados garantizados.',
      'Ubicado frente a la playa de Bocagrande, una de las zonas más exclusivas de Cartagena. Disfruta del mar Caribe, restaurantes, tiendas y el Centro Histórico a pocos minutos.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Cartagena/Limacon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Compartido)',
      '3 noches de alojamientoDecameron Cartagena - Habitación Estándar',
      'Sistema alimentación Todo IncluidoDesayuno y almuerzo buffet, cena buffet o a la carta, snacks y bebidas ilimitadas',
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: 'Cartagena - Decameron',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'All-Inclusive experience to celebrate New Year at Decameron Cartagena.',
          'Meals, drinks, entertainment, and transfers included.',
          'Located in front of Bocagrande beach, one of the most exclusive areas of Cartagena. Enjoy the Caribbean Sea, restaurants, shops, and the Historic Center just minutes away.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'International / All Inclusive',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima/Cartagena/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Shared Service)',
          '3 nights accommodation Decameron Cartagena - Standard Room',
          'All-Inclusive meal plan Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks',
          'Travel insurance'
        ]
      },
      pt: {
        titulo: 'Cartagena - Decameron',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'Experiencia Todo Incluido para celebrar Año Nuevo en Decameron Cartagena.',
          'Comidas, bebidas, entretenimiento y traslados incluidos.',
          'Ubicado frente a la playa de Bocagrande, una de las zonas más exclusivas de Cartagena. Disfruta del Mar Caribe, restaurantes, tiendas y el Centro Histórico a pocos minutos.',
          'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
        ],
        noches: '3 Noches',
        saliendo: 'Saliendo de Lima',
        tipo: 'Internacional / Todo Incluido',
        grupo: 'General',
        idioma: 'Español',
        incluye: [
          'Boleto aéreo Lima/Cartagena/Lima con LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
          'Traslados incluidos Aeropuerto – hotel – aeropuerto (Servicio Compartido)',
          '3 noches de alojamiento Decameron Cartagena - Habitación Estándar',
          'Sistema de alimentación Todo Incluido Desayuno y almuerzo buffet, cena buffet o a la carta, snacks y bebidas ilimitadas',
          'Seguro de viajes'
        ]
      }
    }
  },
  {
    id: 'cartagena-dreams-karibana',
    titulo: 'Cartagena - Dreams Karibana',
    lugar: 'Cartagena de Indias, Colombia',
    "imagen": "assets/images/listing/cartagena-dreams-karibana/0000783_cartagena-dreams-karibana_550.png",
    "galeriaImagen": [
      "assets/images/listing/cartagena-dreams-karibana/0000783_cartagena-dreams-karibana_550.png",
      "assets/images/listing/cartagena-dreams-karibana/0000784_cartagena-dreams-karibana_550.png",
      "assets/images/listing/cartagena-dreams-karibana/0000785_cartagena-dreams-karibana_550.png",
      "assets/images/listing/cartagena-dreams-karibana/0000786_cartagena-dreams-karibana_550.png"
    ],
    precio: 1785.00,
    rating: '4.9 (21)',

    duracion: '3 Noches',
    tipo: 'Internacional / Todo Incluido',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Año Nuevo de lujo resort Todo Incluido en Dreams Karibana Cartagena.',
      'Servicios exclusivos en un entorno paradisíaco.',
      'Hospédate en un entorno exclusivo frente al Caribe, rodeado de naturaleza y tranquilidad. Relájate en playas paradisíacas y descubre el encanto de Cartagena a corta distancia.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Cartagena/Limacon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Compartido)',
      '3 noches de alojamientoDreams Karibana 5 - Junior Suite Tropical View King',
      'Sistema de alimentación Todo IncluidoDesayuno y almuerzo buffet, cena buffet o a la carta, snacks y bebidas ilimitadas',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Cartagena - Dreams Karibana',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'Luxury New Year All-Inclusive resort at Dreams Karibana Cartagena.',
          'Exclusive services in a paradisiacal setting.',
          'Stay in an exclusive environment facing the Caribbean, surrounded by nature and tranquility. Relax on paradisiacal beaches and discover the charm of Cartagena at a short distance.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'International / All Inclusive',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima/Cartagena/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Shared Service)',
          '3 nights accommodation Dreams Karibana 5 - Junior Suite Tropical View King',
          'All-Inclusive meal plan Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks',
          'Travel insurance'
        ]
      },
      pt: {
        titulo: 'Cartagena - Dreams Karibana',
        lugar: 'Cartagena de Indias, Colômbia',
        descripcion: [
          'Resort de luxo com tudo incluído para o Ano Novo no Dreams Karibana Cartagena.',
          'Serviços exclusivos em um cenário paradisíaco.',
          'Fique em um ambiente exclusivo de frente para o Caribe, cercado pela natureza e tranquilidade. Relaxe em praias paradisíacas e descubra o charme de Cartagena a uma curta distância.',
          'Datas de viagem 31 de dezembro – 03 de janeiro, 2027 4 dias · 3 noites'
        ],
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Internacional / Tudo Incluído',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima/Cartagena/Lima com LATAM Airlines - Permite bolsa ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Compartilhado)',
          '3 noites de acomodação Dreams Karibana 5 - Junior Suite Tropical View King',
          'Plano de alimentação Tudo Incluído Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas',
          'Seguro de viagem'
        ]
      }
    }
  },
  {
    id: 'cartagena-plaza-hotel-superior',
    titulo: 'Cartagena Plaza Hotel - Habitación Superior',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena-plaza-hotel-habitacion-superior/0000788_cartagena-plaza-hotel-habitacion-superior_550.webp',
    galeriaImagen: [
      'assets/images/listing/cartagena-plaza-hotel-habitacion-superior/0000788_cartagena-plaza-hotel-habitacion-superior_550.webp',
      'assets/images/listing/cartagena-plaza-hotel-habitacion-superior/0000787_cartagena-plaza-hotel-habitacion-superior_550.webp',
      'assets/images/listing/cartagena-plaza-hotel-habitacion-superior/0000789_cartagena-plaza-hotel-habitacion-superior_550.webp',
      'assets/images/listing/cartagena-plaza-hotel-habitacion-superior/0000790_cartagena-plaza-hotel-habitacion-superior_550.webp'
    ],
    precio: 965.00,
    rating: '4.7 (11)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Disfruta de Año Nuevo en Habitación Superior en el Cartagena Plaza Hotel.',
      'Mayor confort con vista y servicios preferenciales incluidos.',
      'A minutos de la Ciudad Amurallada, el principal atractivo turístico de Cartagena. Combina descanso, vistas al Caribe y una ubicación ideal para explorar la ciudad.',
      'Fechas de viaje 31 de diciembre – 03 de enero, 2027 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Cartagena/Limacon LATAM Airlines - Permite bolso o mochila + Carry On (12 kg)',
      'Traslados incluidosAeropuerto – hotel – aeropuerto (Servicio Compartido)',
      '3 noches de alojamientoCartagena Plaza Hotel - Habitación Superior',
      'Sistema alimentaciónDesayunos incluidos',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Cartagena - Dreams Karibana',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'Luxury New Year All-Inclusive resort at Dreams Karibana Cartagena.',
          'Exclusive services in a paradisiacal setting.',
          'Stay in an exclusive environment facing the Caribbean, surrounded by nature and tranquility. Relax on paradisiacal beaches and discover the charm of Cartagena at a short distance.',
          'Travel dates December 31 – January 3, 2027 4 days · 3 nights'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'International / All Inclusive',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima/Cartagena/Lima with LATAM Airlines - Allows bag or backpack + Carry On (12 kg)',
          'Transfers included Airport – hotel – airport (Shared Service)',
          '3 nights accommodation Dreams Karibana 5 - Junior Suite Tropical View King',
          'All-Inclusive meal plan Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks',
          'Travel insurance'
        ]
      },
      pt: {
        titulo: 'Cartagena - Dreams Karibana',
        lugar: 'Cartagena de Indias, Colômbia',
        descripcion: [
          'Resort de luxo com tudo incluído para o Ano Novo no Dreams Karibana Cartagena.',
          'Serviços exclusivos em um cenário paradisíaco.',
          'Fique em um ambiente exclusivo de frente para o Caribe, cercado pela natureza e tranquilidade. Relaxe em praias paradisíacas e descubra o charme de Cartagena a uma curta distância.',
          'Datas de viagem 31 de dezembro – 03 de janeiro, 2027 4 dias · 3 noites'
        ],
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Internacional / Tudo Incluído',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima/Cartagena/Lima com LATAM Airlines - Permite bolsa ou mochila + Carry On (12 kg)',
          'Traslados incluídos Aeroporto – hotel – aeroporto (Serviço Compartilhado)',
          '3 noites de acomodação Dreams Karibana 5 - Junior Suite Tropical View King',
          'Plano de alimentação Tudo Incluído Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas',
          'Seguro de viagem'
        ]
      }
    }
  },
  {
    id: 'cusco-',
    titulo: 'Cusco',
    lugar: 'Cusco, Perú',
    imagen: 'assets/images/listing/cusco-/0000876_cusco_550.webp',
    galeriaImagen: [
      'assets/images/listing/cusco-/0000876_cusco_550.webp',
      'assets/images/listing/cusco-/0000877_cusco_550.webp',
      'assets/images/listing/cusco-/0000878_cusco_550.webp',
      'assets/images/listing/cusco-/0000879_cusco_550.webp'
    ],
    precio: 209.00,
    rating: '4.9 (45)',
    descuento: '16% Off',
    duracion: '2 Noches',
    tipo: 'Nacional / Historia',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Siente la magia de la capital del Imperio Inca con este paquete económico a Cusco.',
      'Incluye boletos aéreos desde Lima, alojamiento y traslados.',
      'Ubicado en una zona estratégica de Cusco, con fácil acceso a sus principales atractivos, restaurantes y calles llenas de historia y tradición.',
      'Fechas de viaje 19 de octubre – 15 de diciembre, 2026 3 días · 2 noches'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreoLima/Cusco/Lima',
      'Traslados incluidosAeropuerto – hotel – aeropuerto',
      '2 noches de alojamientoHotel Categoría 3 - Habitación doble',
      'Desayunos incluidos',
    ],
    translations: {
      en: {
        titulo: 'Cusco',
        lugar: 'Cusco, Peru',
        descripcion: [
          'Feel the magic of the capital of the Inca Empire with this budget package to Cusco.',
          'Includes air tickets from Lima, accommodation, and transfers.',
          'Located in a strategic area of Cusco, with easy access to its main attractions, restaurants, and streets full of history and tradition.',
          'Travel dates October 19 – December 15, 2026 3 days · 2 nights'
        ],
        noches: '2 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'National / History',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima/Cusco/Lima',
          'Transfers included Airport – hotel – airport',
          '2 nights accommodation Hotel Category 3 - Double room',
          'Breakfasts included',
        ]
      },
      pt: {
        titulo: 'Cusco',
        lugar: 'Cusco, Peru',
        descripcion: [
          'Sinta a magia da capital do Império Inca com este pacote econômico para Cusco.',
          'Inclui passagens aéreas de Lima, acomodação e traslados.',
          'Localizado em uma área estratégica de Cusco, com fácil acesso às suas principais atrações, restaurantes e ruas cheias de história e tradição.',
          'Datas de viagem 19 de outubro – 15 de dezembro, 2026 3 dias · 2 noites'
        ],
        noches: '2 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Nacional / História',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima/Cusco/Lima',
          'Traslados incluídos Aeroporto – hotel – aeroporto',
          '2 noites de acomodação Hotel Categoria 3 - Quarto duplo',
          'Cafés da manhã incluídos',
        ]
      }
    }
  },
  {
    id: 'medellin',
    titulo: 'Medellín',
    lugar: 'Medellín, Colombia',
    imagen: 'assets/images/listing/medellin/0000854_medellin_550.webp',
    galeriaImagen: [
      'assets/images/listing/medellin/0000854_medellin_550.webp',
      'assets/images/listing/medellin/0000855_medellin_550.webp',
      'assets/images/listing/medellin/0000856_medellin_550.webp',
      'assets/images/listing/medellin/0000857_medellin_550.webp'
    ],
    precio: 509.00,
    rating: '4.8 (22)',
    descuento: '7% Off',
    duracion: '3 Noches',
    tipo: 'Internacional / Ciudad',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Conoce la Ciudad de la Eterna Primavera a un precio promocional.',
      'Explora el dinamismo cultural, gastronomía y paisajes de Medellín.',
      'Ubicado cerca de los sectores más turísticos de Medellín, rodeado de restaurantes, comercios y espacios culturales. Ideal para explorar una ciudad moderna, vibrante y llena de experiencias.',
      'Fechas de viaje 01 de setiembre – 30 de noviembre , 2026 4 días · 3 noches'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreoLima/Medellín/Lima',
      'Traslados incluidosAeropuerto – hotel – aeropuerto',
      '3 noches de alojamientoHotel Categoría 3 - Habitación doble',
      'Desayunos incluidos',
      'Seguro de viajes',

    ],
    translations: {
      en: {
        titulo: 'Medellín',
        lugar: 'Medellín, Colombia',
        descripcion: [
          'Discover the City of Eternal Spring at a promotional price.',
          'Explore the cultural dynamism, gastronomy, and landscapes of Medellín.',
          'Located near the most touristy areas of Medellín, surrounded by restaurants, shops, and cultural spaces. Ideal for exploring a modern, vibrant city full of experiences.',
          'Travel dates September 1 – November 30, 2026 4 days · 3 nights'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'International / City',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima/Medellín/Lima',
          'Transfers included Airport – hotel – airport',
          '3 nights accommodation Hotel Category 3 - Double room',
          'Breakfasts included',
          'Travel insurance',
        ]
      },
      pt: {
        titulo: 'Medellín',
        lugar: 'Medellín, Colômbia',
        descripcion: [
          'Descubra a Cidade da Eterna Primavera a um preço promocional.',
          'Explore o dinamismo cultural, a gastronomia e as paisagens de Medellín.',
          'Localizado próximo às áreas mais turísticas de Medellín, cercado por restaurantes, lojas e espaços culturais. Ideal para explorar uma cidade moderna e vibrante, cheia de experiências.',
          'Datas de viagem 1 de setembro – 30 de novembro, 2026 4 dias · 3 noites'
        ],
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Internacional / Cidade',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima/Medellín/Lima',
          'Traslados incluídos Aeroporto – hotel – aeroporto',
          '3 noites de acomodação Hotel Categoria 3 - Quarto duplo',
          'Cafés da manhã incluídos',
          'Seguro de viagem',
        ]
      }
    }
  },
  {
    id: 'santiago-de-chile',
    titulo: 'Santiago de Chile',
    lugar: 'Santiago, Chile',
    imagen: 'assets/images/listing/santiago-de-chile/0000858_santiago-de-chile_550.webp',
    galeriaImagen: [
      'assets/images/listing/santiago-de-chile/0000858_santiago-de-chile_550.webp',
      'assets/images/listing/santiago-de-chile/0000859_santiago-de-chile_550.webp',
      'assets/images/listing/santiago-de-chile/0000860_santiago-de-chile_550.webp',
      'assets/images/listing/santiago-de-chile/0000861_santiago-de-chile_550.webp'
    ],
    precio: 489.00,
    rating: '4.6 (17)',
    descuento: '11% Off',
    duracion: '3 Noches',
    tipo: 'Internacional / Ciudad',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Descubre la moderna capital chilena a los pies de la Cordillera de los Andes.',
      'Viaje de 3 noches con traslados y vuelos incluidos desde Lima.',
      'Disfruta de una estadía cómoda y funcional en Santiago, con ambientes acogedores y fácil acceso a zonas comerciales, culturales y turísticas.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreoLima/Santiago de Chile/Lima',
      'Traslados incluidosAeropuerto – hotel – aeropuerto',
      '3 noches de alojamientoHotel Categoría 3 - Habitación doble',
      'Desayunos incluidos',
      'City Tour Panorámico',
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: 'Santiago de Chile',
        lugar: 'Santiago, Chile',
        descripcion: [
          'Discover the modern Chilean capital at the foot of the Andes Mountains.',
          '3-night trip with transfers and flights included from Lima.',
          'Enjoy a comfortable and functional stay in Santiago, with cozy environments and easy access to commercial, cultural, and tourist areas.'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'International / City',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima/Santiago de Chile/Lima',
          'Transfers included Airport – hotel – airport',
          '3 nights accommodation Hotel Category 3 - Double room',
          'Breakfasts included',
          'Panoramic City Tour',
          'Travel insurance',
        ]
      },
      pt: {
        titulo: 'Santiago de Chile',
        lugar: 'Santiago, Chile',
        descripcion: [
          'Descubra a moderna capital chilena aos pés da Cordilheira dos Andes.',
          'Viagem de 3 noites com traslados e voos incluídos desde Lima.',
          'Desfrute de uma estadia confortável e funcional em Santiago, com ambientes acolhedores e fácil acesso a áreas comerciais, culturais e turísticas.'
        ],
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Internacional / Cidade',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima/Santiago de Chile/Lima',
          'Traslados incluídos Aeroporto – hotel – aeroporto',
          '3 noites de acomodação Hotel Categoria 3 - Quarto duplo',
          'Cafés da manhã incluídos',
          'City Tour Panorâmico',
          'Seguro de viagem',
        ]
      }
    }

  },
  {
    id: 'tarapoto',
    titulo: 'Tarapoto',
    lugar: 'Tarapoto, San Martín, Perú',
    imagen: 'assets/images/listing/tarapoto_1/0000880_tarapoto_550.png',
    galeriaImagen: [
      'assets/images/listing/tarapoto_1/0000880_tarapoto_550.png',
      'assets/images/listing/tarapoto_1/0000881_tarapoto_550.png',
      'assets/images/listing/tarapoto_1/0000882_tarapoto_550.png',
      'assets/images/listing/tarapoto_1/0000883_tarapoto_550.png'
    ],
    precio: 209.00,
    rating: '4.7 (20)',
    descuento: '16% Off',
    duracion: '2 Noches',
    tipo: 'Naturaleza / Aventura',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Disfruta del clima tropical y los hermosos paisajes naturales de la selva de Tarapoto a un precio de oferta.',
      'Tarapoto con todo listo para que solo disfrutes.',
      'Ubicado en una zona estratégica de Tarapoto, con fácil acceso a sus principales atractivos y rodeado del encanto natural de la selva peruana.'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ],
    translations: {
      en: {
        titulo: 'Tarapoto',
        lugar: 'Tarapoto, San Martín, Peru',
        descripcion: [
          'Enjoy the tropical climate and beautiful natural landscapes of the Tarapoto jungle at a special offer price.',
          'Tarapoto with everything ready for you to just enjoy.',
          'Located in a strategic area of Tarapoto, with easy access to its main attractions and surrounded by the natural charm of the Peruvian jungle.'
        ],
        noches: '2 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'Nature / Adventure',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Flight',
          'Hotel',
          'Transfer'
        ]
      },
      pt: {
        titulo: 'Tarapoto',
        lugar: 'Tarapoto, San Martín, Peru',
        descripcion: [
          'Desfrute do clima tropical e das belas paisagens naturais da selva de Tarapoto a um preço especial.',
          'Tarapoto com tudo pronto para você apenas aproveitar.',
          'Localizado em uma área estratégica de Tarapoto, com fácil acesso às suas principais atrações e cercado pelo charme natural da selva peruana.'
        ],
        noches: '2 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Natureza / Aventura',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Voo',
          'Hotel',
          'Traslado'
        ]
      }
    }
  },
  {
    id: 'vichayito-',
    titulo: 'Vichayito',
    lugar: 'Piura, Perú',
    imagen: 'assets/images/listing/vichayito_1/0000885_vichayito_550.png',
    galeriaImagen: [
      'assets/images/listing/vichayito_1/0000885_vichayito_550.png',
      'assets/images/listing/vichayito_1/0000884_vichayito_550.png',
      'assets/images/listing/vichayito_1/0000886_vichayito_550.png',
      'assets/images/listing/vichayito_1/0000887_vichayito_550.png',
    ],
    precio: 209.00,
    rating: '4.8 (25)',
    descuento: '13% Off',
    duracion: '2 Noches',
    tipo: 'Playa / Relax',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Relájate en las cálidas playas del norte peruano en Vichayito, ideal para desconectarse y disfrutar del mar.',
      'Vichayito con todo listo para que solo disfrutes.',
      'Ubicado en una zona privilegiada de Vichayito, ideal para disfrutar de sus playas, el clima cálido y la tranquilidad del norte peruano.',
      'Fechas de viaje 01 de noviembre – 15 de diciembre, 2026 3 días · 2 noches'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Boleto aéreo Lima/Talara/Lima',
      '2 noches de alojamiento Hotel Categoría 3 - Habitación doble',
      'Desayunos incluidos'
    ],
    translations: {
      en: {
        titulo: 'Vichayito',
        lugar: 'Piura, Peru',
        descripcion: [
          'Relax on the warm beaches of northern Peru in Vichayito, ideal for disconnecting and enjoying the sea.',
          'Vichayito with everything ready for you to just enjoy.',
          'Located in a privileged area of Vichayito, ideal for enjoying its beaches, warm climate, and the tranquility of northern Peru.',
          'Travel dates November 1 – December 15, 2026 3 days · 2 nights'
        ],
        noches: '2 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'Beach / Relax',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Flight Lima/Talara/Lima',
          '2 nights accommodation Hotel Category 3 - Double room',
          'Breakfast included'
        ]
      },
      pt: {
        titulo: 'Vichayito',
        lugar: 'Piura, Peru',
        descripcion: [
          'Relaxe nas praias quentes do norte do Peru em Vichayito, ideal para se desconectar e aproveitar o mar.',
          'Vichayito com tudo pronto para você apenas aproveitar.',
          'Localizado em uma área privilegiada de Vichayito, ideal para desfrutar de suas praias, clima quente e a tranquilidade do norte do Peru.',
          'Datas de viagem 01 de novembro – 15 de dezembro, 2026 3 dias · 2 noites'
        ],
        noches: '2 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Praia / Relax',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima/Talara/Lima',
          '2 noites de hospedagem em hotel categoria 3 - Quarto duplo',
          'Café da manhã incluído'
        ]
      }
    }
  },


  {
    id: 'cartagena-plaza-hotel-todo-incluido',
    titulo: 'Cartagena Plaza Hotel - Todo Incluido',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena-plaza-hotel-todo-incluido/0000909_cartagena-plaza-hotel-todo-incluido_550.webp',
    galeriaImagen: [
      'assets/images/listing/cartagena-plaza-hotel-todo-incluido/0000909_cartagena-plaza-hotel-todo-incluido_550.webp',
      'assets/images/listing/cartagena-plaza-hotel-todo-incluido/0000911_cartagena-plaza-hotel-todo-incluido_550.webp',
      'assets/images/listing/cartagena-plaza-hotel-todo-incluido/0000912_cartagena-plaza-hotel-todo-incluido_550.webp',
      'assets/images/listing/cartagena-plaza-hotel-todo-incluido/0000913_cartagena-plaza-hotel-todo-incluido_550.webp'
    ],
    precio: 979.00,
    rating: '4.8 (15)',

    duracion: '3 Noches',
    tipo: 'Internacional / Todo Incluido',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Viaja del 06 al 09 de diciembre con todo resuelto en sistema Todo Incluido.',
      'Sin preocupaciones adicionales en el Cartagena Plaza Hotel.',
      'Ubicado a pocos minutos de la Ciudad Amurallada y del histórico barrio de Getsemaní. Descubre la riqueza cultural, la arquitectura colonial y el encanto del Caribe colombiano'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-internacionales',
    incluye: [
      'Boleto aéreoLima / Cartagena / Lima (Permite bolso o mochila + Carry On 12kg)',
      'Traslados incluidosAeropuerto / Hotel / Aeropuerto (Servicio compartido)',
      '03 noches de alojamientoCartagena Plaza Hotel (Habitación Estándar)',
      'Todo incluidoDesayuno y almuerzo buffet, cena buffet o a la carta, snacks y bebidas ilimitadas',
      'Tour de ciudadCartagena en Chiva (Servicio compartido)',
      'Seguro de viajes',
    ],
    translations: {
      en: {
        titulo: 'Cartagena Plaza Hotel - All Inclusive',
        lugar: 'Cartagena de Indias, Colombia',
        descripcion: [
          'Travel from December 6 to 9 with everything resolved in the All Inclusive system.',
          'No additional worries at the Cartagena Plaza Hotel.',
          'Located a few minutes from the Walled City and the historic Getsemaní neighborhood. Discover the cultural richness, colonial architecture, and charm of the Colombian Caribbean.'
        ],
        noches: '3 Nights',
        saliendo: 'Departing from Lima',
        tipo: 'International / All Inclusive',
        grupo: 'General',
        idioma: 'Spanish',
        incluye: [
          'Air ticket Lima / Cartagena / Lima (Allows bag or backpack + Carry On 12kg)',
          'Transfers included Airport / Hotel / Airport (Shared service)',
          '03 nights accommodation Cartagena Plaza Hotel (Standard Room)',
          'All inclusive Breakfast and lunch buffet, dinner buffet or à la carte, snacks and unlimited drinks',
          'City tour Cartagena en Chiva (Shared service)',
          'Travel insurance',
        ]
      },
      pt: {
        titulo: 'Cartagena Plaza Hotel - Tudo Incluído',
        lugar: 'Cartagena de Indias, Colômbia',
        descripcion: [
          'Viaje de 6 a 9 de dezembro com tudo resolvido no sistema Tudo Incluído.',
          'Sem preocupações adicionais no Cartagena Plaza Hotel.',
          'Localizado a poucos minutos da Cidade Murada e do histórico bairro de Getsemaní. Descubra a riqueza cultural, a arquitetura colonial e o charme do Caribe colombiano.'
        ],
        noches: '3 Noites',
        saliendo: 'Saindo de Lima',
        tipo: 'Internacional / Tudo Incluído',
        grupo: 'Geral',
        idioma: 'Espanhol',
        incluye: [
          'Passagem aérea Lima / Cartagena / Lima (Permite bolsa ou mochila + Carry On 12kg)',
          'Traslados incluídos Aeroporto / Hotel / Aeroporto (Serviço compartilhado)',
          '03 noites de hospedagem Cartagena Plaza Hotel (Quarto Standard)',
          'Tudo incluído Café da manhã e almoço buffet, jantar buffet ou à la carte, lanches e bebidas ilimitadas',
          'Tour pela cidade Cartagena en Chiva (Serviço compartilhado)',
          'Seguro de viagem',
        ]
      }
    }
  }
];

export function getTourById(id: string): Tour | undefined {
  return TOURS.find((tour) => tour.id === id);
}
export function getPaqueteById(id: string): Tour[] {
  return TOURS.filter((tour) => tour.paquete === id);
}

export function localizeTour(tour: Tour, language: Language): Tour {
  const translation = language === 'es' ? undefined : tour.translations?.[language];
  return { ...tour, ...translation };
}

