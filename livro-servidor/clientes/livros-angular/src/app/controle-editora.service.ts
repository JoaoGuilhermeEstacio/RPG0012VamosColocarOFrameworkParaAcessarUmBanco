import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    { codEditora: 0, nome: "Alta Books" },
    { codEditora: 1, nome: "Pearson" },
    { codEditora: 2, nome: "Addison Wesley" }
  ]

  constructor() { }

  public getEditoras(): Array<Editora> {
    return this.editoras;
  }

  public getNomeEditora(codEditora: number) {
    return this.editoras.filter((editora) => editora.codEditora === codEditora)[0].nome
  }

}
