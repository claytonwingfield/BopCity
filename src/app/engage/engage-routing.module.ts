import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngageHomeComponent } from './engage-home/engage-home.component';

const routes: Routes = [
  {
    path: 'engage',
    component: EngageHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngageRoutingModule {}
