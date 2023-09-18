import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../login/auth.service";
import {Observable} from "rxjs";
import { of } from "rxjs";

export const alunosGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('AlunosGuard para rotas filhas')

  if (state.url.includes('editar')){
    //alert('Usuário sem acesso')
    //return of(false);
  }

  return true;
};
