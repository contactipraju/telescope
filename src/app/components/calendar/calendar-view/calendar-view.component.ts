import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { IEvent }                     from '../../../models/event.interface';

import { EditSeriesComponent}         from '../../edit/edit-series/edit-series.component';
import { EditEpisodeComponent}        from '../../edit/edit-episode/edit-episode.component';
import { MultiselectListComponent }   from '../multiselect-list/multiselect-list.component';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit, OnChanges {
  @Input() events: IEvent[];

  selectedEvents: IEvent[];
  episodes: IEvent[];

  modalRef_Multiselect: BsModalRef;
  modalRef_EditEvent: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    console.log("CalendarViewComponent - ngOnInit: ", this.events);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("CalendarViewComponent - ngOnChanges: ", changes);

    if(changes.events.previousValue != changes.events.currentValue && changes.events.currentValue.length) {
      this.episodes = [];
      for(var i=0; i<changes.events.currentValue.length; i++) {
        for(var j=0; j<changes.events.currentValue[i].episodes.length; j++) {
          this.episodes.push(changes.events.currentValue[i].episodes[j]);
        }
      }
    }
  }

  datesSelected($event) {
    this.findEventToShow($event);
  }

  findEventToShow(e) {
    const events = [];

    for (const i in this.episodes) {
      if (this.episodes[i].startDate <= e.endDate && this.episodes[i].endDate >= e.startDate) {
        events.push(this.episodes[i]);
      }
    }

    if (events.length > 1) {
      this.selectedEvents = [];

      for (let i=0; i<events.length; i++) {
        this.selectedEvents.push(events[i]);
      }

      this.viewMultiSelect(this.selectedEvents);
    }
    else if(events.length == 1) {
      this.editEvent(events[0]);
    }
    else {
      this.createEvent(e);
    }
  }

  viewMultiSelect(events: IEvent[]) {
    console.log("CalendarViewComponent - viewMultiSelect: ", events);

    const initialState = {
      list: events
    };

    this.modalRef_Multiselect = this.modalService.show(MultiselectListComponent, { initialState });
    this.modalRef_Multiselect.content.modalRef = this.modalRef_Multiselect;
  }

  createEvent(e) {
    console.log("CalendarViewComponent - createEvent: ", e);

    const initialState = {
      mode: "create",
      event: {
        startDate: e.startDate,
        endDate: e.endDate
      }
    };

    this.modalRef_EditEvent = this.modalService.show(EditEpisodeComponent, { initialState });
    this.modalRef_EditEvent.content.modalRef = this.modalRef_EditEvent;
  }

  editEvent(e) {
    console.log("CalendarViewComponent - editEvent: ", e);

    const initialState = {
      mode: "edit",
      seriesList: this.events,
      event: e
    };

    this.modalRef_EditEvent = this.modalService.show(EditEpisodeComponent, {initialState});
    this.modalRef_EditEvent.content.modalRef = this.modalRef_EditEvent;
  }
}
