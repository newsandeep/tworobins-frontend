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
        const currentUser = this.authService.currentUserValue;
        // const isLoggedIn = currentUser && currentUser.token;
        const isLoggedIn = currentUser;
        const isApiUrl = request.url.startsWith(environment.baseUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    // Authorization: `Bearer ${currentUser.token}`
                    Authorization: `Bearer ${currentUser.userId}`
                }
            });
        }

        return next.handle(request);
    }

}
