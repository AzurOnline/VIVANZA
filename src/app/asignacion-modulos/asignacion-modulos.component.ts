import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-asignacion-modulos',
  templateUrl: './asignacion-modulos.component.html',
  styleUrls: ['./asignacion-modulos.component.css']
})
export class AsignacionModulosComponent implements OnInit {

  public _combo_desarrollo;
  public _combo_tipo;
  public usuario;


  capturaForm = this.formBuilder.group({
    nombres:['',Validators.required],
    apellido_paterno:['',Validators.required],
    apellido_materno:['',Validators.required],
    contrasena:['',Validators.required],
    email:['',Validators.required],
    usuario:['',Validators.required]
  })


  constructor(
    private apiService: ApiService,
    public formBuilder: FormBuilder
  ) { 



  }

  ngOnInit(): void {
  }

  Guarda(){
    alert(this.capturaForm.value.nombres);
  }

}
