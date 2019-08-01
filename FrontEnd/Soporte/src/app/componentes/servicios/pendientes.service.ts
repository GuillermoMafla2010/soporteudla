import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendientesService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8000/api/individual"
  private url1="http://localhost:8000/api/individualreq"

  getPendientes(tecnico:number,estado:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${tecnico}/${estado}`);
  }

  getPendientesReq(tecnico:number,estado:number):Observable<any>{
    return this.http.get<any>(`${this.url1}/${tecnico}/${estado}`);
  }
}
