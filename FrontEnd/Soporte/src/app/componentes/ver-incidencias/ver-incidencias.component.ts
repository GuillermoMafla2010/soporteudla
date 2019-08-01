import { ModalEditarIncidenciasComponent } from './../modales-editar/modal-editar-incidencias/modal-editar-incidencias.component';
import { IncidenciasService } from './../servicios/incidencias.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ModalVerIncidenciaComponent} from '../modal-ver-incidencia/modal-ver-incidencia.component';

@Component({
  selector: 'app-ver-incidencias',
  templateUrl: './ver-incidencias.component.html',
  styleUrls: ['./ver-incidencias.component.css']
})
export class VerIncidenciasComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','opciones'];
  private incidencias
  constructor(private incidenciaservice:IncidenciasService,public dialog: MatDialog) { }

  ngOnInit( ) {
    this.getIncidencias();
  }

  getIncidencias(){
    this.incidenciaservice.getIncidencias().subscribe(incidentes=>
      {this.incidencias=incidentes; console.log(this.incidencias)

        this.incidenciaservice.notificarUpload.subscribe(req=>{
          console.log(req)
          this.incidencias=this.incidencias.map(original=>{
            if(req.id===original.id){
              console.log(req)
              original=req
            }
            return original
          })
        })
      })




}

async abrirModal(usuario){
  //this.modal.abrirModal();
  //this.usuarioseleccionado=usuario
  //cofigo para obtener un objeto segun un id de un array
let array=[]
let array2=[]




  await this.dialog.open(ModalVerIncidenciaComponent, {


    data: {
      nombre: usuario
    }
  });
}

editarModal(usuario){
  this.dialog.open(ModalEditarIncidenciasComponent,{
    data:{
      nombre:usuario
    }
  })
}
}
