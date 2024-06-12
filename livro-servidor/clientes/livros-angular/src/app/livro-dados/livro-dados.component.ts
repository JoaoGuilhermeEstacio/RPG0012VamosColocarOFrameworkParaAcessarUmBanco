import { Component } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {
  livro: Livro;
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { this.livro = new Livro('', 0, '', '', [this.autoresForm]) }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.livro.codEditora = Number(this.livro.codEditora)
    this.servLivros.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    })
  }

}
