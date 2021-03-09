import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListViewPostsComponent } from './list-view-posts.component';

describe('ListViewPostsComponent', () => {
  let component: ListViewPostsComponent;
  let fixture: ComponentFixture<ListViewPostsComponent>;

  beforeEach(waitForAsync(() => {
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
