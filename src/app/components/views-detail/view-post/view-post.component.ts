import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';
import { IPost }    from '../../../models/post.interface';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit, OnChanges {
  @Input() data: IPost[];
  @Input() category: string;
  @Input() subcategory?: string;
  @Input() id: string;

  dataReady: boolean = false;
  post: IPost;

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.data.previousValue != changes.data.currentValue && changes.data.currentValue != null) {
      for(let i=0; i<this.data.length; i++) {
        if(this.data[i].id === this.id) {
          this.post = this.data[i];
          this.dataReady = true;
          break;
        }
      }
    }
  }

  ngOnInit() {
    console.log("ViewPostComponent - ngOnInit: ", this.category, this.subcategory, this.id, this.data);
  }

}
