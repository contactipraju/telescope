import { Inject, Injectable }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { Root, Laureate }          from './nobels.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NobelsService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
  }

  public getLocalLaureates(): Observable<Laureate[]> {
    return this.http.get<Root>(this.baseUrl + 'assets/json/nobel-laureates.json')
      .pipe(
        map (x => x.laureates),
        catchError(this.handleError('getLocalLaureates', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`NobelsService: ${message}`);
  }
}
