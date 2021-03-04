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

  public speakers = [];

  constructor() { }

  ngOnInit() {
    console.log("TileEpisodeComponent - ngOnInit: ", this.episode);
    this.prepSpeakers();
  }

  prepSpeakers() {
    let source = this.episode.speakers ? this.episode.speakers : this.series.speakers;

    for (let i=0; i<source.length; i++) {
      this.speakers.push({label: source[i]});
    }
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TileEpisodeComponent - ngOnChanges: ", changes);
  }

  onImgError(event) {
    event.target.src = 'assets/images/general/missing.jpeg';
  }
}
