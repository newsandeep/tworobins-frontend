import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  // subtitle: string;
  constructor() {
    // this.subtitle = 'This is some text within a card block.';
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [0, 50, 20, 60, 30, 25, 10, 24], label: "Iphone" },
    { data: [0, 15, 50, 12, 20, 80, 10, 1], label: "Ipad" },
    { data: [0, 5, 65, 7, 120, 40, 10, 1], label: "Itouch" },
  ];
  public lineChartLabels: Array<any> = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
  ];
  public lineChartOptions: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "rgba(255, 255, 255, .1)",
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: "rgba(192,200,215,0.9)",
      borderColor: "rgba(192,200,215, 0.0)",
      pointBackgroundColor: "rgba(171,140,228,0)",
      pointBorderColor: "rgba(171,140,228,1)",
      pointHoverBackgroundColor: "rgba(171,140,228,1)",
      pointHoverBorderColor: "rgba(171,140,228,1)",
    },
    {
      backgroundColor: "rgba(1,192,200,0.5)",
      borderColor: "rgba(1,192,200,0)",
      pointBackgroundColor: "rgba(1,192,200,0)",
      pointBorderColor: "rgba(1,192,200,1)",
      pointHoverBackgroundColor: "rgba(1,192,200,1)",
      pointHoverBorderColor: "rgba(1,192,200,1)",
    },
    {
      backgroundColor: "rgba(251,150,120,0.5)",
      borderColor: "rgba(251,150,120,0)",
      pointBackgroundColor: "rgba(251,150,120,0)",
      pointBorderColor: "rgba(251,150,120,1)",
      pointHoverBackgroundColor: "rgba(251,150,120,1)",
      pointHoverBorderColor: "rgba(251,150,120,1)",
    },
  ];
  public lineChartLegend = false;
  public lineChartType = "line";

  ngAfterViewInit() {}
}
