import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { Store }     from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';
import { GetPosts }  from './store/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Telescope';
  navList: any = [];

  constructor(private router: Router, private _store: Store<IAppState>) {
    this.loadDataToStore();
    this.prepareNavLinks();
  }

  loadDataToStore() {
    this._store.dispatch(new GetConfig());
    this._store.dispatch(new GetPosts());
  }

  navFromPath(path) {
    // Make sure the first letter is in Uppercase, and replace '-' with ' '
    let name = path.charAt(0).toUpperCase() + path.slice(1);

    let nav = {
      url: '/' + path,
      name: name.replace(/_/g, ' ')
    };

    return nav;
  }

  prepareNavLinks() {
    for(let i=0; i<this.router.config.length; i++) {
      let path = this.router.config[i].path;
      let showInNavigation = this.router.config[i].data ? this.router.config[i].data["showNav"] : false;

      if(path != '' && showInNavigation) {
        this.navList.push(this.navFromPath(path));
      }
    }
  }
}
