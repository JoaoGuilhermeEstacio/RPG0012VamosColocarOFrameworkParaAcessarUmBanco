var editoras = [
    { codEditora: 1, nome: "Alta Books" },
    { codEditora: 2, nome: "Bookman" },
    { codEditora: 3, nome: "Addison Wesley" },
]

export class ControleEditora {
    getNomeEditora(codEditora) {
        return editoras.filter((editora)=>editora.codEditora === codEditora)[0].nome
    }

    getEditoras() {
        return editoras;
    }
}