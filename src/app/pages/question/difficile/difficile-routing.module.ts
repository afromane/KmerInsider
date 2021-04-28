import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DifficilePage } from './difficile.page';

const routes: Routes = [
  {
    path: '',
    component: DifficilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DifficilePageRoutingModule {}
