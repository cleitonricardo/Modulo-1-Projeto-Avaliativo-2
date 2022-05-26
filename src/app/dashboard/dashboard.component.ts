import { Component, OnInit } from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import { Dashboard } from './dashboard';
import { NgChartsModule } from 'ng2-charts';
import { Unidades } from '../unidades/unidades';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'esp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
numbers :Unidades[]=[]
qtd:any

constructor(private http:HttpClient){}

ngOnInit(): void {
  this.http
  .get<Unidades[]>('http://localhost:3000/unidades')
  .subscribe((resultado)=>{this.numbers=resultado})

  this.getUsina().subscribe((resultado)=>{this.qtd=resultado.length})
}
 
  barChartData = {
    labels:  ['January', '', '', '', '', '', '', '', '', '', '', 'December'],
    datasets: [{
      label: 'Consumo Mensal',
      data: [100, 400, 400, 100, 100, 200, 400, 400, 500, 900, 1100, 1200],
      fill: false,
      borderColor: '#2196F3',
      pointBorderColor: 'black',
      tension: 0.4
    }]
  }

  getUsina():Observable<Unidades[]>{
    return this.http.get<Unidades[]>('http://localhost:3000/unidades')
  }
  getAtivos(){
    const activePlants =this.numbers.filter(p =>p.ativo === true)
    return activePlants.length
  }
  getInativos(){
    const activePlants1 =this.numbers.filter(p =>p.ativo === false)
    return activePlants1.length
  }
    

    
}

