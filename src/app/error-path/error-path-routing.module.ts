import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorHomeComponent } from './error-home/error-home.component';

const routes: Routes = [
  {
    path: '**',
    component: ErrorHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPathRoutingModule {}
