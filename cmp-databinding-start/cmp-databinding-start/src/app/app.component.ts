// Importa o decorador 'Component' do módulo '@angular/core'
import { Component } from '@angular/core';

// Decorador do componente Angular
@Component({
  // Seletor CSS usado para identificar a instância desse componente no HTML
  selector: 'app-root',

  // Caminho para o arquivo de template HTML associado a este componente
  templateUrl: './app.component.html',

  // Array de estilos CSS a serem aplicados a este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Array para armazenar os elementos do servidor
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!'}];

  // Método chamado ao adicionar um novo servidor
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    //Adiciona um novo elemento do tipo 'server' ao array 'serverElements'
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // Método chamado ao adicionar um novo blueprint
  onBlueprintAdded (blueprintData: {serverName: string, serverContent: string}) {
    //Adiciona um novo elemento do tipo 'blueprint' ao array 'serverElements'
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent    
    });
  }
}
