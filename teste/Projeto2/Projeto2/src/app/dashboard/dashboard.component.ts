import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'esp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _dashboardService:DashboardService){  }
  public dashboard:Dashboard[];

  ngOnInit(): void {
    }
}

