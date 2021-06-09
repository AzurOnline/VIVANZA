import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {


  resetForm:FormGroup;
  codeForm:FormGroup;
  public email;
  public showGenerateCode = true;
  public showCheckCode = false;

  constructor(
    private apiService:ApiService,
    public formBuilder: FormBuilder
  
  ) {
    this.showGenerateCode = true;
    this.showCheckCode = false;
   }

  ngOnInit(): void {

    this.resetForm = this.formBuilder.group({

      email: new FormControl('', [Validators.required, Validators.minLength(7),Validators.maxLength(50)])

    })

    this.codeForm = this.formBuilder.group({

      code: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6)])

    })
  }

  generateCode(){

    this.email = this.resetForm.value.email;

    let data = {
      "appname":"VIVANZAJR",
      "sp": 'dbo.GuardaCodigoReseteoPassword',
      "params": [`'${this.resetForm.value.email}'`],
      "email":this.resetForm.value.email

    }

    this.apiService.resetPassword(data).subscribe((response)=>{

      let _response;
      _response = response;
      if (_response.success){
        
        if(_response.message === 'Correo no encontrado'){

          Swal.fire('Error', `${_response.success.recordset[0].message }`, 'error')
        }else{
          Swal.fire('Código enviado', 'Busca el código de restauración en tu correo', 'success');
          
          this.showGenerateCode = false;
          this.showCheckCode = true;

        }

       
      }else{
        Swal.fire('Error', `${_response.message}`, 'error')
      }

    })

  }

  verifyCode(){

    let data = {
      "appname":"VIVANZAJR",
      "sp": 'dbo.DiferenciaTiempoEntreFechas',
      "params": [`'${this.resetForm.value.email}','${this.codeForm.value.code}'`],
      "email":this.resetForm.value.email

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      let validCode = _response.success.recordset[0].message;
      if(validCode === 'Expirado'){
        Swal.fire('Error', `Código expirado`, 'error')
      }else if(validCode === 'Valido'){
        Swal.fire('Correcto', 'Código aceptado', 'success');
      }else if(validCode === 'Invalido'){
        Swal.fire('Error', `Código o correo invalido`, 'error')
      }else{
        Swal.fire('Error', `Error al validar el código`, 'error')

      }

    })


  }


  get getControl() {
    return this.resetForm.controls;
  }

  get getControlVerifyForm() {
    return this.resetForm.controls;
  }

  


}
