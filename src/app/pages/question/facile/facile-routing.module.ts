import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacilePage } from './facile.page';

const routes: Routes = [
  {
    path: '',
    component: FacilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilePageRoutingModule {}
