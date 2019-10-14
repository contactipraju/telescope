import { Component, OnInit, ViewChildren, QueryList, ViewChild, ChangeDetectorRef }    from '@angular/core';
import { GridStackItem, GridStackOptions, GridStackItemComponent, GridStackComponent } from 'ngx-grid-stack';

@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss']
})
export class EditLayoutComponent implements OnInit {
  @ViewChildren(GridStackItemComponent) items: QueryList<GridStackItemComponent>;
  @ViewChild('gridStackMain', { static: false}) gridStackMain: GridStackComponent;

  editing: boolean;
  widgets: GridStackItem[] = [];
  options: GridStackOptions = new GridStackOptions();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.editing = true;
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

  loadWidgets() {
  }

  saveWidgets() {
    console.log(JSON.stringify(this.widgets));
  }

  saveLayout() {
    this.saveWidgets();
    this.setEditMode(false);
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

  addWidget() {
    const widgetItem = new GridStackItem();

    widgetItem.width = 6;
    widgetItem.height = 4;
    widgetItem.x = 0;
    widgetItem.y = 0;
    widgetItem.marginWidth = "0";
    widgetItem.customId = Math.floor((Math.random() * 100000) + 10000).toString();

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
}
