import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import {BsModalService} from "ngx-bootstrap/modal";
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AlertModalComponent, ConfirmModalComponent],
})
export class SharedModule {
  constructor() {  }
  showAlertDanger(message:string){

  }
}