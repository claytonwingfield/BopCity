import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnMoreRoutingModule } from './learn-more-routing.module';
import { LearnMoreHomeComponent } from './learn-more-home/learn-more-home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SupportArtistComponent } from './support-artist/support-artist.component';

@NgModule({
  declarations: [
    LearnMoreHomeComponent,
    SubscriptionComponent,
    SupportArtistComponent,
  ],
  imports: [CommonModule, LearnMoreRoutingModule],
  exports: [],
})
export class LearnMoreModule {}
