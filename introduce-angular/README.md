# Introdução à documentação Angular

Este diretório inclui lições realizadas durante o estudo da documetnação Angular. Logo, trata-se dea realização do tutorial ue aborda os conceitos Angular.

## Etapas estudadas:

1. **Ambiente de desenvolvimento local**:
    * identificar a versão do Node.js que o Angular requer <pre> node --version </pre>
    * Instalar a versão correta do node.js Angular
    * Instalar a versão mais recennte do Angular <pre>npm install -g @angular/cli</pre>
    * Instalar e configurar IDE (Ambiente de Desenvolvimento Integrado)


2. **Licão 00: "Hello, Word!"**:
    * Fluxo de trabalho básico:
        * Criar novo projeto angular <pre>ng new + nome-projeto</pre> 
        * Acessar projeto criado <pre> cd nome-projeto</pre> -
        * Criar e executar o servidor local  <pre>ng serve</pre>  - em (http://localhost:4200)
        * Confirmar se o site padrão aparece no navegador.
    * Fluxo de trabalho para aplicações já iniciadas:
        * Acessar projeto já iniciado <pre>cd nome-projeto</pre>
        * Testar o aplicativo padrão <pre>npm install</pre>
        - Atenção: o aplicativo deve ser compilado sem erros. 
            Erro de conflito de dependência - incompatibilidade entre versões typescript (possível correção: <pre>npm install typescript@">=5.2 <5.4"</pre>
        * Criar e executar o servidor local  <pre>ng serve</pre>  - em (http://localhost:4200)
        * Confirmar se o site padrão aparece no navegador.
    * Revisão dos arquivos do projeto

3. **Lição 01 e 02: Criar componente**:
    * Visão conceitual de componentes
    * Criar componentes  ex: <pre>ng generate component home --inline-template --skip-tests</pre>, onde home é o componente criado
    * Add o compomente  criado ao layout do app
    * Add recursos ao componente criado

4. **Lição 03: Criar interface**:
    * Visão conceitual de interfaces
    * Criar interfaces ex. <pre>ng generate interface housinglocation </pre> , onde  housinglocation é a interface criada
    * Add propriedades á interface criada
    * Criar teste para a app

5. **Lição 04: Incluir parâmetro de entrada no componente**:
    * Visão conceitual de entradas
    * Importar Input decorator: <pre>import { Component, Input } from '@angular/core';</pre>
    * Add Input property: <pre>@Input() </pre>

6. **Lição 05: Adicionar uma Property binding (associação de propriedade) ao componente template**:
    * Visão conceitual de associação de propriedades
    * Add property binding <pre>**[** atributo **]** **=** **"** valor **"**</pre> 

7. **Lição 06: Adicionar uma Interpolation (interpolação) ao componente template**:
    * Visão conceitual de interpolação
    * Add interpolation <pre>**{{** expressão **}}**</pre> 

8. **Lição 07: Usar ngFor para listar objetos no componente**:
    * Visão conceitual de *ngFor
    * Add ngFor diretiva <pre>*ngFor = "expressão"</pre>  

9. **Lição 08: Criar Serviços em Angular e Usar Injeção de Dependência**:
    * Visão conceitual de Angular services e de Dependecy Inject
    * Crir um serviço <pre>ng generate service housing --skip-tests</pre>, onde housing é o serviço criado
    * Add dados estáticos no serviço criado
    * Injetar dependência no serviço criado 
        * Importar: <pre>import { Component, inject } from '@angular/core';</pre>  
        * <pre> housingLocationList: HousingLocation[] = [];
                housingService: HousingService = inject(HousingService);

                constructor() {
                this.housingLocationList = this.housingService.getAllHousingLocations();
                }               
      </pre>

10. **Lição 09 e 10: Add rotas ao app**:
    * Visão conceitual de roteamento
    * Criar componente padrão  <pre>ng generate component details --inline-template --skip-tests</pre> onde detais é o component padrão criado
    * Criar um arquivo denominado **routes.ts** (Arquivo de definição das rotas)
    * Add roteamento:
        <pre>import { provideRouter } from '@angular/router';
             import routeConfig from './app/routes';
        </pre> 
    
     ** Atualizar chamada para **bootstrapApplication** incluindo a configuração de roteamento
        <pre>bootstrapApplication(AppComponent,
                {
                    providers: [
                    provideProtractorTestingSupport(),
                    provideRouter(routeConfig)
                    ]
                }
                ).catch(err => console.error(err));
        </pre>
    * Add rota ao componente criado
    * Visão conceitual de roteamento com parâmetro
    * routerLink diretiva <pre> <a>[routerLink]="['/details', housingLocation.id]">Texto exibido </a></pre>
    * Import RouterLink e RouterOutlet from '@angular/router'
    * Obter parâmetro da rota
    * Add navegação 

11. **Lição 11: Add formulário ao app**:
    * Add método para enviar dados
    * Add funções de formulário
    <pre>import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';</pre>
    * Add marcações de forumlário
    * Testar formulário

12. **Lição 12: Add recurso de pesquisa**:
    * Add evento
    * Implementar função de manipular eventos
    
13. **Lição 13: Add comunicação HTTP  ao app**:
    * Configurar servidor JSON
        * Instalar jason-server a partir do npm:  
            <pre>npm install -g json-server</pre> 
        * Após configurado use este comando para testar:
        <pre>json-server --watch db.json</pre>
    * Atualizar o serviço para usar o servidor web em vez do array local
    * Atualizar os componentes para usar chamadas assíncronas 


