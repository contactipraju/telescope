import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Store, select }     from '@ngrx/store';

import { IAppState }         from './../../../store/state/app.state';

import { GetEvents }         from './../../../store/actions/event.actions';
import { GetPosts }          from './../../../store/actions/post.actions';
import { GetUsers }          from './../../../store/actions/user.actions';

import { selectEventList }   from './../../../store/selectors/event.selectors';
import { selectPostList }    from './../../../store/selectors/post.selectors';
import { selectUserList }    from './../../../store/selectors/user.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  events$ = this._store.pipe(select(selectEventList));
  posts$  = this._store.pipe(select(selectPostList));
  people$ = this._store.pipe(select(selectUserList));

  constructor(
    private _store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetEvents());
    this._store.dispatch(new GetPosts());
    this._store.dispatch(new GetUsers());
  }
}
