import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewEpisodesComponent } from './table-view-episodes.component';

describe('TableViewEpisodesComponent', () => {
  let component: TableViewEpisodesComponent;
  let fixture: ComponentFixture<TableViewEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
