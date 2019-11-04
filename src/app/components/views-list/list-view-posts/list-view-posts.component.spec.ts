import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewPostsComponent } from './list-view-posts.component';

describe('ListViewPostsComponent', () => {
  let component: ListViewPostsComponent;
  let fixture: ComponentFixture<ListViewPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
