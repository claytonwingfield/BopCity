import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourmHomeComponent } from './fourm-home/fourm-home.component';

const routes: Routes = [
  {
    path: 'fourm',
    component: FourmHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourmRoutingModule {}
