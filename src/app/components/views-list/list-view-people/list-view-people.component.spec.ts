import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewPeopleComponent } from './list-view-people.component';

describe('ListViewPeopleComponent', () => {
  let component: ListViewPeopleComponent;
  let fixture: ComponentFixture<ListViewPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
