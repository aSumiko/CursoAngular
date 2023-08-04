import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { CursosService} from "../cursos/cursos.service";
import {CursosComponent} from "./cursos.component";


@NgModule({
  declarations: [
    CursosComponent
  ],
  exports: [CursosComponent],
  imports: [CommonModule],
  providers: [CursosService]
})
export class CursosModule { }
