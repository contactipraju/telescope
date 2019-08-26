import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';

import { IEpisode } from '../../../models/episode.interface';

@Component({
  selector: 'app-tile-episode',
  templateUrl: './tile-episode.component.html',
  styleUrls: ['./tile-episode.component.scss']
})
export class TileEpisodeComponent implements OnInit, OnChanges {
  @Input() episode: IEpisode;

  constructor() { }

  ngOnInit() {
    console.log("TileEpisodeComponent - ngOnInit: ", this.episode);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TileEpisodeComponent - ngOnChanges: ", changes);
  }
}
