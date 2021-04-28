import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  public appMenu =[
    {title : 'Accueil',url:'/home',icon:'home-outline'},
    {title : 'Partager',url:'',icon:'share-social-outline'},
    {title : 'Parametre',url: '',icon:'settings-outline'},
    {title : 'Version Premuim',url:'',icon:'push-outline'},
    {title : 'Admin',url:'/dashboard',icon:''},
  ];
  
  constructor() {}
}
