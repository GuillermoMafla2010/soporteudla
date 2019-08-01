import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url="http://localhost:8000/api/estados"
  constructor(private http:HttpClient) { }

  getEstados():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
