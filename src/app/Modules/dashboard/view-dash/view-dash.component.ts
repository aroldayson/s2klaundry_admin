import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from  'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-view-dash',
  standalone: true,
  imports: [],
  templateUrl: './view-dash.component.html',
  styleUrl: './view-dash.component.css'
})
export class ViewDashComponent implements OnInit{
  public config: any ={
    type: 'line',
    data: {
      labels: ['April','May','June','July','August'],
      datasets: [
        {
          labels: 's',
          data: ['621','1021','2022','3023','4024'],
          backgroundColor: 'white'
        }
      ]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // },
  }
  chart: any;
  ngOnInit(): void {
    this.chart = new  Chart('MyChart',this.config);
  }

}
