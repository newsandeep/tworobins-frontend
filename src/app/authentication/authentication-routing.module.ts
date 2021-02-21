import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login Page',
      urls: [
        { title: 'Admin Login', url: '/login' },
        { title: 'Admin Login' }
      ]
    },
    component: LoginComponent
  },
  {
    path: 'signup',
    data: {
      title: 'Login Page',
      urls: [
        { title: 'Admin SignUp', url: '/signup' },
        { title: 'Admin SignUp' }
      ]
    },
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
