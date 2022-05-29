import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidades } from '../unidades/unidades';

@Injectable({
  providedIn: 'root'
})
export class GeraçõesService {

  private apiUrl1 ="http://localhost:3000/geracoes";

  constructor(private http: HttpClient) { }
  
  getGeracoes():Observable<Unidades[]>{
    return this.http.get<Unidades[]>(this.apiUrl1)
  }
}
