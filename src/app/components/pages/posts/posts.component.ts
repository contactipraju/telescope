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
  posts$ = this._store.pipe(select(selectPostList));

  category: string = '';
  subcategory: string = '';
  id: string = '';

  constructor(
    private _store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    if(this.activatedRoute && this.activatedRoute.snapshot && this.activatedRoute.snapshot.url && this.activatedRoute.snapshot.url.length) {
      this.category    = this.activatedRoute.snapshot.url[0].path;
      this.subcategory = this.activatedRoute.snapshot.url[1] ? this.activatedRoute.snapshot.url[1].path : undefined;
      this.id          = this.activatedRoute.snapshot.url[2] ? this.activatedRoute.snapshot.url[2].path : undefined;
    }
  }
}
