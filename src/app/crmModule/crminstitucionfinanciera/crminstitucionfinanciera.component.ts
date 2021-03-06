import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-crminstitucionfinanciera',
  templateUrl: './crminstitucionfinanciera.component.html',
  styleUrls: ['./crminstitucionfinanciera.component.css']
})
export class CrminstitucionfinancieraComponent implements OnInit {

  public _combo_tipo_credito;
  public _combo_creditos;
  public item;
  public nombre_vista;
  public dataset;
  public new = true;
  public tp;
  public medio;
  public credito;
  public tipo_credito;
  public tablas;

  capturaForm = this.formBuilder.group({
    credito:['',Validators.required],
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
    this.ComboTipoCredito();
  }

  ComboTipoCredito(){
    
    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Combo_Tipos_de_Credito',
      "params": []

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this._combo_tipo_credito = _response.success.recordsets[0];
    })
  }

  TipoCreditoSeleccionado(item){
    this._combo_tipo_credito.forEach(value => {
      if(value.ID.toString() == item){
        localStorage.setItem('nombre_tipo_credito',value['Tipo']);
      }
    })
    this.tablas = true;
    this.tp = item;
    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Trae_Credito_Tipos_CRM',
      "params": [item]

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      
      let _response;
      _response = response;
      this._combo_creditos = _response.success.recordsets[0];
    })
  }

  CreditoSeleccionado(item){
    this._combo_creditos.forEach(value => {
      if(value.ID.toString() == item){
        localStorage.setItem('nombre_credito',value['Cr??dito']);
      }
    })
    this.tp = item;
    let data = {
      "appname":"VIVANZA",
      "sp": 'dvp.Trae_Institucion_Credito_Tipo_CRM',
      "params": [item]

    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this.tablas = false;
      this.new = false;
      this.dataset = _response.success.recordset;

    })
  }

  Editar(item){
    let id;
    id = item.ID;
    item = JSON.stringify(item);
    this.router.navigate(['/crmeditarinstitucionfinanciera'],{queryParams:{'item':id, 'canal':0, 'nombre_tipo_credito': localStorage.getItem('nombre_tipo_credito'), 'nombre_credito': localStorage.getItem('nombre_credito')}});
    /* alert("logica para editar " + item); */
  }

  Nuevo(i){
    let id;
    id = this.tp;
    /* item = JSON.stringify(item); */
    this.router.navigate(['/crmeditarinstitucionfinanciera'],{queryParams:{'item':i, 'canal':id, 'nombre_tipo_credito': localStorage.getItem('nombre_tipo_credito'), 'nombre_credito': localStorage.getItem('nombre_credito')}});
  }

  Eliminar(item){
    let id = item.ID;
    let pregunta = confirm('??Est?? seguro de querer eliminar la instituci??n financiera '+item['Instituci??n Financiera']+'?');
    if (pregunta == true){
      let data = {
        "appname":"VIVANZA",
        "sp": 'dvp.Elimina_Institucion_Financiera_CRM',
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
          this.router.navigate(['./crminstitucionfinanciera'], { relativeTo: this.route });
        }
      })
    }
    
  }


}
