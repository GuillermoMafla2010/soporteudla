import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  private url="http://localhost:8000/api/sedes"
  private url1="http://localhost:8000/api/sedeid"
  constructor(private http:HttpClient) { }


  getSedes():Observable<any>{
      return this.http.get<any>(this.url);
  }

  getSedePorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url1}/${id}`)
  }
}
