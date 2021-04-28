import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DifficultePageRoutingModule } from './difficulte-routing.module';

import { DifficultePage } from './difficulte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DifficultePageRoutingModule
  ],
  declarations: [DifficultePage]
})
export class DifficultePageModule {}
