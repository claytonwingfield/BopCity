import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedHomeComponent } from './getting-started-home/getting-started-home.component';


@NgModule({
  declarations: [
    GettingStartedHomeComponent
  ],
  imports: [
    CommonModule,
    GettingStartedRoutingModule
  ]
})
export class GettingStartedModule { }
