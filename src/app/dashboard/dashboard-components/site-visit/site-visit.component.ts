import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
@Component({
  selector: 'app-site-visit',
  templateUrl: './site-visit.component.html'
})
export class SiteVisitComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    const chart = c3.generate({
      bindto: '#placeholder',
      data: {
        x: 'x',
        columns: [
          [
            'x',
            '2013-01-01',
            '2013-01-02',
            '2013-01-03',
            '2013-01-04',
            '2013-01-05',
            '2013-01-06',
            '2013-01-07',
            '2013-01-08',
            '2013-01-09'
          ],
          ['Site A', 30, 400, 100, 400, 150, 275, 135, 200, 218],
          ['Site B', 130, 340, 200, 350, 250, 130, 189, 153, 258]
        ],
        type: 'area-spline'
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      },
      legend: {
        hide: true
      },
      color: {
        pattern: ['#2961ff', '#40c4ff']
      }
    });
  }
}
