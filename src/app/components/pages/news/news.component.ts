import { Component, OnInit }  from '@angular/core';

import { Store, select }      from '@ngrx/store';

import { IAppState }          from './../../../store/state/app.state';
import { GetConfig }          from './../../../store/actions/config.actions';
import { selectConfigObject } from './../../../store/selectors/config.selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  config$ = this._store.pipe(select(selectConfigObject));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
