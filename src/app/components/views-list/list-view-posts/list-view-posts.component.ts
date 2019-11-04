import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../../models/post.interface';

@Component({
  selector: 'app-list-view-posts',
  templateUrl: './list-view-posts.component.html',
  styleUrls: ['./list-view-posts.component.scss']
})
export class ListViewPostsComponent implements OnInit {
  @Input() title: string;
  @Input() posts: IPost[];

  constructor() { }

  ngOnInit() {
  }

}
