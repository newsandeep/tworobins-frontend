import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService]
})
export class LoginComponent {


  msg = '';
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  get f() { return this.loginForm.controls; }

  loginForm: FormGroup;
  submitted = false;
  recoverform = false;

  showRecoverForm() {
    this.recoverform = !this.recoverform;
  }
  // Login Service
  invalidLogin = false;
  errorMessage;
  successMessage;
  ngOnInit() {
    const remembered = window.localStorage.getItem('rememberMe');
    if (remembered == undefined) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    } else {
      const rem = JSON.parse(remembered);
      this.loginForm = this.formBuilder.group({
        email: [rem.email, [Validators.required, Validators.email]],
        password: [rem.password, [Validators.required, Validators.minLength(8)]]
      });
    }

  }

  onSubmit() {
    // if ($('#rememberMe').is(':checked')) {
    //   const remember = {
    //     email: this.loginForm.value.email,
    //     password: this.loginForm.value.password,
    //   };
    //   window.localStorage.setItem('rememberMe', JSON.stringify(remember));
    // } else {
    //   window.localStorage.removeItem('rememberMe');
    // }
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.auth.login(email, password).subscribe(
      responseData => {
        if (responseData.role === "admin") {
          this.toastr.success('Login Successfully.');
          this.router.navigateByUrl('/dashboard');
        }

      },
      error => {
        console.log(error);
        this.toastr.error(error);
      }
    );
  }
}
