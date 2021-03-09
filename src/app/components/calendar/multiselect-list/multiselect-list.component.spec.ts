import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiselectListComponent } from './multiselect-list.component';

describe('MultiselectListComponent', () => {
  let component: MultiselectListComponent;
  let fixture: ComponentFixture<MultiselectListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
