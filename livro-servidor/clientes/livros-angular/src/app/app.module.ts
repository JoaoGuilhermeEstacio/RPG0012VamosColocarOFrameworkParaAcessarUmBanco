// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe FormsModule

import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { NgFor } from '@angular/common';

@NgModule({
    imports: [
        NgModule,
        BrowserModule,
        FormsModule,
    ],
    declarations: [
      AppComponent,
      LivroListaComponent,
      LivroDadosComponent
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgFor]
})
export class AppModule { }
