import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
