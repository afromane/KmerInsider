import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionReponsePage } from './question-reponse.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionReponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionReponsePageRoutingModule {}
