import { Component, OnInit } from '@angular/core';
import { AdminDashService } from 'src/app/services/admin-dash.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: any = {};

  constructor(private dashboardService: AdminDashService) {}

  ngOnInit(): void {
    this.dashboardService.getStats().subscribe(response => {
      this.stats = response.data;
    });
  }
}
