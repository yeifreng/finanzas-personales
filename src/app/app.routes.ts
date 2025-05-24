import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'dashboard',
    loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component')
  },
  {
    path:'ingreso',
    loadComponent: () => import('./income/pages/income/income.component')
  },
  {
    path:'login',
    loadComponent: () => import('./auth/pages/login/login.component')
  },
  {
    path:'register',
    loadComponent: () => import('./auth/pages/register/register.component')
  },
  {
    path:'categoria',
    loadComponent: () => import('./category/pages/category/category.component')
  },
  {
    path:'gasto',
    loadComponent: () => import('./expense/pages/expense/expense.component')
  },
  {
    path:'user',
    loadComponent: () => import('./auth/pages/user/user.component')
  },
  {
    path:'**',
    loadComponent:() => import('./dashboard/pages/dashboard/dashboard.component')
  }
];
