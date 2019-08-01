import { Clientes } from './../../models/Clientes';
import { EstadoService } from './../../servicios/estado.service';
import { TecnicosService } from './../../servicios/tecnicos.service';
import { Usuario } from './../../usuario-crear/usuario';
import { IncidenciasService } from './../../servicios/incidencias.service';
import { Incidencia } from './../../models/Incidencia';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';

import {Estados} from '../../models/Estados';
import {Sedes} from '../../models/Sedes';
import {SedesService} from '../../servicios/sedes.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-modal-editar-incidencias',
  templateUrl: './modal-editar-incidencias.component.html',
  styleUrls: ['./modal-editar-incidencias.component.css']
})
export class ModalEditarIncidenciasComponent implements OnInit {

  public incidencia:Incidencia=new Incidencia
  public estados:Estados
  public clientes:Clientes
  public usuarios:Usuario
  public sedes:Sedes
  public estadoseleccionado=false

  constructor(
    public dialogRef: MatDialogRef<ModalEditarIncidenciasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public incidenciaservice:IncidenciasService,
    public tecnicoservice:TecnicosService,
    public sedeservice:SedesService,
    public estadoservice:EstadoService
   ) { }

  ngOnInit() {
    this.getIncidencia()
    this.getEstados()
    console.log(this.data.nombre)
  }

  actualizar(){
    this.incidencia.estado_id=this.incidencia.estados.id
    this.incidencia.cliente_id=this.incidencia.clientes.id
    this.incidencia.user_id=this.incidencia.usuarios.id
    this.incidenciaservice.update(this.incidencia).subscribe(x=>{
      console.log(x)
      this.incidenciaservice.notificarUpload.emit(this.incidencia)
      swal.fire("Exito","La incidencia se actualizo correctamente","success")
      this.dialogRef.close()
    })
    console.log(this.incidencia)
  }

  async getIncidencia(){
  await  this.incidenciaservice.getIncidenciasPorId(this.data.nombre as number).subscribe(x=>{

    x.map(y=>{
        this.incidencia=y

          console.log(this.sedes)

          console.log(this.clientes)
        })


    this.sedeservice.getSedePorId(this.incidencia.clientes.sede_id).subscribe(x=>{
      this.sedes=x
      x.map(y=>{
        this.clientes=y.clientes
        console.log(this.clientes)
      })
    })


    this.tecnicoservice.getTecnicos(this.incidencia.clientes.sede_id).subscribe(z=>{
      this.usuarios=z
      console.log(this.usuarios)
    })


      console.log(this.incidencia)
      })








     /* this.tecnicoservice.getTecnicos(this.incidencia.clientes.sede_id).subscribe(x=>{
        x.map(y=>{this.sedes=y})
        console.log(this.sedes)
      })
*/
  }

  getEstados(){
    this.estadoservice.getEstados().subscribe(x=>{
      this.estados=x
    })
  }

  compararclientes(o1:any,o2:any){
    return o1===null || o2===null ? false : o1.id===o2.id;
}

compararusuarios(o1:any,o2:any){
  return o1===null || o2===null ? false : o1.id===o2.id;
}

compararestados(o1:any,o2:any){
  return o1===null || o2===null ? false : o1.id===o2.id;
}

onChange(newValue) {
  if(newValue.id==4||newValue.id==3){
    this.estadoseleccionado=true
    console.log(typeof newValue)
    console.log("verdad")
  }else{
    this.estadoseleccionado=false
  }

  console.log(newValue)

  // ... do other stuff here ...
}

}
