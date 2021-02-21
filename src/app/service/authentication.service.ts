import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    private baseUrl = environment.baseUrl;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    // register(data){
    //     return this.http.post(environment.baseUrl+`register`, data);
    // }

    // isLogin() {
    //     const token = localStorage.getItem('token');
    //     if (token) { return true; } else { return false; }
    // }

    isLogin() {
        const token = localStorage.getItem('currentUser');
        if (token) { return true; } else { return false; }
    }

    public login(email: string, password: string): Observable<User> {
        return this.http.post<any>(`${this.baseUrl}/user/login`, { email, password }).pipe(
            map(res => {
                // login successful if there's a jwt token in the response
                if (res && res.user) {
                    localStorage.setItem('currentUser', JSON.stringify(res.user));
                    // localStorage.setItem('token', JSON.stringify(res.user.token));
                    this.currentUserSubject.next(res.user);
                }
                return res.user;
            })
        );
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    // login(data){
    //     return this.http.post(environment.baseUrl+ '/admin/login', data);
    // }

    forgot(email: string) {
        return this.http.post(environment.baseUrl + `forgotPassword`, { email });
    }
    reset(data) : Observable<any>{
        return this.http.post(environment.baseUrl + `/admin/resetPassword`, data);
    }

    profile(data) {
        return this.http.post(environment.baseUrl + `/`, data);
    }

    editProfile(data) {
        return this.http.post(environment.baseUrl + `/admin/editProfile`, data);
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigateByUrl('login');
        return true;
    }
}
