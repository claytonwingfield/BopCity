import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngageRoutingModule } from './engage-routing.module';
import { EngageHomeComponent } from './engage-home/engage-home.component';

@NgModule({
  declarations: [EngageHomeComponent],
  imports: [CommonModule, EngageRoutingModule],
})
export class EngageModule {}
