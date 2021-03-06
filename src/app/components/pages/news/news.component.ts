import { Component, OnInit }  from '@angular/core';
import { Store, select }      from '@ngrx/store';

import { IAppState }          from 'src/app/store/state/app.state';
import { selectConfigObject } from 'src/app/store/selectors/config.selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  config$ = this._store.pipe(select(selectConfigObject));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
  }
}
