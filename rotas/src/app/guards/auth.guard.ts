import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../login/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('AuthGuard')
  if (auth.verificaEstaUsuarioAutenticado()) {
    return true;
  }

  router.navigate(['/login']);

  return false;
};
