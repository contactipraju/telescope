import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableViewPostsComponent } from './table-view-posts.component';

describe('TableViewPostsComponent', () => {
  let component: TableViewPostsComponent;
  let fixture: ComponentFixture<TableViewPostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
