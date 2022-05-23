import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryFreeHomeComponent } from './try-free-home/try-free-home.component';

const routes: Routes = [
  {
    path: 'try-free',
    component: TryFreeHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TryFreeRoutingModule {}
