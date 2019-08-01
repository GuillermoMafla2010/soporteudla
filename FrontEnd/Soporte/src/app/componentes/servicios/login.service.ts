import { Usuario } from './../usuario-crear/usuario';
import { Login } from './../login/login';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {



  private url='http://localhost:8000/api/login';
  private _usuario:Usuario;
  private _token:string;

  constructor(private http:HttpClient) { }

  isAuthenticated():boolean{
    if(sessionStorage.length>0){
      return true;
    }

    return false;
  }

  cerrarSesion(){
    this._token=null;
    this._usuario=null;
    sessionStorage.clear()
  }

  entrar(login:Login):Observable<any>{
    return this.http.post<any>(this.url,login);
  }

  obtenerToken(auth){
    if(auth!=null){
      return JSON.parse(atob(auth.split(".")[1]))

    }
  }

  guardarUsuario(token){
    let payload=this.obtenerToken(token);
    this._usuario=new Usuario();
    this._usuario.id=payload.id;
    this._usuario.nombre=payload.nombre
    this._usuario.rol=payload.roles.map(x=>x.nombre_rol)
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario))

  }

  guardarToken(token){
    this._token=token;
    sessionStorage.setItem('token',this._token)
  }

  public get token():string{
    if(this._token!=null){
      return this._token
    }
    else if(this._token==null&&sessionStorage.getItem('token')!=null){
      this._token=sessionStorage.getItem('token')
      return this._token
    }
  }

  public get usuario():Usuario{
    if(this._usuario!=null){
      return this._usuario
    }
    else if(this._usuario==null&&sessionStorage.getItem('usuario')!=null){
      this._usuario=JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario
    }
  }

  hasrole(role:string):boolean{
    if(this.usuario!=null){
      if (this.usuario.rol.includes(role)){
        return true
      }
    }

    return false
  }




}
