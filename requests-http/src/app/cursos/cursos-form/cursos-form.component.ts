import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CursosService} from "../cursos.service";
import {AlertModalService} from "../../shared/alert-modal.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit{
  submitted = false;
  form! : FormGroup;


  constructor(private fb: FormBuilder,
              private service: CursosService,
              private modal: AlertModalService,
              private location: Location,
              private route: ActivatedRoute) {  }

  ngOnInit(){
/*    let registro = null;
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const curso$ = this.service.loadByID(id);
        curso$.subscribe(curso => {
          registro = curso;
          this.updateForm(curso);
        })
      }
    );
    console.log(registro)*/

/*    this.route.params
      .pipe(
        map((params:any) => params['id']),
        switchMap(id => this.service.loadByID(id)),
        //switchMap(cursos => obrterAulas)
      )
      .subscribe(
        (curso) => {
          this.updateForm(curso);
        }
    )*/

    //concatMap -> ordem da requisição importa
    //mergeMap -> ordem da requisição não importa
    //exhaustMap -> casos de login, obtem a resposta da requisição antes de fazer a próxima requisição
    const curso = this.route.snapshot.data['curso'];
    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

/*  updateForm(curso: any){
    this.form.setValue({
      id: curso.id,
      nome: curso.nome
    })*/



  hasError(field:string){
    return this.form?.get('nome')?.errors;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.form?.value);
    if(this.form?.valid){
      console.log('submit');

      let msgSuccess = 'Curso criado com sucesso';
      let msgError = 'Erro ao criar curso';
      if(this.form.value.id){
        let msgSuccess = 'Curso atualizado com sucesso';
        let msgError = 'Erro ao atualizar curso, tente novamente!';
      }

        this.service.save(this.form.value).subscribe(
        (success:any) => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        (error:any) => this.modal.showAlertDanger('Erro ao atualizar curso, tente novamente'),
      )

      /*if(this.form.value.id){
        this.service.update(this.form.value).subscribe(
            (success:any) => {
              this.modal.showAlertSuccess('Curso atualizado com sucesso"');
              this.location.back();
          },
            (error:any) => this.modal.showAlertDanger(msgError),
            () => console.log('update completo')
        );
      }else {this.service.creat(this.form.value)
        .subscribe(
          success =>
          {this.modal
            .showAlertSuccess('Curso criado com sucesso"')
            this.location.back();
          } ,
          error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente'),
          () => console.log('request completo'));
      }*/

      }


  }

  onCancel(){
    this.submitted = false;
    this.form?.reset()
    //console.log('onCancel')

  }


}
