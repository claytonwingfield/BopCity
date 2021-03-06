import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInHomeComponent } from './log-in-home/log-in-home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LogInHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInRoutingModule {}
