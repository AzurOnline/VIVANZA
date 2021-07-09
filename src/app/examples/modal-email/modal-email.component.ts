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

  EnviarEmail() {

    let data = {
      emailTo: this.emailForm.value.emailTo,
      emailSubject: this.emailForm.value.emailSubject,
      emailHtml: this.emailForm.value.emailText,
      emailAttachments: this.emailForm.value.emailAttachment
    }

    this.emailService.EnviaEmail(data).subscribe((response) => {
      let _response;
      _response = response;
      // let resultado = _response.success.recordset[0];
    });
  }
}
