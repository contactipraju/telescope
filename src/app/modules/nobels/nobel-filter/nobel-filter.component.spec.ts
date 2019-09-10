import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NobelFilterComponent } from './nobel-filter.component';

describe('NobelFilterComponent', () => {
  let component: NobelFilterComponent;
  let fixture: ComponentFixture<NobelFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NobelFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NobelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
