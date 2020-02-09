import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidestabsComponent } from './ridestabs.component';

describe('RidestabsComponent', () => {
  let component: RidestabsComponent;
  let fixture: ComponentFixture<RidestabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidestabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidestabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
