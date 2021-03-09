import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NobelsPageComponent } from './nobels-page.component';

describe('NobelsPageComponent', () => {
  let component: NobelsPageComponent;
  let fixture: ComponentFixture<NobelsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NobelsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NobelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
