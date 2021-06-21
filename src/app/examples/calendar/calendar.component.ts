import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { ModalEventosComponent } from '../calendar/modal-eventos/modal-eventos.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  // references the #calendar in the template
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  public fechaSeleccionada;
  public eventos = [];

  calendarOptions: CalendarOptions = {

    themeSystem: 'bootstrap',

    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind importante!
    validRange: {
      start: Date.now(),
    },

    businessHours: {
      // Dias de la semana en numeros (0 es dia Domingo)
      daysOfWeek: [ 1, 2, 3, 4, 5], // Lunes - Viernes

      startTime: '09:00', // Tiempo de inicio del evento (9am)
      endTime: '17:00', // Tiempo en el que termina el evento (5pm)
    },

    // weekNumbers: true, // Muestra el numero de las semanas del anio
    // weekText: 'Semana ', // En lugar de mostrar "W1, W2..." se mostrara "Semana 1, Semana 2..."

    navLinks: true, //Se activan links para poder acceder al dia o la semana de manera rapida

    nowIndicator: true, //Indica la hora en la que se esta en las vistas de Semanas y Dias

    locale: 'es', //Idioma al espaniol

    headerToolbar: {
      start: 'title',
      center: 'dayGridMonth timeGridWeek timeGridDay',
      end: 'today prevYear prev next nextYear'
    },
    buttonText: {
      month: 'Mes',
      week: 'Semana',
      day: 'Día'
    },

    events: this.eventos,

    editable: true,

    eventResize: function(info) {
      alert(info.event.title + " end is now " + info.event.end.toISOString());

      if (!confirm("is this okay?")) {
        info.revert();
      }
    }
  };

  handleDateClick(arg) {
    this.fechaSeleccionada = arg.dateStr;
    this.openNormal(arg.dateStr);
  }

  constructor(private modalService: NgbModal, private apiService: ApiService) { }

  ngOnInit(): void {
    this.TraeEventos();
  }

  TraeEventos(){
    let data = {
      "appname":"VIVANZAJR",
      "sp": "dvp.Trae_Eventos_Calendario",
      "params" : []
    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;

      _response.success.recordset.forEach(element => {
        var evento =
          { title: element.title,
          start: element.startDate,
          end: element.endDate,
          allDay: element.allDay
        };
        this.eventos.push(evento);
      });

      let calendarApi = this.calendarComponent.getApi();
      calendarApi.addEventSource(this.eventos);
      })
  }
  openNormal(diaSeleccionado) {
    const modalRef = this.modalService.open(ModalEventosComponent);
    modalRef.componentInstance.my_modal_title = 'Añadir evento a la fecha: ';
    modalRef.componentInstance.fecha_evento = diaSeleccionado;
    // modalRef.componentInstance.my_modal_content = 'Contenido normal';
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }
}
