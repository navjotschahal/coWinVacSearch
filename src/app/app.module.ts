import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './module/common/components/components.module';

import { SharedModule } from './module/common/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
