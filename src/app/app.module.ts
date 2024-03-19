import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandleStickComponent } from './ng-Aoexcharts/candle-stick/candle-stick.component';
import { BoxAndwhiskersComponent } from './ng-Aoexcharts/box-andwhiskers/box-andwhiskers.component';


@NgModule({
  declarations: [
    AppComponent,
    CandleStickComponent,
    BoxAndwhiskersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
