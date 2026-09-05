import { Component, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { getPaqueteById } from '../../shared/tours';

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
  
  protected readonly tours = signal(getPaqueteById(this.route.snapshot.paramMap.get('id') ?? ''));

  constructor() {
    this.route.paramMap.subscribe((params) => {
      debugger;
      this.tours.set(getPaqueteById(params.get('id') ?? ''));
    });
    console.log(this.tours());
  }

  protected openFaqIndex = 0;

  protected toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }
}
