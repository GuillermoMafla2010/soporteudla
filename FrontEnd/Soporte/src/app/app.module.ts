import { DetallemodalService } from './componentes/servicios/detallemodal.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { UsuarioCrearComponent } from './componentes/usuario-crear/usuario-crear.component';
import { RolesComponent } from './componentes/roles/roles.component';
import { UsuarioEditarComponent } from './componentes/usuario-editar/usuario-editar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ClientesCrearComponent } from './componentes/clientes-crear/clientes-crear.component';
import { IncidenciaCrearComponent } from './componentes/incidencia-crear/incidencia-crear.component';
import { EstadosComponent } from './componentes/estados/estados.component';
import { ClientesEditarComponent } from './componentes/clientes-editar/clientes-editar.component';
import { VerIncidenciasComponent } from './componentes/ver-incidencias/ver-incidencias.component';
import { TruncatePipe } from './componentes/pipes/truncate.pipe';
import { ModalusuarioComponent } from './componentes/modalusuario/modalusuario.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MainMenuComponent } from './componentes/main-menu/main-menu.component';
import { PendientesComponent } from './componentes/pendientes/pendientes.component';

import { RequerimientosCrearComponent } from './componentes/requerimientos-crear/requerimientos-crear.component';

import { RequerimientosVerComponent } from './componentes/requerimientos-ver/requerimientos-ver.component';
import { ModalVerIncidenciaComponent } from './componentes/modal-ver-incidencia/modal-ver-incidencia.component';
import { ModalVerRequerimientosComponent } from './componentes/modal-ver-requerimientos/modal-ver-requerimientos.component';
import { ModalVerClientesComponent } from './componentes/modal-ver-clientes/modal-ver-clientes.component';
import { ModalEditarRequerimientosComponent } from './componentes/modales-editar/modal-editar-requerimientos/modal-editar-requerimientos.component';
import { ModalEditarIncidenciasComponent } from './componentes/modales-editar/modal-editar-incidencias/modal-editar-incidencias.component';
import { ModalEditarPendientesComponent } from './componentes/modales-editar/modal-editar-pendientes/modal-editar-pendientes.component';
import { ModalVerPendientesComponent } from './componentes/modales-ver/modal-ver-pendientes/modal-ver-pendientes.component';
import { PendientesRequerimientosComponent } from './componentes/pendientes-requerimientos/pendientes-requerimientos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioCrearComponent,
    RolesComponent,
    UsuarioEditarComponent,
    ClientesCrearComponent,
    IncidenciaCrearComponent,
    EstadosComponent,
    ClientesEditarComponent,
    VerIncidenciasComponent,
    TruncatePipe,
    ModalusuarioComponent,
    MainMenuComponent,
    PendientesComponent,

    RequerimientosCrearComponent,

    RequerimientosVerComponent,
    ModalVerIncidenciaComponent,
    ModalVerRequerimientosComponent,
    ModalVerClientesComponent,
    ModalEditarRequerimientosComponent,
    ModalEditarIncidenciasComponent,
    ModalEditarPendientesComponent,
    ModalVerPendientesComponent,
    PendientesRequerimientosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MaterialModule,

  ],


  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
