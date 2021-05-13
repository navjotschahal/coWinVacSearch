import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CowinCenterRoutingModule } from './cowin-center-routing.module';
import { CowinCenterComponent } from './cowin-center.component';
import { SearchCowinCenterComponent } from './search-cowin-center/search-cowin-center.component';


@NgModule({
  declarations: [
    CowinCenterComponent,
    SearchCowinCenterComponent
  ],
  imports: [
    CommonModule,
    CowinCenterRoutingModule
  ]
})
export class CowinCenterModule { }
