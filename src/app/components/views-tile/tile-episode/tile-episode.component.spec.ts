import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileEpisodeComponent } from './tile-episode.component';

describe('TileEpisodeComponent', () => {
  let component: TileEpisodeComponent;
  let fixture: ComponentFixture<TileEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
