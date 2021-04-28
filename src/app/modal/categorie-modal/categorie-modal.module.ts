import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieModalPageRoutingModule } from './categorie-modal-routing.module';

import { CategorieModalPage } from './categorie-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieModalPageRoutingModule
  ],
  declarations: [CategorieModalPage]
})
export class CategorieModalPageModule {}
