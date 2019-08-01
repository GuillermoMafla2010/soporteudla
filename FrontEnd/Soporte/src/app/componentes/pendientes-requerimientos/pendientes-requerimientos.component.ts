import { RequerimientosService } from './../servicios/requerimientos.service';
import { ModalEditarRequerimientosComponent } from './../modales-editar/modal-editar-requerimientos/modal-editar-requerimientos.component';
import { ModalVerRequerimientosComponent } from './../modal-ver-requerimientos/modal-ver-requerimientos.component';
import { IncidenciasService } from './../servicios/incidencias.service';
import { ModalEditarIncidenciasComponent } from './../modales-editar/modal-editar-incidencias/modal-editar-incidencias.component';
import { ModalVerIncidenciaComponent } from './../modal-ver-incidencia/modal-ver-incidencia.component';
import { UsuariosService } from './../servicios/usuarios.service';
import { Tecnico } from './../models/Tecnicos';
import { TecnicosService } from './../servicios/tecnicos.service';
import { LoginService } from './../servicios/login.service';
import { Incidencia } from './../models/Incidencia';
import { PendientesService } from './../servicios/pendientes.service';
import { Component, OnInit } from '@angular/core';
import { EstadoService } from './../servicios/estado.service';
import { Estados } from './../models/Estados';
import { MatDialog } from '@angular/material/dialog';
import {ModalVerPendientesComponent} from '../modales-ver/modal-ver-pendientes/modal-ver-pendientes.component';


@Component({
  selector: 'app-pendientes-requerimientos',
  templateUrl: './pendientes-requerimientos.component.html',
  styleUrls: ['./pendientes-requerimientos.component.css']
})
export class PendientesRequerimientosComponent implements OnInit {

  estados:Estados[]
  private tecnico:Tecnico
  private incidencia:Incidencia
  private detalles:any
  displayedColumns: string[] = ['id', 'Descripcion', 'Usuario', 'Estado','opciones'];
  constructor(public dialog: MatDialog,
    private pendienteservice:PendientesService,
    private loginservice:LoginService,
    private usuariosservices:UsuariosService,
    private estadoservice:EstadoService,
    private incidenciaservice:IncidenciasService,
    private requerimientoservice:RequerimientosService) { }

  ngOnInit() {
    this.tecnicos();
    this.cargaestados();
    console.log(this.loginservice.usuario.id)
  }

  tecnicos(){
    this.usuariosservices.getUsuariosPorId(this.loginservice.usuario.id as number).subscribe(tec=>{tec.map(x=>{this.tecnico=x});console.log(this.tecnico)})
  }

  cargaestados(){
    this.estadoservice.getEstados().subscribe(estados=>{this.estados=estados});
  }


  abrirModal(usuario){
    this.dialog.open(ModalVerRequerimientosComponent, {


      data: {
        nombre: usuario
      }
    });
  }

  editarModal(usuario){
    this.dialog.open(ModalEditarRequerimientosComponent, {


      data: {
        nombre: usuario
      }
    });
  }

  onChange(newValue) {
    console.log(newValue);
    this.pendienteservice.getPendientesReq(this.loginservice.usuario.id,newValue).subscribe(res=>{
      this.detalles=res;
      console.log(this.detalles)
  })

  this.requerimientoservice.notificarUpload.subscribe(req=>{
    console.log(req)
    //CON ESTA LINEA SACA DEL ARRAY UN ESTADO DIFERENTE
    //------LINEA IMPORTANTISIMA---------------------------
    this.detalles=this.detalles.filter(number=>number!==req)
    console.log(this.detalles)
    //--------------------------------------------------
    this.detalles=this.detalles.map(original=>{
      if(req.id===original.id ){
        console.log(req)
        console.log(original)
        original=req

      }
      return original
    })
  })
}

}
