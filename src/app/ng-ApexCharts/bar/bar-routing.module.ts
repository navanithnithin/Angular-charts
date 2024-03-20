import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { BarBasicComponent } from './bar-basic/bar-basic.component';
import { BarGroupedComponent } from './bar-grouped/bar-grouped.component';
import { BarGroupedStackedBarsComponent } from './bar-grouped-stacked-bars/bar-grouped-stacked-bars.component';
import { BarStackedBarComponent } from './bar-stacked-bar/bar-stacked-bar.component';
import { BarStackedBarsPercentageComponent } from './bar-stacked-bars-percentage/bar-stacked-bars-percentage.component';
import { BarBarWithNegativeValuesComponent } from './bar-bar-with-negative-values/bar-bar-with-negative-values.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: '/view', component: ViewComponent },
  { path: '/bar-basic', component: BarBasicComponent },
  { path: '/bar-grouped', component: BarGroupedComponent },
  { path: '/bar-grouped-stacked-bars', component: BarGroupedStackedBarsComponent },
  { path: '/bar-stacked-bar', component: BarStackedBarComponent },
  { path: '/bar-stacked-bars-percentage', component: BarStackedBarsPercentageComponent },
  { path: '/bar-with-negative-values', component: BarBarWithNegativeValuesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
