import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieModalPage } from './categorie-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieModalPageRoutingModule {}
