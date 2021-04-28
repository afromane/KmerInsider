import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DifficilePageRoutingModule } from './difficile-routing.module';

import { DifficilePage } from './difficile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DifficilePageRoutingModule
  ],
  declarations: [DifficilePage]
})
export class DifficilePageModule {}
