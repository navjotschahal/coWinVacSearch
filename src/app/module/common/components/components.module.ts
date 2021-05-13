import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { MenuItemComponent } from 'src/app/shared/components/menu-item/menu-item.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    MenuItemComponent
  ]
})
export class ComponentsModule { }
