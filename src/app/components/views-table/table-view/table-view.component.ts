import { Component, EventEmitter }  from '@angular/core';
import { OnInit, Input, Output }    from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() addEmitter = new EventEmitter<object>();
  @Output() selectEmitter = new EventEmitter<object>();

  searchText: string = "";

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("changes: ", changes);
  }

  ngOnInit() {
    //console.log("TableViewComponent - data: ", this.data);
  }

  addItem(event: any) {
    this.addEmitter.emit(event);
  }

  // TODO: will use if the posts are Server-side Rendered
  viewItemAsHtmlPage(event: any) {
    if(event.description && event.description.length) {
      let url = "assets/posts/" + event.description;
      window.open(url);
    }
  }

  viewItem(event: any) {
    if(event.description && event.description.length) {
      window.location.href = event.category + "/" + event.subcategory + "/" + event.id;
    }
  }

  selectItem($event, item: any) {
    this.selectEmitter.emit(item);
    $event.stopPropagation();
  }
}
