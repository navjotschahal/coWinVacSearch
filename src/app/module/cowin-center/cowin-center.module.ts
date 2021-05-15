import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CowinCenterRoutingModule } from './cowin-center-routing.module';
import { CowinCenterComponent } from './cowin-center.component';
import { SearchCowinCenterComponent } from './search-cowin-center/search-cowin-center.component';
import { NgMaterialModule } from '../common/ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CowinCenterComponent,
    SearchCowinCenterComponent
  ],
  imports: [
    CommonModule,
    CowinCenterRoutingModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CowinCenterModule { }
