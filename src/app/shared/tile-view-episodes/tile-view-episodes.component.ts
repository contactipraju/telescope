import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';

import { ISeries } from '../../models/series.interface';

@Component({
  selector: 'app-tile-view-episodes',
  templateUrl: './tile-view-episodes.component.html',
  styleUrls: ['./tile-view-episodes.component.scss']
})
export class TileViewEpisodesComponent implements OnInit, OnChanges {
  @Input() series: ISeries[];

  constructor() { }

  ngOnInit() {
    console.log("TileViewEpisodesComponent - ngOnInit: ", this.series);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TileViewEpisodesComponent - ngOnChanges: ", changes);
  }
}
