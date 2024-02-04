import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista as marcas', url: 'cadastro/marca', icon: 'mail' },      
    { title: 'Cadastro/Edição', url: 'nova-marca', icon: 'paper-plane' },
    
  
   
  ];
  
  constructor() {}
}
