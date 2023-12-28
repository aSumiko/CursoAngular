import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CrudService } from '../shared/crud-service';
import { Curso } from './curso';
import { CursosService } from './cursos.service';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso>{

  constructor(protected http2: HttpClient) {
    super(http2, `${environment.API}cursos`);
  }
}
