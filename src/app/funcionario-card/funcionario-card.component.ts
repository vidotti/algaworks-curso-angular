import { Component, OnInit, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
      .card-body {
        text-transform: uppercase;
        color: blue;
        font-weight: bold;
      }
    `]
})
export class FuncionarioCardComponent {

  @Input('obj') funcionario: any;


  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }



}
