import { NgModule } from '@angular/core';
import {mapToCanActivateChild, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./guards/auth.guard";
import {cursosGuard} from "./guards/cursos.guard";
import {alunosGuard} from "./guards/alunos.guard";

const routes: Routes = [

  { path: 'cursos',
    loadChildren: () => import('./cursos/curso.module').then(m => m.CursosModule),
    canActivate: [authGuard],
    canActivateChild: [cursosGuard]},
  { path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [authGuard],
    canActivateChild: [alunosGuard]},
  { path: '', component: HomeComponent,
    canActivate: [authGuard]},
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
