// Importa o decorador 'Component' e a classe 'Component' do módulo '@angular/core'
import { Component } from '@angular/core';

// Decora a classe AppComponent como um componente Angular
@Component({
  // Seletor CSS usado para identificar a instância desse componente no HTML
  selector: 'app-root',

  // Caminho para o arquivo de template HTML associado a este componente
  templateUrl: './app.component.html',

  // Array de estilos CSS a serem aplicados a este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Array que armazena os nomes dos servidores
  servers: string[] = ['Server 1', 'Server 2'];

  // Método chamado ao adicionar um novo servidor
  onAddServer() {
    // Adiciona um novo servidor ao array 'servers'
    this.servers.push('Another Server');
  }

  // Método chamado ao remover um servidor com base no ID
  onRemoveServer(id: number) {
    // Calcula a posição do servidor com base no ID e remove-o do array 'servers'
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}
