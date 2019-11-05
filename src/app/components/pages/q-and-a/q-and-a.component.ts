import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Store, select }     from '@ngrx/store';

import { IAppState }          from 'src/app/store/state/app.state';
import { selectPostList }     from 'src/app/store/selectors/post.selectors';
import { selectConfigObject } from 'src/app/store/selectors/config.selectors';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {
  posts$  = this._store.pipe(select(selectPostList));
  config$ = this._store.pipe(select(selectConfigObject));

  constructor(
    private _store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
  }
}
