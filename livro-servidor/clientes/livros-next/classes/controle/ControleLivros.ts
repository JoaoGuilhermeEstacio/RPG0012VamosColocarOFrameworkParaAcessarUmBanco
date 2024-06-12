import { Livro } from "../modelo/Livro";

const baseUrl = "http://localhost:3030/livros"

export interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

export class ControleLivro {

    public async obterLivros(): Promise<Array<LivroMongo>> {
        const response = await fetch(baseUrl, { method: 'GET' })
        const livros = await response.json()
        return livros;
    }
    public async incluir(livro: Livro) {
        const newLivro: LivroMongo = {
            _id: null,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
        }

        const response = (await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLivro)
        })).ok
        return response
    }

    public async excluir(codigo: string) {
        const response = (await fetch(`${baseUrl}/${codigo}`, { method: "DELETE" })).ok
        return { success: response }
    }
}