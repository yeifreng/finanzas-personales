import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'dashboard',
    loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component')
  },
  {
    path:'**',
    loadComponent:() => import('./dashboard/pages/dashboard/dashboard.component')
  }
];
