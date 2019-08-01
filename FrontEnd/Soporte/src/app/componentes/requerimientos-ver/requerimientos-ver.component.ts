import { Requerimiento } from './../models/Requerimiento';
import { RequerimientosService } from './../servicios/requerimientos.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ModalVerRequerimientosComponent} from '../modal-ver-requerimientos/modal-ver-requerimientos.component';
import { MatDialog } from '@angular/material/dialog';
import {ModalEditarRequerimientosComponent} from '../modales-editar/modal-editar-requerimientos/modal-editar-requerimientos.component';

@Component({
  selector: 'app-requerimientos-ver',
  templateUrl: './requerimientos-ver.component.html',
  styleUrls: ['./requerimientos-ver.component.css']
})
export class RequerimientosVerComponent implements OnInit {

  public requerimiento:Requerimiento[]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','opciones'];
  dataSource: any;

  constructor(private requestservice:RequerimientosService,public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getRequerimientos()
  }

  getRequerimientos(){
    this.requestservice.getRequerimientos().subscribe(x=>{

      this.requerimiento=x;
      this.dataSource.data=x
      console.log(this.requerimiento)
    })

    this.requestservice.notificarUpload.subscribe(req=>{
      console.log(req)
      this.dataSource.data=this.dataSource.data.map(original=>{
        if(req.id===original.id){
          console.log(req)
          original=req
        }
        return original
      })
    })
  }


  async abrirModal(usuario){
    //this.modal.abrirModal();
    //this.usuarioseleccionado=usuario
    //cofigo para obtener un objeto segun un id de un array
  let array=[]
  let array2=[]




    await this.dialog.open(ModalVerRequerimientosComponent, {


      data: {
        nombre: usuario
      }
    });
  }


  async editarModal(usuario){


    this.dialog.open(ModalEditarRequerimientosComponent,{
      data:{
        nombre:usuario
      }
    })
  }


}
