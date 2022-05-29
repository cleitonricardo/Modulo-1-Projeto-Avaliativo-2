import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Unidades } from '../unidades/unidades';

@Injectable({
  providedIn: 'root'
})
export class UsinasService {

  private apiUrl ="http://localhost:3000/unidades";
  

  constructor(private http: HttpClient) { }

  getUsina():Observable<Unidades[]>{
    return this.http.get<Unidades[]>(this.apiUrl)
  }

  deleteUsina(id:number):Observable<Unidades>{
    const url=`${this.apiUrl}/${id}`;
   
    return this.http.delete<Unidades>(url)
    }
  loadByID(id:number){
    return this.http.get(`${this.apiUrl}/${id}`).pipe(take(1));
  }

}
