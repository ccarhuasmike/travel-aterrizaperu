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
}

export const TOURS: Tour[] = [


  {
    id: 'aventura-en-vela-por-cuba',
    titulo: 'Eco Europa Clasica con Air Europa +equipaje 23abr al 07may',
    lugar: 'Eco Europa Clasica',
    imagen: 'assets/images/listing/EcoEuropa/EUROPA.jpg.webp',
    precio: 3.274,
    rating: '5.0 (30)',
    descuento: '10% Off',
    duracion: '2 días',
    tipo: 'Aventura',
    grupo: '50 personas',
    idioma: 'Español',
    descripcion: [
      "El texto de relleno más conocido es el 'Lorem Ipsum', que se dice se originó en el siglo XVI. Se compone en un pseudo-latín que corresponde más o menos al latín 'propio'. Contiene una serie de palabras latinas reales. Este antiguo texto de relleno también es incomprensible, pero imita el ritmo de la mayoría de los idiomas europeos en escritura latina.",
      'La ventaja de su origen latino y el relativo sinsentido del Lorum Ipsum es que el texto no atrae la atención sobre sí mismo ni distrae la atención del espectador del diseño.',
    ],
  },
  {
    id: 'tour-por-nueva-york',
    titulo: 'Turquía & Grecia con Air Europa + equipaje "05may al 17set"',
    lugar: 'Turquía & Grecia',
    imagen: 'assets/images/listing/Turquía/TURQUIA.jpg.webp',
    precio: 4594,
    rating: '5.0 (30)',
    duracion: '3 días',
    tipo: 'Ciudad',
    grupo: '30 personas',
    idioma: 'Español, Inglés',
    descripcion: [
      "El texto de relleno más conocido es el 'Lorem Ipsum', que se dice se originó en el siglo XVI. Se compone en un pseudo-latín que corresponde más o menos al latín 'propio'. Contiene una serie de palabras latinas reales. Este antiguo texto de relleno también es incomprensible, pero imita el ritmo de la mayoría de los idiomas europeos en escritura latina.",
      'La ventaja de su origen latino y el relativo sinsentido del Lorum Ipsum es que el texto no atrae la atención sobre sí mismo ni distrae la atención del espectador del diseño.',
    ],
  },
  {
    id: 'descubre-grecia',
    titulo: 'Vichayito - Hotel El Refugio de Vichayito con vuelo incluido',
    lugar: 'Vichayito - Perú',
    imagen: 'assets/images/listing/Vichayito/VACHAYITO.jpg.webp',
    precio: 305,
    rating: '5.0 (30)',
    duracion: '5 días',
    tipo: 'Playa',
    grupo: '20 personas',
    idioma: 'Español',
    descripcion: [
      "El texto de relleno más conocido es el 'Lorem Ipsum', que se dice se originó en el siglo XVI. Se compone en un pseudo-latín que corresponde más o menos al latín 'propio'. Contiene una serie de palabras latinas reales. Este antiguo texto de relleno también es incomprensible, pero imita el ritmo de la mayoría de los idiomas europeos en escritura latina.",
      'La ventaja de su origen latino y el relativo sinsentido del Lorum Ipsum es que el texto no atrae la atención sobre sí mismo ni distrae la atención del espectador del diseño.',
    ],
  },
  {
    id: 'museo-de-arte-moderno',
    titulo: 'Buenos Aires con vuelo incluido',
    lugar: 'Argentina',
    imagen: 'assets/images/listing/BuenosAires/buenosaires.webp',
    precio: 615,
    rating: '5.0 (30)',
    duracion: '1 día',
    tipo: 'Cultural',
    grupo: '15 personas',
    idioma: 'Español, Inglés',
    descripcion: [
      "El texto de relleno más conocido es el 'Lorem Ipsum', que se dice se originó en el siglo XVI. Se compone en un pseudo-latín que corresponde más o menos al latín 'propio'. Contiene una serie de palabras latinas reales. Este antiguo texto de relleno también es incomprensible, pero imita el ritmo de la mayoría de los idiomas europeos en escritura latina.",
      'La ventaja de su origen latino y el relativo sinsentido del Lorum Ipsum es que el texto no atrae la atención sobre sí mismo ni distrae la atención del espectador del diseño.',
    ],
  },
  {
    id: 'vista-de-la-montana-peek',
    titulo: 'Escapada Ica',
    lugar: 'Ica - Perú',
    imagen: 'assets/images/listing/EscapadaIca/ICA.webp',
    precio: 69,
    rating: '5.0 (30)',
    duracion: '4 días',
    tipo: 'Montaña',
    grupo: '25 personas',
    idioma: 'Español',
    descripcion: [
      "El texto de relleno más conocido es el 'Lorem Ipsum', que se dice se originó en el siglo XVI. Se compone en un pseudo-latín que corresponde más o menos al latín 'propio'. Contiene una serie de palabras latinas reales. Este antiguo texto de relleno también es incomprensible, pero imita el ritmo de la mayoría de los idiomas europeos en escritura latina.",
      'La ventaja de su origen latino y el relativo sinsentido del Lorum Ipsum es que el texto no atrae la atención sobre sí mismo ni distrae la atención del espectador del diseño.',
    ],
  },
  {
    id: 'viaje-en-globo-aerostatico',
    titulo: 'Riviera Maya - Hotel Nickelodeon con vuelo incluido',
    lugar: 'Riviera Maya - México',
    imagen: 'assets/images/listing/RIVIERA/RIVIERA.webp',
    precio: 2942,
    rating: '5.0 (30)',
    descuento: '25% Off',
    duracion: '1 día',
    tipo: 'Aventura',
    grupo: '10 personas',
    idioma: 'Español, Inglés',
    descripcion: [
      "El texto de relleno más conocido es el 'Lorem Ipsum', que se dice se originó en el siglo XVI. Se compone en un pseudo-latín que corresponde más o menos al latín 'propio'. Contiene una serie de palabras latinas reales. Este antiguo texto de relleno también es incomprensible, pero imita el ritmo de la mayoría de los idiomas europeos en escritura latina.",
      'La ventaja de su origen latino y el relativo sinsentido del Lorum Ipsum es que el texto no atrae la atención sobre sí mismo ni distrae la atención del espectador del diseño.',
    ],
  },

  {
    id: 'viaje-en-globo-aerostatico',
    titulo: 'Cartagena con vuelo incluido',
    lugar: 'Cartagena - Colombia',
    imagen: 'assets/images/listing/Cartagena/cartagena.webp',
    precio: 2942,
    rating: '5.0 (30)',
    descuento: '25% Off',
    duracion: '1 día',
    tipo: 'Aventura',
    grupo: '10 personas',
    idioma: 'Español, Inglés',
    descripcion: [
      "El texto de relleno más conocido es el 'Lorem Ipsum', que se dice se originó en el siglo XVI. Se compone en un pseudo-latín que corresponde más o menos al latín 'propio'. Contiene una serie de palabras latinas reales. Este antiguo texto de relleno también es incomprensible, pero imita el ritmo de la mayoría de los idiomas europeos en escritura latina.",
      'La ventaja de su origen latino y el relativo sinsentido del Lorum Ipsum es que el texto no atrae la atención sobre sí mismo ni distrae la atención del espectador del diseño.',
    ],
  },




  {
    id: 'punta-cana-caribe-deluxe-Princess',
    titulo: 'Punta Cana - Caribe Deluxe Princess',
    lugar: 'Punta Cana, Republica Dominicana ',
    imagen: 'assets/images/listing/PuntaCana/0000758_punta-cana-caribe-deluxe-princess_320.webp',
    galeriaImagen: [
      'assets/images/listing/PuntaCana/0000758_punta-cana-caribe-deluxe-princess_320.webp',
      'assets/images/listing/PuntaCana/0000759_punta-cana-caribe-deluxe-princess_550.webp',
      'assets/images/listing/PuntaCana/0000760_punta-cana-caribe-deluxe-princess_550.webp',
      'assets/images/listing/PuntaCana/0000761_punta-cana-caribe-deluxe-princess_550.webp',
    ],
    precio: 1655.00,
    rating: '5.0 (30)',
    descuento: '10% Off',
    duracion: '2 días',
    tipo: 'Aventura',
    grupo: '50 personas',
    idioma: 'Español',
    descripcion: [
      "Punta Cana con todo listo para que solo disfrutes.",
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
  },

  {
    id: 'punta-cana-grand-sirenis',
    titulo: 'Punta Cana - Grand Sirenis',
    lugar: 'Punta Cana, Republica Dominicana ',
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
  },




  {
    "id": "punta-cana-vista-sol",
    "titulo": "Punta Cana - Vista Sol",
    "lugar": "Punta Cana, República Dominicana",
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
      "Celebra el Año Nuevo en Vista Sol Punta Cana con la mejor atención y sistema todo incluido."
    ],
    "noches": "4 Noches",
    "saliendo": "Saliendo de Lima",
    "paquete": "paquete-playa-caribe",
    "incluye": [
      "Vuelo",
      "Hotel",
      "Traslado",
      "Seguro"
    ]
  },
  {
    "id": "punta-cana-whala-bavaro",
    "titulo": "Punta Cana - Whala!Bávaro",
    "lugar": "Punta Cana, República Dominicana",
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
    ]
  },
  {
    "id": "cartagena-cartagena-plaza-hotel",
    "titulo": "Cartagena - Cartagena Plaza Hotel",
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
    ]
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
    ]
  },
  {
    "id": "cartagena-dreams-karibana",
    "titulo": "Cartagena - Dreams Karibana",
    "lugar": "Cartagena, Colombia",
    "imagen": "assets/images/listing/Cartagena - Dreams Karibana/0000783_cartagena-dreams-karibana_550.webp",
    "galeriaImagen": [
      "assets/images/listing/Cartagena - Dreams Karibana/0000783_cartagena-dreams-karibana_550.webp",
      "assets/images/listing/Cartagena - Dreams Karibana/0000784_cartagena-dreams-karibana_550.webp",
      "assets/images/listing/Cartagena - Dreams Karibana/0000785_cartagena-dreams-karibana_550.webp",
      "assets/images/listing/Cartagena - Dreams Karibana/0000786_cartagena-dreams-karibana_550.webp"
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  // paquetes-nacionales


  {
    id: 'cusco-casa-andina-standard-catedral',
    titulo: 'Cusco - Casa Andina Standard Catedral',
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
    ]
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
    ]
  },
  {
    id: 'cusco-tierra-viva-cusco-habitacion-estandar',
    titulo: 'Cusco - Tierra Viva Cusco (Habitación Estándar)',
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
    ]
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
    ]
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
    ]
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
    paquete: 'paquetes-nacionales',
    incluye: [
      'Boleto aéreo Lima/Talara/Lima',
      '2 noches de alojamiento Hotel Categoría 3 - Habitación doble',
      'Desayunos incluidos'
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },








  {
    id: 'arequipa',
    titulo: 'Arequipa',
    lugar: 'Arequipa, Perú',
    imagen: 'assets/images/listing/arequipa/01.png',
    galeriaImagen: [
      'assets/images/listing/arequipa/01.png',
      'assets/images/listing/arequipa/02.png',
      'assets/images/listing/arequipa/03.png',
      'assets/images/listing/arequipa/04.png'
    ],
    precio: 215.00,
    rating: '4.7 (18)',

    duracion: '2 Noches',
    tipo: 'Nacional / Cultural',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Descubre la majestuosa Ciudad Blanca de Arequipa y disfruta de su impresionante arquitectura e historia.',
      'Aprovecha una escapada perfecta con vuelo, hotel y traslados incluidos.'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ]
  },
  {
    id: 'buenos-aires',
    titulo: 'Buenos Aires',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos_aires/01.png',
    galeriaImagen: [
      'assets/images/listing/buenos_aires/01.png',
      'assets/images/listing/buenos_aires/02.png',
      'assets/images/listing/buenos_aires/03.png',
      'assets/images/listing/buenos_aires/04.png'
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
      'Un paquete ideal de 3 noches para recorrer sus barrios más emblemáticos.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ]
  },
  {
    id: 'buenos-aires-dora-hotel',
    titulo: 'Buenos Aires - Dora Hotel',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos_aires_dora/01.png',
    galeriaImagen: [
      'assets/images/listing/buenos_aires_dora/01.png',
      'assets/images/listing/buenos_aires_dora/02.png',
      'assets/images/listing/buenos_aires_dora/03.png',
      'assets/images/listing/buenos_aires_dora/04.png'
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
      'Incluye seguro de viaje para mayor tranquilidad durante tus vacaciones.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
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

    ]
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

    ]
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
    ]
  },
  {
    id: 'buenos-aires-sheraton',
    titulo: 'Buenos Aires - Sheraton',
    lugar: 'Buenos Aires, Argentina',
    imagen: 'assets/images/listing/buenos_aires_sheraton/01.png',
    galeriaImagen: [
      'assets/images/listing/buenos_aires_sheraton/01.png',
      'assets/images/listing/buenos_aires_sheraton/02.png',
      'assets/images/listing/buenos_aires_sheraton/03.png',
      'assets/images/listing/buenos_aires_sheraton/04.png'
    ],
    precio: 1019.00,
    rating: '5.0 (30)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Una estadía de lujo para celebrar Año Nuevo en el Sheraton Buenos Aires.',
      'Máximo confort con vuelo, hotel, traslados y seguro integrados.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  },
  {
    id: 'cartagena',
    titulo: 'Cartagena',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena/01.png',
      'assets/images/listing/cartagena/02.png',
      'assets/images/listing/cartagena/03.png',
      'assets/images/listing/cartagena/04.png'
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
      'Paquete con vuelo, alojamiento y traslados a precio promocional.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ]
  },
  {
    id: 'cartagena-cartagena-plaza-hotel',
    titulo: 'Cartagena - Cartagena Plaza Hotel',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena_plaza/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena_plaza/01.png',
      'assets/images/listing/cartagena_plaza/02.png',
      'assets/images/listing/cartagena_plaza/03.png',
      'assets/images/listing/cartagena_plaza/04.png'
    ],
    precio: 935.00,
    rating: '4.7 (19)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Recibe el Año Nuevo frente al mar en el Cartagena Plaza Hotel.',
      'Incluye seguro médico de viaje, pasajes aéreos y traslados.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  },
  {
    id: 'cartagena-decameron',
    titulo: 'Cartagena - Decameron',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena_decameron/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena_decameron/01.png',
      'assets/images/listing/cartagena_decameron/02.png',
      'assets/images/listing/cartagena_decameron/03.png',
      'assets/images/listing/cartagena_decameron/04.png'
    ],
    precio: 1295.00,
    rating: '4.8 (32)',

    duracion: '3 Noches',
    tipo: 'Internacional / Todo Incluido',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Experiencia Todo Incluido para celebrar Año Nuevo en Decameron Cartagena.',
      'Comidas, bebidas, entretenimiento y traslados garantizados.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  },
  {
    id: 'cartagena-dreams-karibana',
    titulo: 'Cartagena - Dreams Karibana',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena_karibana/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena_karibana/01.png',
      'assets/images/listing/cartagena_karibana/02.png',
      'assets/images/listing/cartagena_karibana/03.png',
      'assets/images/listing/cartagena_karibana/04.png'
    ],
    precio: 1785.00,
    rating: '4.9 (21)',

    duracion: '3 Noches',
    tipo: 'Internacional / Todo Incluido',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Año Nuevo de lujo resort Todo Incluido en Dreams Karibana Cartagena.',
      'Servicios exclusivos en un entorno paradisíaco.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  },
  {
    id: 'cartagena-plaza-hotel-superior',
    titulo: 'Cartagena Plaza Hotel - Habitación Superior',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena_superior/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena_superior/01.png',
      'assets/images/listing/cartagena_superior/02.png',
      'assets/images/listing/cartagena_superior/03.png',
      'assets/images/listing/cartagena_superior/04.png'
    ],
    precio: 965.00,
    rating: '4.7 (11)',

    duracion: '3 Noches',
    tipo: 'Internacional / Año Nuevo',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Disfruta de Año Nuevo en Habitación Superior en el Cartagena Plaza Hotel.',
      'Mayor confort con vista y servicios preferenciales incluidos.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  },
  {
    id: 'cusco',
    titulo: 'Cusco',
    lugar: 'Cusco, Perú',
    imagen: 'assets/images/listing/cusco/01.png',
    galeriaImagen: [
      'assets/images/listing/cusco/01.png',
      'assets/images/listing/cusco/02.png',
      'assets/images/listing/cusco/03.png',
      'assets/images/listing/cusco/04.png'
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
      'Incluye boletos aéreos desde Lima, alojamiento y traslados.'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ]
  },
  {
    id: 'medellin',
    titulo: 'Medellín',
    lugar: 'Medellín, Colombia',
    imagen: 'assets/images/listing/medellin/01.png',
    galeriaImagen: [
      'assets/images/listing/medellin/01.png',
      'assets/images/listing/medellin/02.png',
      'assets/images/listing/medellin/03.png',
      'assets/images/listing/medellin/04.png'
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
      'Explora el dinamismo cultural, gastronomía y paisajes de Medellín.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ]
  },
  {
    id: 'santiago-de-chile',
    titulo: 'Santiago de Chile',
    lugar: 'Santiago, Chile',
    imagen: 'assets/images/listing/santiago/01.png',
    galeriaImagen: [
      'assets/images/listing/santiago/01.png',
      'assets/images/listing/santiago/02.png',
      'assets/images/listing/santiago/03.png',
      'assets/images/listing/santiago/04.png'
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
      'Viaje de 3 noches con traslados y vuelos incluidos desde Lima.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ]
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
    ]
  },
  {
    id: 'vichayito',
    titulo: 'Vichayito',
    lugar: 'Vichayito, Piura, Perú',
    imagen: 'assets/images/listing/vichayito/01.png',
    galeriaImagen: [
      'assets/images/listing/vichayito/01.png',
      'assets/images/listing/vichayito/02.png',
      'assets/images/listing/vichayito/03.png',
      'assets/images/listing/vichayito/04.png'
    ],
    precio: 209.00,
    rating: '4.8 (24)',
    descuento: '13% Off',
    duracion: '2 Noches',
    tipo: 'Nacional / Playa',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Relájate en el cálido mar del norte peruano con esta promo especial a Vichayito.',
      'Alojamiento cómodo a pasos de la playa y traslados incluidos.'
    ],
    noches: '2 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'destinos-sudamerica',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado'
    ]
  },
  {
    id: 'cartagena-plaza-hotel-diciembre',
    titulo: 'Cartagena - Plaza Hotel',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena_diciembre/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena_diciembre/01.png',
      'assets/images/listing/cartagena_diciembre/02.png',
      'assets/images/listing/cartagena_diciembre/03.png',
      'assets/images/listing/cartagena_diciembre/04.png'
    ],
    precio: 869.00,
    rating: '4.7 (10)',

    duracion: '3 Noches',
    tipo: 'Internacional / Playa',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Escapada especial a Cartagena viajando del 06 al 09 de diciembre.',
      'Disfruta del sol del Caribe en Plaza Hotel con pasajes y seguro garantizados.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-internacionales',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  },
  {
    id: 'cartagena-holiday-inn-express-bocagrande',
    titulo: 'Cartagena - Holiday Inn Express Bocagrande',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena_holiday/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena_holiday/01.png',
      'assets/images/listing/cartagena_holiday/02.png',
      'assets/images/listing/cartagena_holiday/03.png',
      'assets/images/listing/cartagena_holiday/04.png'
    ],
    precio: 879.00,
    rating: '4.8 (13)',
    descuento: '32% Off',
    duracion: '3 Noches',
    tipo: 'Internacional / Playa',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Oferta exclusiva del 06 al 09 de diciembre en Holiday Inn Express Bocagrande.',
      'Excelente ubicación con seguro y traslados incluidos.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-internacionales',
    incluye: [
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  },
  {
    id: 'cartagena-plaza-hotel-todo-incluido',
    titulo: 'Cartagena Plaza Hotel - Todo Incluido',
    lugar: 'Cartagena de Indias, Colombia',
    imagen: 'assets/images/listing/cartagena_plaza_ti/01.png',
    galeriaImagen: [
      'assets/images/listing/cartagena_plaza_ti/01.png',
      'assets/images/listing/cartagena_plaza_ti/02.png',
      'assets/images/listing/cartagena_plaza_ti/03.png',
      'assets/images/listing/cartagena_plaza_ti/04.png'
    ],
    precio: 979.00,
    rating: '4.8 (15)',

    duracion: '3 Noches',
    tipo: 'Internacional / Todo Incluido',
    grupo: 'General',
    idioma: 'Español',
    descripcion: [
      'Viaja del 06 al 09 de diciembre con todo resuelto en sistema Todo Incluido.',
      'Sin preocupaciones adicionales en el Cartagena Plaza Hotel.'
    ],
    noches: '3 Noches',
    saliendo: 'Saliendo de Lima',
    paquete: 'paquetes-internacionales',
    incluye: [
      'Vuelo',
      'Hotel',
      'Traslado',
      'Seguro'
    ]
  }






];

export function getTourById(id: string): Tour | undefined {
  return TOURS.find((tour) => tour.id === id);
}
export function getPaqueteById(id: string): Tour[] {
  return TOURS.filter((tour) => tour.paquete === id);
}

