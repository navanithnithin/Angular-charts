import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineComponent } from './ng-ApexCharts/line/line.component';
import { BasicComponent } from './ng-ApexCharts/line/basic/basic.component';
import { LineModule } from './ng-ApexCharts/line/line.module';
import { LineWithDataLabelsComponent } from './ng-ApexCharts/line/line-with-data-labels/line-with-data-labels.component';
import { ViewComponent } from './ng-ApexCharts/line/view/view.component';
import { BarComponent } from './ng-ApexCharts/bar/bar.component';
import { BarBasicComponent } from './ng-ApexCharts/bar/bar-basic/bar-basic.component';
import { BarBarWithNegativeValuesComponent } from './ng-ApexCharts/bar/bar-bar-with-negative-values/bar-bar-with-negative-values.component';
import { BarGroupedStackedBarsComponent } from './ng-ApexCharts/bar/bar-grouped-stacked-bars/bar-grouped-stacked-bars.component';
import { BarGroupedComponent } from './ng-ApexCharts/bar/bar-grouped/bar-grouped.component';
import { BarStackedBarComponent } from './ng-ApexCharts/bar/bar-stacked-bar/bar-stacked-bar.component';
import { BarStackedBarsPercentageComponent } from './ng-ApexCharts/bar/bar-stacked-bars-percentage/bar-stacked-bars-percentage.component';
import { LineChartWithAnnotationsComponent } from './ng-ApexCharts/line/line-chart-with-annotations/line-chart-with-annotations.component';
import { SyncingChartsComponent } from './ng-ApexCharts/line/syncing-charts/syncing-charts.component';
import { ZoomableTimeseriesComponent } from './ng-ApexCharts/line/zoomable-timeseries/zoomable-timeseries.component';

const routes: Routes = [
  {
    path: '', component: LineComponent,
    children: [
      { path: '', component: ViewComponent },
      { path: 'basic', component: BasicComponent},
      { path: 'line-with-data-labels', component: LineWithDataLabelsComponent},
      { path: 'line-chart-with-annotations', component: LineChartWithAnnotationsComponent},
      { path: 'syncing-charts', component: SyncingChartsComponent},
      { path: 'zoomable-timeseries', component: ZoomableTimeseriesComponent},
    ]
  },
  {
    path: 'line', component: LineComponent,
    children: [
      { path: 'view', component: ViewComponent},
      { path: 'basic', component: BasicComponent},
      { path: 'line-with-data-labels', component: LineWithDataLabelsComponent},
      { path: 'line-chart-with-annotations', component: LineChartWithAnnotationsComponent},
      { path: 'syncing-charts', component: SyncingChartsComponent},
      { path: 'zoomable-timeseries', component: ZoomableTimeseriesComponent},
    ]
  },
  {
    path: 'bar', component: BarComponent,
    children: [
      { path: '', component: ViewComponent },
      { path: 'view', component: ViewComponent },
      { path: 'bar-basic', component: BarBasicComponent },
      { path: 'bar-grouped', component: BarGroupedComponent },
      { path: 'bar-grouped-stacked-bars', component: BarGroupedStackedBarsComponent },
      { path: 'bar-stacked-bar', component: BarStackedBarComponent },
      { path: 'bar-stacked-bars-percentage', component: BarStackedBarsPercentageComponent },
      { path: 'bar-with-negative-values', component: BarBarWithNegativeValuesComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
