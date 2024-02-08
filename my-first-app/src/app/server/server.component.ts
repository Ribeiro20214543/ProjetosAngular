import { Component } from "@angular/core";

@Component({
    // Seletor do componente, utilizado em templates HTML para identificar este componente
    selector: 'app-server',

    // Caminho para o template HTML externo associado a este componente
    templateUrl: './server.component.html',

    // Define a classe CSS chamada 'online' com a cor do texto branca.
    styles: ['.online { color: white;} ']
})
export class ServerComponent {
    // Propriedade que armazena o ID do servidor
    serverId = 10;

    // Propriedade que armazena o status do servidor
    serverStatus = "offline";


    constructor() {
        // Inicializa a propriedade serverStatus com base em uma condição aleatória
        // Se Math.random() gerar um número maior que 0.5, o status será 'online', caso contrário, será 'offline'
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // Método que retorna o status do servidor
    getServerStatus() {
        return this.serverStatus;
    }

    // Método que retorna uma cor com base no status do servidor
    getColor() {
        // Se o status do servidor for 'online', retorna a cor verde; caso contrário, retorna a cor vermelha
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}


