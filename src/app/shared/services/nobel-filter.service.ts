import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  // Observable source
  private resetFiltersSource = new Subject<string>();

  // Observable stream
  resetFilters$ = this.resetFiltersSource.asObservable();

  // Service message command
  broadcastMessage(message: string) {
    this.resetFiltersSource.next(message);
  }

  constructor() { }
}
