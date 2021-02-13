import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  checkusernameandpassword(uname: string, pwd: string) {
    if (uname === 'admin' && pwd === 'admin123') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('username');
	}
}
