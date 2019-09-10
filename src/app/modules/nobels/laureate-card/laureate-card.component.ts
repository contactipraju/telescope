import { Component, OnInit, Input } from '@angular/core';
import { Laureate } from '../nobels.model';

@Component({
  selector: 'app-laureate-card',
  templateUrl: './laureate-card.component.html',
  styleUrls: ['./laureate-card.component.scss']
})
export class LaureateCardComponent implements OnInit {
  @Input() laureate: Laureate;

  ImageURL: string = './assets/images/general/';

  constructor() { }

  ngOnInit() {
    if (this.laureate.gender === "male") {
      this.ImageURL = this.ImageURL + "avatar-male.png";
    }
    else if (this.laureate.gender === "female") {
      this.ImageURL = this.ImageURL + "avatar-female.png";
    }
    else {
      this.ImageURL = this.ImageURL + "avatar-org.png";
    }
  }
}
