import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange }  from '@angular/core';

import { IUser }                    from '../../../models/user.interface';

@Component({
  selector: 'app-list-view-people',
  templateUrl: './list-view-people.component.html',
  styleUrls: ['./list-view-people.component.scss']
})
export class ListViewPeopleComponent implements OnInit, OnChanges {
  @Input() userList: IUser[];

  constructor() { }

  ngOnInit() {
    console.log("ListViewPeopleComponent - ngOnInit: ", this.userList);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("ListViewPeopleComponent - ngOnChanges: ", changes);
  }
}
