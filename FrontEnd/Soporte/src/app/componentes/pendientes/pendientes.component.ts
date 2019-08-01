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
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {
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
    private incidenciaservice:IncidenciasService) { }

  ngOnInit() {
    this.tecnicos();
    this.cargaestados();
    console.log(this.loginservice.usuario.id)

  }

  abrirModal(usuario){
    this.dialog.open(ModalVerIncidenciaComponent, {


      data: {
        nombre: usuario
      }
    });
  }

  editarModal(usuario){
    this.dialog.open(ModalEditarIncidenciasComponent, {


      data: {
        nombre: usuario
      }
    });
  }






  tecnicos(){
    this.usuariosservices.getUsuariosPorId(this.loginservice.usuario.id as number).subscribe(tec=>{tec.map(x=>{this.tecnico=x});console.log(this.tecnico)})
  }

  cargaestados(){
    this.estadoservice.getEstados().subscribe(estados=>{this.estados=estados});
  }

  onChange(newValue) {
    console.log(newValue);
    this.pendienteservice.getPendientes(this.loginservice.usuario.id,newValue).subscribe(res=>{
      this.detalles=res;
      console.log(this.detalles)
  })

  this.incidenciaservice.notificarUpload.subscribe(req=>{
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




compararpendientes(o1:any,o2:any){
  return o1===null || o2===null ? false : o1.id===o2.id;
}



}
