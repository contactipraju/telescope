import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { IConfig }                 from '../models/config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
    console.log("ConfigService: ");
  }

  private getConfigUrl() {
    return this.baseUrl + 'assets/json/config.json';
  }

  public getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>(this.getConfigUrl());
  }

  public setConfig(config: IConfig): any {
    return this.http.put<IConfig>(this.getConfigUrl(), config);
  }
}
