import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { IConfig }  from 'src/app/models/config.interface';
import { IPost }    from '../../../models/post.interface';
import { ITable }   from '../../../models/table.interface';

import { EditPostComponent } from '../../edit/edit-post/edit-post.component';

@Component({
  selector: 'app-table-view-posts',
  templateUrl: './table-view-posts.component.html',
  styleUrls: ['./table-view-posts.component.scss']
})
export class TableViewPostsComponent implements OnInit, OnChanges {
  @Input() posts: IPost[];
  @Input() config: IConfig;
  @Input() category: string;
  @Input() subcategory?: string;

  modalRef_EditPost: BsModalRef;

  table: ITable = {
    header: "Posts",
    columnTitles: ["Title", "Category", "Subcategory", "Date"],
    props: ["title", "category", "subcategory", "datePostedFormatted"],
    data: []
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    //console.log("TableViewPostsComponent - ngOnInit: ", this.posts);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TableViewPostsComponent - ngOnChanges: ", changes);

    if(this.posts) {
      this.sortPosts(this.posts);
    }
  }

  addPost(e) {
    const initialState = {
      mode: "add",
      posts: this.posts,
      config: this.config,
      post: {}
    };

    this.modalRef_EditPost = this.modalService.show(EditPostComponent, { initialState });
    this.modalRef_EditPost.content.modalRef = this.modalRef_EditPost;
  }

  selectPost(e: IPost) {
    const initialState = {
      mode: "edit",
      posts: this.posts,
      config: this.config,
      post: e
    };

    this.modalRef_EditPost = this.modalService.show(EditPostComponent, { initialState });
    this.modalRef_EditPost.content.modalRef = this.modalRef_EditPost;
  }

  sortPosts(posts: IPost[]) {
    posts.sort((a,b) => {
      return a.datePosted.getTime() - b.datePosted.getTime();
    });

    this.table.data = [];
    for (let i=0; i<posts.length; i++) {
      if(!this.category
        || (this.category === posts[i].category && !this.subcategory)
        || (this.category === posts[i].category && this.subcategory === posts[i].subcategory)) {

          this.table.data.push(posts[i]);
      }
    }
  }
}
