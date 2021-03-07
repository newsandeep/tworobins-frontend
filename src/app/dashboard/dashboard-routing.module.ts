import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import { PriceProductMatrixComponent } from './dashboard-components/price-product-matrix/price-product-matrix.component'
import { PriceSiteMatrixComponent } from './dashboard-components/price-site-matrix/price-site-matrix.component';
import { PreferencesComponent } from './dashboard-components/preferences/preferences.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Home' }
      ]
    },
    component: StarterComponent
  },
  {
    path: 'price-product',
    data: {
      title: 'Price Product Matrix',
      urls: [
        { title: 'Price Product Matrix', url: '/dashboard/price-product' },
        { title: 'Price Product Matrix' }
      ]
    },
    component: PriceProductMatrixComponent
  },
  {
    path: 'price-site',
    data: {
      title: 'Price Site Matrix',
      urls: [
        { title: 'Price Site Matrix', url: '/dashboard/price-site' },
        { title: 'Price Site Matrix' }
      ]
    },
    component: PriceSiteMatrixComponent
  },
  {
    path: 'preferences',
    data: {
      title: 'Preferences',
      urls: [
        { title: 'Preferences', url: '/dashboard/preferences' },
        { title: 'Preferences' }
      ]
    },
    component: PreferencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
