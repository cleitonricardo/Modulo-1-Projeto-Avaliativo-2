import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Unidades } from './unidades';

@Component({
  selector: 'esp-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss'],
  
})
export class UnidadesComponent implements OnInit {
  lista: Unidades[]=[];

  constructor(private http:HttpClient) { }
 

  ngOnInit(): void {
    this.http
    .get<Unidades[]>('http://localhost:3000/usina')
    .subscribe((resultado) =>{
      this.lista=resultado;
    })
  }

}

