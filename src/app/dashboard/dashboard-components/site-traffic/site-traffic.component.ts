import { Component } from '@angular/core';

@Component({
  selector: 'app-site-traffic',
  templateUrl: './site-traffic.component.html'
})
export class SiteTrafficComponent {
  constructor() { }

  // line chart 2

  public lineChartData1: Array<any> = [
    { data: [22, 25, 30, 25, 40], label: 'Share %' }
  ];
  public lineChartLabels1: Array<any> = ['1', '5', '10', '3', '8'];
  public lineChartOptions1: any = {
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          min: 0,
          max: 30,
          stepSize: 20,
          beginAtZero: true
        }
      }]
    },
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false
    }
  };
  public lineChartColors1: Array<any> = [
    {
      backgroundColor: '#FF0000',
      pointRadius: 2,
      borderWidth: 2,
      borderColor: '#FF0000',
    }
  ];
  public lineChartLegend1 = false;
  public lineChartType1 = 'line';

  // line chart 2

  public lineChartData2: Array<any> = [
    { data: [22, 20, 26, 25, 19], label: 'Share %' }
  ];
  public lineChartLabels2: Array<any> = ['1', '5', '10', '3', '8'];
  public lineChartOptions2: any = {
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          min: 0,
          max: 30,
          stepSize: 10,
          beginAtZero: true
        }
      }]
    },
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false
    }
  };
  public lineChartColors2: Array<any> = [
    {
      backgroundColor: '#ffdb4a',
      pointRadius: 2,
      borderWidth: 2,
      borderColor: '#ffdb4a',
    }
  ];
  public lineChartLegend2 = false;
  public lineChartType2 = 'line';

  // line chart 3

  public lineChartData3: Array<any> = [
    { data: [22, 20, 26, 25, 19], label: 'Share %' }
  ];
  public lineChartLabels3: Array<any> = ['1', '5', '10', '3', '8'];
  public lineChartOptions3: any = {
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          min: 0,
          max: 30,
          stepSize: 10,
          beginAtZero: true
        }
      }]
    },
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false
    }
  };
  public lineChartColors3: Array<any> = [
    {
      backgroundColor: '#008000',
      pointRadius: 2,
      borderWidth: 2,
      borderColor: '#008000',
    }
  ];
  public lineChartLegend3 = false;
  public lineChartType3 = 'line';

  // line chart 4

  public lineChartData4: Array<any> = [
    { data: [22, 20, 26, 25, 19], label: 'Bounce %' }
  ];
  public lineChartLabels4: Array<any> = ['1', '5', '10', '3', '8'];
  public lineChartOptions4: any = {
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          min: 0,
          max: 30,
          stepSize: 10,
          beginAtZero: true
        }
      }]
    },
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false
    }
  };
  public lineChartColors4: Array<any> = [
    {
      backgroundColor: '#13dafe',
      pointRadius: 2,
      borderWidth: 2,
      borderColor: '#13dafe',
    }
  ];
  public lineChartLegend4 = false;
  public lineChartType4 = 'line';
}
