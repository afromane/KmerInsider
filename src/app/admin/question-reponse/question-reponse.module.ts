import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionReponsePageRoutingModule } from './question-reponse-routing.module';

import { QuestionReponsePage } from './question-reponse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionReponsePageRoutingModule
  ],
  declarations: [QuestionReponsePage]
})
export class QuestionReponsePageModule {}
