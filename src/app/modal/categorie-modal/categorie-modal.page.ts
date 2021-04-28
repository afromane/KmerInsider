import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categorie-modal',
  templateUrl: './categorie-modal.page.html',
  styleUrls: ['./categorie-modal.page.scss'],
})
export class CategorieModalPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }
  async dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
