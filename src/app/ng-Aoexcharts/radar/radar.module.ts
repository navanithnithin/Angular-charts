import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadarRoutingModule } from './radar-routing.module';
import { RadarComponent } from './radar.component';


@NgModule({
  declarations: [RadarComponent],
  imports: [
    CommonModule,
    RadarRoutingModule
  ]
})
export class RadarModule { }
