import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public menuPages = [
    { title: 'Solo', url: '/list-categorie', icon: 'person-outline' },
    { title: 'Multijoueur', url: '/multijoueurs', icon: 'people-outline' },
    { title: 'Regles', url: '', icon: 'alert-circle-outline' },
    { title: 'A propos de', url: '', icon: 'information-circle-outline' },
    { title: 'Quitter', url: '', icon: 'log-out-outline' },
  ];

}
