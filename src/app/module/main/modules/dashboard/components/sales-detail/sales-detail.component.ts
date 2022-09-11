import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.scss']
})
export class SalesDetailComponent implements OnInit {
  @ViewChild('mychart') mychart: any;
  
  public canvas: any;
  public chart: Chart | undefined;

  constructor() { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        datasets: [
          {
            data: [1, 5, 8, 5, 9, 6, 10, 25],          
            backgroundColor: ["#2FCA72"],
            borderColor: ["#2FCA72"],
            borderWidth: 1,
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

}
