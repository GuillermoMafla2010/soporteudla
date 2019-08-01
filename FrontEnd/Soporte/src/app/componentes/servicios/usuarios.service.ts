import { UsuarioEditar } from './../usuario-editar/usuarioeditar';
import { Usuario } from './../usuario-crear/usuario';
import { Observable } from 'rxjs';
import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url='http://localhost:8000/api/users';
  private _notificarUpload=new EventEmitter<any>();
  constructor(private http:HttpClient) { }

  get notificarUpload():EventEmitter<any>{
    return this._notificarUpload;
  }

  postUsuario(usuario:Usuario):Observable<any>{
    return this.http.post<any>(this.url,usuario);
  }

  getUsuarios():Observable<any>{
    return this.http.get<any>(this.url)
  }

  getUsuariosPorId(id:number):Observable<any>{
      return this.http.get<any>(`${this.url}/${id}`)
  }

  updateUsuario(usuario:UsuarioEditar):Observable<any>{
    return this.http.put<any>(`${this.url}/${usuario.id}`,usuario);
  }
}
