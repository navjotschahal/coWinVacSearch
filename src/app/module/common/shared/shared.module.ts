import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMaterialModule } from '../ng-material/ng-material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
