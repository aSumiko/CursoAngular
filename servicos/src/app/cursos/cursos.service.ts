import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class CursosService{

  emtitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();
  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap']
  constructor() {
    console.log('CursosService');
  }
  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso)
    this.emtitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
