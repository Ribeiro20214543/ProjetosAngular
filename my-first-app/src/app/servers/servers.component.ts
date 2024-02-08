import { Component } from '@angular/core';

@Component({
  // Seletor do componente, utilizado em templates HTML para identificar este componente
  selector: 'app-servers',

  // Caminho para o template HTML externo associado a este componente
  templateUrl: './servers.component.html',

  // Estilos CSS externos associados a este componente
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  // Variável que controla se é permitida a criação de um novo servidor
  allowNewServer = false;

  // Mensagem de status de criação do servidor
  serverCreationStatus = 'No server was created!';

  // Nome padrão do servidor
  serverName = 'TestServer';

  // Flag indicando se um servidor foi criado
  serverCreated = false;

  // Array de servidores iniciais
  servers = ['Testserver', 'Testserver 2']

  // Construtor do componente
  constructor() {
    // Após 2 segundos, permite a criação de um novo servidor
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  // Método chamado ao clicar no botão de criar servidor
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);//Atribui ao servidor criado o nome dado pelo usuário
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName; // Retorno ao usuário
  }

  // Método chamado ao atualizar o nome do servidor
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
