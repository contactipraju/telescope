import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditEpisodeComponent } from './edit-episode.component';

describe('EditEpisodeComponent', () => {
  let component: EditEpisodeComponent;
  let fixture: ComponentFixture<EditEpisodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
