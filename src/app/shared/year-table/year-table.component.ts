import { Component, EventEmitter }  from '@angular/core';
import { OnInit, Input, Output }    from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { IEvent } from '../../models/event.interface';

@Component({
  selector: 'bc-year-table',
  templateUrl: './year-table.component.html',
  styleUrls: ['./year-table.component.scss']
})
export class YearTableComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() addEmitter = new EventEmitter<object>();
  @Output() selectEmitter = new EventEmitter<object>();

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("changes: ", changes);
  }

  ngOnInit() {
    //console.log("YearTableComponent - data: ", this.data);
  }

  addItem(event: IEvent) {
    this.addEmitter.emit(event);
  }

  selectItem(event: IEvent) {
    this.selectEmitter.emit(event);
  }
}
