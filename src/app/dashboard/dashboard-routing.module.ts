import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import { PriceProductMatrixComponent } from './dashboard-components/price-product-matrix/price-product-matrix.component'


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
