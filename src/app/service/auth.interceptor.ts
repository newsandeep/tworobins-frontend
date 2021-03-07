import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthenticationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // this.loaderService.show();
        // add authorization header with basic auth credentials if available
        const currentUser = this.authService.currentUserValue ? this.authService.currentUserValue : JSON.parse(localStorage.getItem('currentUser'));
        const isLoggedIn = currentUser && currentUser.token && this.authService.isLogin();
        const isApiUrl = request.url.startsWith(environment.baseUrl);
        if (isLoggedIn && isApiUrl) {

            request = request.clone({
                setHeaders: {
                    auth_token: `${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }

}
