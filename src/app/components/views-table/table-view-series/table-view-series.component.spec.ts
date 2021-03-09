import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableViewSeriesComponent } from './table-view-series.component';

describe('TableViewSeriesComponent', () => {
  let component: TableViewSeriesComponent;
  let fixture: ComponentFixture<TableViewSeriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
