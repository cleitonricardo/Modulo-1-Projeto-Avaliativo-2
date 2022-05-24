import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../dashboard';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient:HttpClient) { }
private url="http://localhost:3000/usina";

getUsina(): Observable<Dashboard[]>
{
return this._httpClient.get<Dashboard[]>(this.url);
}

}
