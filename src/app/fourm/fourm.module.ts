import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourmRoutingModule } from './fourm-routing.module';
import { FourmHomeComponent } from './fourm-home/fourm-home.component';


@NgModule({
  declarations: [
    FourmHomeComponent
  ],
  imports: [
    CommonModule,
    FourmRoutingModule
  ]
})
export class FourmModule { }
