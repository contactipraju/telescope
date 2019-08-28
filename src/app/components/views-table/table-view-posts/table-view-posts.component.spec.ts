import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewPostsComponent } from './table-view-posts.component';

describe('TableViewPostsComponent', () => {
  let component: TableViewPostsComponent;
  let fixture: ComponentFixture<TableViewPostsComponent>;

  beforeEach(async(() => {
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
