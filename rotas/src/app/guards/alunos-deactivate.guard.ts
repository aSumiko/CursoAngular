import {CanDeactivateFn} from '@angular/router';
import {IFormCandeactivate} from "./iform-candeactivate";
export const alunosDeactivateGuard: CanDeactivateFn<IFormCandeactivate> =
  (component, currentRoute,
   currentState, nextState) => {
  console.log('guarda de desativação');

  //return component.podeMudarRota();
  return component.podeDesativar();



};
