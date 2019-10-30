import { Component, OnInit, Input } from '@angular/core';
import { Store, select }      from '@ngrx/store';

import { IAppState }          from './../../../store/state/app.state';
import { selectConfigObject } from './../../../store/selectors/config.selectors';

@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.scss']
})
export class LhsComponent implements OnInit {
  @Input() page: string;
  config$ = this._store.pipe(select(selectConfigObject));

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
  }

}


