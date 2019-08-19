import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Store, select }     from '@ngrx/store';

import { IAppState }         from './../../store/state/app.state';
import { GetEvents }         from './../../store/actions/event.actions';
import { selectEventList }   from './../../store/selectors/event.selectors';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$ = this._store.pipe(select(selectEventList));

  constructor(
    private _store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetEvents());
  }
}
