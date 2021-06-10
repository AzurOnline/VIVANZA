import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, Form } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {


  resetForm: FormGroup;
  codeForm: FormGroup;
  passwordForm: FormGroup;
  public email;
  public showGenerateCode = true;
  public showCheckCode = false;
  public showSetNewPassword = true;
  public id_persona;

  constructor(
    private apiService: ApiService,
    public formBuilder: FormBuilder

  ) {
    this.showGenerateCode = true;
    this.showCheckCode = false;
    this.showSetNewPassword = false;
  }

  ngOnInit(): void {

    this.resetForm = this.formBuilder.group({

      email: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(50)])

    })

    this.codeForm = this.formBuilder.group({

      code: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])

    })

    this.passwordForm = this.formBuilder.group({

      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      confirmPass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    })
  }

  generateCode() {

    this.email = this.resetForm.value.email;

    let data = {
      "appname": "VIVANZAJR",
      "sp": 'dbo.GuardaCodigoReseteoPassword',
      "params": [`'${this.resetForm.value.email}'`],
      "email": this.resetForm.value.email

    }

    this.apiService.resetPassword(data).subscribe((response) => {

      let _response;
      _response = response;
      if (_response.success) {

        if (_response.message === 'Correo no encontrado') {

          Swal.fire('Error', `${_response.success.recordset[0].message}`, 'error')
        } else {
          Swal.fire('Código enviado', 'Busca el código de restauración en tu correo', 'success');

          this.showGenerateCode = false;
          this.showCheckCode = true;
          this.showSetNewPassword = false;

        }


      } else {
        Swal.fire('Error', `${_response.message}`, 'error')
      }

    })

  }

  verifyCode() {

    let data = {
      "appname": "VIVANZAJR",
      "sp": 'dbo.DiferenciaTiempoEntreFechas',
      "params": [`'${this.resetForm.value.email}','${this.codeForm.value.code}'`],
      "email": this.resetForm.value.email

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      let validCode = _response.success.recordset[0].message;
      this.id_persona =_response.success.recordset[0].id_persona;
      if (validCode === 'Expirado') {
        Swal.fire('Error', `Código expirado`, 'error')
      } else if (validCode === 'Valido') {
        Swal.fire('Correcto', 'Código aceptado', 'success');
        this.showGenerateCode = false;
        this.showCheckCode = false;
        this.showSetNewPassword = true;
      } else if (validCode === 'Invalido') {
        Swal.fire('Error', `Código o correo invalido`, 'error')
      } else {
        Swal.fire('Error', `Error al validar el código`, 'error')

      }

    })


  }

  setNewPassword() {

    if (this.passwordForm.value.pass !== this.passwordForm.value.confirmPass) {
      Swal.fire('Error', `Las contraseñas no concuerdan`, 'error');
    } else {

      let data = {
        "appname": "VIVANZAJR",
        "persona": this.id_persona,
        "pass": `${this.passwordForm.value.pass}`,
        "email": this.passwordForm.value.email

      }

      this.apiService.createNewPassword(data).subscribe((response) => {
        let _response;
        _response = response;
        if(_response.success){
          Swal.fire('Éxito', 'Contraseña cambiada', 'success');
        }else{
          Swal.fire('Error', `Error cambiar la contraseña`, 'error')

        }
      })

    }

  }


  get getControl() {
    return this.resetForm.controls;
  }

  get getControlVerifyForm() {
    return this.codeForm.controls;
  }

  get getControlPasswordForm() {
    return this.passwordForm.controls;
  }



}
