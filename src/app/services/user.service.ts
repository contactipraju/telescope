import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { IUser }                   from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = '/assets/users.json';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
  }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl + this.url);
  }
}
