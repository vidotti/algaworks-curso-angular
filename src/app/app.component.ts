import { Component } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})


export class AppComponent {

  nome = 'Victor';

  adicionar(nome: string) {

    this.nome = nome;
  //   console.log(`Adicionando ${this.nome}`);
  //   // console.log('Adicionando ' + this.nome);

     const numero = Math.round(Math.random() * 100)
     this.nome = 'João' + numero;
   }

   alterarNome(event: any) {

     console.log(event.target.value);
     this.nome = event.target.value;
   }



}
