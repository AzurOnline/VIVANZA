import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
          { title: 'Clientes Potenciales por Asesor', cols: 1, rows: 1, cardNo: 1 },
          { title: 'Vistas por Canal', cols: 1, rows: 1, cardNo: 2 },
          { title: 'Visitas por Nivel de Interes', cols: 1, rows: 1, cardNo: 3 },
          { title: 'Apartados', cols: 1, rows: 1, cardNo: 4 },
          { title: 'Ventas', cols: 1, rows: 1, cardNo: 5 },
          { title: 'Cancelaciones', cols: 1, rows: 1, cardNo: 6 }
        ];
      }

      return [
        { title: 'Clientes Potenciales por Asesor', cols: 2, rows: 1, cardNo: 1 },
          { title: 'Vistas por Canal', cols: 1, rows: 1, cardNo: 2 },
          { title: 'Visitas por Nivel de Interes', cols: 1, rows: 1, cardNo: 3 },
          { title: 'Apartados', cols: 1, rows: 1, cardNo: 4 },
          { title: 'Ventas', cols: 1, rows: 1, cardNo: 5 },
          { title: 'Cancelaciones', cols: 1, rows: 1, cardNo: 6 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
