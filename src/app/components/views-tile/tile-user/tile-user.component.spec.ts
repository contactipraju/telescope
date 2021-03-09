import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TileUserComponent } from './tile-user.component';

describe('TileUserComponent', () => {
  let component: TileUserComponent;
  let fixture: ComponentFixture<TileUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TileUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
