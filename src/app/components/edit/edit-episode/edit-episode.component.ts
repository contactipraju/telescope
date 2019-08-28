import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import * as moment           from 'moment';

import { Store, select }     from '@ngrx/store';
import { IAppState }         from '../../../store/state/app.state';
import { DeleteEvent }       from '../../../store/actions/event.actions';

import { IEvent }            from '../../../models/event.interface';

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.scss']
})
export class EditEpisodeComponent implements OnInit {
  mode: string;
  event: IEvent;
  seriesList: IEvent[];

  showDeleteConfirmation: boolean = false;

  constructor(
    private _store: Store<IAppState>,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    //console.log('EditEpisodeComponent - ngOnInit: ', this.event);
  }

  saveEvent() {
    console.log('EditEpisodeComponent - saveEvent: ', this.event);

    //if present.. startDateInputFormat and endDateInputFormat have the modified dates

    //Notifications.showSuccessNotification(this.mode === 'create'? "Event created successfully" : "Event updated successfully");
    //Notifications.showErrorNotification(this.mode === 'create'? "Event created failed" : "Event update failed");

    this.modalRef.hide();
  }

  deleteEvent() {
    console.log('EditEpisodeComponent - deleteEvent: ', this.event);
    this._store.dispatch(new DeleteEvent(this.event));

    //Notifications.showSuccessNotification("Event deleted successfully");
    //Notifications.showErrorNotification("Event deletion failed");

    this.modalRef.hide();
  }

  mom(d) {
    return moment(d).format("D MMM YYYY");
  }
}
