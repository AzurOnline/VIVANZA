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
  @Input() my_modal_color;
  @Input() fecha_evento
  @Input() fecha_rango;
  @Input() fecha_inicio;
  @Input() fecha_fin;
  private calendarApi;
  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalService: NgbModal
  ) { }

  eventoForm = this.formBuilder.group({
    nombre_evento: ['', Validators.required],
    hora_inicio: ['00:00', Validators.required],
    hora_fin: ['00:00', Validators.required],
    todo_el_dia: [false, Validators.required],
    fecha_inicio: ['00:00', Validators.required],
    fecha_fin: ['00:00', Validators.required],
  })

  ngOnInit(): void {

  }
  allDaycheck(e) {
    var horario = document.getElementById("horario");
    if (e.target.checked)
      horario.style.display = "none";
    else
      horario.style.display = "block";
  }

  GuardaEvento() {

      if (this.eventoForm.value.nombre_evento == '')
        alert('El evento no puede ir en blanco.');
      else {
        let fechaIni = "";
        let fechaFin = "";

        if (this.fecha_rango) {
          let fecha_fin_tem = new Date(this.eventoForm.value.fecha_fin);
          fecha_fin_tem.setDate(fecha_fin_tem.getDate() + 2)
          this.eventoForm.value.fecha_fin = fecha_fin_tem.toISOString().substring(0, 10);
          fechaIni = this.eventoForm.value.fecha_inicio + "T" + "00:00:00Z";
          fechaFin = this.eventoForm.value.fecha_fin + "T" + "00:00:00Z";
          this.eventoForm.value.todo_el_dia = true;
        }
        else {
          fechaIni = this.fecha_evento + "T" + (this.eventoForm.value.todo_el_dia ? "00:00" : this.eventoForm.value.hora_inicio) + ":00Z";
          fechaFin = this.fecha_evento + "T" + (this.eventoForm.value.todo_el_dia ? "00:00" : this.eventoForm.value.hora_fin) + ":00Z";
          }
        let data = {
          "appname": "VIVANZAJR",
          "sp": "dvp.Guarda_Eventos_Calendario",
          "params": [
            this.eventoForm.value.todo_el_dia + ",",
            "'" + this.eventoForm.value.nombre_evento + "',",
            "'" + fechaIni + "',",
            "'" + fechaFin + "'"
          ]

        }

        this.apiService.ejecuta(data).subscribe((response) => {
          let _response;
          _response = response;

          if (_response.success.recordset[0].guardado) {
            alert('Calendario actualizado exitosamente');
            let calendar = new CalendarComponent(this.modalService, this.apiService);
            this.calendarApi.addEvent({
              title: this.eventoForm.value.nombre_evento,
              start: fechaIni,
              end: fechaFin,
              allDay: this.eventoForm.value.todo_el_dia
            });
          }
          else
            alert('Ocurrio un error al intentar actualizar el calendario');
        });
    }

  }
}
