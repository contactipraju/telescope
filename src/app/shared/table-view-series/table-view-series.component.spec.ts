import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewSeriesComponent } from './table-view.component';

describe('TableViewSeriesComponent', () => {
  let component: TableViewSeriesComponent;
  let fixture: ComponentFixture<TableViewSeriesComponent>;

  beforeEach(async(() => {
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
