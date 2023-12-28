import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CursosService} from "../cursos.service";
import {catchError, EMPTY, Observable, pipe, Subject} from "rxjs";
import {AlertModalService} from "../../shared/alert-modal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Curso} from '../curso';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss',
  ]
})
export class CursosListaComponent implements OnInit {
  // cursos?: Curso[];

  cursos$?: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal:any;
  cursoSelecionado!: Curso;

  constructor(private service: CursosService,
             private modalService: BsModalService,
             private alertService: AlertModalService,
             private router: Router,

             private route: ActivatedRoute) {
  }
  ngOnInit() {
    // this.service.list()
    //  .subscribe(dados => this.cursos = dados );
    this.onRefresh();

  }

  onRefresh(){
    this.cursos$ = this.service.list()
      .pipe(catchError(error => {
          console.error(error);
         // this.error$.next(true);
          this.handleError();
          return EMPTY;
        })


    /*this.service.list()
      .pipe(
        catchError(error =>empty())
      )
      .subscribe(
      dados => {
        console.log(dados);
      }*/
/*      ,
      error => console.error(error),
      () => console.log('Observable completo')*/
    );
  }
  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar curso');
/*    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type ='danger';
    this.bsModalRef.content.message ='Erro ao carregar curso'*/
  }

  onEdit(id: number){
    console.log(id)
    console.log("route " + this.route)
    this.router.navigate(['editar', id], { relativeTo: this.route })

  }

  onDelete(curso:any){
    this.cursoSelecionado = curso;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    this.alertService.showConfirm('Confirmação', 'Tem certeza que deseha remover esse curso?')

  }
  onConfirmDelete(){
    this.service.remove(this.cursoSelecionado.id)
      .subscribe(
        success => {this.onRefresh();
        this.deleteModalRef?.hide();
      },
        error => {
          this.alertService.showAlertDanger('Erro ao remover curso');
          this.deleteModalRef?.hide();
        }
        );
  }

  onDeclineDetete(){
    this.deleteModalRef?.hide();

  }




}

