import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ITable }            from '../../../models/table.interface';
import { IUser }             from '../../../models/user.interface';

import { EditUserComponent } from '../../edit/edit-user/edit-user.component';

@Component({
  selector: 'app-table-view-people',
  templateUrl: './table-view-people.component.html',
  styleUrls: ['./table-view-people.component.scss']
})
export class TableViewPeopleComponent implements OnInit, OnChanges {
  @Input() data: IUser[];
  modalRef_EditUser: BsModalRef;

  table: ITable = {
    header: "People",
    columnTitles: ["ID", "Role", "User Name", "Email"],
    props: ["id", "role", "firstname", "email"],
    data: []
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    //console.log("TableViewPeopleComponent - ngOnInit: ", this.data);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TableViewPeopleComponent - ngOnChanges: ", changes);

    if(this.data) {
      this.sortUsers(this.data);
    }
  }

  addUser(e) {
    const initialState = {
      mode: "add",
      usersList: this.data,
      user: {}
    };

    this.modalRef_EditUser = this.modalService.show(EditUserComponent, {initialState});
    this.modalRef_EditUser.content.modalRef = this.modalRef_EditUser;
  }

  selectUser(e) {
    const initialState = {
      mode: "edit",
      usersList: this.data,
      user: e
    };

    this.modalRef_EditUser = this.modalService.show(EditUserComponent, {initialState});
    this.modalRef_EditUser.content.modalRef = this.modalRef_EditUser;
  }

  sortUsers(users: IUser[]) {
    users.sort((a,b) => {
      return a.firstname.localeCompare(b.firstname);
    });

    this.table.data = [];
    for (let i=0; i<users.length; i++) {
      this.table.data.push(users[i]);
    }
  }
}
