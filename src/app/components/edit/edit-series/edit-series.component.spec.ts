import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSeriesComponent } from './edit-series.component';

describe('EditSeriesComponent', () => {
  let component: EditSeriesComponent;
  let fixture: ComponentFixture<EditSeriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
