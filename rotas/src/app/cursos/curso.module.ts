import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from "./cursos.service";
import { CursoRoutingModule } from "./curso.routing.module";


@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent

  ],
  providers: [CursosService],

})

export class CursosModule { }
