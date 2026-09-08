import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { getPaqueteById, localizeTour } from '../../shared/tours';
import { TranslationService } from '../../shared/translation.service';

interface Faq {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-paquete',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paquete.html'
})
export class Paquete {
  private readonly route = inject(ActivatedRoute);
  protected readonly i18n = inject(TranslationService);
  
  private readonly packageTours = signal(getPaqueteById(this.route.snapshot.paramMap.get('id') ?? ''));
  protected readonly tours = computed(() => this.packageTours().map((tour) => localizeTour(tour, this.i18n.language())));

  constructor() {
    this.route.paramMap.subscribe((params) => {
      debugger;
      this.packageTours.set(getPaqueteById(params.get('id') ?? ''));
    });
    console.log(this.tours());
  }

  protected openFaqIndex = 0;

  protected toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }
}
