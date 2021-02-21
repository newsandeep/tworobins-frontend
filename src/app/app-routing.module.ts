import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './service/auth.guards';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];
