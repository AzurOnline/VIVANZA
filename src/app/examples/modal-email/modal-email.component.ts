import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.css']
})
export class ModalEmailComponent implements OnInit {

  @Input() my_modal_title;
  @Input() my_modal_color;
  private file:any;
  private filename;
  private filebuffer;

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private emailService: EmailService,
  ) {  }

  emailForm = this.formBuilder.group({
    emailTo: ['', Validators.required],
    emailSubject: ['', Validators.required],
    emailText: ['', Validators.required],
    emailAttachment: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  fileChange(e){
    this.file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onload = (e) => {

      this.filename = this.file.name;
      this.filebuffer = Buffer.from(this.file);
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  EnviarEmail() {

    // this.files.forEach(element => {
    //   fileReader.onload = (e) => {
    //     var path = fileReader.result;
    //     var file = {
    //       filename: element.name,
    //       path: path
    //     }
    //     attachments.push(file)
    //   }
    //   fileReader.readAsDataURL(element);
    // });

    // var fileSelect = document.getElementById('emailAttachment');
    // var files = fileSelect;

    // var attachments = [
    //   {
    //     filename: this.emailForm.value.emailAttachment.replace(/^.*[\\\/]/, ''),
    //     path: this.emailForm.value.emailAttachment
    //   }
    // ]

    let data = {
      emailTo: this.emailForm.value.emailTo,
      emailSubject: this.emailForm.value.emailSubject,
      emailHtml: this.emailForm.value.emailText,
      emailAttachments: this.attachments
    }

    this.emailService.EnviaEmail(data).subscribe((response) => {
      let _response;
      _response = response;
      // let resultado = _response.success.recordset[0];
    });
  }
}
