import { ClientesService } from './../../servicios/clientes.service';
import { SedesService } from './../../servicios/sedes.service';
import { EstadoService } from './../../servicios/estado.service';
import { Sedes } from './../../models/Sedes';
import { Clientes } from './../../models/Clientes';
import { Usuario } from './../../usuario-crear/usuario';
import { Estados } from './../../models/Estados';
import { Requerimiento } from './../../models/Requerimiento';


import { RequerimientosService } from './../../servicios/requerimientos.service';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';
import {UsuariosService} from '../../servicios/usuarios.service';
import {TecnicosService} from '../../servicios/tecnicos.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-modal-editar-requerimientos',
  templateUrl: './modal-editar-requerimientos.component.html',
  styleUrls: ['./modal-editar-requerimientos.component.css']
})
export class ModalEditarRequerimientosComponent implements OnInit {

  private requerimiento:Requerimiento=new Requerimiento
  private sedes:Sedes
  private sedeid:Sedes
  private estados:Estados
  private usuarios:Usuario
  private clientes:Clientes
  constructor(public dialogRef: MatDialogRef<ModalEditarRequerimientosComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public requerimientoservice:RequerimientosService,
              public estadoservice:EstadoService,
              public sedesservice:SedesService,
              public clientesservice:ClientesService,
              private tecnicoservice:TecnicosService) { }

  ngOnInit() {
    this.getRequerimiento()

    this.getEstados()
    this.getsedes()


    console.log(this.data.nombre)
  }

  async getRequerimiento(){
    await this.requerimientoservice.getRequerimientosPorId(this.data.nombre as number).subscribe(x=>{
      x.map(y=>{
        this.requerimiento=y;
        console.log(this.requerimiento)



      })

      this.sedesservice.getSedePorId(this.requerimiento.clientes.sede_id).subscribe(x=>{
        this.sedeid=x

        x.map(y=>{
          this.clientes=y.clientes


        })

      })

      this.tecnicoservice.getTecnicos(this.requerimiento.clientes.sede_id).subscribe(z=>{
        this.usuarios=z
      })






    })

  }



  getEstados(){
    this.estadoservice.getEstados().subscribe(x=>this.estados=x)
  }

  getsedes(){
    this.sedesservice.getSedes().subscribe(x=>this.sedes=x)
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

actualizar(){

 this.requerimiento.cliente_id=this.requerimiento.clientes.id
 this.requerimiento.estado_id=this.requerimiento.estados.id
 this.requerimiento.user_id=this.requerimiento.usuarios.id
 console.log(this.requerimiento) ;
 this.requerimientoservice.update(this.requerimiento).subscribe(x=>{
   console.log(x)
   this.requerimientoservice.notificarUpload.emit(this.requerimiento)
      swal.fire("Exito","La incidencia se actualizo correctamente","success")
      this.dialogRef.close()

 })


}

  /*getusuarios(){
    this.clientesservice.getClientes().subscribe(x=>this.clientes=x)
  }*/

  /*getclientes(){
    this.usuarioservice.getUsuarios().subscribe(x=>this.usuarios=x)
  }*/







}
