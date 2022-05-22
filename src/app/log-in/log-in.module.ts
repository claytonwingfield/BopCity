import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInHomeComponent } from './log-in-home/log-in-home.component';


@NgModule({
  declarations: [
    LogInHomeComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule
  ]
})
export class LogInModule { }
