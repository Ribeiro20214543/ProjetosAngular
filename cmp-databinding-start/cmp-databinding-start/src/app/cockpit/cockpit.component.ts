// Importa os componentes necessários do Angular
import { Component, OnInit, EventEmitter, Output, ViewChild,ElementRef } from '@angular/core';

// Define o componente com o seletor 'app-cockpit'
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  // Declaração de eventos EventEmitter para criar servidores e blueprints
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // Variáveis para armazenar o nome e conteúdo do novo servidor
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // Construtor do componente
  constructor() { }

  // Método executado quando o componente é inicializado
  ngOnInit() { }

  // Método chamado ao adicionar um novo servidor
  onAddServer(nameInput: HTMLInputElement) {
    // Emite um evento com os detalhes do novo servidor
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // Método chamado ao adicionar um novo blueprint
  onAddBlueprint(nameInput: HTMLInputElement) {
    // Emite um evento com os detalhes do novo blueprint
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
