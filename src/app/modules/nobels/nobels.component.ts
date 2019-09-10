import { Component, OnInit } from '@angular/core';
import { NobelsService }     from './nobels.service';
import { Laureate }          from './nobels.model';
import { Filter }            from './nobel-filter/nobel-filter.model';

@Component({
  selector: 'app-nobels',
  templateUrl: './nobels.component.html',
  styleUrls: ['./nobels.component.scss']
})
export class NobelsComponent implements OnInit {

  constructor(public nobelsService: NobelsService) {
  }

  laureates: Laureate[];
  laureatesLoaded: boolean = false;
  search = new Filter();

  ngOnInit() {
    this.loadLaureates();
  }

  processLaureates() {
  }

  loadLaureates() {
    this.nobelsService.getLocalLaureates().subscribe(result => {
      this.laureates = result;
      this.processLaureates();
      this.laureatesLoaded = true;
    });
  }

  onFilterChanged(search: Filter) {
    this.search = search;
  }
}
