import { Component, OnInit, Input } from '@angular/core';
import { Prize } from '../../nobels.model';

@Component({
  selector: 'app-nobel-prize',
  templateUrl: './nobel-prize.component.html',
  styleUrls: ['./nobel-prize.component.scss']
})
export class NobelPrizeComponent implements OnInit {
  @Input() prize: Prize;

  constructor() { }

  ngOnInit() {
  }

}
