import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LivroListaComponent } from "./livro-lista/livro-lista.component";
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,RouterLink]
})
export class AppComponent {
  title = 'livros-angular';
}
