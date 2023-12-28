import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  files: Set<File> | undefined;
  constructor(private service: UploadFileService) {
  }

  onChange(event: any){
    console.log(event);
    const selectedFiles = <FileList>event.srcElement.files;
    //(document.getElementById('customFileLabel') as HTMLElement).innerHTML = selectedFiles[0].name
    const fileNames = [];
    this.files = new Set();
    for (let i=0; i<selectedFiles.length; i++) {
    fileNames.push(selectedFiles[i].name);
    this.files.add(selectedFiles[i]);
    }
    (document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', '));
    }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, '/api/upload')
        .subscribe(response => console.log('Upload Concluído'));

    }
  }



}