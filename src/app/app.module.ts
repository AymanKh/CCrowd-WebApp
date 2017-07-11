import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SemiCircleBarComponent } from './semi-circle-bar/semi-circle-bar.component';
import { AppHeaderComponent } from './app-header/app-header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SemiCircleBarComponent,
    AppHeaderComponent,
    BubbleChartComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
