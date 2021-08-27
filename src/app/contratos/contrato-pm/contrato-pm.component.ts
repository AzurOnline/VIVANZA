import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ExportService } from '../../services/export.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { ApiService } from '../../services/api.service';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contrato-pm',
  templateUrl: './contrato-pm.component.html',
  styleUrls: ['./contrato-pm.component.css']
})
export class ContratoPmComponent implements OnInit {


  public id;


  public loginForm;
  public dataset;
  @ViewChild('printcontainer') printableElement: ElementRef;

  constructor(
    public apiService: ApiService,
    private modalService: NgbModal,) {


  }

  ngOnInit(): void {
    this.TraeDatosClientes();
  }

  public exportarPdf() {

    pdfMake.fonts = {
      CenturyGothic: {
        normal: '07558_CenturyGothic.ttf',
        bold: '07553_CenturyGothicBold.ttf',
        italics: '07556_CenturyGothicItalic.ttf',
        bolditalics: '07724_CGOTHICBI.ttf'
      }
    }

    const printableElement = this.printableElement.nativeElement;

    var html = htmlToPdfmake(printableElement.innerHTML);

    const documentDefinition = {
      content: html,
      pageSize: 'LEGAL',
      defaultStyle: {
        font: 'CenturyGothic'
      }
    };



    pdfMake.createPdf(documentDefinition).open();

  }

  onSelect(e: any) {
    console.log(e.target.value);
    const id = e.target.value;
    localStorage.setItem("id", e.target.value);
    // return localStorage.getItem('id');
    }


  TraeDatosClientes(){
    // let id;
    // id = localStorage.getItem('id');

    let data = {
      "appname":"VIVANZAJR",
      "sp": "dbo.Trae_Clientes",
      "params" : [1]
    }
    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this.dataset = _response.success.recordset;
      // localStorage.setItem( "datos", JSON.stringify(_response.success.recordset));

    })

  }




}
