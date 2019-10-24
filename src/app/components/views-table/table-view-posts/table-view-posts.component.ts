import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ITable }   from '../../../models/table.interface';
import { IPost }    from '../../../models/post.interface';

import { EditPostComponent } from '../../edit/edit-post/edit-post.component';

@Component({
  selector: 'app-table-view-posts',
  templateUrl: './table-view-posts.component.html',
  styleUrls: ['./table-view-posts.component.scss']
})
export class TableViewPostsComponent implements OnInit, OnChanges {
  @Input() data: IPost[];
  modalRef_EditPost: BsModalRef;

  table: ITable = {
    header: "Posts",
    columnTitles: ["Title", "Category", "Author", "Date"],
    props: ["title", "category", "author", "datePostedFormatted"],
    data: []
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    //console.log("TableViewPostsComponent - ngOnInit: ", this.data);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TableViewPostsComponent - ngOnChanges: ", changes);

    if(this.data) {
      this.sortPosts(this.data);
    }
  }

  addPost(e) {
    const initialState = {
      mode: "add",
      postsList: this.data,
      post: {}
    };

    this.modalRef_EditPost = this.modalService.show(EditPostComponent, {initialState});
    this.modalRef_EditPost.content.modalRef = this.modalRef_EditPost;
  }

  selectPost(e) {
    const initialState = {
      mode: "edit",
      postsList: this.data,
      post: e
    };

    this.modalRef_EditPost = this.modalService.show(EditPostComponent, {initialState});
    this.modalRef_EditPost.content.modalRef = this.modalRef_EditPost;
  }

  sortPosts(posts: IPost[]) {
    posts.sort((a,b) => {
      return a.datePosted.getTime() - b.datePosted.getTime();
    });

    this.table.data = [];
    for (let i=0; i<posts.length; i++) {
      this.table.data.push(posts[i]);
    }
  }
}
