import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';

import { IEpisode } from 'src/app/models/episode.interface';
import { ISeries }  from 'src/app/models/series.interface';

@Component({
  selector: 'app-tile-episode',
  templateUrl: './tile-episode.component.html',
  styleUrls: ['./tile-episode.component.scss']
})
export class TileEpisodeComponent implements OnInit, OnChanges {
  @Input() episode: IEpisode;
  @Input() series: ISeries;

  constructor() { }

  ngOnInit() {
    console.log("TileEpisodeComponent - ngOnInit: ", this.episode);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TileEpisodeComponent - ngOnChanges: ", changes);
  }

  onImgError(event) {
    event.target.src = 'assets/images/general/missing.jpeg';
  }
}
