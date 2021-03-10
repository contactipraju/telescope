import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LaureateCardComponent } from './laureate-card.component';

describe('LaureateCardComponent', () => {
  let component: LaureateCardComponent;
  let fixture: ComponentFixture<LaureateCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaureateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaureateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
