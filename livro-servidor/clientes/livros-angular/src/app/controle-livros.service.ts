import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  public livros: Array<Livro> = [
    {
      titulo: "Use a Cabeça: Java",
      resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
      autores: ["Bert Bates", "Kathy Sierra"],
      codEditora: 0,
      codigo: 0
    },
    {
      titulo: "Java, como Programador",
      resumo: "Milhões de alunos e profissionais aprendem programação e desenvolvimento de software com os livros Deitel",
      autores: ["Paul Deitel", "Harvey Deitel"],
      codEditora: 1,
      codigo: 1
    },
    {
      titulo: "Core Java for the Impatient",
      resumo: `Readers familiar with Horstmann's original, two-volume "Core Java" books who are looking for a comprehensive, bt condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries. `,
      autores: ["Cay Horstmann"],
      codEditora: 2,
      codigo: 2
    }
  ]


  constructor() { }


  public obterLivros(): Array<Livro> {
    return this.livros;
  }
  public incluir(livro: Livro) {
    const maxCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = this.livros.length > 0 ? maxCodigo + 1 : 1;
    this.livros.push(livro)
  }

  public excluir(codigo: number) {
    let index = this.livros.findIndex(livro => livro.codigo === codigo)
    if (index > -1) {
      this.livros.splice(index, 1)
    }
  }
}
