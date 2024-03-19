import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgApexchartComponent } from './ng-Aoexcharts/ng-apexchart/ng-apexchart.component';

const routes: Routes = [
  { path: '', component: NgApexchartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
