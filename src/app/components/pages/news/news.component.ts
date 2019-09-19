import { Component, OnInit, ViewChildren, QueryList, ViewChild, ChangeDetectorRef }    from '@angular/core';
import { GridStackItem, GridStackOptions, GridStackItemComponent, GridStackComponent } from 'ngx-grid-stack';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @ViewChildren(GridStackItemComponent) items: QueryList<GridStackItemComponent>;
  @ViewChild('gridStackMain', { static: false}) gridStackMain: GridStackComponent;

  options: GridStackOptions = new GridStackOptions();
  widgets: GridStackItem[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  AddWidget() {
    const widgetItem = new GridStackItem();

    widgetItem.width = 6;
    widgetItem.height = 4;
    widgetItem.x = 0;
    widgetItem.y = 0;
    widgetItem.customId = this.widgets.length.toString();

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
