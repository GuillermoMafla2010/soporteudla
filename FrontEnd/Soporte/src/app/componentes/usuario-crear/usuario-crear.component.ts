import { SedesService } from './../servicios/sedes.service';
import { Sedes } from './../models/Sedes';
import { RolesService } from './../servicios/roles.service';
import { Roles } from './../roles/roles';
import { UsuariosService } from './../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario';



@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  private usuario:Usuario=new Usuario;
  private roles:Roles;
  private sedes:Sedes
  constructor(private usuarioservice:UsuariosService , private rolesservice:RolesService , private sedesservice:SedesService) { }

  ngOnInit() {
    this.cargarroles();
    this.cargasedes();
  }

  nuevousuario(){

    this.usuarioservice.postUsuario(this.usuario).subscribe(usuario=>{console.log(usuario)})
  }

  cargarroles(){
    this.rolesservice.getRoles().subscribe(roles=>{this.roles=roles; console.log(this.roles)})
  }

  cargasedes(){
    this.sedesservice.getSedes().subscribe(sedes=>{this.sedes=sedes; console.log(this.sedes)})
  }

}
