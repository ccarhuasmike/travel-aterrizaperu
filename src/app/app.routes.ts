import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TourDetail } from './pages/tour-detail/tour-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tours/:id', component: TourDetail },
];
