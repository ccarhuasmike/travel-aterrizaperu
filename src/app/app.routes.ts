import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TourDetail } from './pages/tour-detail/tour-detail';
import { Paquete } from './pages/paquete/paquete';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tours/:id', component: TourDetail },
  { path: 'paquete/:id', component: Paquete },
];
