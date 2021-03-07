import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../service.service';
declare var $: any;

@Component({
  selector: 'app-price-product-matrix',
  templateUrl: './price-product-matrix.component.html',
  styleUrls: ['./price-product-matrix.component.css'],
  providers: [ServiceService]
})
export class PriceProductMatrixComponent implements OnInit {
  productMatrixResponse: any;
  siteUrl: any;
  filteredResponse: any;


  constructor(
    private dashboardService: ServiceService
    , private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.lineChart5();
  }




  lineChart5() {
    let data = {}
    this.dashboardService.chartNumber5().subscribe(
      responseData => {
        if (responseData?.responseCode == 200) {
          this.productMatrixResponse = responseData.matrixResponse;
          this.filteredResponse = responseData.matrixResponse;

          this.siteUrl = responseData.siteUrl;
        } else {
          this.toastr.error(responseData?.responseMessage);
        }

      },
      error => {
        console.log(error);
      }
    );
  }

  filterWithSite(name) {
    this.productMatrixResponse = this.filteredResponse.filter(function (data) {
      return data.siteUrl === name;
    });
  }



}
