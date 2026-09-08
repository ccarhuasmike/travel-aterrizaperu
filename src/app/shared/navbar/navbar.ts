import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language, TranslationService } from '../translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html'
})
export class Navbar {
  protected readonly i18n = inject(TranslationService);

  protected selectLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }

  protected changeLanguage(event: Event): void {
    this.selectLanguage((event.target as HTMLSelectElement).value as Language);
  }
}
