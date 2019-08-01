import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  private url="http://localhost:8000/api/rolestecnico"
  constructor(private http:HttpClient) { }

  //Retorna todos los tecnicos segun un determinada sede que recibe por parametro
  getTecnicos(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
