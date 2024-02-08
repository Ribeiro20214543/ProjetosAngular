// Definição da classe Recipe
export class Recipe {

  // Propriedades públicas da classe
  public name: string;
  public description: string;
  public imagePath: string;

  // Construtor da classe que aceita parâmetros e os atribui às propriedades da classe
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}