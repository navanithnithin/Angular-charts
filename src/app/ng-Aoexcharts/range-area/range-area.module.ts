import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeAreaRoutingModule } from './range-area-routing.module';
import { RangeAreaComponent } from './range-area.component';


@NgModule({
  declarations: [RangeAreaComponent],
  imports: [
    CommonModule,
    RangeAreaRoutingModule
  ]
})
export class RangeAreaModule { }
