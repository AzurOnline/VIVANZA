import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';  
import { AppRoutingModule } from './app-routing.module';
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
import { MenuComponent } from './menu/menu.component';
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
import { ModalsComponent } from './examples/modals/modals.component';



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
    MenuComponent,
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
    ModalsComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'vivanzaApp' }),
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
