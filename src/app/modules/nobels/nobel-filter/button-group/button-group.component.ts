import { Component, OnInit }       from '@angular/core';
import { Input, Output }           from '@angular/core';
import { OnDestroy, EventEmitter } from '@angular/core';

import { Subscription }            from 'rxjs';

import { NobelFilterService }      from '../nobel-filter.service';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})

export class ButtonGroupComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Output() emitter = new EventEmitter<object>();

  selection: string;
  checkModel: any = {};
  width: number;
  subscription: Subscription;

  constructor(private nobelFilterService: NobelFilterService) {
    this.subscription = nobelFilterService.resetFilters$.subscribe(
      message => {
        if(message === 'reset') {
          this.selection = undefined;
          this.checkModel = [];
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.width = 100 / this.data['buttonsInRow'] - 3;

    for(let i = 0; i < this.data.options.length; i++) {
      this.checkModel[this.data.options[i].value] = false;
    }
  }

  onBtn() {
    this.emitter.emit({id: this.data.id, value: this.selection});
  }

  onCheck() {
    this.emitter.emit({id: this.data.id, value: this.checkModel});
  }
}
