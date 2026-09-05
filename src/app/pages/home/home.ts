import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TinySliderDirective } from '../../shared/tiny-slider.directive';
import { TOURS } from '../../shared/tours';

interface Destino {
  nombre: string;
  hoteles: number;
  imagen: string;
}

interface Testimonio {
  nombre: string;
  cargo: string;
  texto: string;
  imagen: string;
}

interface Blog {
  titulo: string;
  categoria: string;
  resumen: string;
  imagen: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TinySliderDirective],
  templateUrl: './home.html'
})
export class Home {
  protected readonly destinosSliderOptions = {
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: ['<i class="ri-arrow-left-s-line "></i>', '<i class="ri-arrow-right-s-line"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: { items: 5 },
      992: { items: 4 },
      767: { items: 3 },
      425: { items: 1 },
    },
  };

  protected readonly testimoniosSliderOptions = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    speed: 400,
    gutter: 12,
    responsive: {
      992: { items: 3 },
      767: { items: 2 },
      320: { items: 1 },
    },
  };

  protected readonly destinos: Destino[] = [
    { nombre: 'Medellín, Colombia', hoteles: 3, imagen: 'assets/images/listing/medellin.webp' },
    { nombre: 'Cartagena, Colombia', hoteles: 3, imagen: 'assets/images/listing/cartagena.webp' },
    { nombre: 'Medellín, Plaza Botero', hoteles: 3, imagen: 'assets/images/listing/medellinplaza.webp' },
    { nombre: 'Barranquilla, Colombia', hoteles: 3, imagen: 'assets/images/listing/barranquilla.webp' },
    // { nombre: 'Whistler, Canadá', hoteles: 3, imagen: 'assets/images/listing/5.jpg' },
    // { nombre: 'Kuala Lumpur, Malasia', hoteles: 3, imagen: 'assets/images/listing/6.jpg' },
    // { nombre: 'Sídney, Australia', hoteles: 3, imagen: 'assets/images/listing/7.jpg' },
  ];

  protected readonly tours = TOURS;

  protected readonly testimonios: Testimonio[] = [
    { nombre: 'Calvin Carlo', cargo: 'Gerente', texto: 'Solo quedan fragmentos del texto original en los textos Lorem Ipsum usados hoy.', imagen: 'assets/images/client/01.jpg' },
    { nombre: 'Christa Smith', cargo: 'Gerente', texto: 'El texto de relleno más conocido es el "Lorem Ipsum", que se dice se originó en el siglo XVI.', imagen: 'assets/images/client/02.jpg' },
    { nombre: 'Jemina Clone', cargo: 'Gerente', texto: 'Una desventaja del Lorum Ipsum es que en latín ciertas letras aparecen con más frecuencia que otras.', imagen: 'assets/images/client/03.jpg' },
    { nombre: 'Smith Vodka', cargo: 'Gerente', texto: 'Por lo tanto, el Lorem Ipsum tiene solo utilidad limitada como relleno visual para textos en alemán.', imagen: 'assets/images/client/04.jpg' },
    { nombre: 'Cristino Murfi', cargo: 'Gerente', texto: 'Hoy existe una abundancia de textos de relleno legibles, generalmente usados cuando se requiere un texto.', imagen: 'assets/images/client/05.jpg' },
    { nombre: 'Cristino Murfi', cargo: 'Gerente', texto: 'Según la mayoría de las fuentes, el Lorum Ipsum se remonta a un texto compuesto por Cicerón.', imagen: 'assets/images/client/06.jpg' },
  ];

  protected readonly blogs: Blog[] = [
    { titulo: 'Esta ciudad española es un festín para la vista: Aterriza Perú', categoria: 'Viaje', resumen: 'Esto se requiere cuando, por ejemplo, el texto final aún no está disponible.', imagen: 'assets/images/blog/1.jpg' },
    { titulo: 'La Isla Sur de Nueva Zelanda rebosa de majestuosidad', categoria: 'Tour', resumen: 'Esto se requiere cuando, por ejemplo, el texto final aún no está disponible.', imagen: 'assets/images/blog/2.jpg' },
    { titulo: 'Cuando visitas la Ciudad Eterna de Roma: Aterriza Perú', categoria: 'Turismo', resumen: 'Esto se requiere cuando, por ejemplo, el texto final aún no está disponible.', imagen: 'assets/images/blog/3.jpg' },
  ];
}
