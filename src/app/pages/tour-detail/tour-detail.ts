import { Component, computed, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { getTourById, localizeTour, Tour } from '../../shared/tours';
import { TranslationService } from '../../shared/translation.service';

declare const Tobii: new (options?: unknown) => { destroy: () => void };

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
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly i18n = inject(TranslationService);
  private tobiiInstance?: { destroy: () => void };

  private readonly selectedTour = signal(getTourById(this.route.snapshot.paramMap.get('id') ?? ''));
  protected readonly tour = computed(() => {
    const tour = this.selectedTour();
    return tour ? localizeTour(tour, this.i18n.language()) : undefined;
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.selectedTour.set(getTourById(params.get('id') ?? ''));
    });

    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        this.tour();
        setTimeout(() => this.reloadLightbox());
      });
    }
  }

  private reloadLightbox(): void {
    this.tobiiInstance?.destroy();
    this.tobiiInstance = new Tobii();
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

  protected whatsappUrl(tour: Tour): string {
    const tourUrl = isPlatformBrowser(this.platformId) ? window.location.href : '';
    const message = [
      'Hola, deseo recibir asesoria sobre este tour:',
      `Tour: ${tour.titulo}`,
      `Destino: ${tour.lugar}`,
      `Duracion: ${tour.duracion}`,
      `Precio: $${tour.precio} por persona`,
      `Enlace: ${tourUrl}`,
    ].join('\n');

    return `https://wa.me/51958343812?text=${encodeURIComponent(message)}`;
  }
}
