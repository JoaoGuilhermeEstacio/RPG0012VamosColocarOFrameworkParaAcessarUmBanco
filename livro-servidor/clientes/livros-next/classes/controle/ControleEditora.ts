import { Editora } from "../modelo/Editora";

var editoras: Array<Editora> = [
    { codEditora: 1, nome: "Alta Books" },
    { codEditora: 2, nome: "Bookman" },
    { codEditora: 3, nome: "Addison Wesley" },
    { codEditora: 4, nome: "Pearson" },
    
]

export class ControleEditora {
    public getNomeEditora(codEditora: number) {
        return editoras.filter((editora)=>editora.codEditora === codEditora)[0].nome
    }

    public getEditoras(): Array<Editora> {
        return editoras;
    }
}