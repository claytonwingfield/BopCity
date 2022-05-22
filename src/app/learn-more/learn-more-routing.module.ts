import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnMoreHomeComponent } from './learn-more-home/learn-more-home.component';

const routes: Routes = [
  {
    path: 'learn-more',
    component: LearnMoreHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnMoreRoutingModule {}
