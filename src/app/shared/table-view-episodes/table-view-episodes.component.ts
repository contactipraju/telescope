import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ITable }                     from '../../models/table.interface';
import { IEvent, IEpisode }           from '../../models/event.interface';

import { EditEpisodeComponent}        from '../edit-episode/edit-episode.component';

@Component({
  selector: 'app-table-view-episodes',
  templateUrl: './table-view-episodes.component.html',
  styleUrls: ['./table-view-episodes.component.scss']
})
export class TableViewEpisodesComponent implements OnInit, OnChanges {
  @Input() data: IEvent[];
  modalRef_EditEpisode: BsModalRef;

  table: ITable = {
    columnTitles: ["ID", "Episode Name", "From", "To"],
    props: ["id", "name", "startDateFormatted", "endDateFormatted"],
    data: []
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    console.log("TableViewEpisodesComponent - ngOnInit: ", this.data);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TableViewEpisodesComponent - ngOnChanges: ", changes);

    if(changes.data.previousValue != changes.data.currentValue && changes.data.currentValue.length) {
      let episodes: IEpisode[] = [];
      for(let i=0; i<changes.data.currentValue.length; i++) {
        for(let j=0; j<changes.data.currentValue[i].episodes.length; j++) {
          episodes.push(changes.data.currentValue[i].episodes[j]);
        }
      }
      this.sortEvents(episodes);
    }
  }

  eventSelected(e) {
    const initialState = {
      mode: "edit",
      seriesList: this.data,
      event: e
    };

    this.modalRef_EditEpisode = this.modalService.show(EditEpisodeComponent, {initialState});
    this.modalRef_EditEpisode.content.modalRef = this.modalRef_EditEpisode;
  }

  sortEvents(events: IEvent[]) {
    events.sort((a,b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    });

    this.table.data = [];
    for (let i=0; i<events.length; i++) {
      this.table.data.push(events[i]);
    }
  }
}
