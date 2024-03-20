import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { ViewComponent } from './view/view.component';
import { ZoomableTimeseriesComponent } from './zoomable-timeseries/zoomable-timeseries.component';
import { BarBasicComponent } from './bar-basic/bar-basic.component';
import { BarGroupedComponent } from './bar-grouped/bar-grouped.component';
import { BarStackedBarComponent } from './bar-stacked-bar/bar-stacked-bar.component';
import { BarStackedBarsPercentageComponent } from './bar-stacked-bars-percentage/bar-stacked-bars-percentage.component';
import { BarGroupedStackedBarsComponent } from './bar-grouped-stacked-bars/bar-grouped-stacked-bars.component';
import { BarBarWithNegativeValuesComponent } from './bar-bar-with-negative-values/bar-bar-with-negative-values.component';


@NgModule({
  declarations: [BarComponent, ViewComponent, ZoomableTimeseriesComponent, BarBasicComponent, BarGroupedComponent, BarStackedBarComponent, BarStackedBarsPercentageComponent, BarGroupedStackedBarsComponent, BarBarWithNegativeValuesComponent],
  imports: [
    CommonModule,
    BarRoutingModule
  ]
})
export class BarModule { }
