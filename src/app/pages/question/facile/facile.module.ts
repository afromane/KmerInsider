import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacilePageRoutingModule } from './facile-routing.module';

import { FacilePage } from './facile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacilePageRoutingModule
  ],
  declarations: [FacilePage]
})
export class FacilePageModule {}
