import { Component } from '@angular/core';

@Component({
  // Definição do componente AppComponent
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propriedade que controla a exibição ou ocultação de detalhes
  showSecret = false;

  // Array que armazena os registros (logs) de eventos
  log = [];

  // Método chamado ao clicar no botão para alternar detalhes
  onToggDetails() {
    // Inverte o valor da propriedade showSecret
    this.showSecret = !this.showSecret;

    // Adiciona um novo registro ao array log
    //this.log.push(this.log.length + 1);
    // Adicionar um novo registro ao array com a data e horário criado
    this.log.push(new Date());
  }
}