export interface Paquete {
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
  galeriaImagen?: string[];
}

export const PAQUETES: Paquete[] = [
  {
    id: 'paquete-playa-caribe',
    titulo: 'Punta Cana - Caribe Deluxe Princess',
    lugar: 'Punta Cana, Republica Dominicana ',
    imagen: 'assets/images/listing/PuntaCana/0000758_punta-cana-caribe-deluxe-princess_320.webp',
    precio:  1655.00,
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
    noches: '4 Noches',
    saliendo: 'Saliendo de Lima',
  },
  {
    id: 'paquete-playa-caribe',
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
    id: 'paquete-playa-caribe',
    titulo: 'Vichayito - Hotel El Refugio de Vichayito con vuelo incluido',
    lugar: 'Vichayito - Perú',
    imagen: 'assets/images/listing/Vichayito/VACHAYITO.jpg.webp',
    precio: 305 ,
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
    id: 'paquete-playa-caribe',
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
    id: 'paquete-playa-caribe',
    titulo: 'Escapada Ica',
    lugar: 'Ica - Perú',
    imagen: 'assets/images/listing/EscapadaIca/ICA.webp',
    precio: 69 ,
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
    id: 'paquete-playa-caribe',
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

];

export function getPaqueteById(id: string): Paquete[] | undefined {
  return PAQUETES.filter((paquete) => paquete.id === id);
}
