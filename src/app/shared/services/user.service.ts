import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<any>(this.usersUrl)
      .pipe(
        tap(response => console.log(this.usersUrl, response)),
        map(response => (response.data as User[])),
        catchError(this.handleError)
      );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<any>(`${this.usersUrl}/${id}`)
      .pipe(
        tap(response => console.log(`${this.usersUrl}/${id}`, response)),
        map(response => (response.data as User)),
        catchError(this.handleError)
      );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<any>(`${this.usersUrl}/${user.id}`, user)
      .pipe(
        tap(response => console.log(`${this.usersUrl}/${user.id}`, response)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      const error = err.message || JSON.stringify(err.error);
      errorMessage = `${err.status} - ${err.statusText || ''}; Error Details: ${error}`;
    } else {
      errorMessage = err.message ? err.message : 'Error: ' + err.toString();
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
