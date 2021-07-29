import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CalendarComponent } from './examples/calendar/calendar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from '../app/clientesModule/clientes/clientes.component';
import { AbcclientesComponent } from '../app/clientesModule/abcclientes/abcclientes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/loginModule/login/login.component';
import { CrmhomeComponent } from '../app/crmModule/crmhome/crmhome.component';
import { AuthService } from '../app/services/auth.service';

import { LoginGuardGuard } from '../app/guards/login-guard.guard';
import { CrmusuariosComponent } from './crmModule/crmusuarios/crmusuarios.component';
import { AsignacionModulosComponent } from './asignacion-modulos/asignacion-modulos.component';
import { CrmeditarusuariosComponent } from './crmModule/crmeditarusuarios/crmeditarusuarios.component';
import { CrmcanalesComponent } from './crmModule/crmcanales/crmcanales.component';
import { CrmeditarcanalComponent } from './crmModule/crmeditarcanal/crmeditarcanal.component';
import { CrmmediosComponent } from './crmModule/crmmedios/crmmedios.component';
import { CrmeditarmediosComponent } from './crmModule/crmeditarmedios/crmeditarmedios.component';
import { CrmeditarsubmediosComponent } from './crmModule/crmeditarsubmedios/crmeditarsubmedios.component';
import { CrmsubmediosComponent } from './crmModule/crmsubmedios/crmsubmedios.component';
import { CrmtipodecreditoComponent } from './crmModule/crmtipodecredito/crmtipodecredito.component';
import { CrmeditartipodecreditoComponent } from './crmModule/crmeditartipodecredito/crmeditartipodecredito.component';
import { CrmcreditoComponent } from './crmModule/crmcredito/crmcredito.component';
import { CrmeditarcreditoComponent } from './crmModule/crmeditarcredito/crmeditarcredito.component';
import { CrminstitucionfinancieraComponent } from './crmModule/crminstitucionfinanciera/crminstitucionfinanciera.component';
import { CrmeditarinstitucionfinancieraComponent } from './crmModule/crmeditarinstitucionfinanciera/crmeditarinstitucionfinanciera.component';
import { CrmclientesComponent } from './crmModule/crmclientes/crmclientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrmclientesapartadoComponent } from './crmModule/crmclientesapartado/crmclientesapartado.component';
import { CrmarchivosComponent } from './crmModule/crmarchivos/crmarchivos.component';
import { ContratosComponent } from './contratos/contratos.component';
import { CrmmotivoscancelacionComponent } from './crmModule/crmmotivoscancelacion/crmmotivoscancelacion.component';
import { CrmeditarmotivoscancelacionComponent } from './crmModule/crmeditarmotivoscancelacion/crmeditarmotivoscancelacion.component';
import { DesperfiladosComponent } from './crmModule/desperfilados/desperfilados.component';
import { AsesoresPromotoresComponent } from './crmModule/asesores-promotores/asesores-promotores.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContratosMainComponent } from './contratos/contratos-main/contratos-main.component';
import { ContratoPmComponent } from './contratos/contrato-pm/contrato-pm.component';
import { ConfidePfComponent } from './contratos/confide-pf/confide-pf.component';
import { ConfidePmComponent } from './contratos/confide-pm/confide-pm.component';
import { ContratoIndePfComponent } from './contratos/contrato-inde-pf/contrato-inde-pf.component';
import { ContratoIndePmComponent } from './contratos/contrato-inde-pm/contrato-inde-pm.component';
import { ContratoPfComponent } from './contratos/contrato-pf/contrato-pf.component';
import { ContratoApruebaPf30Component } from './contratos/contrato-aprueba-pf30/contrato-aprueba-pf30.component';
import { ContratoApruebaPm30Component } from './contratos/contrato-aprueba-pm30/contrato-aprueba-pm30.component';
import { ContratoTiempoDeterminadoPmComponent } from './contratos/contrato-tiempo-determinado-pm/contrato-tiempo-determinado-pm.component';
import { ContratoTiempoDeterminadoPfComponent } from './contratos/contrato-tiempo-determinado-pf/contrato-tiempo-determinado-pf.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: "full" },
  { path: 'examples', component: HomeComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'reset-password', component: ResetPasswordComponent , pathMatch: "full" },
  { path: 'home', component: DashboardComponent, pathMatch: "full" },
  { path: 'clientes', component: ClientesComponent, pathMatch: "full" },
  { path: 'abcclientes', component: AbcclientesComponent, pathMatch: "full" },
  { path: 'crmhome', component: CrmhomeComponent, pathMatch: "full" },
  { path: 'crmusuarios', component: CrmusuariosComponent, pathMatch: "full" },
  { path: 'asignacion-modulos', component: AsignacionModulosComponent, pathMatch: "full" },
  { path: 'crmeditarusuarios', component: CrmeditarusuariosComponent, pathMatch: "full" },
  { path: 'crmcanales', component: CrmcanalesComponent, pathMatch: "full" },
  { path: 'crmeditarcanal', component: CrmeditarcanalComponent, pathMatch: "full" },
  { path: 'crmmedios', component: CrmmediosComponent, pathMatch: "full" },
  { path: 'crmeditarmedios', component: CrmeditarmediosComponent, pathMatch: "full" },
  { path: 'crmsubmedios', component: CrmsubmediosComponent, pathMatch: "full" },
  { path: 'crmeditarsubmedios', component: CrmeditarsubmediosComponent, pathMatch: "full" },
  { path: 'crmtipodecredito', component: CrmtipodecreditoComponent, pathMatch: "full" },
  { path: 'crmeditartipodecredito', component: CrmeditartipodecreditoComponent, pathMatch: "full" },
  { path: 'crmcredito', component: CrmcreditoComponent, pathMatch: "full" },
  { path: 'crmeditarcredito', component: CrmeditarcreditoComponent, pathMatch: "full" },
  { path: 'crminstitucionfinanciera', component: CrminstitucionfinancieraComponent, pathMatch: "full" },
  { path: 'crmeditarinstitucionfinanciera', component: CrmeditarinstitucionfinancieraComponent, pathMatch: "full" },
  { path: 'crmclientes', component: CrmclientesComponent, pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent, pathMatch: "full" },
  { path: 'crmclientesapartado', component: CrmclientesapartadoComponent, pathMatch: "full" },
  { path: 'crmarchivos', component: CrmarchivosComponent, pathMatch: "full" },
  { path: 'crmformatoapartado', component: ContratosComponent, pathMatch: "full" },
  { path: 'crmmotivoscancelacion', component: CrmmotivoscancelacionComponent, pathMatch: "full" },
  { path: 'crmeditarmotivoscancelacion', component: CrmeditarmotivoscancelacionComponent, pathMatch: "full" },
  { path: 'desperfilados', component: DesperfiladosComponent, pathMatch: "full" },
  { path: 'asesores-promotores', component: AsesoresPromotoresComponent, pathMatch: "full" },
  { path: 'calendario', component: CalendarComponent, pathMatch: "full" },
  { path: 'contratos-main', component: ContratosMainComponent, pathMatch: "full" },
  { path: 'reset-password', component: ResetPasswordComponent,pathMatch:"full"},
  { path: 'confidepf', component: ConfidePfComponent, pathMatch: "full" },
  { path: 'confidepm', component:ConfidePmComponent,pathMatch:"full"},
  { path: 'contratoindepf', component:ContratoIndePfComponent,pathMatch:"full"},
  { path: 'contratoindepm', component:ContratoIndePmComponent,pathMatch:"full"},
  { path: 'contratopf', component:ContratoPfComponent,pathMatch:"full"},
  { path: 'contratoPM', component:ContratoPmComponent,pathMatch:"full"},
  { path: 'contrato-a-pruebapf30', component:ContratoApruebaPf30Component,pathMatch:"full"},
  { path: 'contrato-a-pruebapm30', component:ContratoApruebaPm30Component,pathMatch:"full"},
  { path: 'contrato-tiempo-determinadopm', component:ContratoTiempoDeterminadoPmComponent,pathMatch:"full"},
  { path: 'contrato-tiempo-determinadopf', component:ContratoTiempoDeterminadoPfComponent,pathMatch:"full"},
  { path: 'dashboardadmin', component: DashboardAdminComponent, pathMatch: "full" }


]


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'

  })],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule {

  public title = "";

}
