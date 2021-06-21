import { CalendarComponent } from './../calendar.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-eventos',
  templateUrl: './modal-eventos.component.html',
  styleUrls: ['./modal-eventos.component.css']
})
export class ModalEventosComponent implements OnInit {
  @Input() my_modal_title;
  // @Input() my_modal_content;
  @Input() my_modal_color;
  @Input() fecha_evento;
  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalService: NgbModal
    ) { }

  eventoForm = this.formBuilder.group({
    nombre_evento:['',Validators.required],
    fecha_inicio:['00:00',Validators.required],
    fecha_finalizacion:['00:00',Validators.required],
    todo_el_dia:[false,Validators.required],
  })

  ngOnInit(): void { }
  allDaycheck(e) {
    var horario = document.getElementById("horario");
    if (e.target.checked)
      horario.style.display = "none";
    else
      horario.style.display = "block";
  }

  GuardaEvento(){
    if(this.eventoForm.value.nombre_evento == '')
      alert('El evento no puede ir en blanco.');
    else{
      var fechaIni = this.fecha_evento + "T" + (this.eventoForm.value.todo_el_dia ? "00:00" : this.eventoForm.value.fecha_inicio) + ":00";
      var fechaFin = this.fecha_evento + "T" + (this.eventoForm.value.todo_el_dia ? "00:00" : this.eventoForm.value.fecha_finalizacion) + ":00";
      let data = {
        "appname":"VIVANZAJR",
        "sp": "dvp.Guarda_Eventos_Calendario",
        "params" : [
          this.eventoForm.value.todo_el_dia + ",",
          "'" + this.eventoForm.value.nombre_evento + "',",
          "'" + fechaIni + "',",
          "'" + fechaFin + "'"
        ]

      }

      this.apiService.ejecuta(data).subscribe((response) => {
        let _response;
        _response = response;

        if(_response.success.recordset[0].guardado){
          alert('Calendario actualizado exitosamente');
          // let calendar = new CalendarComponent(this.modalService, this.apiService);
          // calendar.TraeEventos();
        }
        else
          alert('Ocurrio un error al intentar actualizar el calendario');
      })
    }

  }
}
