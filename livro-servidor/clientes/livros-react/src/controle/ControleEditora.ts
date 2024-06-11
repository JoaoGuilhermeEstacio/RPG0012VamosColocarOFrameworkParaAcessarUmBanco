import { Editora } from "../modelo/Editora";

var editoras: Array<Editora> = [
    { codEditora: 0, nome: "Alta Books" },
    { codEditora: 1, nome: "Pearson" },
    { codEditora: 2, nome: "Addison Wesley" }
]

export class ControleEditora {
    public getNomeEditora(codEditora: number) {
        return editoras.filter((editora)=>editora.codEditora === codEditora)[0].nome
    }

    public getEditoras(): Array<Editora> {
        return editoras;
    }
}