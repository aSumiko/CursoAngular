import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  cursos:any[] = [];
  pagina:number = 0;
  inscricao: Subscription = new Subscription();
  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams:any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }
  proximaPagina(){
    //this.pagina ++;
    this.router.navigate(['/cursos'],
      {queryParams: {'pagina': ++this.pagina}})
  }


}
