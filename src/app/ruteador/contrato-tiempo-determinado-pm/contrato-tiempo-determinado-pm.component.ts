import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-contrato-tiempo-determinado-pm',
  templateUrl: './contrato-tiempo-determinado-pm.component.html',
  styleUrls: ['./contrato-tiempo-determinado-pm.component.css']
})
export class ContratoTiempoDeterminadoPmComponent implements OnInit {

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
