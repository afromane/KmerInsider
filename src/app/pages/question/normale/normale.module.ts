import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormalePageRoutingModule } from './normale-routing.module';

import { NormalePage } from './normale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormalePageRoutingModule
  ],
  declarations: [NormalePage]
})
export class NormalePageModule {}
