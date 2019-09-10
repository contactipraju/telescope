import { Component }        from '@angular/core';
import { Router }           from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Telescope';
  navList: any = [];

  constructor(private router: Router) {
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

      if(path != '' && path != 'resources/nobels') {
        this.navList.push(this.navFromPath(path));
      }
    }
  }
}
