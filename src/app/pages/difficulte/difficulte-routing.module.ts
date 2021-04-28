import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DifficultePage } from './difficulte.page';

const routes: Routes = [
  {
    path: '',
    component: DifficultePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DifficultePageRoutingModule {}
