import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseUrl = "http://localhost:3030/livros"

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  constructor() { }

  public async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseUrl, { method: 'GET' })
    const livrosResponse: LivroMongo[] = await response.json()
    const livros: Livro[] = livrosResponse.map(({ _id, autores, codEditora, resumo, titulo }) => {
      return { titulo, resumo, codEditora, autores, codigo: _id as string }
    });
    return livros
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
