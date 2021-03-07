import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-site-traffic',
  templateUrl: './site-traffic.component.html',
  providers: [ServiceService]
})
export class SiteTrafficComponent {
  overPriced: any;
  overPricedChartData: Array<any>
  overPricedChartLabels: Array<any>
  overPricedChartOptions: any
  overPricedChartColors: Array<any>
  overPricedChartLegend: any
  overPricedChartType: any

  inlinePriced: any;
  inlinePricedChartData: Array<any>
  inlinePricedChartLabels: Array<any>
  inlinePricedChartOptions: any
  inlinePricedChartColors: Array<any>
  inlinePricedChartLegend: any
  inlinePricedChartType: any

  underPriced: any;
  underPricedChartData: Array<any>
  underPricedChartLabels: Array<any>
  underPricedChartOptions: any
  underPricedChartColors: Array<any>
  underPricedChartLegend: any
  underPricedChartType: any

  noCompetitor: any;
  noCompetitorChartData: Array<any>
  noCompetitorChartLabels: Array<any>
  noCompetitorChartOptions: any
  noCompetitorChartColors: Array<any>
  noCompetitorChartLegend: any
  noCompetitorChartType: any
  constructor(
    private dashboardService: ServiceService
  ) { }


  ngOnInit() {
    this.lineChart1();
  }


  lineChart1() {
    let data = {}
    this.dashboardService.chartNumber1().subscribe(
      responseData => {
        this.overPriced = responseData?.overPriced;
        if (this.overPriced) {
          this.overPricedGraph();
        }
        this.inlinePriced = responseData?.inlinePriced;
        if (this.inlinePriced) {
          this.inlinePricedGraph();
        }
        this.underPriced = responseData?.underPriced;
        if (this.underPriced) {
          this.underPricedGraph();
        }
        this.noCompetitor = responseData?.noCompetitor;
        if (this.noCompetitor) {
          this.noCompetitorGraph();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  overPricedGraph() {
    // line chart overPriced
    this.overPricedChartData = [
      { data: this.overPriced?.sharelist, label: 'Share %' }
    ];
    this.overPricedChartLabels = this.overPriced?.productlist;
    this.overPricedChartOptions = {
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
    this.overPricedChartColors = [
      {
        backgroundColor: '#FF0000',
        pointRadius: 4,
        borderWidth: 2,
        borderColor: '#FF0000',
      }
    ];
    this.overPricedChartLegend = false;
    this.overPricedChartType = 'line';

  }

  inlinePricedGraph() {
    // line chart overPriced
    this.inlinePricedChartData = [
      { data: this.inlinePriced?.sharelist, label: 'Share %' }
    ];
    this.inlinePricedChartLabels = this.inlinePriced?.productlist;
    this.inlinePricedChartOptions = {
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
    this.inlinePricedChartColors = [
      {
        backgroundColor: '#ffdb4a',
        pointRadius: 2,
        borderWidth: 2,
        borderColor: '#ffdb4a',
      }
    ];
    this.inlinePricedChartLegend = false;
    this.inlinePricedChartType = 'line';

  }



  underPricedGraph() {
    // line chart overPriced
    this.underPricedChartData = [
      { data: this.underPriced?.sharelist, label: 'Share %' }
    ];
    this.underPricedChartLabels = this.underPriced?.productlist;
    this.underPricedChartOptions = {
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
    this.underPricedChartColors = [
      {
        backgroundColor: '#008000',
        pointRadius: 2,
        borderWidth: 2,
        borderColor: '#008000',
      }
    ];
    this.underPricedChartLegend = false;
    this.underPricedChartType = 'line';

  }
  
  
  noCompetitorGraph() {
    // line chart overPriced
    this.noCompetitorChartData = [
      { data: this.noCompetitor?.sharelist, label: 'Share %' }
    ];
    this.noCompetitorChartLabels = this.noCompetitor?.productlist;
    this.noCompetitorChartOptions = {
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
    this.noCompetitorChartColors = [
      {
        backgroundColor: '#13dafe',
        pointRadius: 2,
        borderWidth: 2,
        borderColor: '#13dafe',
      }
    ];
    this.noCompetitorChartLegend = false;
    this.noCompetitorChartType = 'line';

  }




}
