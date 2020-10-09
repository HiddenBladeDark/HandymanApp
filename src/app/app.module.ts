import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportingComponent } from './component/reporting/reporting.component';
import { HeadersComponent } from './component/headers/headers.component';
import { JobhourComponent } from './component/jobhour/jobhour.component';
// forms
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// datepicker
import { MyDatePickerModule } from 'mydatepicker';
// peticiones
import { HttpClientModule, HttpClient } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    ReportingComponent,
    HeadersComponent,
    JobhourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,       
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
