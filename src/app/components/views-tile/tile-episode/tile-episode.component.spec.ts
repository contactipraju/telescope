import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TileEpisodeComponent } from './tile-episode.component';

describe('TileEpisodeComponent', () => {
  let component: TileEpisodeComponent;
  let fixture: ComponentFixture<TileEpisodeComponent>;

  beforeEach(waitForAsync(() => {
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
