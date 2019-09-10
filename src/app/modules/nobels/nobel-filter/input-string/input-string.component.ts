import { Component, OnInit }       from '@angular/core';
import { Input, Output }           from '@angular/core';
import { OnDestroy, EventEmitter } from '@angular/core';

import { Subscription }            from 'rxjs';

import { NobelFilterService }      from '../nobel-filter.service';

@Component({
  selector: 'app-input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.scss']
})

export class InputStringComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Output() emitter = new EventEmitter<object>();

  value: string;
  subscription: Subscription;

  constructor(private nobelFilterService: NobelFilterService) {
    this.subscription = nobelFilterService.resetFilters$.subscribe(
      message => {
        if(message === 'reset') {
          this.value = '';
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  onValueChange() {
    this.emitter.emit({id: this.data.id, value: this.value});
  }
}
