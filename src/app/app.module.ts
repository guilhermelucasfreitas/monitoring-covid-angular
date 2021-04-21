import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidService } from './services/covid.service';
import { TableCovidComponent } from './table-covid/table-covid.component';

@NgModule({
  declarations: [
    AppComponent,
    TableCovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
