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
  @Input() program?: string;
  @Input() id?: string;

  filteredSeriesList: ISeries[] = [];

  constructor() { }

  ngOnInit() {
    console.log("ListViewSeriesComponent - ngOnInit: ", this.seriesList);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("ListViewSeriesComponent - ngOnChanges: ", changes, this.category, this.subcategory, this.id);
    
    if(this.seriesList) {
      this.sortSeries(this.seriesList);
    }
  }

  sortSeries(series: ISeries[]) {
    series.sort((a,b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    });

    this.filteredSeriesList = [];
    for (let i=0; i<series.length; i++) {
      if(!this.category
        || (this.category === series[i].category && !this.subcategory)
        || (this.category === series[i].category && this.subcategory === series[i].subcategory)
        || (this.category === series[i].category && this.subcategory === series[i].subcategory && this.program === series[i].program)) {

          this.filteredSeriesList.push(series[i]);
      }
    }
  }
}
