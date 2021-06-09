import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientesModule/clientes/clientes.component';
import { AbcclientesComponent } from './clientesModule/abcclientes/abcclientes.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './loginModule/login/login.component';
import { NavbarComponent } from './navbarModule/navbar/navbar.component';
import { SidebarComponent } from './sidebarModule/sidebar/sidebar.component';
import { FooterComponent } from './footerModule/footer/footer.component';
import { TablesComponent } from './examples/tables/tables.component';
import { KeysPipe } from './keys.pipe';
import { CrmhomeComponent } from './crmModule/crmhome/crmhome.component';

import { CrmusuariosComponent } from './crmModule/crmusuarios/crmusuarios.component';

import { AsignacionModulosComponent } from './asignacion-modulos/asignacion-modulos.component';
import { AreaComponent } from './examples/charts/area/area.component';
import { PieComponent } from './examples/charts/pie/pie.component';
import { BarsmultipleComponent } from './examples/charts/barsmultiple/barsmultiple.component';
import { CrmeditarusuariosComponent } from './crmModule/crmeditarusuarios/crmeditarusuarios.component';
import { CrmcanalesComponent } from './crmModule/crmcanales/crmcanales.component';
import { CrmeditarcanalComponent } from './crmModule/crmeditarcanal/crmeditarcanal.component';
import { CrmmediosComponent } from './crmModule/crmmedios/crmmedios.component';
import { CrmeditarmediosComponent } from './crmModule/crmeditarmedios/crmeditarmedios.component';
import { CrmsubmediosComponent } from './crmModule/crmsubmedios/crmsubmedios.component';
import { CrmeditarsubmediosComponent } from './crmModule/crmeditarsubmedios/crmeditarsubmedios.component';
import { CrmtipodecreditoComponent } from './crmModule/crmtipodecredito/crmtipodecredito.component';
import { CrmeditartipodecreditoComponent } from './crmModule/crmeditartipodecredito/crmeditartipodecredito.component';
import { CrmeditarcreditoComponent } from './crmModule/crmeditarcredito/crmeditarcredito.component';
import { CrmcreditoComponent } from './crmModule/crmcredito/crmcredito.component';
import { CrminstitucionfinancieraComponent } from './crmModule/crminstitucionfinanciera/crminstitucionfinanciera.component';
import { CrmeditarinstitucionfinancieraComponent } from './crmModule/crmeditarinstitucionfinanciera/crmeditarinstitucionfinanciera.component';

import { ModalComponent } from './examples/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrmclientesComponent } from './crmModule/crmclientes/crmclientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrmclientesapartadoComponent } from './crmModule/crmclientesapartado/crmclientesapartado.component';
import { CrmarchivosComponent } from './crmModule/crmarchivos/crmarchivos.component';
import { BuroCreditoComponent } from './formatos/buro-credito/buro-credito.component';
import { CrmmotivoscancelacionComponent } from './crmModule/crmmotivoscancelacion/crmmotivoscancelacion.component';
import { CrmeditarmotivoscancelacionComponent } from './crmModule/crmeditarmotivoscancelacion/crmeditarmotivoscancelacion.component';
import { DesperfiladosComponent } from './crmModule/desperfilados/desperfilados.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AsesoresPromotoresComponent } from './crmModule/asesores-promotores/asesores-promotores.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from "@fullcalendar/interaction"; // a plugin
import { CalendarComponent } from './examples/calendar/calendar.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContratosMainComponent } from './ruteador/contratos-main/contratos-main.component';
import { ContratoPmComponent } from './ruteador/contrato-pm/contrato-pm.component';
import { ContratoPfComponent } from './ruteador/contrato-pf/contrato-pf.component';
import { ContratoIndePmComponent } from './ruteador/contrato-inde-pm/contrato-inde-pm.component';
import { ContratoIndePfComponent } from './ruteador/contrato-inde-pf/contrato-inde-pf.component';
import { ConfidePmComponent } from './ruteador/confide-pm/confide-pm.component';
import { ConfidePfComponent } from './ruteador/confide-pf/confide-pf.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    AbcclientesComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TablesComponent,
    KeysPipe,
    CrmhomeComponent,
    CrmusuariosComponent,
    AsignacionModulosComponent,
    CrmeditarusuariosComponent,
    AreaComponent,
    PieComponent,
    BarsmultipleComponent,
    CrmcanalesComponent,
    CrmeditarcanalComponent,
    CrmmediosComponent,
    CrmeditarmediosComponent,
    CrmusuariosComponent,
    CrmsubmediosComponent,
    CrmeditarsubmediosComponent,
    CrmtipodecreditoComponent,
    CrmeditartipodecreditoComponent,
    CrmeditarcreditoComponent,
    CrmcreditoComponent,
    CrminstitucionfinancieraComponent,
    CrmeditarinstitucionfinancieraComponent,
    ModalComponent,
    CrmclientesComponent,
    DashboardComponent,
    CrmclientesapartadoComponent,
    CrmarchivosComponent,
    BuroCreditoComponent,
    CrmmotivoscancelacionComponent,
    CrmeditarmotivoscancelacionComponent,
    DesperfiladosComponent,
    AsesoresPromotoresComponent,
    CalendarComponent,
    ResetPasswordComponent,
    ContratosMainComponent,
    ContratoPmComponent,
    ContratoPfComponent,
    ContratoIndePmComponent,
    ContratoIndePfComponent,
    ConfidePmComponent,
    ConfidePfComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'vivanzaApp' }),
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // FullCalendarModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FullCalendarModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
