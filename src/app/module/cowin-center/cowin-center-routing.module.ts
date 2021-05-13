import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowinCenterComponent } from './cowin-center.component';

const routes: Routes = [{ path: '', component: CowinCenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CowinCenterRoutingModule { }
