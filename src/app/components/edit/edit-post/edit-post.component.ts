import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';
import { Store }             from '@ngrx/store';
import * as moment           from 'moment';

import { IPost }              from 'src/app/models/post.interface';
import { IConfig }            from 'src/app/models/config.interface';

import { IAppState }          from 'src/app/store/state/app.state';
import { DeletePost }         from 'src/app/store/actions/post.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  mode: string;
  post: IPost;
  posts: IPost[];
  config: IConfig;

  categories = [
    { link: "none",            text: "Select Category" },
    { link: "general_science", text: "General Science" },
    { link: "life_sciences",   text: "Life Sciences" },
    { link: "social_sciences", text: "Social Sciences" },
    { link: "miscellaneous",   text: "Miscellaneous" },
    { link: "pseudoscience",   text: "PseudoScience" }
  ];

  subcategories = [
    { link: "none", text: "Select Subcategory" }
  ];

  showDeleteConfirmation: boolean = false;

  constructor(
    private _store: Store<IAppState>,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    console.log('EditPostComponent - ngOnInit: ', this.post);

    if(!this.post.category) {
      this.post.category = this.categories[0].link;
    }

    this.onCategoryChange();
  }

  onCategoryChange() {
    console.log("EditPostComponent - onCategoryChange: ", this.post.category);

    if(this.post.category === "none") {
      this.post.subcategory = "none";
    }
    else if(this.config && this.config['menu_layout']) {
      let section = this.config['menu_layout'][this.post.category];

      for(let i=0; i<section.length; i++) {
        if(section[i].link === this.post.category && section[i].children && section[i].children.length) {

          for(let j=0; j<section[i].children.length; j++) {
            this.subcategories.push(section[i].children[j]);
          }

          break;
        }
      }
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
