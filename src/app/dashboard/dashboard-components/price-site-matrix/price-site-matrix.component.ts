import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-price-site-matrix',
  templateUrl: './price-site-matrix.component.html',
  styleUrls: ['./price-site-matrix.component.css']
})
export class PriceSiteMatrixComponent implements OnInit {

  siteMatrixResponse: any;
  filteredResponse: any;
  productName: any;
  constructor(private dashboardService: ServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSiteMatrix();
  }


  getSiteMatrix() {
    let data = {}
    this.dashboardService.getSiteMatrix().subscribe(
      responseData => {
        if (responseData?.responseCode == 200) {
          this.siteMatrixResponse = responseData.siteMatrixResponse;
          this.filteredResponse = responseData.siteMatrixResponse;
          this.productName = responseData.productName;
        } else {
          this.toastr.error(responseData?.responseMessage);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  filterWithProduct(name) {

    this.siteMatrixResponse = this.filteredResponse;
    this.siteMatrixResponse = this.siteMatrixResponse.filter(function (data) {
      return data.productName == name;
    });
  }

}
