import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewSeriesComponent } from './list-view-series.component';

describe('ListViewSeriesComponent', () => {
  let component: ListViewSeriesComponent;
  let fixture: ComponentFixture<ListViewSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
