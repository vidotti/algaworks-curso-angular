import { Component } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})


export class AppComponent {

  ultimoId = 0;
  teste = 'Teste';
  nome = 'Victor';
  adicionado = false;
  funcionarios = [];

  adicionar(nome: string) {

    this.nome = nome;
    this.adicionado = true;
  //   console.log(`Adicionando ${this.nome}`);
  //   // console.log('Adicionando ' + this.nome);

    //  const numero = Math.round(Math.random() * 100)
    //  this.nome = 'João' + numero;
      this.funcionarios.push({
        id: ++this.ultimoId,
        nome: this.teste

      });



   }




}
