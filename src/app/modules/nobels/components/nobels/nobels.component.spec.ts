import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NobelsComponent } from './nobels.component';

describe('NobelsComponent', () => {
  let component: NobelsComponent;
  let fixture: ComponentFixture<NobelsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NobelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NobelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
