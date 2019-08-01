import { Roles } from './../roles/roles';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url="http://localhost:8000/api/roles"
  constructor(private http:HttpClient) { }

  getRoles():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
