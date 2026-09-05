import { Component, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { getTourById } from '../../shared/tours';

interface Faq {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tour-detail.html'
})
export class TourDetail {
  private readonly route = inject(ActivatedRoute);

  protected readonly tour = signal(getTourById(this.route.snapshot.paramMap.get('id') ?? ''));

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.tour.set(getTourById(params.get('id') ?? ''));
    });
  }

  protected readonly faqs: Faq[] = [
    { pregunta: '¿Cómo funciona?', respuesta: 'Existen muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones de alguna forma.' },
    { pregunta: '¿Necesito un diseñador para usar Aterriza Perú?', respuesta: 'Existen muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones de alguna forma.' },
    { pregunta: '¿Qué necesito para empezar a vender?', respuesta: 'Existen muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones de alguna forma.' },
    { pregunta: '¿Qué sucede cuando recibo un pedido?', respuesta: 'Existen muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones de alguna forma.' },
  ];

  protected openFaqIndex = 0;

  protected toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }
}
