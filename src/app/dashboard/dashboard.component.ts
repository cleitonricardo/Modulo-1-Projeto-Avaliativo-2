import { Component, OnInit } from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import { Dashboard } from './dashboard';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'esp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
 
  barChartData = {
    labels:  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Consumo Mensal',
      data: [100, 400, 400, 100, 100, 200, 400, 400, 500, 900, 1100, 1200],
      fill: false,
      borderColor: '#2196F3',
      pointBorderColor: 'black',
      tension: 0.4
    }]
  };
    

    
}

