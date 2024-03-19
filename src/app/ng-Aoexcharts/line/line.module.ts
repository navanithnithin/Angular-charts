import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { BasicComponent } from './basic/basic.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [LineComponent, BasicComponent],
  imports: [
    CommonModule,
    LineRoutingModule,
    NgApexchartsModule
  ],
  exports: [BasicComponent]
})
export class LineModule { }
