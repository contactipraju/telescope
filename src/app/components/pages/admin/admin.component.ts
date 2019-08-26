import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Store, select }     from '@ngrx/store';

import { IAppState }         from './../../../store/state/app.state';

import { GetEvents }         from './../../../store/actions/event.actions';
import { selectEventList }   from './../../../store/selectors/event.selectors';

import { GetUsers }          from './../../../store/actions/user.actions';
import { selectUserList }    from './../../../store/selectors/user.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  people$ = this._store.pipe(select(selectUserList));
  events$ = this._store.pipe(select(selectEventList));

  constructor(
    private _store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetEvents());
    this._store.dispatch(new GetUsers());
  }
}
