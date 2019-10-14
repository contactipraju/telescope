import { Component, OnInit, Input }     from '@angular/core';
import { OnChanges, SimpleChange  }     from '@angular/core';
import { ViewChildren, ViewChild }      from '@angular/core';
import { QueryList, ChangeDetectorRef } from '@angular/core';

import { GridStackItem, GridStackItemComponent } from 'ngx-grid-stack';
import { GridStackOptions, GridStackComponent }  from 'ngx-grid-stack';

import { IConfig } from 'src/app/models/config.interface';

@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss']
})
export class EditLayoutComponent implements OnInit, OnChanges {
  @Input() data: IConfig;

  @ViewChildren(GridStackItemComponent) items: QueryList<GridStackItemComponent>;
  @ViewChild('gridStackMain', { static: false}) gridStackMain: GridStackComponent;

  editing: boolean;
  widgets: GridStackItem[] = [];
  options: GridStackOptions = new GridStackOptions();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.editing = true;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.data.previousValue != changes.data.currentValue && changes.data.currentValue) {
      this.loadWidgets(this.data);
    }
  }

  setEditMode = function(mode) {
    this.editing = mode;

    if(mode) {
      this.gridStackMain.grid.enableMove(true, true);
      this.gridStackMain.grid.enableResize(true, true);
    } else {
      this.gridStackMain.grid.enableMove(false, true);
      this.gridStackMain.grid.enableResize(false, true);
    }
  };

  loadWidgets(config: IConfig) {
    console.log("EditLayoutComponent - loadWidgets: ", config.layout);

    for(let i=0; i<config.layout.length; i++) {
      this.addWidgetToLayout(config.layout[i]);
    }
  }

  saveWidgets() {
    console.log(JSON.stringify(this.widgets));
  }

  saveLayout() {
    this.setEditMode(false);
    this.saveWidgets();
  }

  editLayout() {
    this.setEditMode(true);
  }

  deleteWidget = function(widget) {
    console.log("deleteWidget: ", widget);

    for(let i=0; i<this.widgets.length; i++) {
      if(widget.customId == this.widgets[i].customId) {
        this.widgets.splice(i, 1);
        break;
      }
    }

    const arr = this.items.toArray();
    for (let j=0; j<arr.length; j++) {
      if(arr[j].option && arr[j].option.customId === widget.customId) {
        this.gridStackMain.RemoveWidget(arr[j]);
        break;
      }
    }
  }

  createNewWidget() {
    const widgetItem: GridStackItem = new GridStackItem();

    widgetItem.x = 0;
    widgetItem.y = 0;
    widgetItem.width = 6;
    widgetItem.height = 4;
    widgetItem.marginWidth = "0";
    widgetItem.customId = Math.floor((Math.random() * 100000) + 10000).toString();

    return widgetItem;
  }

  addWidgetToLayout(widgetItem) {
    this.widgets.push(widgetItem);
    this.cd.detectChanges();
    const arr = this.items.toArray();
    this.gridStackMain.AddWidget(arr[this.items.length - 1]);

    for(let index=0; index < arr.length; index++) {
      const widget = arr[index];
      const widgitInitialized = widget.nativeElement.getAttribute('data-gs-init');
      const hasDraggable = widget.nativeElement.classList.contains('ui-draggable');

      if (widgitInitialized !== 'true' && !hasDraggable) {
        widget.nativeElement.setAttribute('data-gs-init', 'true');
        this.gridStackMain.AddWidget(widget);
      } else if (widgitInitialized !== 'true') {
        widget.nativeElement.setAttribute('data-gs-init', 'true');
      }
    }
  }

  addWidget() {
    let widgetItem: GridStackItem = this.createNewWidget();
    this.addWidgetToLayout(widgetItem);
  }
}
