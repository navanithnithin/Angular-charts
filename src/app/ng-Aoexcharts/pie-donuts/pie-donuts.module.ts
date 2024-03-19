import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieDonutsRoutingModule } from './pie-donuts-routing.module';
import { PieDonutsComponent } from './pie-donuts.component';


@NgModule({
  declarations: [PieDonutsComponent],
  imports: [
    CommonModule,
    PieDonutsRoutingModule
  ]
})
export class PieDonutsModule { }
