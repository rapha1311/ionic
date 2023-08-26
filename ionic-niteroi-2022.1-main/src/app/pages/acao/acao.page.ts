import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActionSheetController, AlertController } from '@ionic/angular';
// import { emitWarning } from 'process';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  constructor(private action: ActionSheetController,
              private alert: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlerta(mensagem: string){
    const alerta = await this.alert.create({
      header: 'Info',
      message: `${mensagem} executado com sucesso!`,
      buttons: ['ok']
    });

    alerta.present();
  }

  
async emitir(){
  const actionCotroller = await this.action.create({
    header: 'Fotos',
    buttons: [
      {
        text: 'Apagar',
        icon: 'trash',
        handler: () => {console.log(`clicou em apagar`)}
      },
      {
        text: 'Compartilhar',
        icon: 'share',
        handler: () => (this.mostrarAlerta)
      },
      {
        text: 'Exibir',
        icon: 'play',
        handler: () => {console.log(`clicou em exibir`)}
      }
    ]
  })
}

}


