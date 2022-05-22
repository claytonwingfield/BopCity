import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnMoreRoutingModule } from './learn-more-routing.module';
import { LearnMoreHomeComponent } from './learn-more-home/learn-more-home.component';

@NgModule({
  declarations: [LearnMoreHomeComponent],
  imports: [CommonModule, LearnMoreRoutingModule],
  exports: [],
})
export class LearnMoreModule {}
