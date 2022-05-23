import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedHomeComponent } from './getting-started-home/getting-started-home.component';

const routes: Routes = [
  {
    path: 'getting-started',
    component: GettingStartedHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingStartedRoutingModule {}
