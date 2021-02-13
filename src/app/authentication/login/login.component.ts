import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from './../../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MyserviceService]
})
export class LoginComponent {
  msg = '';
  constructor(private service: MyserviceService, private routes: Router) { }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid Username or Password';
    }
  }
}
