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
      "assets/images/listing/Aruba - Embassy Suites By Hilton/0000798_aruba-embassy-suites-by-hilton_550.webp"    ],
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
  }



];

export function getTourById(id: string): Tour | undefined {
  return TOURS.find((tour) => tour.id === id);
}
export function getPaqueteById(id: string): Tour[] {
  return TOURS.filter((tour) => tour.paquete === id);
}

