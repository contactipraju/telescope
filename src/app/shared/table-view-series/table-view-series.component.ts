import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EditSeriesComponent }        from '../edit-series/edit-series.component';
import { IEvent }                     from '../../models/event.interface';
import { ITable }                     from '../../models/table.interface';

@Component({
  selector: 'app-table-view-series',
  templateUrl: './table-view-series.component.html',
  styleUrls: ['./table-view-series.component.scss']
})
export class TableViewSeriesComponent implements OnInit, OnChanges {
  @Input() data: IEvent[];
  modalRef_EditSeries: BsModalRef;

  table: ITable = {
    columnTitles: ["ID", "Series Name", "From", "To"],
    props: ["id", "name", "startDateFormatted", "endDateFormatted"],
    data: []
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    console.log("TableViewSeriesComponent - ngOnInit: ", this.data);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TableViewSeriesComponent - ngOnChanges: ", changes);

    if(this.data) {
      this.sortEvents(this.data);
    }
  }

  eventSelected(e) {
    const initialState = {
      mode: "edit",
      event: e
    };

    this.modalRef_EditSeries = this.modalService.show(EditSeriesComponent, {initialState});
    this.modalRef_EditSeries.content.modalRef = this.modalRef_EditSeries;
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
