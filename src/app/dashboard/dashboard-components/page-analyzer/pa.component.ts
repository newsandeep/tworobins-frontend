import { Component } from "@angular/core";
@Component({
  selector: "app-pa",
  templateUrl: "./pa.component.html",
})
export class PageAnalyzerComponent {
  constructor() {}

  // bar chart
  public barChartData: Array<any> = [
    {
      data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
      label: "Cost",
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
  ];
  public barChartLabels: Array<any> = ["1", "2", "3", "4", "5", "6", "7"];
  public barChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: "#00c292",
      hoverBackgroundColor: "#00c292",
      hoverBorderWidth: 2,
      hoverBorderColor: "#00c292",
    },
  ];
  public barChartLegend = false;
  public barChartType = "bar";

  // bar chart 2
  public barChartData2: Array<any> = [
    {
      data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
      label: "Cost",
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
  ];
  public barChartLabels2: Array<any> = ["1", "2", "3", "4", "5", "6", "7"];
  public barChartOptions2: any = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public barChartColors2: Array<any> = [
    {
      backgroundColor: "#ab8ce4",
      hoverBackgroundColor: "#ab8ce4",
      hoverBorderWidth: 2,
      hoverBorderColor: "#ab8ce4",
    },
  ];
  public barChartLegend2 = false;
  public barChartType2 = "bar";

  // bar chart 3
  public barChartData3: Array<any> = [
    {
      data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
      label: "Cost",
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
  ];
  public barChartLabels3: Array<any> = ["1", "2", "3", "4", "5", "6", "7"];
  public barChartOptions3: any = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public barChartColors3: Array<any> = [
    {
      backgroundColor: "#03a9f3",
      hoverBackgroundColor: "#03a9f3",
      hoverBorderWidth: 2,
      hoverBorderColor: "#03a9f3",
    },
  ];
  public barChartLegend3 = false;
  public barChartType3 = "bar";

  // bar chart 4
  public barChartData4: Array<any> = [
    {
      data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
      label: "Cost",
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
  ];
  public barChartLabels4: Array<any> = ["1", "2", "3", "4", "5", "6", "7"];
  public barChartOptions4: any = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public barChartColors4: Array<any> = [
    {
      backgroundColor: "#fb9678",
      hoverBackgroundColor: "#fb9678",
      hoverBorderWidth: 2,
      hoverBorderColor: "#fb9678",
    },
  ];
  public barChartLegend4 = false;
  public barChartType4 = "bar";
}
