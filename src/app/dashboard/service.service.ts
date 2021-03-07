import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap, map } from 'rxjs/operators';
import { User } from '../models/user';
import { DateRange } from '../models/dateRange';
import { retry, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = environment.baseUrl;
  private dateRangeSubject: BehaviorSubject<DateRange>;
  public dateRange: Observable<DateRange>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthenticationService
  ) {

    this.dateRangeSubject = new BehaviorSubject<DateRange>(JSON.parse(localStorage.getItem('dateRange')));
    this.dateRange = this.dateRangeSubject.asObservable();

  }

  public get currentDateRangeValue(): DateRange {
    return this.dateRangeSubject.value;
  }


  public submitDateRange(start, end) {
    localStorage.setItem('dateRange', JSON.stringify({ 'start': start, 'end': end }));
    this.dateRangeSubject.next({ 'start': start, 'end': end });
  }

  public chartNumber1(): Observable<any> {
    const dateRange = this.currentDateRangeValue ? this.currentDateRangeValue : JSON.parse(localStorage.getItem('dateRange'));
    return this.http.get<any>(`${this.baseUrl}/dashboard?chartNumber=1&startDate=`+dateRange.start+`&endDate=`+dateRange.end+``).pipe(
      map(res => {
        // login successful if there's a jwt token in the response
        if (res.responseCode == 200) {
          return res;
        } else if (res.responseCode == 401) {
          this.auth.logout();
        } else {
          return res;
        }
      }),
      retry(1),
      catchError(this.handleError)
    );
  }

  public chartNumber5(): Observable<any> {
    const dateRange = this.currentDateRangeValue ? this.currentDateRangeValue : JSON.parse(localStorage.getItem('dateRange'));
    return this.http.get<any>(`${this.baseUrl}/getproductmatrix?startDate=`+dateRange.start+`&endDate=`+dateRange.end+``).pipe(
      map(res => {
        // login successful if there's a jwt token in the response
        if (res.responseCode == 200) {
          return res;
        } else if (res.responseCode == 401) {
          this.auth.logout();
        } else {
          return res;
        }
      }),
      retry(1),
      catchError(this.handleError)
    );
  }

  public getSiteMatrix(): Observable<any> {
    const dateRange = this.currentDateRangeValue ? this.currentDateRangeValue : JSON.parse(localStorage.getItem('dateRange'));
    return this.http.get<any>(`${this.baseUrl}/getsitematrix?startDate=`+dateRange.start+`&endDate=`+dateRange.end+``).pipe(
      map(res => {
        // login successful if there's a jwt token in the response
        if (res.responseCode == 200) {
          return res;
        } else if (res.responseCode == 401) {
          this.auth.logout();
        } else {
          return res;
        }
      }),
      retry(1),
      catchError(this.handleError)
    );
  }

  public savePreferences(data): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/createpreference`, data).pipe(
      map(res => {
        // login successful if there's a jwt token in the response
        if (res.responseCode == 200) {
          return res;
        } else if (res.responseCode == 401) {
          this.auth.logout();
        } else {
          return res;
        }
      }),
      retry(1),
      catchError(this.handleError)
    );
  }


 public totalScanned(): Observable<any> {
    const dateRange = this.currentDateRangeValue ? this.currentDateRangeValue : JSON.parse(localStorage.getItem('dateRange'));
    return this.http.get<any>(`${this.baseUrl}/dashboard?chartNumber=2&startDate=`+dateRange.start+`&endDate=`+dateRange.end+``).pipe(
      map(res => {
        // login successful if there's a jwt token in the response
        if (res.responseCode == 200) {
          return res;
        } else if (res.responseCode == 401) {
          this.auth.logout();
        } else {
          return res;
        }
      }),
      retry(1),
      catchError(this.handleError)
    );
  }

  
 public getAlert(): Observable<any> {
  const dateRange = this.currentDateRangeValue ? this.currentDateRangeValue : JSON.parse(localStorage.getItem('dateRange'));
  return this.http.get<any>(`${this.baseUrl}/dashboard?chartNumber=3&startDate=`+dateRange.start+`&endDate=`+dateRange.end+``).pipe(
    map(res => {
      // login successful if there's a jwt token in the response
      if (res.responseCode == 200) {
        return res;
      } else if (res.responseCode == 401) {
        this.auth.logout();
      } else {
        return res;
      }
    }),
    retry(1),
    catchError(this.handleError)
  );
}

public lineChart(): Observable<any> {
  const dateRange = this.currentDateRangeValue ? this.currentDateRangeValue : JSON.parse(localStorage.getItem('dateRange'));
  return this.http.get<any>(`${this.baseUrl}/dashboard?chartNumber=4&startDate=`+dateRange.start+`&endDate=`+dateRange.end+``).pipe(
    map(res => {
      // login successful if there's a jwt token in the response
      if (res.responseCode == 200) {
        return res;
      } else if (res.responseCode == 401) {
        this.auth.logout();
      } else {
        return res;
      }
    }),
    retry(1),
    catchError(this.handleError)
  );
}

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);

    return throwError(errorMessage);

  }
}
