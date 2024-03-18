import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartRoutingModule } from './ng-apexchart-routing.module';
import { NgApexchartComponent } from './ng-apexchart.component';


@NgModule({
  declarations: [NgApexchartComponent],
  imports: [
    CommonModule,
    NgApexchartRoutingModule
  ]
})
export class NgApexchartModule { }
