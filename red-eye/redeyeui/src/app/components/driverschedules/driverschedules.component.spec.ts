import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverschedulesComponent } from './driverschedules.component';

describe('DriverschedulesComponent', () => {
  let component: DriverschedulesComponent;
  let fixture: ComponentFixture<DriverschedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverschedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
