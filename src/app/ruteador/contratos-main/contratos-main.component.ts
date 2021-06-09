import { Component, OnInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../examples/modal/modal.component';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-contratos-main',
  templateUrl: './contratos-main.component.html',
  styleUrls: ['./contratos-main.component.css']
})
export class ContratosMainComponent implements OnInit {

  

  public idCliente;
  public valor = 0;
  public resultados;
  public token;
  public idTaeId;

  public loginForm;
  public dataset;
  public dataset1;
  public selectedClient;
  constructor(
    
    public apiService: ApiService,
    private modalService: NgbModal,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    this.loginForm = new FormGroup({
      usuario: new FormControl,
      pass: new FormControl
    })
    
   }

  ngOnInit(): void {
    this.ComboCliente();
    
  }
 
  ConfiPF() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'Seleccionar Cliente';
    modalRef.componentInstance.my_modal_content = 'Contenido normal';
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }
  ConPruPf() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'Seleccionar Cliente';
    modalRef.componentInstance.my_modal_content = 'Contenido normal';
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }
  
  conIndePf() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'Seleccionar Cliente';
    modalRef.componentInstance.my_modal_content = 'Contenido normal';
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }
  confidePm() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'Seleccionar Cliente';
    modalRef.componentInstance.my_modal_content = 'Contenido normal';
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }
  ConPruPm() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'Seleccionar Cliente';
    modalRef.componentInstance.my_modal_content = 'Contenido normal';
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }
  conIndePm() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'Seleccionar Cliente';
    modalRef.componentInstance.my_modal_content = 'Contenido normal';
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }

  ComboCliente (){
    
    let data = {
          "appname": "VIVANZAJR",
          "sp": "dbo.Combo_Clientes",
          "params": [0]

    }
 
   this.apiService.ejecuta(data).subscribe((response) => {
        let _response;
        _response = response;
        this.dataset = _response.success.recordset;
        localStorage.setItem( "id", JSON.stringify(_response.success.recordset));
  
      })
  }

  onSelectId(nameID) {
    console.log(nameID);
    this.idCliente = parseInt(nameID);
    this.TraeDatosClientes(this.idCliente);
    localStorage.setItem("id", nameID);
    return localStorage.getItem('id');
}
 onSelect(e: any) {
  console.log(e.target.value);
  this.idTaeId = e.target.value;
  localStorage.setItem("id", e.target.value);
  return localStorage.getItem('id');
}


  TraeDatosClientes(id){
    // let id;
    // id = localStorage.getItem('id');
    
    let data = {
      "appname":"VIVANZAJR",
      "sp": "dbo.Trae_Clientes",
      "params" : [id]
    }
    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this.dataset1 = _response.success.recordset;
      this.selectedClient = this.dataset1[0];
      localStorage.setItem( "datos", JSON.stringify(this.selectedClient));
      alert(this.selectedClient.nombre_cliente);
      
    })

  }
  


 
}

