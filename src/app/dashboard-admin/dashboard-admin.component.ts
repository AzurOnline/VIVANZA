import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import * as Chart from 'chart.js';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  /** Based on the screen size, switch from standard to one column per row */
  /**
   * 1.-Clientes Potenciales por Asesor
   * 2.-VISITAS POR CANAL
   * 3.-VISITAS POR NIVEL DE INTERES
   * 4.-APARTADOS
   * 5.-VENTAS
   * 6.-CANCELACIONES
   *
   * @memberof DashboardAdminComponent
   */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Clientes Potenciales por Asesor', cols: 1, rows: 2, cardNo: 1 },
          { title: 'Vistas por Canal', cols: 1, rows: 1, cardNo: 2 },
          { title: 'Visitas por Nivel de Interes', cols: 1, rows: 1, cardNo: 3 },
          { title: 'Apartados', cols: 1, rows: 1, cardNo: 4 },
          { title: 'Ventas', cols: 1, rows: 1, cardNo: 5 },
          { title: 'Cancelaciones', cols: 1, rows: 1, cardNo: 6 }
        ];
      }

      return [
        { title: 'Clientes Potenciales por Asesor', cols: 2, rows: 2, cardNo: 1 },
        { title: 'Vistas por Canal', cols: 1, rows: 1, cardNo: 2 },
        { title: 'Visitas por Nivel de Interes', cols: 1, rows: 1, cardNo: 3 },
        { title: 'Apartados', cols: 1, rows: 1, cardNo: 4 },
        { title: 'Ventas', cols: 1, rows: 1, cardNo: 5 },
        { title: 'Cancelaciones', cols: 1, rows: 1, cardNo: 6 }
      ];
    })
  );

  canvasCanales: any;
  canvasInteres: any;
  ctxCanales: any;
  ctxInteres: any;

  public fecha_fin;
  public fecha_ini;
  public combo_desarrollos;
  public combo_etapas;

  public Vacio = '';

  public tabla_clientes_asesor = [];
  public tabla_apartados = [];
  public tabla_ventas = [];
  public tabla_cancelados = [];
  public desarrollo_seleccionado = 0;
  public etapa_seleccionada = 0;
  private etiquetasGraficaCanales = [];
  private etiquetasGraficaInteres = [];
  private datasetGraficaCanales = [];
  private datasetGraficaInteres = [];
  private coloresGraficaCanales = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'];
  private coloresGraficaInteres = ['rgba(153, 102, 255, 0.5)','rgba(75, 192, 192, 0.5)','rgba(255, 206, 86, 0.5)','rgba(54, 162, 235, 0.5)','rgba(255, 99, 132, 0.5)'];

  dtOptions: DataTables.Settings = {};

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    let hoy = new Date();
    let ini = hoy.getDate() - hoy.getDay();
    let fin = ini + 6;
    this.fecha_ini = new Date(hoy.setDate(ini)).toISOString().split('T')[0];
    this.fecha_fin = new Date(hoy.setDate(fin)).toISOString().split('T')[0];
    this.TraeDashboard();
    this.TraeDesarrollo();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      order:[],
      language:{
        "processing": "Cargando ...",
        "search": "Buscar:",
        "lengthMenu": "Mostrando _MENU_ registros por página",
        "zeroRecords": "No se encontraron registros",
        "info": "Mostrando página _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(fitrados de un total de  _MAX_ registros)",
        "paginate": {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        }
      }
    };
  }

  TraeDashboard() {
    // let select = document.getElementById("Desarrollo");
    // let id_desarrollo = select.options[select.selectedIndex].value;
    // let select = document.getElementById("Etapa");
    // let id_etapa = select.options[select.selectedIndex].value;

    let fecha_inicio = this.datepipe.transform(new Date(this.fecha_ini), 'dd/MM/yyyy')
    let fecha_final = this.datepipe.transform(new Date(this.fecha_fin), 'dd/MM/yyyy')

    let data = {
      "appname": "VIVANZAJR",
      "sp": "dvp.Trae_Dashboard_Admin",
      "params": ["'" + fecha_inicio + "',", "'" + fecha_final + "',", this.desarrollo_seleccionado + ",", "" + this.etapa_seleccionada + ""]
    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;

      this.tabla_clientes_asesor = _response.success.recordsets[0];

      _response.success.recordsets[1].forEach(item => {
        let value = Object.keys(item).map((key) => item[key])
        this.etiquetasGraficaCanales.push(value[0]);
        this.datasetGraficaCanales.push(value[1]);
      });

      _response.success.recordsets[2].forEach(item => {
        let value = Object.keys(item).map((key) => item[key])
        this.etiquetasGraficaInteres.push(value[0]);
        this.datasetGraficaInteres.push(value[1]);
      });

      this.tabla_apartados = _response.success.recordsets[3];
      this.tabla_ventas = _response.success.recordsets[4];
      this.tabla_cancelados = _response.success.recordsets[5];
      // this.etiquetasGrafica = Object.keys(_response.success.recordsets[1][1]).map((key) => key);
      // this.datasetGrafica = _response.success.recordsets[1];

      this.canvasCanales = document.getElementById('PieChartCanales');
      this.ctxCanales = this.canvasCanales.getContext('2d');

      var chartCanales = new Chart(this.ctxCanales, {
        type: 'pie',
        data: {
          //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          labels: this.etiquetasGraficaCanales,
          datasets: [{
            label: 'Vistas por canal',
            data: this.datasetGraficaCanales,
            backgroundColor: this.coloresGraficaCanales,
            borderWidth: 1
          }]
        }
      });

      this.canvasInteres = document.getElementById('PieChartInteres');
      this.ctxInteres = this.canvasInteres.getContext('2d');

      var chartInteres = new Chart(this.ctxInteres, {
        type: 'polarArea',
        data: {
          //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          labels: this.etiquetasGraficaInteres,
          datasets: [{
            label: 'Vistas por canal',
            data: this.datasetGraficaInteres,
            backgroundColor: this.coloresGraficaInteres,
            borderWidth: 1
          }]
        }
      });
    });
  }

  TraeEtapas(desarrollo) {
    let data = {
      "appname": "VIVANZAJR",
      "sp": "dvp.Combo_Etapas",
      "params": [desarrollo]
    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this.combo_etapas = _response.success.recordset;
    });
  }

  TraeDesarrollo() {
    let data = {
      "appname": "VIVANZAJR",
      "sp": "dvp.Combo_Desarrollos",
      "params": [0]
    }

    this.apiService.ejecuta(data).subscribe((response) => {
      let _response;
      _response = response;
      this.combo_desarrollos = _response.success.recordset;
    });
  }


  DesarrolloSeleccionado(value) {
    this.desarrollo_seleccionado = value;
    this.TraeEtapas(value);
  }

  EtapaSeleccionada(value) {
    this.etapa_seleccionada = value;
  }

  Filtrar(){
    this.TraeDashboard();
  }

}
