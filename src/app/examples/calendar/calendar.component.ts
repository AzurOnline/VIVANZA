import { ModalsService } from './../../services/modals.service';
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
    select: this.handleSelection.bind(this),
    eventResize: this.handleResizeEvent.bind(this),
    eventDrop: function (infoDropped) {
      alert(infoDropped.event.startStr);
      alert(infoDropped.event.endStr);
    },

    // dateClick: function (arg) {
    //   alert(arg.dateStr);
    // },
    // select: function (arg) {
    //   arg.end.setDate(arg.end.getDate() - 1);
    //   if(arg.end.getDate() != arg.start.getDate())
    //     alert(arg.end.toISOString());
    // },
    // eventResize: function (arg) {

    // },
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

    locale: 'es', //Idioma al español

    selectable: true,

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

  };

  handleDateClick(arg) {
    this.fechaSeleccionada = arg.dateStr;
    this.openEventoDia(arg.dateStr, this.calendarComponent.getApi());
  }

  handleSelection (selectedInfo) {
    selectedInfo.end.setDate(selectedInfo.end.getDate() - 1);
      if(selectedInfo.end.getDate() != selectedInfo.start.getDate())
    this.openEventoRango(selectedInfo.start.toISOString().substring(0, 10), selectedInfo.end.toISOString().substring(0, 10), this.calendarComponent.getApi())
  }

  handleResizeEvent(info) {
    let end_temp = info.event.end;
    end_temp.setDate(end_temp.getDate() - 1);
    alert(info.event.title + " termina ahora termina en " + end_temp.toISOString().substring(0,10));

    if (!confirm("¿Confirma el cambio de fecha?")) {
      info.revert();
    }
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
  openEventoDia(diaSeleccionado, calendarApi) {
    const modalRef = this.modalService.open(ModalEventosComponent);
    modalRef.componentInstance.my_modal_title = 'Añadir evento a la fecha: ';
    modalRef.componentInstance.fecha_evento = diaSeleccionado;
    modalRef.componentInstance.calendarApi = calendarApi;
    modalRef.componentInstance.fecha_rango = false;
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }

  openEventoRango(fechaInicio, fechaFin, calendarApi) {
    const modalRef = this.modalService.open(ModalEventosComponent);
    modalRef.componentInstance.my_modal_title = 'Añadir evento desde la fecha: ';
    modalRef.componentInstance.fecha_evento = fechaInicio + " hasta " + fechaFin;
    modalRef.componentInstance.fecha_inicio = fechaInicio;
    modalRef.componentInstance.fecha_fin = fechaFin;
    modalRef.componentInstance.calendarApi = calendarApi;
    modalRef.componentInstance.fecha_rango = true;
    modalRef.componentInstance.my_modal_color = 'normal-title';
  }
}
