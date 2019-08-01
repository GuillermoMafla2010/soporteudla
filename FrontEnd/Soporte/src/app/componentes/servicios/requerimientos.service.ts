import { Requerimiento } from './../models/Requerimiento';
import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequerimientosService {


  public requerimiento:Requerimiento;
  public url="http://localhost:8000/api/requerimiento"
  public url1="http://localhost:8000/api/requerimientos"
  private _notificarUpload=new EventEmitter<any>();
  constructor(private http:HttpClient) { }

  get notificarUpload():EventEmitter<any>{
    return this._notificarUpload;
  }

  getRequerimientos():Observable<any>{
    return this.http.get<any>(this.url);
  }

  postRequerimientos(descripcion:string,user_id,estado_id,cliente_id,archivo:File):Observable<any>{
    let formData=new FormData();
    formData.append("descripcion",descripcion);
    formData.append("user_id",user_id);
    formData.append("estado_id",estado_id);
    formData.append("cliente_id",cliente_id);
    formData.append("image",archivo);
    return this.http.post<any>(this.url,formData);
  }

  getRequerimientosPorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url1}/${id}`)
  }

  update(requerimiento){
    return this.http.put<any>(`${this.url}/${requerimiento.id}`,requerimiento)
  }
}
