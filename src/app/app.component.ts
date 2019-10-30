import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { Store }     from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Telescope';
  navList: any = [];

  constructor(private router: Router, private _store: Store<IAppState>) {
    this._store.dispatch(new GetConfig());
    this.prepareNavLinks();
  }

  navFromPath(path) {
    // Make sure the first letter is in Uppercase, and replace '-' with ' '
    let name = path.charAt(0).toUpperCase() + path.slice(1);

    let nav = {
      url: '/' + path,
      name: name.replace(/-/g, ' ')
    };

    return nav;
  }

  prepareNavLinks() {
    for(let i=0; i<this.router.config.length; i++) {
      let path = this.router.config[i].path;

      if(path != '' && path != 'resources/nobels' && path != 'admin' && path != 'home') {
        this.navList.push(this.navFromPath(path));
      }
    }
  }
}
