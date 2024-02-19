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
    * Add property binding <pre><componente>**[** atributo **]** **=** **"** valor **"**</componente></pre> 

7. **Lição 06: Adicionar uma Interpolation (interpolação) ao componente template**:
    * Visão conceitual de interpolação
    * Add interpolation <pre><componente>**{{** expressão **}}**</componente> </pre>


8. **Lição 07: Usar *ngFor para listar objetos no ao componente**:
    * Visão conceitual de *ngFor
    * Add  ngFor diretiva <pre><componente>*ngFor = "expressão"</componente> </pre>