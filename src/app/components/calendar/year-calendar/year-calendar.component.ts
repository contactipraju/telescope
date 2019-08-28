import { Component, EventEmitter }  from '@angular/core';
import { OnInit, Input, Output }    from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { IEvent } from '../../../models/event.interface';

// TODO: Review this when the issue (https://github.com/year-calendar/js-year-calendar/issues/6) is resolved
// and get rid of the library and import it from the library under node_modules/js-year-calendar
// import Calendar from "js-year-calendar"; // Ideal usage, once issue resolves
import Calendar from "../../../../lib/js-year-calendar/js-year-calendar";  // Temporary solution

@Component({
  selector: 'app-year-calendar',
  templateUrl: './year-calendar.component.html',
  styleUrls: ['./year-calendar.component.scss']
})
export class YearCalendarComponent implements OnInit, OnChanges {
  @Input() data: IEvent[];
  @Output() emitter = new EventEmitter<object>();

  calendar: any = null;
  options: any = {};

  constructor() {
  }

  ngOnInit() {
    //console.log("YearCalendarComponent - ngOnInit: ", this.data);
    this.initializeCalendar();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("YearCalendarComponent - ngOnChanges: ", changes);

    if(this.calendar && changes.data.previousValue != changes.data.currentValue) {
      this.calendar.setDataSource(this.data);
    }
  }

  initializeCalendar() {
    //console.log("YearCalendarComponent - initializeCalendar: ", this.data);

    const emit = (from, to) => {
      this.emitter.emit({startDate: from, endDate: to});
    }

    this.options = {
      style: 'background',
      dataSource: this.data,

      enableRangeSelection: true,
      roundRangeLimits: true,

      selectRange: function(e) {
        emit(e.startDate, e.endDate);
      },

      clickDay: function(e) {
        // found clickDay as a redundant event, selectRange is fired when clicked
        // emit(e.date, e.date);
      }
    }

    this.calendar = new Calendar('#calendar', this.options);
  }
}
