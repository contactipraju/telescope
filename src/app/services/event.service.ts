import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { IEvent }                  from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
  }

  private getUrl() {
    return this.baseUrl + 'assets/json/events.json';
  }

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.getUrl());
  }

  public createEvent(event: IEvent): any {
    return this.http.post<IEvent>(this.getUrl(), event);
  }

  public updateEvent(event: IEvent): any {
    return this.http.put<IEvent>(this.getUrl(), event);
  }

  public deleteEvent(event: IEvent): any {
    return this.http.delete<IEvent>(this.getUrl(), <any>event);
  }
}
