import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Store, select }     from '@ngrx/store';

import { IAppState }         from 'src/app/store/state/app.state';
import { GetEvents }         from 'src/app/store/actions/event.actions';
import { selectEventList }   from 'src/app/store/selectors/event.selectors';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
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
