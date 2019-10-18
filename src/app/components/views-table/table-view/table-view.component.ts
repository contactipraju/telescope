import { Component, EventEmitter }  from '@angular/core';
import { OnInit, Input, Output }    from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { IEvent } from '../../../models/event.interface';

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

  addItem(event: IEvent) {
    this.addEmitter.emit(event);
  }

  selectItem(event: IEvent) {
    this.selectEmitter.emit(event);
  }
}
