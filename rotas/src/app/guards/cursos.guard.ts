import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../login/auth.service";

export const cursosGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  console.log('guarda de rota filha')

  return true;
};
