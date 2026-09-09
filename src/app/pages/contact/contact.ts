import { Component, inject } from '@angular/core';
import { TranslationService } from '../../shared/translation.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html'
})
export class Contact {
  protected readonly i18n = inject(TranslationService);

}
