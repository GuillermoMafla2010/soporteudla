import { MatDialog } from '@angular/material/dialog';
import { ModalusuarioComponent } from './../modalusuario/modalusuario.component';
import { DetallemodalService } from './../servicios/detallemodal.service';

import { UsuarioEditar } from './usuarioeditar';
import { UsuariosService } from './../servicios/usuarios.service';
import { Component, OnInit, Input,ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  public usuarioeditar:UsuarioEditar[]
  usuarioseleccionado:UsuarioEditar

  //METODOS PARA LA TABLA
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'cargo','sede','Opciones'];
  dataSource: any

  //---------------------

  constructor(private usuarioservice:UsuariosService,private modal:DetallemodalService,public dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;

    setTimeout(() => {
      this.obtenerUsuarios();

    }, 10);



  }

  obtenerUsuarios(){
    this.usuarioservice.getUsuarios().subscribe(usuarios=>{
      this.usuarioeditar=usuarios
      this.dataSource.data=usuarios
      console.log(this.dataSource.data)
    })
    this.usuarioservice.notificarUpload.subscribe(usuarios=>{
      console.log(usuarios)

      this.dataSource.data=this.dataSource.data.map(original=>{

        if(usuarios.id===original.id){
          console.log(usuarios)
          original=usuarios
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
this.usuarioeditar.map(x=>{
  if(x.id==usuario){
    array.push(x)
    array.map(x=>{
      //console.log(x)
      array2=x
    })
  }
})
console.log(array2)


    await this.dialog.open(ModalusuarioComponent, {


      data: {
        nombre: usuario
      }
    });
  }






  }






