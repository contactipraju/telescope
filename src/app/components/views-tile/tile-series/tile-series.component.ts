import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';

import { ISeries } from '../../../models/series.interface';

@Component({
  selector: 'app-tile-series',
  templateUrl: './tile-series.component.html',
  styleUrls: ['./tile-series.component.scss']
})
export class TileSeriesComponent implements OnInit, OnChanges {
  @Input() series: ISeries;

  constructor() { }

  ngOnInit() {
    console.log("TileSeriesComponent - ngOnInit: ", this.series);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TileSeriesComponent - ngOnChanges: ", changes);
  }
}
