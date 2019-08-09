import { Component } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})


export class AppComponent {

  nome = 'Victor';
  adicionado = false;


  adicionar(nome: string) {

    this.nome = nome;
    this.adicionado = true;
  //   console.log(`Adicionando ${this.nome}`);
  //   // console.log('Adicionando ' + this.nome);

    //  const numero = Math.round(Math.random() * 100)
    //  this.nome = 'João' + numero;
   }




}
