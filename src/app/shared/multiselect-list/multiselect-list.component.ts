import { Component, OnInit }          from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EditSeriesComponent}         from '../edit-series/edit-series.component';
import { EditEpisodeComponent}        from '../edit-episode/edit-episode.component';

@Component({
  selector: 'app-multiselect-list',
  templateUrl: './multiselect-list.component.html',
  styleUrls: ['./multiselect-list.component.scss']
})
export class MultiselectListComponent implements OnInit {
  list: any;
  selectedEventId: number;

  modalRefEdit:  BsModalRef;

  constructor(public modalRef: BsModalRef, private modalService: BsModalService) { }

  ngOnInit() {
    this.selectedEventId = this.list[0].id;
  }

  getEventFromId(id) {
    console.log('MultiselectListComponent - getEventFromId: ', id);

    for(let i=0; i<this.list.length; i++) {
      if(id == this.list[i].id) {
        return this.list[i];
      }
    }

    return null;
  }

  onSelectEvent() {
    console.log('MultiselectListComponent - onSelectEvent: ', this.selectedEventId);
    let selectedEvent = this.getEventFromId(this.selectedEventId);

    if(!selectedEvent) {
      return;
    }

    const initialState = {
      mode: "edit",
      event: selectedEvent
    };

    this.modalRefEdit = this.modalService.show(EditSeriesComponent, { initialState });
    this.modalRefEdit.content.modalRef = this.modalRefEdit;
  }
}
