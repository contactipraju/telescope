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

  category: string = '';
  subcategory: string = '';
  id: string = '';

  params: any;

  constructor(private _store: Store<IAppState>, private route: ActivatedRoute) {
    this.readParams();
  }

  readParams() {
    if(this.route && this.route.snapshot && this.route.snapshot.url && this.route.snapshot.url.length) {
      this.category    = this.route.snapshot.url[0].path;
      this.subcategory = this.route.snapshot.url[1] ? this.route.snapshot.url[1].path : undefined;
      this.id          = this.route.snapshot.url[2] ? this.route.snapshot.url[2].path : undefined;
    }
  }

  ngOnInit() {
    this._store.dispatch(new GetEvents());
  }
}
