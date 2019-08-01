import { Roles } from './../roles/roles';
import { Sedes } from './../models/Sedes';
import { SedesService } from './../servicios/sedes.service';
import { RolesService } from './../servicios/roles.service';
import { UsuarioEditar } from './../usuario-editar/usuarioeditar';
import { Usuario } from './../usuario-crear/usuario';
import { Component, OnInit ,Inject} from '@angular/core';
import { DetallemodalService } from './../servicios/detallemodal.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';
import { UsuariosService } from './../servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2'



@Component({
  selector: 'app-modalusuario',
  templateUrl: './modalusuario.component.html',
  styleUrls: ['./modalusuario.component.css']
})
export class ModalusuarioComponent implements OnInit {

  private sedes:Sedes;
  private roles:Roles;
  private loading=true;
  private loadingupdate=false;

  public usuarioeditar:UsuarioEditar
  public nuevo:UsuarioEditar=new UsuarioEditar()
  public titulo:""
  public nombre:""
  public empselected:number


  constructor(public dialogRef: MatDialogRef<ModalusuarioComponent>,
              private usuarioservice:UsuariosService,
              private modalservice:DetallemodalService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private sedeservice:SedesService,
              private rolesservice:RolesService,
              private activatedroute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {


    /*console.log(this.data.nombre);
    this.data.nombre.map(x=>this.usuarioeditar=x)
    this.usuarioeditar as UsuarioEditar
    this.titulo=this.data.nombre[0].nombre
    console.log(this.usuarioeditar)*/
    this.cargarroles()
    this.cargasedes()
    this.cargainformacion();
    console.log(this.loading)



  }

  actualizar(){


  this.loadingupdate=true;
     this.usuarioeditar.sede_id=this.usuarioeditar.sede.id
     this.usuarioeditar.roles_id=this.usuarioeditar.roles[0].id
     console.log(this.usuarioeditar)
     this.usuarioservice.updateUsuario(this.usuarioeditar).subscribe(x=>{

      if(x.status==200){
        this.loadingupdate=false
        //
        this.router.navigate(["/editarusuario"])
        this.dialogRef.close();
        swal.fire("Actualizado","El usuario se actualizo correctamente","success")
      }

  })
    this.usuarioservice.notificarUpload.emit(this.usuarioeditar)
    }

    async cargarroles(){
      await this.rolesservice.getRoles().subscribe(roles=>{this.roles=roles; })
      //this.empselected=this.usuarioeditar.sede
    }

    async cargasedes(){
      await this.sedeservice.getSedes().subscribe(sedes=>{this.sedes=sedes; })
    }

    compararsedes(o1:any,o2:any){
        return o1===null || o2===null ? false : o1.id===o2.id;
    }


    compararroles(o1:any,o2:any){
      return o1===null || o2===null ? false : o1.id===o2.id;
  }

  async cargainformacion(){

     await this.usuarioservice.getUsuariosPorId(this.data.nombre).subscribe(user=>{
      user.map(x=>{this.usuarioeditar=x});
      console.log(this.usuarioeditar)
      this.loading=false

    })
  }
/*
  async cargarroles(){
    await this.rolesservice.getRoles().subscribe(roles=>{this.roles=roles; })
  }

  async cargasedes(){
    await this.sedeservice.getSedes().subscribe(sedes=>{this.sedes=sedes; })
  }

  actualizar(){
  //this.usuarioservice.updateUsuario(this.data.nombre,this.usuarioeditar)
  console.log(this.nuevo);
  }



  cerrarModal(){
    this.modalservice.cerrarModal();
  }*/



}
