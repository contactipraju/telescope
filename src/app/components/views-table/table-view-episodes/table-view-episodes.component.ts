import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ITable }   from '../../../models/table.interface';
import { IEvent }   from '../../../models/event.interface';
import { IEpisode } from '../../../models/episode.interface';

import { EditEpisodeComponent } from '../../edit/edit-episode/edit-episode.component';

@Component({
  selector: 'app-table-view-episodes',
  templateUrl: './table-view-episodes.component.html',
  styleUrls: ['./table-view-episodes.component.scss']
})
export class TableViewEpisodesComponent implements OnInit, OnChanges {
  @Input() data: IEvent[];
  modalRef_EditEpisode: BsModalRef;

  table: ITable = {
    header: "Episodes",
    columnTitles: ["Episode", "Description", "Date", "Speaker"],
    props: ["name", "description", "startDateFormatted", "speaker"],
    data: []
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    //console.log("TableViewEpisodesComponent - ngOnInit: ", this.data);
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
      this.sortEpisodes(episodes);
    }
  }

  addEpisode(e) {
    const initialState = {
      mode: "add",
      episodesList: this.data,
      event: {}
    };

    this.modalRef_EditEpisode = this.modalService.show(EditEpisodeComponent, {initialState});
    this.modalRef_EditEpisode.content.modalRef = this.modalRef_EditEpisode;
  }

  selectEpisode(e) {
    const initialState = {
      mode: "edit",
      episodesList: this.data,
      event: e
    };

    this.modalRef_EditEpisode = this.modalService.show(EditEpisodeComponent, {initialState});
    this.modalRef_EditEpisode.content.modalRef = this.modalRef_EditEpisode;
  }

  sortEpisodes(episodes: IEpisode[]) {
    episodes.sort((a,b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    });

    this.table.data = [];
    for (let i=0; i<episodes.length; i++) {
      this.table.data.push(episodes[i]);
    }
  }
}
