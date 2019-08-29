import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import * as moment           from 'moment';

import { Store, select }     from '@ngrx/store';
import { IAppState }         from '../../../store/state/app.state';
import { DeletePost }        from '../../../store/actions/post.actions';

import { IPost }             from '../../../models/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  mode: string;
  post: IPost;
  postTypes = [
    { value: "none", text: "Select Post Type" },
    { value: "news", text: "News" },
    { value: "comment", text: "Comment" },
    { value: "special", text: "Special" }
  ];

  showDeleteConfirmation: boolean = false;

  constructor(
    private _store: Store<IAppState>,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    console.log('EditPostComponent - ngOnInit: ', this.post);
    if(!this.post.type) {
      this.post.type = this.postTypes[0].value;
    }
  }

  savePost() {
    console.log('EditPostComponent - savePost: ', this.post);

    this.modalRef.hide();
  }

  deletePost() {
    console.log('EditPostComponent - deletePost: ', this.post);

    this._store.dispatch(new DeletePost(this.post));

    this.modalRef.hide();
  }

  mom(d) {
    return moment(d).format("D MMM YYYY");
  }
}
