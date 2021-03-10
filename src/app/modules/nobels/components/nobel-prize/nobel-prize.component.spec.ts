import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NobelPrizeComponent } from './nobel-prize.component';

describe('NobelPrizeComponent', () => {
  let component: NobelPrizeComponent;
  let fixture: ComponentFixture<NobelPrizeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NobelPrizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NobelPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
