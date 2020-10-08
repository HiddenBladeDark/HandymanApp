import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportingComponent } from './component/reporting/reporting.component'
import { JobhourComponent } from './component/jobhour/jobhour.component'
const routes: Routes = [
  {
    path:'reporting',
    component:ReportingComponent,
  },
  {
    path:'jobhour',
    component:JobhourComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
