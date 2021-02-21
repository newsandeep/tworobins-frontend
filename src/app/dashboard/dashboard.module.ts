import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';

import { StarterComponent } from './starter.component';
import { SiteTrafficComponent } from './dashboard-components/site-traffic/site-traffic.component';
import { SiteVisitComponent } from './dashboard-components/site-visit/site-visit.component';
import { IncomeCounterComponent } from './dashboard-components/income-counter/income-counter.component';
import { PriceProductMatrixComponent } from './dashboard-components/price-product-matrix/price-product-matrix.component';


@NgModule({
  declarations: [
    StarterComponent,
    IncomeCounterComponent,
    SiteTrafficComponent,
    SiteVisitComponent,
    PriceProductMatrixComponent
  ],
  imports: [ 
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    DashboardRoutingModule,
    PerfectScrollbarModule
  ]
})
export class DashboardModule { }
