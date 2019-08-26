import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSeriesComponent } from './tile-series.component';

describe('TileSeriesComponent', () => {
  let component: TileSeriesComponent;
  let fixture: ComponentFixture<TileSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
