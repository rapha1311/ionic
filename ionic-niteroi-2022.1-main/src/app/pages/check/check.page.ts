import { Component, OnInit } from '@angular/core';
import { Mes } from './check.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  meses: Mes [] = [
    {descricao: 'Janeiro',   status: false},
    {descricao: 'Fevereiro', status: false},
    {descricao: 'Março',     status: false},
    {descricao: 'Abril',     status: false},
    {descricao: 'Maio',      status: false},
    {descricao: 'Julho',     status: false},
    {descricao: 'Agosto',    status: true},
    {descricao: 'Setembro',  status: false},
    {descricao: 'Outubro',   status: false},
    {descricao: 'Novembro',  status: false},
    {descricao: 'Dezembro',  status: false},
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.meses)
  }

  imprimirNoConsole(){
    for(let i = 0; i < this.meses.length; i++){
      if(this.meses[i].status){
        console.log(this.meses[i].descricao);
      }
    }
  }
  
}
