import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Store, select }     from '@ngrx/store';

import { IAppState }          from 'src/app/store/state/app.state';
import { selectPostList }     from 'src/app/store/selectors/post.selectors';
import { selectConfigObject } from 'src/app/store/selectors/config.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$  = this._store.pipe(select(selectPostList));
  config$ = this._store.pipe(select(selectConfigObject));

  category: string = '';
  subcategory: string = '';
  id: string = '';

  params: any;

  constructor(private _store: Store<IAppState>, private route: ActivatedRoute) {
    // this.subscribeToParams(); //TODO
    this.readParams();
  }

  subscribeToParams() {
    this.params = this.route.params.subscribe(
      params => {
        this.category = params['category'];
        this.subcategory = params['subcategory'];
        this.id = params['id'];
      }
    );
  }

  readParams() {
    if(this.route && this.route.snapshot && this.route.snapshot.url && this.route.snapshot.url.length) {
      this.category    = this.route.snapshot.url[0].path;
      this.subcategory = this.route.snapshot.url[1] ? this.route.snapshot.url[1].path : undefined;
      this.id          = this.route.snapshot.url[2] ? this.route.snapshot.url[2].path : undefined;
    }
  }

  ngOnInit() {
  }
}
