import { ModalVerPendientesComponent } from './componentes/modales-ver/modal-ver-pendientes/modal-ver-pendientes.component';
import { ModalEditarIncidenciasComponent } from './componentes/modales-editar/modal-editar-incidencias/modal-editar-incidencias.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatButtonModule,MatTableModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { ModalusuarioComponent } from './componentes/modalusuario/modalusuario.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ModalVerIncidenciaComponent} from './componentes/modal-ver-incidencia/modal-ver-incidencia.component';
import {MatListModule} from '@angular/material/list';
import {ModalVerRequerimientosComponent} from './componentes/modal-ver-requerimientos/modal-ver-requerimientos.component';
import {ModalEditarRequerimientosComponent} from './componentes/modales-editar/modal-editar-requerimientos/modal-editar-requerimientos.component';


@NgModule({
  imports:[
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatListModule


  ],
  exports:[
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatListModule


  ],
  entryComponents: [
    ModalusuarioComponent,
    ModalVerIncidenciaComponent,
    ModalVerRequerimientosComponent,
    ModalEditarRequerimientosComponent,
    ModalEditarIncidenciasComponent,
    ModalVerPendientesComponent

  ],

})

export class MaterialModule {}
