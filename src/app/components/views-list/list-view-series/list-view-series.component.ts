import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange }  from '@angular/core';

import { ISeries }                  from '../../../models/series.interface';

@Component({
  selector: 'app-list-view-series',
  templateUrl: './list-view-series.component.html',
  styleUrls: ['./list-view-series.component.scss']
})
export class ListViewSeriesComponent implements OnInit, OnChanges {
  @Input() seriesList: ISeries[];
  @Input() category: string;
  @Input() subcategory?: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
    console.log("ListViewSeriesComponent - ngOnInit: ", this.seriesList);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("ListViewSeriesComponent - ngOnChanges: ", changes, this.category, this.subcategory, this.id);
  }
}
