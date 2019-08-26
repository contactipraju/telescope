import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';

import { IUser } from '../../../models/user.interface';

@Component({
  selector: 'app-tile-user',
  templateUrl: './tile-user.component.html',
  styleUrls: ['./tile-user.component.scss']
})
export class TileUserComponent implements OnInit, OnChanges {
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
    console.log("TileUserComponent - ngOnInit: ", this.user);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TileUserComponent - ngOnChanges: ", changes);
  }
}
