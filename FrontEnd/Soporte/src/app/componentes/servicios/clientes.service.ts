import { Clientes } from './../models/Clientes';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

    private cliente:Clientes
    private url='http://localhost:8000/api/clientes';
    private url1='http://localhost:8000/api/buscar';
  constructor(private http:HttpClient) { }

  getClientes():Observable<any>{
    return this.http.get<any>(this.url);
  }

  postcliente(cliente:Clientes):Observable<any>{
    return this.http.post<any>(this.url,cliente);
  }

  buscarclientepornombre(nombre:string):Observable<any>{
    return this.http.get<any>(`${this.url1}/${nombre}`);
  }
}
