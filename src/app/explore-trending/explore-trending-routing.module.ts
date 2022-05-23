import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreTrendingHomeComponent } from './explore-trending-home/explore-trending-home.component';

const routes: Routes = [
  {
    path: 'explore-trending',
    component: ExploreTrendingHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreTrendingRoutingModule {}
