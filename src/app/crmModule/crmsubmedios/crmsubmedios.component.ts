import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-crmsubmedios',
  templateUrl: './crmsubmedios.component.html',
  styleUrls: ['./crmsubmedios.component.css']
})
export class CrmsubmediosComponent implements OnInit {

  public _combo_canales;
  public _combo_medios;
  public item;
  public nombre_vista;
  public dataset;
  public new = true;
  public canal;
  public medio;
  public tabla_vacia = [];
  public tabla = false;
 

  capturaForm = this.formBuilder.group({
    medio:['',Validators.required],
    estado:['',Validators.required],
    id:['']
  })

  capturaForm1 = this.formBuilder.group({
    submedio:['',Validators.required],
    estado:['',Validators.required],
    id:['']
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.ComboCanales();
  }

  ComboCanales(){
    this.tabla = false;
    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Combo_Canales',
      "params": []

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this._combo_canales = _response.success.recordsets[0];
    })
  }

  /* ComboMedios(){
    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Combo_Medios',
      "params": [this.canal]

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this._combo_medios = _response.success.recordsets[0];
    })
  } */

  CanalSeleccionado(item){
    this._combo_canales.forEach(value => {
      if(value.ID.toString() == item){
        localStorage.setItem('nombre_canal',value.Canal);
      }
    })
    this.canal = item;
    this.tabla_vacia = [];
    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Trae_Medios_Canal_CRM',
      "params": [item]

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      this.tabla = true;
      let _response;
      _response = response;
      this._combo_medios = _response.success.recordsets[0];
    })
  }

  MedioSeleccionado(item){
    this._combo_medios.forEach(value => {
      if(value.ID.toString() == item){
        localStorage.setItem('nombre_medio',value.Medio);
      }
    })
    /* this.canal = item; */
    this.medio = item;
    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Trae_Submedios_Medios_Canal_CRM',
      "params": [item]

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this.tabla = false;
      this.new = false;
      this.dataset = _response.success.recordset;

    })
  }

  TraeDatos() {

    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Trae_Medios_Canal_CRM',
      "params": [this.item]

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this.dataset = _response.success.recordset;
  /*     this.capturaForm.setValue(
        {
          canal: _response.success.recordset[0].Canal,
          estado: _response.success.recordset[0].estado,
          id: _response.success.recordset[0].ID
        }) */
    })

  }

  Editar(item){
    let id;
    id = item.ID;
    item = JSON.stringify(item);
    this.router.navigate(['/crmeditarsubmedios'],{queryParams:{'item':id, 'canal':0, 'nombre_canal':localStorage.getItem('nombre_canal'), 'nombre_medio': localStorage.getItem('nombre_medio')}});
    /* alert("logica para editar " + item); */
  }

  Nuevo(i){
    let id;
    id = this.medio;
    /* item = JSON.stringify(item); */
    this.router.navigate(['/crmeditarsubmedios'],{queryParams:{'item':i, 'canal':id, 'nombre_canal':localStorage.getItem('nombre_canal'), 'nombre_medio': localStorage.getItem('nombre_medio')}});
  }

  Eliminar(item){
    let id = item.ID;
    let pregunta = confirm('??Est?? seguro de querer eliminar el submedio '+item.Submedio+'?');
    if (pregunta == true){
      let data = {
        "appname":"VIVANZA",
        "sp": 'dvp.Elimina_Subedio_CRM',
        "params": [id]
  
      }
  
      this.apiService.ejecuta(data).subscribe((response) => {
        let _response;
        _response = response;
        
        let d = _response.success.recordsets[0];
        if(d[0].error == 1){
          alert(d[0].mensaje);
        }
        else{
          alert(d[0].mensaje);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['./crmsubmedios'], { relativeTo: this.route });
        }
      })
    }
    
  }

}
