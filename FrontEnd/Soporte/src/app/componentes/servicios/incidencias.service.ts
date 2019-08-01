import { LoginService } from './login.service';
import { Incidencia } from './../models/Incidencia';
import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  private url="http://localhost:8000/api/incidencia";
  private url1="http://localhost:8000/api/incidencias";
  private _notificarUpload=new EventEmitter<any>();

  private cabecera=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient,private loginservice:LoginService) { }

  get notificarUpload():EventEmitter<any>{
    return this._notificarUpload;
  }

  private agregarAutorizacion(){
    let cabecera=new HttpHeaders();
    let token=this.loginservice.token;
    if(token!=null){
      return this.cabecera.append('Authorization','Bearer '+token)
    }
  }

  postIncidencia(incidencia:Incidencia):Observable<any>{
    return this.http.post<any>(this.url,incidencia);
  }

  getIncidencias():Observable<any>{
    return this.http.get<any>(this.url,{headers:this.agregarAutorizacion()});
  }

  getIncidenciasPorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url1}/${id}`)
  }

  update(incidencia:Incidencia):Observable<any>{
    return this.http.put<any>(`${this.url}/${incidencia.id}`,incidencia)
  }
}
