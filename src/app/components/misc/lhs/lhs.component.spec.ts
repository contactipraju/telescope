import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LhsComponent } from './lhs.component';

describe('LhsComponent', () => {
  let component: LhsComponent;
  let fixture: ComponentFixture<LhsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
