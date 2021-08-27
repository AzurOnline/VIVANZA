import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ExportService } from '../../services/export.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-confide-pm',
  templateUrl: './confide-pm.component.html',
  styleUrls: ['./confide-pm.component.css']
})
export class ConfidePmComponent implements OnInit {
  @ViewChild('printcontainer') printableElement: ElementRef;
  constructor() { }

  ngOnInit(): void {
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

}
