import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import { Store, select }     from '@ngrx/store';
import { IAppState }         from './../../store/state/app.state';

import { IUser }             from 'src/app/models/user.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  mode: string;
  user: IUser;
  showDeleteConfirmation: boolean = false;

  constructor(
    private _store: Store<IAppState>,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    console.log('EditUserComponent - ngOnInit: ', this.user);
  }

  saveUser() {
    console.log('EditUserComponent - saveUser: ', this.user);

    this.modalRef.hide();
  }

  deleteUser() {
    console.log('EditUserComponent - deleteUser: ', this.user);
    //this._store.dispatch(new DeleteUser(this.user));

    this.modalRef.hide();
  }
}
