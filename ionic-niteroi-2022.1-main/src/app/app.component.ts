import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Botão', url: 'botao', icon: 'browsers' },
    { title: 'Navegação', url: 'navegacao', icon: 'boat'},
    { title: 'Alerta', url: 'alerta', icon: 'chatbox'},
    { title: 'Menu de Contexto', url: 'acao', icon: 'bulb-outline'},
    { title: 'Badge', url: 'badge', icon: 'chatbox'},
    { title: 'Card', url: 'card', icon: 'eye-outline'},
    { title: 'Checkbox', url: 'check', icon: 'documents-outline'},
    { title: 'Demo de Interação', url: 'conteudo', icon: 'desktop-outline'},
    { title: 'Chip', url: 'chip', icon: 'id-card'},
    { title: 'data', url: 'data', icon: 'calendar-number'}
  ];

  constructor(private nav: NavController) {}

  irParaHome(){
    this.nav.navigateForward('home');
  } 
}
