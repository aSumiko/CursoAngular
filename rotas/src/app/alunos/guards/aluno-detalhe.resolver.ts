import {ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Aluno} from "../aluno";
import {AlunosService} from "../alunos.service";
import {inject, Injectable} from "@angular/core";

export const alunoDetalheResolver: ResolveFn<Aluno | null> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let id = route.params['id'];
  return inject(AlunosService).getAluno(id);
}
