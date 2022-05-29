import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geracao } from '../consumo/geracao';

@Injectable({
  providedIn: 'root'
})
export class GeraçõesService {

  private apiUrl1 ="http://localhost:3000/geracoes";

  constructor(private http: HttpClient) { }
  
  getGeracoes():Observable<Geracao[]>{
    return this.http.get<Geracao[]>(this.apiUrl1)
  }
}
