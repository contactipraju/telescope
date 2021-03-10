import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputStringComponent } from './input-string.component';

describe('InputStringComponent', () => {
  let component: InputStringComponent;
  let fixture: ComponentFixture<InputStringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
