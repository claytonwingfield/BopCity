import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreTrendingRoutingModule } from './explore-trending-routing.module';
import { ExploreTrendingHomeComponent } from './explore-trending-home/explore-trending-home.component';


@NgModule({
  declarations: [
    ExploreTrendingHomeComponent
  ],
  imports: [
    CommonModule,
    ExploreTrendingRoutingModule
  ]
})
export class ExploreTrendingModule { }
