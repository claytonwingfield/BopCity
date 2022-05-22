import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonetizationRoutingModule } from './monetization-routing.module';
import { MonetizationHomeComponent } from './monetization-home/monetization-home.component';


@NgModule({
  declarations: [
    MonetizationHomeComponent
  ],
  imports: [
    CommonModule,
    MonetizationRoutingModule
  ]
})
export class MonetizationModule { }
