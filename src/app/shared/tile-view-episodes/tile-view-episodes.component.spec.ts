import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileViewEpisodesComponent } from './tile-view-episodes.component';

describe('TileViewEpisodesComponent', () => {
  let component: TileViewEpisodesComponent;
  let fixture: ComponentFixture<TileViewEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileViewEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileViewEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
