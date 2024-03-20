import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineRoutingModule } from './line-routing.module';
import { LineComponent } from './line.component';
import { BasicComponent } from './basic/basic.component';
import { LineWithDataLabelsComponent } from './line-with-data-labels/line-with-data-labels.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ViewComponent } from './view/view.component';
import { ZoomableTimeseriesComponent } from './zoomable-timeseries/zoomable-timeseries.component';
import { LineChartWithAnnotationsComponent } from './line-chart-with-annotations/line-chart-with-annotations.component';
import { SyncingChartsComponent } from './syncing-charts/syncing-charts.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineBrushChartComponent } from './line-brush-chart/line-brush-chart.component';

@NgModule({
  declarations: [LineComponent, BasicComponent, LineWithDataLabelsComponent, ViewComponent, ZoomableTimeseriesComponent, LineChartWithAnnotationsComponent, SyncingChartsComponent, LineBrushChartComponent],
  imports: [
    CommonModule,
    LineRoutingModule,
    NgApexchartsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  exports: [LineComponent, BasicComponent]

})
export class LineModule { }
