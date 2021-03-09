import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableViewPeopleComponent } from './table-view-people.component';

describe('TableViewPeopleComponent', () => {
  let component: TableViewPeopleComponent;
  let fixture: ComponentFixture<TableViewPeopleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
