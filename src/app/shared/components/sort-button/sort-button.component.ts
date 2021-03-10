import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent implements OnInit {
  @Input() data: any;
  @Input() selected: any;
  @Output() emitter = new EventEmitter<object>();

  order: boolean = true; // true for 'asc', false for 'desc'

  constructor() { }

  ngOnInit() {
  }

  onSortButton() {
    if(this.data.key === this.selected.key) {
      this.order = !this.order;
    }

    this.emitter.emit({id: this.data.id, field: this.data.field, key: this.data.key, order: this.order});
  }
}
