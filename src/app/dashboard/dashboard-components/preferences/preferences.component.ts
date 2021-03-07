import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../service.service';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {



  constructor(
    private dashboardService: ServiceService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,

  ) { }
  
  get f() { return this.preferencesForm.controls; }

  preferencesForm: FormGroup;
  submitted = false;
  recoverform = false;

  ngOnInit(): void {
    this.preferencesForm = this.formBuilder.group({
      url_scrap: ['', [Validators.required]],
      product_scrap: ['', [Validators.required]],
      category: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      price: ['', [Validators.required]],
      variancepercentage: ['', [Validators.required]],
      seller: ['', [Validators.required]],
    });
  }



  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.preferencesForm.invalid) {
      return;
    }
    this.dashboardService.savePreferences(this.preferencesForm.value).subscribe(
      responseData => {
        if (responseData?.responseCode == 200) {
          this.toastr.success('Preference Created Successfully.');
          this.router.navigateByUrl('/dashboard');

        } else {
          this.toastr.error(responseData?.responseMessage);
        }

      },
      error => {
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

}
