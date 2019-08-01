import { PendientesRequerimientosComponent } from './componentes/pendientes-requerimientos/pendientes-requerimientos.component';
import { RequerimientosVerComponent } from './componentes/requerimientos-ver/requerimientos-ver.component';

import { RequerimientosCrearComponent } from './componentes/requerimientos-crear/requerimientos-crear.component';
import { PendientesComponent } from './componentes/pendientes/pendientes.component';
import { MainMenuComponent } from './componentes/main-menu/main-menu.component';
import { VerIncidenciasComponent } from './componentes/ver-incidencias/ver-incidencias.component';
import { ClientesEditarComponent } from './componentes/clientes-editar/clientes-editar.component';
import { IncidenciaCrearComponent } from './componentes/incidencia-crear/incidencia-crear.component';
import { ClientesCrearComponent } from './componentes/clientes-crear/clientes-crear.component';
import { UsuarioEditarComponent } from './componentes/usuario-editar/usuario-editar.component';
import { UsuarioCrearComponent } from './componentes/usuario-crear/usuario-crear.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [

  {path:'login' , component:LoginComponent},
  {path:'crearusuario',component:UsuarioCrearComponent},
  {path:'editarusuario',component:UsuarioEditarComponent},
  {path:'crearcliente',component:ClientesCrearComponent},
  {path:'incidencia',component:IncidenciaCrearComponent},
  {path:'editarcliente',component:ClientesEditarComponent},
  {path:'verincidencia',component:VerIncidenciasComponent},
  {path:'main',component:MainMenuComponent},
  {path:'pendientes',component:PendientesComponent},
  {path:'requerimiento',component:RequerimientosCrearComponent },

  {path:'verrequerimiento',component:RequerimientosVerComponent },
  {path:'pendientesreq',component:PendientesRequerimientosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
