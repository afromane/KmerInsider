import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CategorieModalPage} from  '../../modal/categorie-modal/categorie-modal.page';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  /*
  Foncion permettant l'affichage de la page CategorieModal comme modal
  */
  async showModal() {
    const modal = await this.modalController.create({
      component: CategorieModalPage
    });
    return await modal.present();
  }

}
