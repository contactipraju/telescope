import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHtmlComponent } from './edit-html.component';

describe('EditHtmlComponent', () => {
  let component: EditHtmlComponent;
  let fixture: ComponentFixture<EditHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
