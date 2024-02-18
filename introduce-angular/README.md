# Este diretório inclui lições realizadas durante o estudo da documetnação Angular. Logo, trata-se dea realização do tutorial ue aborda os conceitos Angular.

## Etapas estudadas:

1. **Ambiente de desenvolvimento local**:
    * identificar a versão do Node.js que o Angular requer (node --version)
    * Instalar a versão correta do node.js Angular
    * Instalar a versão mais recennte do Angular (npm install -g @angular/cli)
    * Instalar e configurar IDE (Ambiente de Desenvolvimento Integrado)


2. **Licão 1: "Hello, Word!"**:
    * Fluxo de trabalho básico:
        * Criar novo projeto angular (ng new + nome-projeto - Ex. ng new first-app)
        * Acessar projeto criado (cd nome-projeto - Ex. cd first-app)
        * Criar e executar o servidor local  (ng serve)  - em (http://localhost:4200)
        * Confirmar se o site padrão aparece no navegador.
    * Fluxo de trabalho para aplicações já iniciadas:
        * Acessar projeto já iniciado (cd nome-projeto - Ex. cd other-app)
        * Testar o aplicativo padrão (npm install)
        - Atenção: o aplicativo deve ser compilado sem erros. 
            Erro de conflito de dependência - incompatibilidade entre versões typescript (possível correção: npm install typescript@">=5.2 <5.4")
        * Criar e executar o servidor local  (ng serve)  - em (http://localhost:4200)
        * Confirmar se o site padrão aparece no navegador.
    * Revisão dos arquivos do projeto

3. **Lição 2 e 3: Criar componente**:
    * Visão conceitual de componentes
    * Criar componentes  (ex: ng generate component home --inline-template --skip-tests), onde home é o componente criado
    * Adicionar o compomente  criado ao layout do app
    * Adicionar recursos ao componente criado

4. **Lição 4: Criar interface**:
    * Visão conceitual de interfaces
    * Criar interfaces (ex.ng generate interface housinglocation ) , onde  housinglocation é a interface criada
    * Adicionar propriedades á interface criada
    * Criar teste para a app

    