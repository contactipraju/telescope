import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Store, select }     from '@ngrx/store';

import { IAppState }         from './../../../store/state/app.state';
import { selectPostList }    from './../../../store/selectors/post.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$  = this._store.pipe(select(selectPostList));
  pageid: string = '';

  constructor(
    private _store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    if(this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.routeConfig && this.activatedRoute.snapshot.routeConfig.path) {
      this.pageid = this.activatedRoute.snapshot.routeConfig.path;
    }
  }
}
