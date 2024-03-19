import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixedRoutingModule } from './mixed-routing.module';
import { MixedComponent } from './mixed.component';


@NgModule({
  declarations: [MixedComponent],
  imports: [
    CommonModule,
    MixedRoutingModule
  ]
})
export class MixedModule { }
