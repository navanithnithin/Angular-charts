import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunnelRoutingModule } from './funnel-routing.module';
import { FunnelComponent } from './funnel.component';


@NgModule({
  declarations: [FunnelComponent],
  imports: [
    CommonModule,
    FunnelRoutingModule
  ]
})
export class FunnelModule { }
