import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-eventos',
  templateUrl: './modal-eventos.component.html',
  styleUrls: ['./modal-eventos.component.css']
})
export class ModalEventosComponent implements OnInit {
  @Input() my_modal_title;
  // @Input() my_modal_content;
  @Input() my_modal_color;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }
  allDaycheck(event) {
    alert("funciona");
  }
}
