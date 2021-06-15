import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ExportService } from '../../services/export.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-contrato-inde-pf',
  templateUrl: './contrato-inde-pf.component.html',
  styleUrls: ['./contrato-inde-pf.component.css']
})
export class ContratoIndePfComponent implements OnInit {
  @ViewChild('printcontainer') printableElement: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  public exportarPdf() {
    
    const doc = new jsPDF();
   
    const printableElement = this.printableElement.nativeElement;
   
    var html = htmlToPdfmake(printableElement.innerHTML);
     
    const documentDefinition = { content: html  };
    pdfMake.createPdf(documentDefinition).open(); 

  }

}