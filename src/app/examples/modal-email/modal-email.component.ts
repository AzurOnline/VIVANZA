import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { fi } from 'date-fns/locale';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.css']
})
export class ModalEmailComponent implements OnInit {

  @Input() my_modal_title;
  @Input() my_modal_color;
  private files;

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private emailService: EmailService,
  ) { }

  emailForm = this.formBuilder.group({
    emailTo: ['', Validators.required],
    emailSubject: ['', Validators.required],
    emailText: ['', Validators.required],
    emailAttachment: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  fileChange(e) {
    if (e.target.files.length > 0) {
      const files = e.target.files;
      this.files = files;
    }
  }

  EnviarEmail() {


    if (this.files.length > 0) {
      const formData = new FormData();

      for (const file of this.files) {
        formData.append('files', file);
      }

      this.emailService.SubeArchivos(formData).subscribe((response) => {
        let _responseArchivo;
        _responseArchivo = response;

        if (_responseArchivo.status) {
          let data = {
            emailTo: this.emailForm.value.emailTo,
            emailSubject: this.emailForm.value.emailSubject,
            emailHtml: this.emailForm.value.emailText,
          }

          this.emailService.EnviaEmail(data).subscribe((response) => {
            let _responseEmail;
            _responseEmail = response;

            if (_responseEmail.status) {
              alert('Correo enviado exitosamente');
              this.activeModal.close();
            } else {
              alert('Ocurrio un error al enviar su correo');
            }
          });
        } else {
          alert('Ocurrio un error con el archivo subido y su correo no fue enviado');
        }

      });
    } else {

      let data = {
        emailTo: this.emailForm.value.emailTo,
        emailSubject: this.emailForm.value.emailSubject,
        emailHtml: this.emailForm.value.emailText,
      }

      this.emailService.EnviaEmail(data).subscribe((response) => {
        let _responseEmail;
        _responseEmail = response;

        if (_responseEmail.status) {
          alert('Correo enviado exitosamente');
        } else {
          alert('Ocurrio un error al enviar su correo');
        }
      });
    }
  }
}
