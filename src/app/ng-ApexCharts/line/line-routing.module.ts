import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { LineComponent } from './line.component';
import { LineWithDataLabelsComponent } from './line-with-data-labels/line-with-data-labels.component';
import { ViewComponent } from './view/view.component';
import { LineChartWithAnnotationsComponent } from './line-chart-with-annotations/line-chart-with-annotations.component';
import { SyncingChartsComponent } from './syncing-charts/syncing-charts.component';
import { ZoomableTimeseriesComponent } from './zoomable-timeseries/zoomable-timeseries.component';

const routes: Routes = [
    { path: '', component: ViewComponent},
    { path: '/view', component: ViewComponent},
    { path: '/basic', component: BasicComponent},
    { path: '/line-with-data-labels', component: LineWithDataLabelsComponent},
    { path: '/line-chart-with-annotations', component: LineChartWithAnnotationsComponent},
    { path: '/syncing-charts', component: SyncingChartsComponent},
    { path: '/zoomable-timeseries', component: ZoomableTimeseriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
