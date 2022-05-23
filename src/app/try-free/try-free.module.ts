import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TryFreeRoutingModule } from './try-free-routing.module';
import { TryFreeHomeComponent } from './try-free-home/try-free-home.component';


@NgModule({
  declarations: [
    TryFreeHomeComponent
  ],
  imports: [
    CommonModule,
    TryFreeRoutingModule
  ]
})
export class TryFreeModule { }
