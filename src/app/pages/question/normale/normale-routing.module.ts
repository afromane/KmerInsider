import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalePage } from './normale.page';

const routes: Routes = [
  {
    path: '',
    component: NormalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormalePageRoutingModule {}
