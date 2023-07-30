import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario:null
    }
    //responsavel: {nome: 'Loiane'}_ ao tentar acessar um atributo do objeto nulo, o browser acusa um erro
  };

}
