import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnRoutingModule } from './column-routing.module';
import { ColumnComponent } from './column.component';


@NgModule({
  declarations: [ColumnComponent],
  imports: [
    CommonModule,
    ColumnRoutingModule
  ]
})
export class ColumnModule { }
