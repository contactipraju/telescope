import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToImplementComponent } from './to-implement.component';

describe('ToImplementComponent', () => {
  let component: ToImplementComponent;
  let fixture: ComponentFixture<ToImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
