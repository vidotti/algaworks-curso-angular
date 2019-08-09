import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  teste = 'Teste';
  nome = 'Victor';
  adicionado = false;
  @Output('criado') funcionarioAdicionado = new EventEmitter();


  adicionar(nome: string) {

    this.nome = nome;
    this.adicionado = true;
  //   console.log(`Adicionando ${this.nome}`);
  //   // console.log('Adicionando ' + this.nome);

    //  const numero = Math.round(Math.random() * 100)
    //  this.nome = 'João' + numero;
    const funcionario = {
        id: ++this.ultimoId,
        nome: this.teste

      };

    this.funcionarioAdicionado.emit(funcionario);

   }
}
