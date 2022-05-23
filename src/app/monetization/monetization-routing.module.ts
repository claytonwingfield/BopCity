import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonetizationHomeComponent } from './monetization-home/monetization-home.component';

const routes: Routes = [
  {
    path: 'monetization',
    component: MonetizationHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonetizationRoutingModule {}
