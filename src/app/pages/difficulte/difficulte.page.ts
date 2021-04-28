import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulte',
  templateUrl: './difficulte.page.html',
  styleUrls: ['./difficulte.page.scss'],
})
export class DifficultePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public niveau =[
    {title : 'Debutant',  url: '/facile'},
    {title : 'Normal' , url: ''},
    {title : 'Difficile', url: ''},
  ];
}
