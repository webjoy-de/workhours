import {Injectable} from '@angular/core';
import {Workhours} from './workhours';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkhoursService {
  private url = 'api/registrations.json';

  constructor(private http: HttpClient) {
  }

  public getRegistrations(): Observable<Workhours[]> {
    return this.http.get<Workhours[]>(this.url).pipe(
      tap(data => console.log('All')),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
