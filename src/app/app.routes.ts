import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TourDetail } from './pages/tour-detail/tour-detail';
import { Paquete } from './pages/paquete/paquete';
import { Contact } from './pages/contact/contact';
import { Terms } from './pages/terms/terms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'terms', component: Terms },
  { path: 'tours/:id', component: TourDetail },
  { path: 'paquete/:id', component: Paquete },
];
