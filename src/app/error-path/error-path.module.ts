import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPathRoutingModule } from './error-path-routing.module';
import { ErrorHomeComponent } from './error-home/error-home.component';


@NgModule({
  declarations: [
    ErrorHomeComponent
  ],
  imports: [
    CommonModule,
    ErrorPathRoutingModule
  ]
})
export class ErrorPathModule { }
