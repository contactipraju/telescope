import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NobelsComponent } from './nobels.component';

describe('NobelsComponent', () => {
  let component: NobelsComponent;
  let fixture: ComponentFixture<NobelsComponent>;

  beforeEach(async(() => {
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
