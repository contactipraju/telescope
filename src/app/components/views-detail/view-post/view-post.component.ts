import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { IConfig }  from 'src/app/models/config.interface';
import { IPost }    from 'src/app/models/post.interface';

import { EditPostComponent } from '../../edit/edit-post/edit-post.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit, OnChanges {
  @Input() posts: IPost[];
  @Input() config: IConfig;
  @Input() category: string;
  @Input() subcategory?: string;
  @Input() id: string;

  dataReady: boolean = false;
  post: IPost;

  relatedPosts: IPost[] = [];
  sameAuthorPosts: IPost[] = [];

  modalRef_EditPost: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.posts && changes.posts.previousValue != changes.posts.currentValue && changes.posts.currentValue != null) {
      for(let i=0; i<this.posts.length; i++) {
        if(this.posts[i].id === this.id) {

          this.post = this.posts[i];

          let _relatedPosts: IPost[] = [];
          for(let j=0; j<this.post.related.length; j++) {
            for(let k=0; k<this.posts.length; k++) {
              if(this.post.related[j] === this.posts[k].id) {
                _relatedPosts.push(this.posts[k]);
              }
            }
          }
          this.relatedPosts = this.limitPosts(_relatedPosts);

          let _sameAuthorPosts: IPost[] = [];
          for(let a=0; a<this.posts.length; a++) {
            if(this.post.author === this.posts[a].author && this.post.id !== this.posts[a].id) {
              _sameAuthorPosts.push(this.posts[a]);
            }
          }
          this.sameAuthorPosts = this.limitPosts(_sameAuthorPosts);

          this.dataReady = true;
          break;
        }
      }
    }
  }

  limitPosts(posts: IPost[]) {
    let limit = 5;
    let limitPosts = posts.length > limit ? limit : posts.length;
    return posts.sort(() => Math.random() - Math.random()).slice(0, limitPosts);
  }

  ngOnInit() {
    console.log("ViewPostComponent - ngOnInit: ", this.category, this.subcategory, this.id, this.posts, this.config, this.post);
  }

  editPost() {
    const initialState = {
      mode: "edit",
      posts: this.posts,
      config: this.config,
      post: this.post
    };

    this.modalRef_EditPost = this.modalService.show(EditPostComponent, {initialState});
    this.modalRef_EditPost.content.modalRef = this.modalRef_EditPost;
  }
}
