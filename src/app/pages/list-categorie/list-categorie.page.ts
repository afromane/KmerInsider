import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.page.html',
  styleUrls: ['./list-categorie.page.scss'],
})
export class ListCategoriePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private pathImg = "../../../assets/images/categorie/";
  public listCategories =[
    {title : 'Culture genreal', img :this.pathImg + 'plat5.jpg', url: '/difficulte'},
    {title : 'Histoire' ,img : this.pathImg + 'plat5.jpg', url: '/difficulte'},
    {title : 'Geographie' ,img : this.pathImg + 'plat5.jpg', url: '/difficulte'},
    {title : 'ECM',img : this.pathImg + 'plat5.jpg', url: '/difficulte'},
  ];

}
